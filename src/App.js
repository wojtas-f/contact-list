import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, ListGroup } from 'react-bootstrap';

import TopBar from './Components/TopBar';
import SingleContact from './Components/Contact/SingleContact';

import getContacts from './Services/getContacts';
import sortContactsByLastName from './Utilities/sortContacts';

function App() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const getContactsList = async () => {
    let contactsResponse = await getContacts();
    if (!contactsResponse) return;
    console.log(contactsResponse)
    contactsResponse = sortContactsByLastName(contactsResponse);
    setContacts(contactsResponse);
  };

  const isSelected = (contact) => selectedContacts.includes(contact.id);


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
            contacts.map((contact) => (
              <SingleContact
                contact={contact}
                key={`contact_${contact.email}`}
                toggleContact={toggleContact}
                isSelected={isSelected(contact)}
              />
            ))}
        </ListGroup>
      </Container>
    </Container>
  );
}

export default App;
