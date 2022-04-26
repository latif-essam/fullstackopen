import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import NewItem from './components/NewItem';


const App = (props) => {
  const [data, setData] = useState([]);

  const url = 'http://localhost:3001/notes';
  // axios.post(url, { id: 4, content: 'lol is a string method', important: true, date: Date.now() });
  // axios.put(url, { id: 4, content: 'pop is another string method that comes with extra features', important: true, date: Date.now() });
  // const notes = fetch('/',{method:'GET',mode:'no-cors'})import NewItem from './components/NewItem';

  useEffect(() => {

    axios.get(url).then(({ data }) => setData(data)).catch(e => console.log({ e }));


  }, []);

  return (
    <div className='p-3'>
      <h1 className="btn btn-outline-danger position-relative " style={{ width: 100 }}>
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {data.length}
          <span className="visually-hidden">unread messages</span>
        </span >
      </h1 >
      <NewItem />

      {data.length > 0 ? <List list={data} /> : 'loading ....'}
    </div >
  )
}

export default App