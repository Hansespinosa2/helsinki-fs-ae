import { useState } from 'react'
const Hello = ({name, age}) => {
  // const name = props.name
  // const age = props.age
  // const {name, age} = props

  const bornYear = () => { // tambien se puede escribir: const bornYear = () => new Date().getFullYear() - age
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>If I had to guess, I'd say you were probably born in {bornYear()}</p>
    </div>
  )
}

const GreetingsSection = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age = {26+10} />
      <Hello name={name} age = {age} />
    </div>
  )
}

const DisplayCounter = ({counter}) => {
  return (
    <div>
      <h1>Counting</h1>
      Counter is: {counter}
    </div>
  )
}

const ButtonCounter = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const CountingSection = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = () => setCounter(counter+1)
  const decrementCounter = () => setCounter(counter-1)
  const zeroCounter = () => setCounter(0)
  
  return (
    <div> 
      <DisplayCounter counter={counter} />
      <div>
        <ButtonCounter onClick={incrementCounter} text='plus' />
        <ButtonCounter onClick={decrementCounter} text='minus' />
        <ButtonCounter onClick={zeroCounter} text='zero' />
      </div>
    </div>
  )
}

const App = () => {
  return (
  <div>  
      <GreetingsSection />
      <CountingSection />
  </div>
  )
}

export default App