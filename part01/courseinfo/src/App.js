
// compomemts
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const Content = (props) => {

  const { part1, part2, part3 } = props.contents;
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}

const Total = (props) => {
  const { part1, part2, part3 } = props.contents;
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const contents = { part1, part2, part3 };

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total contents={contents} />
    </div>
  )
}




export default App