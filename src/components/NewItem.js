import React, { useState } from 'react';
import noteServices from '../services/notes';
import { checkUniqueness } from '../utils/helpers';
import { getId } from '../utils/helpers';


const NewItem = ({ handleAddItem, list }) => {
    const [note, setNote] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        if (checkUniqueness(list, note)) return alert(`${note} is already added to phonebook`);


        const newNote = {
            id: getId(),
            content: note,
            important: Math.random() < 0.5,
            date: new Date().toString(),
        }
        // handleAddItem(list => [...list, newNote]);
        noteServices
            .create(newNote)
            .then(({ data }) => {
                handleAddItem(notes => notes.concat(newNote))
                setNote('');
            })
            .catch(error => console.log({ error }));

    }
    return (
        <div>
            <h2>Add new Item</h2>
            <form onSubmit={addItem}>
                <label htmlFor="note">Note :  </label> {" "}
                <input type="text" id='note' value={note} onChange={({ target }) => setNote(target.value)} />

                {"  "}<button type='submit' style={{ paddingBlock: 5, paddingInline: 12, backgroundColor: 'dodgerblue', color: 'white', border: 'none', borderRadius: 10 }}> add </button>
            </form>
        </div>
    );
}

export default NewItem;