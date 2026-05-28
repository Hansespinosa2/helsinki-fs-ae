import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const DisplayStatisticCell = ({statistic, text}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{statistic}</td>
  </tr>
)
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleAddGood = () => {
    setGood(good+1)
  }
  const handleAddNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleAddBad = () => {
    setBad(bad+1)
  }

  const getAverage = ({good, bad, total}) => {
  let average = good - bad
  if (total == 0) {
    average = 0
  } else {
    average /= total
  }

  return (
    average
  )
}

const DisplayAllStatistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  let average = good - bad
  if (total == 0) {
    average = 0
  } else {
    average /= total
  }

  if (total !== 0) {
  return (
      <table>
        <tbody>
          <DisplayStatisticCell statistic={good} text={"good"} />
          <DisplayStatisticCell statistic={neutral} text={"neutral"} />
          <DisplayStatisticCell statistic={bad} text={"bad"} />
          <DisplayStatisticCell statistic={total} text={"total"} />
          <DisplayStatisticCell statistic={average} text ={"average"} />
        </tbody>
      </table>
  )} else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

}

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleAddGood} text={"good"} />
      <Button onClick={handleAddNeutral} text={"neutral"} />
      <Button onClick={handleAddBad} text={"bad"} />
      <h1>statistics</h1>
      <DisplayAllStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  ) 
 

}
export default App
