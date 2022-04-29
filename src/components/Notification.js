import React from 'react';


const Notification = ({ message }) => {
    if (message === null) return null;
    return (
        <div className={`alert alert-danger`} role="alert">
            {message}
        </div>
    );
}

export default Notification;