import { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, ListGroup } from 'react-bootstrap';

import TopBar from './Components/TopBar';
import SingleContact from './Components/Contact/SingleContact';
import ContactPagination from './Components/Contact/ContactPagination';

import getContacts from './Services/getContacts';
import sortContactsByLastName from './Utilities/sortContacts';

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

  const getLastPageIndex = () => contacts.length / pageSize;

  const nextPage = () => {
    if (page < getLastPageIndex()) setPage(() => page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(() => page - 1);
  };

  const isSelected = (contact) => selectedContacts.includes(contact.id);


  const getPageContacts = () => {
    let tempContactsTab = contacts
    if (searchPhrase !== '') {
      tempContactsTab = contacts.filter((contact) =>
        `${contact.first_name} ${contact.last_name}`
          .toLocaleLowerCase()
          .includes(searchPhrase)
      );
    }

    const firstPageContact = page * pageSize - pageSize;
    const lastPagerContact = firstPageContact + pageSize;
    return tempContactsTab.slice(firstPageContact, lastPagerContact);
  };

  const getPages = () => {
    const start = Math.floor((page - 1) / pageSize) * pageSize;
    return new Array(pageSize)
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
  };

  useEffect(() => {
    getContactsList();
  }, []);

  return (
    <Container fluid className="p-0">
      <TopBar />

      <FloatingLabel controlId="floatingSearch" label="Search">
        <Form.Control
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
        />
      </FloatingLabel>

      <Container>
        <ListGroup>
          {contacts &&
            getPageContacts().map((contact, index) => (
              <SingleContact
                contact={contact}
                key={`contact_${index}`}
                toggleContact={toggleContact}
                isSelected={isSelected(contact)}
              />
            ))}
        </ListGroup>
        <ContactPagination
          nextPage={nextPage}
          prevPage={prevPage}
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
