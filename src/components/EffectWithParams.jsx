import React, { useEffect, useState } from 'react'

const EffectWithParams = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
   document.title =`Le nombre de clics est ${count} fois`
  
    
  }, [count])
  
  return (
    <div>
      <p>
        Vous avez cliqué {count} fois
      </p>
      <button onClick={()=> {
        setCount(count+1)
      }}>Cliquez ici</button>
    </div>
  )
}

export default EffectWithParams