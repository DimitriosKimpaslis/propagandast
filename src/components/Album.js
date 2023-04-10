import React ,{useState , useEffect} from 'react'
import { data } from '../data'
import AlbumCard from './AlbumCard'
import '../styles/Album.css'


const Album = () => {
    let latest = data.sort((post1, post2) => Number(post2.timeFilter) - Number(post1.timeFilter));
    latest = latest.slice(0, 5);

    //disable other buttons when i click a button
    const [disabled , setDisabled] = useState(false);
    useEffect(()=>{
      if(disabled === true){
        let elements = document.querySelectorAll('div'); 
        elements.forEach(element => {element.style.pointerEvents = 'none'});
        setTimeout(() =>{elements.forEach(element => {element.style.pointerEvents = 'auto'})}, 1000)
        
      }
    },[disabled])

  return (
    <div className='albumDiv'>
        {latest.map((card ,index) => {
        return(
          <AlbumCard key={card.id} card={card} index={index} setDisabled={setDisabled} />
      );
      })}
    </div>
  )
}

export default Album