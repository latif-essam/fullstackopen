import React from 'react';
import Contatc from './Contact';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <h2>Contatcs:</h2>
            <ul style={{ listStyle: 'none', boxShadow: '0px 0px 1px dodgerblue', padding: 5 }}>
                {contacts.map(person =>
                    <Contatc key={person.id} contatc={person} />
                )}
            </ul>
        </div>
    );
}

export default Contacts;