import React from 'react'
import { useState } from 'react'
const ExoState = () => {
  const [off, setOff] = useState(true)
  return (
    <div>
      <h1 style={{color:off ? "green" :"blue"}}>Bienvenue</h1>
      <button onClick={()=> setOff(!off)}>Change Color</button>
    </div>
  )
}

export default ExoState