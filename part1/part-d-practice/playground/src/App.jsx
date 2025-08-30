import { useState } from 'react'

const History = ({ allClicks }) => {
  if (allClicks.length == 0) {
    // it would be so haram to define a react hook like useState or useEffect here since it is in a conditional
    return (
      <div>
        Use the app by pressing the left or right button
      </div>
    )
  }
  return (
    <div>Button press history: {allClicks.join(' ')}</div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

function App() {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])

  const [totalClicks, setTotal] = useState(0)

  const handleLeftClick = () => {
    const increasedLeft = clicks.left + 1
    const newClicks = {
      left: increasedLeft,
      right: clicks.right
    }
    setClicks(newClicks)
    setAll(allClicks.concat('L'))
    setTotal(clicks.right + increasedLeft )
  }
  const handleRightClick = () => {
    const increasedRight = clicks.right + 1
    const newClicks = {
      left: clicks.left ,
      right: increasedRight
    }
    setClicks(newClicks)
    setAll(allClicks.concat('R'))
    setTotal(increasedRight + clicks.left)
  }

  const hello = () => {
    const handler = () => console.log("Hello world")
    return handler
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text={"left"} />
      <Button handleClick={handleRightClick} text={"right"} />
      {clicks.right}
      <History allClicks={allClicks}/>
      <p>Total: {totalClicks}</p>
      <Button handleClick={() => console.log("AHHHHHHHHHHH")} text="AHHHHHHHHHHHhh" />
      <Button handleClick={hello()} text="Hello world" />
    </div>
  )
}

export default App
