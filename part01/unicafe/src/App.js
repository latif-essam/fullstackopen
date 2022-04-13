import { useState } from 'react';

const Button = ({ handleCLick, text }) => (<button onClick={handleCLick}>{text}</button>)
const Statistics = ({ good, bad, neutral }) => {
  const totalFeedback = good + bad + neutral;
  const average = (good - bad) / totalFeedback;
  const postive = good / totalFeedback;
  if (good < 1 && bad < 1 && neutral < 1) return <p>No Feedback give!!</p>
  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {totalFeedback}</p>
        <p>average {average || 0}</p>
        <p>postive {postive * 100 || 0} %</p>
      </div>
    </>)
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
        <Statistics good={good} bad={bad} neutral={neutral} />
      </main>
    </div>
  );
}

export default App;
