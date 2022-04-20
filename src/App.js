import React, { useEffect, useState } from 'react';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import SearchContatcs from './components/SearchContatcs';
import { checkUniqueness, getId } from './utils/helpers';


const App = (props) => {
  const [persons, setPersons] = useState(
    [
      { name: 'Dina Samir', phone: '01205175195', id: 0 },
      { name: 'Arto Hellas', phone: '040-123456', id: 1 },
      { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
    ]);

  const [filteredContacts, setFilteredContacts] = useState(persons);

  useEffect(() => {
    setFilteredContacts(persons)
  }, [persons]);


  return (
    <div>
      <h1>Phonebook</h1>
      <SearchContatcs handleFilteredContacts={setFilteredContacts} list={persons} />
      <NewContact handleAddContact={setPersons} list={persons} />
      <Contacts contacts={filteredContacts} />
    </div>
  )
}

export default App