import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const DisplayAverageAndTotal = ({good, bad, total}) => {
  let average = good - bad
  if (total == 0) {
    average = 0
  } else {
    average /= total
  }


  return (
    <div>   
      <DisplayStatistic statistic={total} text={"total"} />
      <DisplayStatistic statistic={average} text ={"average"} />
    </div>
  )
}

const DisplayAllStatistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total !== 0) {
  return (
      <div>
        <DisplayStatistic statistic={good} text={"good"} />
        <DisplayStatistic statistic={neutral} text={"neutral"} />
        <DisplayStatistic statistic={bad} text={"bad"} />
        <DisplayAverageAndTotal good={good} bad={bad} total={total} />
      </div>
  )} else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

}

const DisplayStatistic = ({statistic, text}) => {
  return (
  <p>{text} {statistic}</p>
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
