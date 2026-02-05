import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <form className='form'>
      <label htmlFor='name'>Nom</label>
      <input type='text'id='name' name='name'/>
      <label htmlFor='prenom'>prenom</label>
      <input type='text'id='prenom' name='prenom'/>
      <label htmlFor='email'>email</label>
      <input type='text'id='email' name='email'/>
      <label htmlFor='password'>password</label>
      <input type='password'id='password' name='password'/>
      <button type='submit'>envoyer</button>
    </form>
  )
}

export default Contact