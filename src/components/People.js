import React, { useState } from 'react'
import {people} from '../peopleData'
import Person from './Person'
import '../styles/People.css'
import PeopleInfo from './PeopleInfo'

const People = () => {
  const [personInfo , setPersonInfo] = useState({});

  return (
    <>
      <div className='peopleDiv'>
          {people.map((person) => {
              return (
                  <Person key={person.id} person={person} setPersonInfo={setPersonInfo}/>
              )
          })
          }
      </div>
      <div className='peopleInfoDiv'>
          <PeopleInfo person={personInfo} />
      </div>
    </>
  )
}

export default People