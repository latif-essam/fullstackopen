
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

  const [part1, part2, part3] = props.contents;
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}

const Total = (props) => {
  const [part1, part2, part3] = props.contents;
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content contents={parts} />
      <Total contents={parts} />
    </div>
  )
}




export default App