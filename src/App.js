import './App.css';
import { Container } from 'react-bootstrap'

import TopBar from './Components/TopBar'

function App() {
  return (
    <Container fluid className='p-0'>
      <TopBar />
    </Container>
  );
}

export default App;
