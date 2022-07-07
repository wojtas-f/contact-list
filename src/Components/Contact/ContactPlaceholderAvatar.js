import React from 'react'
import PropTypes from 'prop-types';

const ContactPlaceholderAvatar = ({ firstName, lastName }) => (
    <span className="rounded-circle bg-secondary text-white p-1 border border-3 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>{`${firstName.charAt()}${lastName.charAt()}`}</span>
)


ContactPlaceholderAvatar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};



export default ContactPlaceholderAvatar