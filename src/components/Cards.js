import React ,{useState , useEffect} from 'react';
import Card from './Card';
import '../styles/Cards.css'


const Cards = (props) => {
    const cardsData = props.cardsData;
    const [disabled , setDisabled] = useState(false);
    useEffect(()=>{
      if(disabled === true){
        let elements = document.querySelectorAll('div'); 
        elements.forEach(element => {element.style.pointerEvents = 'none'});
        setTimeout(() =>{elements.forEach(element => {element.style.pointerEvents = 'auto'})}, 1000)
        
      }
    },[disabled])

  return ( 
    <div className='cards'>
      {cardsData.map((card) => {
        return(
          <Card key={card.id} card={card} setDisabled={setDisabled} />
      );
      })}
      <div className='footer'></div>
    </div>
  )
  }

export default Cards