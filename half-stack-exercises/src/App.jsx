function Header(props) {
  return(
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

function Content(props) {
  return (
      <>
        {props.parts.map(part => (
          <Part key={part.name} part={part.name} exercise={part.exercises} />
        ))}
      </>
  );
}

function Footer(props) {
  const number_of_exercises = props.number_of_exercises.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Number of exercises: {number_of_exercises}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises:  10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
  }]}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer number_of_exercises={course.parts} />
    </div>
  )
}
export default App