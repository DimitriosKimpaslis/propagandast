import React from 'react'
import People from '../components/People'
import '../styles/Writers.css'
import { useOutletContext } from 'react-router-dom';
import { getCurrentUrl } from "swup";

const Writers = () => {
  const setUrl = useOutletContext();
  setUrl(getCurrentUrl())
  return (
    <div className='writers'>
        <h1>Η ΟΜΑΔΑ ΜΑΣ</h1>
        <People /> 
        <div className='footer'></div>
    </div>
  )
}

export default Writers