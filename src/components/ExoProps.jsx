import React from 'react'

const ExoProps = ({mod1,mod2}) => {
  const moy= (mod1 + mod2)/2
  return (
    <div>
      <p>La moyenne entre les 2 modules est {moy}</p>
    </div>
  )
}

export default ExoProps