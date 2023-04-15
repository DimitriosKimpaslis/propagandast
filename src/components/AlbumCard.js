import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/AlbumCard.css'

const AlbumCard = (props) => {
    const card = props.card;
    const index = props.index;
    const setDisabled = props.setDisabled;

    const navigate = useNavigate();

    let path = '/reviews/' + card.id.toString();

    const hoverImage = () => {
        const image = document.getElementById(card.id);
        const info = document.getElementById(card.title);
        image.style.width = '100%';
        image.style.zIndex = '90';
        info.style.display = 'block';
    }

    const stopHovering = () => {
        const image = document.getElementById(card.id);
        const info = document.getElementById(card.title);
        image.style.zIndex = index + 1;
        image.style.width = '90%';
        info.style.display = 'none';
    }
    
     

    const routeChange = () =>{ 
        setDisabled(true);
        const cd = document.getElementById(card.id);
        cd.style.animation = 'slidein 1s';
        setTimeout(() =>{navigate(path)}, 500);
  }

  return (
    <div className='albumCard' >
        <div className='albumCardImg'  onMouseOver={hoverImage} onMouseOut={stopHovering} id={card.id} onClick={routeChange} >
            <img src={require('../content/images/'+ card.image)} alt={card.alt} />
        </div>
        <div className='albumCardInfo' onMouseOver={hoverImage} onMouseOut={stopHovering} id={card.title}>
            <h5 >{card.time}</h5>
            <h4>{card.title}: "{card.reviewTitle}"</h4>
            {/* I've put card.title because card.id was taken by cd. It doesnt matter what it is , it just has to be another unique value for every card so that getElementById doesnt throw an error. I could put any kind of data and it would work. I use it so that the review color change can work */}
            <h1>⭐{card.rating}/10</h1>
        </div>
    </div>
  )
}

export default AlbumCard