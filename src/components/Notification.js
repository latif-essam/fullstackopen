import React from 'react';


const Notification = ({ notification }) => {
    if (notification.msg === null) return null;
    return (
        <div className={`alert alert-${notification.color}`} role="alert">
            {notification.msg}
        </div>
    );
}

export default Notification;