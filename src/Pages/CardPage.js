import React, { createElement } from 'react'
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

    // Take a big string that specifies title/text with \n and creates different html elements (paragraphs and subparagraphs)
    const paragraphGenerator = (text) => {
        let string = text
        const tempArr =[]
        let count = 1;
        while(string.includes('\n')){
            const breakIndex = string.indexOf('\n'); //finds index of \n
            const partText = string.slice(0 , breakIndex); //takes part of the text
            string = string.slice(breakIndex + 1 , string.length) //removes text taken out
            let temp
            if(count === 1){
                temp = createElement('p',{className: 'paragraph firstParagraph'},partText)
                tempArr.push(temp)
            }
            if(count%2 === 0){
                temp = createElement('h2',{className: 'subtitle'}, partText)
                tempArr.push(temp)
            }
            if(count%2 === 1 && count !== 1){
                temp = createElement('p',{className: 'paragraph'},partText)
                tempArr.push(temp)
            }
            count = count + 1;
         }
         return tempArr
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
            {paragraphGenerator(cardData.text)}
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default CardPage