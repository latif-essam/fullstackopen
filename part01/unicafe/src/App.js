import { useState } from 'react';

const Button = ({ handleCLick, text }) => (<button onClick={handleCLick}>{text}</button>)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <nav>
        <h1>Unicafe</h1>
      </nav>
      <main>
        <h2>Give Feedback for our Services</h2>

        <div>
          <Button text="good" handleCLick={() => setGood(good + 1)} />
          <Button text="neutral" handleCLick={() => setNeutral(neutral + 1)} />
          <Button text="bad" handleCLick={() => setBad(bad + 1)} />
        </div
        >
        <h2>Statistics</h2>
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
