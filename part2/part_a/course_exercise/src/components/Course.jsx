// import  Content  from './Content'
// import  Footer  from './Footer'
// import  Part  from './Part'

function Part(props) {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

function Header({ course }) {
  return(
    <h2>{course.name}</h2>
  )
}

function Footer(props) {
  const number_of_exercises = props.number_of_exercises.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p> <b>Number of exercises: {number_of_exercises}</b></p>
  )
}

const Content = ({ course }) => {
  return (
      <>
        {course.parts.map(part => (
          <Part key={part.name} part={part.name} exercise={part.exercises} />
        ))}
      </>
  );
}


const Course = ({ course }) => { 
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Footer number_of_exercises = {course.parts} />
        </div>  
    )
}

export default Course