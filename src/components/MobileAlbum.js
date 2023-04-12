import React from 'react'
import MobileAlbumCard from '../components/MobileAlbumCard'
import { data } from '../data';
import '../styles/MobileAlbum.css'

const MobileAlbum = () => {
    let latest = data.sort((post1, post2) => Number(post2.timeFilter) - Number(post1.timeFilter));
    latest = latest.slice(0, 5);


  return (
    <div className='albumMobileDiv'>
        {latest.map((card ,index) => {
        return(
          <MobileAlbumCard key={card.id} card={card} index={index} />
      );
      })}
    </div>
  )
}

export default MobileAlbum