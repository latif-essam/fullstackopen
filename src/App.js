import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import List from './components/List';
import NewItem from './components/NewItem';
import Notification from './components/Notification';
import noteServices from './services/notes';


const App = (props) => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState(data);



  // axios.post(url, { id: 4, content: 'lol is a string method', important: true, date: Date.now() });
  // axios.put(url, { id: 4, content: 'pop is another string method that comes with extra features', important: true, date: Date.now() });
  // const notes = fetch('/',{method:'GET',mode:'no-cors'})import NewItem from './components/NewItem';

  useEffect(() => {
    noteServices
      .getAll()
      .then(({ data }) => setData([{ id: 1000, content: 'lolalpop el tok el dom', important: false }, ...data]))
      .catch(e => console.log({ e }));


  }, []);

  useEffect(() => {
    if (!showAll) {
      setFilteredNotes((notes) => notes.filter(n => n.important));
    }
    if (showAll) setFilteredNotes(data);
  }, [data, showAll])

  return (
    <div className='p-3'>
      <h1 className="btn btn-outline-danger position-relative " style={{ width: 100 }}>
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {data.length}
          <span className="visually-hidden">unread messages</span>
        </span >
      </h1 >
      <Notification message={errorMessage} />
      <div>
        <div>
          <button className='btn btn-primary' onClick={() => setShowAll(!showAll)}>show {showAll ? 'importatnt' : 'all'}</button>
        </div>

        <NewItem list={data} handleAddItem={setData} />
      </div>

      {data.length > 0 ? <List handleUpdateItem={setData} list={filteredNotes} handleErrorMsg={setErrorMessage} /> : 'loading ....'}
      <Footer />
    </div >
  )
}

export default App