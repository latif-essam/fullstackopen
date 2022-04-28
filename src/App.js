import React, { useEffect, useState } from 'react';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import SearchContatcs from './components/SearchContatcs';


import contactsService from './services/contacts';


const App = (props) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    contactsService
      .getAll()
      .then(data => {
        setContacts(data);
      })
      .catch(({ error }) => console.log({ error }));
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts])

  return (
    <div>
      <h1>Phonebook</h1>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', }}>

        <SearchContatcs handleFilteredContacts={setFilteredContacts} list={contacts} />
        <NewContact handleAddContact={setContacts} list={contacts} />
      </div>
      {contacts.length ? <Contacts handleUpdateContacts={setContacts} contacts={filteredContacts} /> : <p>no contacts to show! try to add some</p>}

    </div>
  )
}

export default App