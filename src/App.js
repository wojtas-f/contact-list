import { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, ListGroup, } from 'react-bootstrap'

import TopBar from './Components/TopBar'
import SingleContact from './Components/Contact/SingleContact'
import ContactPagination from './Components/Contact/ContactPagination'

import getContacts from './Services/getContacts';
import sortContactsByLastName from './Utilities/sortContacts'

function App() {
  const pageSize = 10;
  const [contacts, setContacts] = useState([])
  const [page, setPage] = useState(1)

  const get = async () => {
    let contactsResponse = await getContacts()

    if (!contactsResponse) return

    contactsResponse = sortContactsByLastName(contactsResponse)
    setContacts(contactsResponse)
  }

  const getLastPageIndex = () => {
    return contacts.length / pageSize
  }

  const nextPage = () => {
    if (page < getLastPageIndex())
      setPage(() => page + 1);
  }

  const prevPage = () => {
    if (page > 1)
      setPage(() => page - 1);
  }

  const selectPage = (targetPage) => {
    setPage(targetPage);
  }

  const getPageContacts = () => {
    const firstPageContact = page * pageSize - pageSize;
    const lastPagerContact = firstPageContact + pageSize;
    return contacts.slice(firstPageContact, lastPagerContact);
  }

  const getPages = () => {
    let start = Math.floor((page - 1) / pageSize) * pageSize;
    return new Array(pageSize).fill().map((_, pageId) => start + pageId + 1);
  };

  useEffect(() => {
    get();
  }, [])

  return (
    <Container fluid className='p-0'>
      <TopBar />

      <FloatingLabel controlId="floatingSearch" label="Search">
        <Form.Control type="search" placeholder="Search" />
      </FloatingLabel>

      <Container>
        <ListGroup>
          {contacts && getPageContacts().map((contact, index) => {
            return <SingleContact contact={contact} key={`contact_${index}`} />
          })}
        </ListGroup>
        <ContactPagination nextPage={nextPage} prevPage={prevPage} selectPage={selectPage} getPages={getPages} page={page} lastPageIndex={getLastPageIndex()} />
      </Container>
    </Container>
  );
}

export default App;
