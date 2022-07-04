import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'

import TopBar from './Components/TopBar'
import SingleContact from './Components/SingleContact'

import getContacts from './Services/getContacts';
import sortContacts from './Utilities/sortContacts'

function App() {
  const [contacts, setContacts] = useState([])

  const get = async () => {
    let contactsResponse = await getContacts()

    if (!contactsResponse) return

    contactsResponse = sortContacts(contactsResponse)
    setContacts(contactsResponse)
  }

  useEffect(() => {
    get();
  }, [])

  return (
    <Container fluid className='p-0'>
      <TopBar />
      <Container>
        {contacts && contacts.map((contact, index) => {
          return <SingleContact key={`contact_${index}`} />
        })}
      </Container>
    </Container>
  );
}

export default App;
