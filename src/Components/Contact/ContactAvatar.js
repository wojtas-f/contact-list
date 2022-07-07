import React from 'react'
import PropTypes from 'prop-types';

const ContactAvatar = ({ avatar }) => (<img className="rounded-circle p-1 border border-3" src={avatar} alt="contact avatar" style={{ width: "58px", height: "58px" }} />)



ContactAvatar.propTypes = {
    avatar: PropTypes.string.isRequired,
};


export default ContactAvatar