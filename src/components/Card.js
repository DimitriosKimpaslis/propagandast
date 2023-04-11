import React ,{useEffect} from 'react'
import '../styles/Card.css'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const card = props.card;
    const setDisabled = props.setDisabled;
    const navigate = useNavigate();
    
    const ratingColor = () => {
        const ratingH1 = document.getElementById(card.title);
        if(Number(card.rating) >= 0 && Number(card.rating) < 5){
            ratingH1.style.color = '#F44949';
        }
        else if(Number(card.rating) >= 5 && Number(card.rating) <= 7){
            ratingH1.style.color = '#FF7A00';
        }
        else if(Number(card.rating) >= 7 && Number(card.rating) < 8){
            ratingH1.style.color = '#FBE15A';
        }
        else{
            ratingH1.style.color = '#48C53D';
        }
    };

    useEffect(() => {
        ratingColor()
        // eslint-disable-next-line 
    },[])

    const hideLoader = (e) => {
        const imageLoader = document.getElementById('cardImage' + card.id)
        imageLoader.style.display = 'none';
    }
            
    let path = '';
    if(card.type === 'movie'){
        path = '/movies/' + card.id.toString();
    }else if (card.type === 'series'){
        path = '/series/' + card.id.toString();
    }

    const routeChange = () =>{ 
        setDisabled(true)
        const cd = document.getElementById('cardImageDiv' + card.id);
        cd.style.animation = 'slidein 2s';
        setTimeout(() =>{navigate(path)}, 500);
  }
  
  return (
    <div className='card'>
        <div className='cardImg' id={'cardImageDiv' + card.id} >
            <div className='loadingImg' id={'cardImage' + card.id}></div>
            <img src={require('../content/images/'+ card.image)} onLoad={hideLoader} alt={card.alt} />
        </div>
        <div className='cardInfo' onClick={routeChange} >
            <h5 >{card.time}</h5>
            <h4>{card.title}: "{card.reviewTitle}"</h4>
            {/* I've put card.title because card.id was taken by cd. It doesnt matter what it is , it just has to be another unique value for every card so that getElementById doesnt throw an error. I could put any kind of data and it would work. I use it so that the review color change can work */}
            <div className='rating'>
                <div className='starIcon'>
                    <img src={require('../content/logos/star.png')} alt='star'/>
                </div>
                <h1 id={card.title}>{card.rating}/10</h1>
            </div>
        </div>
    </div>
  )
}

export default Card