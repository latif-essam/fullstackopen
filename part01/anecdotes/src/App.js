
import { useState } from 'react';
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const random = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(point => point = random()));

  const handleClick = () => {
    setSelected(random);
  }
  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  }
  console.log({ selected, points })
  return (
    <div>
      <nav style={{ textAlign: 'center' }}>
        <h1>Ancedots of Software Engineering</h1>
      </nav>
      <main>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90vw' }}>
          <div style={{ boxShadow: '0px 0px 10px grey', borderRadius: 10, padding: 10 }}>
            <p>"{anecdotes[selected]}",</p>
            <p>has {points[selected]}</p>
          </div>
          <br />
          <div>
            <button onClick={handleVote} >Vote</button>
            {" "}<button onClick={handleClick} >Wisdom 🙏</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
