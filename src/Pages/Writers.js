import React from 'react'
import People from '../components/People'
import '../styles/Writers.css'

const Writers = () => {

  return (
    <div className='writers'>
        <h1>Η ΟΜΑΔΑ ΜΑΣ</h1>
        <People /> 
        <div className='footer'></div>
    </div>
  )
}

export default Writers