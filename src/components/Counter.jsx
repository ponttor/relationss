import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  } 
  return (
  <>
    <h1>{count}</h1>
    <button onClick={increment}>increase</button>
    <button onClick={decrement}>decrease</button>
   </>
  )
}

export default Counter