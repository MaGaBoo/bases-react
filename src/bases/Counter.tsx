import { useState } from "react"

interface initialState {
    counter: number
}

const Counter = () => {

    const [counter, setCounter] = useState<initialState>({ counter: 15 })

    const handleClick = () => {
        setCounter(prev => ({ counter: prev.counter + 1}))
    }

  return (
    <>
    <h1>Counter: {counter.counter}</h1>
    <button 
    className="btn btn-light"
    onClick={handleClick}>
        +1
    </button>
    </>
  )
}

export default Counter