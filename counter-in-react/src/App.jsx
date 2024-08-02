import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    counter < 20 && setCounter(counter + 1)
  }
  
  const removeValue = () => {
    counter > 0 && setCounter(counter - 1)
  }


  return (
    <>
    <h1>Value : {counter} </h1>
    <button onClick={addValue}>Add Value</button> <hr />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
