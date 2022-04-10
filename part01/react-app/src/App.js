const Speak = (props) => {
  const handleSpeak = () => {
    const speetch = new SpeechSynthesisUtterance();
    speetch.text = "clearly, we can speak to you " + props.name;
    speetch.rate = 1;
    speetch.lang = "en-US";
    speetch.pitch = 1;
    speechSynthesis.speak(speetch);
  }
  return (
    <button onClick={handleSpeak}>Speak</button>
  )
}


const App = () => {
  const now = new Date();
  const a = 10, b = 20;

  return (
    <div>
      <p>Hello Fullstack, it is {now.toString()}</p>
      <p> {`${a} plus ${b} is ${a + b} `}  </p>
      <Speak name="Mika" />
    </div>
  );
}

export default App;
