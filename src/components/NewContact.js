import React, { useState } from 'react';
import { uniqueness, uniqueNameAndNumber, uniqueNameDiffNumber, getContatcByName } from '../utils/helpers';
import { getId } from './../utils/helpers';
import contactsService from '../services/contacts';


const NewContact = ({ handleAddContact, list, setNotifications }) => {
    const [contact, setContact] = useState({ name: '', phone: '' });



    const addContact = (e) => {
        e.preventDefault();
        if (contact.name === '' || contact.phone === '') return alert(`can't add empty contact`);
        if (uniqueNameAndNumber(list, contact)) return alert(`${contact.name} is already added to phonebook`);
        if (uniqueNameDiffNumber(list, contact)) {
            const oldContact = getContatcByName(list, contact.name);
            const message = `${oldContact.phone} number is already added to ${contact.name} update the old number with ${contact.phone}?!🙄`;

            if (window.confirm(message)) {
                contactsService
                    .update(oldContact.id, { ...oldContact, phone: contact.phone })
                    .then((updatedContact) => {
                        console.log('success updating', updatedContact)
                        handleAddContact((prevState) => prevState.map((c) => c.id === oldContact.id ? updatedContact : c)
                        );
                        setContact({ name: '', phone: '' });
                        setNotifications({ msg: `Updated ${updatedContact.name}'s number successfully.`, color: 'info' });
                        setTimeout(() => setNotifications({ msg: null }), 5000)

                    })
                    .catch((error) => {
                        console.log({ error });
                        setNotifications({ msg: `Information of ${contact.name} has already been removed from the server.`, color: 'warning' });
                        setTimeout(() => setNotifications({ msg: null }), 5000);
                        handleAddContact((prevState) => prevState.filter(c => c.id !== oldContact.id));

                    });
            }
            return;
        }
        // save new contact locally to state of app

        const contactObj = { id: getId(), ...contact };

        // save new contact to the database
        contactsService
            .create(contactObj)
            .then((data) => {
                console.log({ data });
                handleAddContact(list => [...list, contactObj]);
                setContact({ name: '', phone: '' });
                setNotifications({ msg: `Added ${data.name} successfully.`, color: 'success' });
                setTimeout(() => setNotifications({ msg: null }), 5000)
            })
            .catch((error) => console.log({ error }));
    }
    return (
        <div className='box_shadow' style={{ marginBlock: 15 }}>
            <h2>Add new Contatc</h2>
            <form onSubmit={addContact}>
                <label htmlFor="name">name: </label>
                <input type="text" id='name' value={contact.name} onChange={({ target }) => setContact(c => ({ ...c, name: target.value }))} />
                <label htmlFor="phone"> phone: </label>
                <input type="number" id='phone' value={contact.phone} onChange={({ target }) => setContact((c => ({ ...c, phone: target.value })))} />
                {" "}<button type='submit' className='btn btn-primary' style={{ marginInline: 5 }}> add </button>
                <button className='btn btn-warning' type="button" onClick={() => setContact({ name: '', phone: '' })} >clear</button>
            </form>
        </div>
    );
}

export default NewContact;