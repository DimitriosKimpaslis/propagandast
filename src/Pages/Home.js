import React from 'react'
import '../styles/Home.css';
import Album from '../components/Album';
import Quote from '../components/Quote';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='homeDivH1'>
        <h1>ΤEΛΕΥΤΑΙΕΣ ΚΡΙΤIΚΕΣ</h1>
      </div>
      <Album />
      <Quote />
      <div className='footer'></div>
    </div>
  )
}

export default Home