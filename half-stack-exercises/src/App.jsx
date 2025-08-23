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
      {props.parts.map((part, index) => (
        <Part part={part} exercise={props.exercises[index]} />
      ))}
    </>
  );
}

function Footer(props) {
  return (
    <p>Number of exercises: {props.number_of_exercises}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Footer number_of_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App