import React, { useState } from 'react'

const UseStateHooks = () => {
  const [count, setCount] = useState(0)
  const incrémentation =() =>{
    setCount(count+1)
  }
   const décrémentation =() =>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>Mon compteur initial est:{count}</h1>
      <button onClick={incrémentation}>Incrémenter</button>
      <button onClick={décrémentation}>Décrémenter</button>
    </div>
  )
}

export default UseStateHooks