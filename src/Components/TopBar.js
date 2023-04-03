import React from 'react';
import { Container } from 'react-bootstrap';

const TopBar = () => (
    <Container
        fluid
        className="bg-dark text-white p-2 text-center"
        style={{ height: 'fit-content' }}
    >
        <h1>Users</h1>
    </Container>
);

export default TopBar;
