import React from 'react';
import Contatc from './Contact';

const Contacts = ({ contacts, handleUpdateContacts }) => {

    return (
        <div>
            <h2>Contatcs:</h2>
            <div style={{ height: '60vh', width: '100%', overflow: 'scroll' }}>
                <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                    {contacts.map(person =>
                        <Contatc handleUpdateContacts={handleUpdateContacts} key={person.id} contatc={person} />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Contacts;