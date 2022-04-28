import React from 'react';
import contactsService from '../services/contacts';


const Contatc = ({ contatc, handleUpdateContacts }) => {
    const handleDelete = () => {
        const message = `delete ${contatc.name}?`;
        if (window.confirm(message)) {
            contactsService
                .remove(contatc.id)
                .then(data => {
                    console.log("success", data);
                    handleUpdateContacts((prevState) => prevState.filter(c => c.id !== contatc.id));
                })
                .catch(error => console.log({ error }));
        }

    }
    return (
        <li style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: '', borderBottom: '2px solid grey'
            , marginBottom: 16
        }}>
            <div style={{ flex: 2 }}>

                <p>
                    {contatc.name}
                </p>
                <p>
                    {contatc.phone}
                </p>
            </div>
            <div style={{ flex: 1 }}>
                <button className='btn btn-danger' onClick={handleDelete} >Delete</button>
            </div>
        </li >
    );
}

export default Contatc;