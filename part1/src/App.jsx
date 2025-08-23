import { jsx } from "react/jsx-runtime"

function Hello(props) {
  console.log(props)
  return (
    <div>
        <p>Hello {props.name}{props.age ? ", you are " + props.age + " years old" : ""}</p>
    </div>
  )
}

function Footer() {
  return (
    <div>
      greeting app created by <a href="https://hansespinosa2.github.io/">Andres Espinosa</a>
    </div>
  )
}

function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  const name='Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' />
      <Hello name= 'Daisy' age={20 +6} />
      <Hello name={name} age={age} />
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Footer />
    </div>
  
  ) 
}

export default App

// This is the same as 
// const App = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )  
// }