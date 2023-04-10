import React from 'react'
import '../styles/Person.css'

const Person = ({person , setPersonInfo}) => {

    const eventHandler = () => {
        setPersonInfo(person)
    };

  return (
    <div className='personCard'>
        <div id={person.id} className='personImage' onClick={eventHandler}>
            <img src={require('../content/people/'+ person.image)} alt={person.alt} />
            <p>{person.name} {person.surname}</p>
        </div>
    </div>
  )
}

export default Person