import React from 'react'
import '../styles/Home.css';
import Album from '../components/Album';
import Quote from '../components/Quote';
import MobileAlbum from '../components/MobileAlbum';
import { getCurrentUrl } from "swup";
import { useOutletContext } from 'react-router-dom';


const Home = () => {
  const setUrl = useOutletContext();
  setUrl(getCurrentUrl())
  return (
    <div className='homeDiv'>
      <div className='homeDivH1'>
        <h1>ΤEΛΕΥΤΑΙΕΣ ΚΡΙΤIΚΕΣ</h1>
      </div>
      <Album />
      <MobileAlbum />
      <Quote />
      <div className='footer'></div>
    </div>
  )
}

export default Home