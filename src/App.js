import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

import TopBar from './Components/TopBar';
import SingleContact from './Components/Contact/SingleContact';
import ContactPagination from './Components/Contact/ContactPagination';
import Filters from './Components/Filters/Filters';

import getContacts from './Services/getContacts';
import sortContactsByLastName from './Utilities/sortContacts';

function App() {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [page, setPage] = useState(1);

    const getContactsList = async () => {
        let contactsResponse = await getContacts(page, searchPhrase);
        if (!contactsResponse) return;
        console.log('contactsResponse:', contactsResponse);
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
    }, [page, searchPhrase]);

    return (
        <Container fluid className="p-0" style={{ height: '100vh' }}>
            <TopBar />
            <Container className="d-flex flex-column justify-content-between">
                <Filters
                    setSearchPhrase={setSearchPhrase}
                    searchPhrase={searchPhrase}
                />

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

                <ContactPagination
                    setPage={setPage}
                    lastPageIndex={20}
                    page={page}
                />
            </Container>
        </Container>
    );
}

export default App;
