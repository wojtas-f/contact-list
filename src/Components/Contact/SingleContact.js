import React from 'react'
import { ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types';
import ContactAvatar from './ContactAvatar'
import ContactPlaceholderAvatar from './ContactPlaceholderAvatar';

const SingleContact = ({ contact }) => {
    return (
        <ListGroup.Item className="d-flex p-1 align-items-center">
            {contact.avatar ? <ContactAvatar avatar={contact.avatar} /> : <ContactPlaceholderAvatar firstName={contact.first_name} lastName={contact.last_name} />}
            <div className='d-flex flex-column ms-2'>
                <div className="d-flex">
                    <span>{contact.first_name}</span>
                    <span className="ms-1">{contact.last_name}</span>
                </div>
                <span className="text-muted" style={{ fontSize: '0.6rem' }}>{contact.email}</span>
            </div>

        </ListGroup.Item>
    )
}

SingleContact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string,
    }).isRequired
};

export default SingleContact