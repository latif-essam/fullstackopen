import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import SearchContatcs from './components/SearchContatcs';
import { checkUniqueness, getId } from './utils/helpers';


const App = (props) => {
  const [data, setData] = useState([]);

  const url = 'http://localhost:3001/notes';
  // axios.post(url, { id: 4, content: 'lol is a string method', important: true, date: Date.now() });
  // axios.put(url, { id: 4, content: 'pop is another string method that comes with extra features', important: true, date: Date.now() });
  // const notes = fetch('/',{method:'GET',mode:'no-cors'})
  useEffect(() => {

    axios.get(url).then(({ data }) => setData(data)).catch(e => console.log({ e }));


  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>{data.length}</h2>
      {data.length > 0 ? <Contacts list={data} /> : 'loading ....'}
    </div>
  )
}

export default App