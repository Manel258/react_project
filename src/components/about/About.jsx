import React from 'react'
import image from "./welcome.jpg"

const About = ({name,age}) => {
  return (
    <div className='About'>
      <h2>A propos de nous</h2>
      <p>Bienvenue {name} qui a l'age de {age} ans sur notre site web</p>
      <img src={image} alt="texte alternatif" />
    </div>
  )
}

export default About