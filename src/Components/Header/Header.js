import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();
    return (
        <Container
            fluid
            className="bg-dark text-white p-2 text-center"
            style={{ height: 'fit-content' }}
        >
            <Row>
                <Col xs="10">
                    <h1 className="text-start">{t('header__title')}</h1>
                </Col>
                <Col xs="2">
                    <LanguageSwitcher />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
