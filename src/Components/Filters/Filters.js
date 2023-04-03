import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Container, FloatingLabel, Form } from 'react-bootstrap';

const Filters = ({ setSearchPhrase, searchPhrase }) => (
    <Container>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filters</Accordion.Header>
                <Accordion.Body>
                    <FloatingLabel controlId="floatingSearch" label="Search">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            onChange={(e) => setSearchPhrase(e.target.value)}
                            value={searchPhrase}
                        />
                    </FloatingLabel>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
);

Filters.propTypes = {
    setSearchPhrase: PropTypes.func.isRequired,
    searchPhrase: PropTypes.string.isRequired,
};

export default Filters;
