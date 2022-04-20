import React, { useState } from 'react';
import { checkUniqueness } from '../utils/helpers';
import { getId } from './../utils/helpers';


const NewContact = ({ handleAddContact, list }) => {
    const [contact, setContact] = useState({ name: '', phone: '' });



    const addContact = (e) => {
        e.preventDefault();
        if (checkUniqueness(list, contact.name)) return alert(`${contact.name} is already added to phonebook`);

        handleAddContact(list => [...list, {
            id: getId(),
            ...contact
        }]);

        setContact({ name: '', phone: '' });
    }
    return (
        <div>
            <h2>Add new Contatc</h2>
            <form onSubmit={addContact}>
                <label htmlFor="name">name: </label>
                <input type="text" id='name' value={contact.name} onChange={({ target }) => setContact(c => ({ ...c, name: target.value }))} />
                <label htmlFor="phone"> phone: </label>
                <input type="number" id='phone' value={contact.phone} onChange={({ target }) => setContact((c => ({ ...c, phone: target.value })))} />
                {" "}<button type='submit' style={{ paddingBlock: 5, paddingInline: 12, backgroundColor: 'dodgerblue', color: 'white', border: 'none', borderRadius: 10 }}> add </button>
            </form>
        </div>
    );
}

export default NewContact;