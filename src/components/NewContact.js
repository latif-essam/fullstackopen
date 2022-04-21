import axios from 'axios';
import React, { useState } from 'react';
import { checkUniqueness } from '../utils/helpers';
import { getId } from './../utils/helpers';
import { baseURL } from './../App';


const NewContact = ({ handleAddContact, list }) => {
    const [contact, setContact] = useState({ name: '', phone: '' });



    const addContact = (e) => {
        e.preventDefault();
        if (checkUniqueness(list, contact.name)) return alert(`${contact.name} is already added to phonebook`);

        // save new contact locally to state of app

        const contactObj = { id: getId(), ...contact };
        handleAddContact(list => [...list, contactObj]);

        // save new contact to the database
        axios
            .post(baseURL + "contacts", contactObj)
            .then(({ data }) => console.log({ data }))
            .catch((error) => console.log({ error }));

        setContact({ name: '', phone: '' });
    }
    return (
        <div className='box_shadow'>
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