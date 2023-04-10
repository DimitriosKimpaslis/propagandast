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
            ratingH1.style.color = 'red';
        }
        else if(Number(card.rating) >= 5 && Number(card.rating) <= 7){
            ratingH1.style.color = 'yellow';
        }
        else if(Number(card.rating) >= 7 && Number(card.rating) < 9){
            ratingH1.style.color = 'green';
        }
        else{
            ratingH1.style.color = 'blue';
        }
    };

    useEffect(() => {
        ratingColor()
        // eslint-disable-next-line
    },[])

    let path = '';
    if(card.type === 'movie'){
        path = '/movies/' + card.id.toString();
    }else if (card.type === 'series'){
        path = '/series/' + card.id.toString();
    }

    const routeChange = () =>{ 
        setDisabled(true)
        const cd = document.getElementById(card.id);
        cd.style.animation = 'slidein 2s';
        setTimeout(() =>{navigate(path)}, 500);
  }
  
  return (
    <div className='card'>
        <div className='cardImg' id={card.id} >
            <img src={require('../content/images/'+ card.image)} alt={card.alt} />
        </div>
        <div className='cardInfo' onClick={routeChange} >
            <h5 >{card.time}</h5>
            <h4>{card.title}: "{card.reviewTitle}"</h4>
            {/* I've put card.title because card.id was taken by cd. It doesnt matter what it is , it just has to be another unique value for every card so that getElementById doesnt throw an error. I could put any kind of data and it would work. I use it so that the review color change can work */}
            <div className='rating'>
                <div className='starIcon'>
                    <img src={require('../content/logos/star.png')}/>
                </div>
                <h1 id={card.title}>{card.rating}/10</h1>
            </div>
        </div>
    </div>
  )
}

export default Card