import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../data';
import '../styles/CardPage.css'

const CardPage = () => {
    const paramsObj = useParams();
    const id = paramsObj.id;
    const cardData = data.find(card => {
        return card.id === Number(id)
    })

    const cdIn = () => {
        window.scrollTo(0, 0)
        const cd = document.getElementById(cardData.id);
        cd.style.animation = 'slideinPage 2s'
    }

  return (
    <div className='CardPage' onLoad={cdIn}>
        <h1>{cardData.title}: "{cardData.reviewTitle}"</h1>
        <div className='CardPageImage' id={cardData.id}>
            <img src={require('../content/images/'+ cardData.image)} alt={cardData.alt} />
        </div>
        <div className='CardPageInfo'>
            <h5>{cardData.time}</h5>
            <h4><Link to='/writers'>{cardData.writer}</Link></h4>
            <h3>⭐{cardData.rating}/10</h3>
            <p className='paragraph firstParagraph'>{cardData.text1}</p>
            <h2 className='subtitle'>{cardData.subtitle1}</h2>
            <p className='paragraph'>{cardData.text2}</p>
            <h2 className='subtitle'>{cardData.subtitle2}</h2>
            <p className='paragraph'>{cardData.text3}</p>
            <h2 className='subtitle'>{cardData.subtitle3}</h2>
            <p className='paragraph'>{cardData.text4}</p>
            <h2 className='subtitle'>{cardData.subtitle4}</h2>
            <p className='paragraph'>{cardData.text5}</p>
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default CardPage