import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Filters = ({ setSearchPhrase, searchPhrase }) => {
    const { t } = useTranslation();
    return (
        <Container className="p-0 mt-2">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{t('filters__title')}</Accordion.Header>
                    <Accordion.Body>
                        <FloatingLabel
                            controlId="floatingSearch"
                            label={t('filters__search')}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                onChange={(e) =>
                                    setSearchPhrase(e.target.value)
                                }
                                value={searchPhrase}
                            />
                        </FloatingLabel>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

Filters.propTypes = {
    setSearchPhrase: PropTypes.func.isRequired,
    searchPhrase: PropTypes.string.isRequired,
};

export default Filters;
