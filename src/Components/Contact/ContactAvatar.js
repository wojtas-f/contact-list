import React from 'react'
import PropTypes from 'prop-types';

const ContactAvatar = ({ avatar }) => {
    return (
        <div>
            <img className="rounded-circle p-1 border border-3" src={avatar} alt="contact avatar" />

        </div>
    )
}

ContactAvatar.propTypes = {
    avatar: PropTypes.string,
};


export default ContactAvatar