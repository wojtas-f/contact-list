import React from 'react'
import PropTypes from 'prop-types';

const ContactAvatar = ({ avatar, firstName, lastName }) => {
    return (
        <div>
            {avatar ? <img className="rounded-circle p-1 border border-3" src={avatar} alt="contact avatar" /> :
                <span className="rounded-circle bg-primary p-2 border border-3" style={{ width: "58px", height: "58px" }}>{`${firstName.charAt()}${lastName.charAt()}`}</span>}
        </div>
    )
}

ContactAvatar.propTypes = {
    avatar: PropTypes.string,
};


export default ContactAvatar