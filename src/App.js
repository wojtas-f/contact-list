import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, ListGroup } from 'react-bootstrap';

import TopBar from './Components/TopBar';
import SingleContact from './Components/Contact/SingleContact';
import ContactPagination from './Components/Contact/ContactPagination';

import getContacts from './Services/getContacts';
import sortContactsByLastName from './Utilities/sortContacts';
import filterByPhrase from './Utilities/filter'

function App() {
  const pageSize = 10;
  const [searchPhrase, setSearchPhrase] = useState('');
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [page, setPage] = useState(1);

  const getContactsList = async () => {
    let contactsResponse = await getContacts();

    if (!contactsResponse) return;

    contactsResponse = sortContactsByLastName(contactsResponse);
    setContacts(contactsResponse);
  };

  const getLastPageIndex = () => filterByPhrase(contacts, searchPhrase).length / pageSize;

  const isSelected = (contact) => selectedContacts.includes(contact.id);

  const getPageContacts = () => {
    const tempContactsTab = filterByPhrase(contacts, searchPhrase)
    const firstPageContact = page * pageSize - pageSize;
    const lastPageContact = firstPageContact + pageSize;
    return tempContactsTab.slice(firstPageContact, lastPageContact);
  };

  const getPages = () => {
    const numberOfPages = 5
    const start = Math.floor((page - 1) / numberOfPages) * numberOfPages;
    return new Array(numberOfPages)
      .fill()
      .map((_, pageId) => start + pageId + 1);
  };

  const toggleContact = (targetId) => {

    if (selectedContacts.includes(targetId)) {
      setSelectedContacts(
        selectedContacts.filter((id) => id !== targetId)
      );
    } else {
      setSelectedContacts([...selectedContacts, targetId]);
    }

    // eslint-disable-next-line no-console
    console.log('Selected contacts:', selectedContacts);
  };

  useEffect(() => {
    getContactsList();
  }, []);

  return (
    <Container fluid className="p-0" style={{ height: '100vh' }}>
      <TopBar />
      <Container className="d-flex flex-column justify-content-between">
        <FloatingLabel controlId="floatingSearch" label="Search">
          <Form.Control
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchPhrase(e.target.value)}
            value={searchPhrase}
          />
        </FloatingLabel>


        <ListGroup>
          {contacts &&
            getPageContacts().map((contact) => (
              <SingleContact
                contact={contact}
                key={`contact_${contact.email}`}
                toggleContact={toggleContact}
                isSelected={isSelected(contact)}
              />
            ))}
        </ListGroup>
        <ContactPagination
          setPage={setPage}
          selectPage={setPage}
          getPages={getPages}
          page={page}
          lastPageIndex={getLastPageIndex()}
        />
      </Container>
    </Container>
  );
}

export default App;
