import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/MobileAlbumCard.css'

const MobileAlbumCard = (props) => {
    const card = props.card;
    const index = props.index;
    const navigate = useNavigate();

    let path = '';
    if(card.type === 'movie'){
        path = '/movies/' + card.id.toString();
    }else if (card.type === 'series'){
        path = '/series/' + card.id.toString();
    }

    const routeChange = () =>{ 
        navigate(path)
  }
  return (
    <div className='AlbumMobileCardDiv' onClick={routeChange}>
        <div className='albumCardMobileImageDiv'>
            <img src={require('../content/images/'+card.image)}/>
        </div>
        <div className='albumCardMobileInfo'>
            <h5 >{card.time}</h5>
            <h4>{card.title}: "{card.reviewTitle}"</h4>
            <div className='ratingMobile'>
                <h1>⭐{card.rating}/10</h1>
            </div>
        </div>
    </div>
  )
}

export default MobileAlbumCard