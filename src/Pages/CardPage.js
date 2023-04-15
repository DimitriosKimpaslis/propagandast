import React, { createElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../data';
import {people} from '../peopleData';
import '../styles/CardPage.css';
import Author from '../components/Author';

const CardPage = () => {
    //take the url , save the id part, and then render the object with the corresponding id from the data set
    const paramsObj = useParams();
    const id = paramsObj.id;
    const cardData = data.find(card => {
        return card.id === Number(id)
    })

    //Scroll to the top of the page and do the animation
    const cdIn = () => {
        window.scrollTo(0, 0)
        const cd = document.getElementById(cardData.id);
        cd.style.animation = 'slideinPage 2s'
    }

    // Take a big string that specifies title/text with \n and creates different html elements (paragraphs and subtitles)
    const paragraphGenerator = (text ,imgArr) => {
        let string = text;
        const tempArr = [];
        let count = 1;
        while(string.includes('\n')){
            const breakIndex = string.indexOf('\n'); //finds index of \n
            const partText = string.slice(0 , breakIndex); //takes part of the text
            string = string.slice(breakIndex + 1 , string.length) //removes text taken out
            let temp
            let div
            //create the corresponding element and put in an array
            if(count === 4 && imgArr[0]){
                temp = createElement('img',{className: 'dynamicImg', src:require('../content/dynamic/'+ imgArr[0])})
                div = createElement('div',{className: 'dynamicDivImg'}, temp)
                tempArr.push(div)
            }
            if(count === 6 && imgArr[1]){
                temp = createElement('img',{className: 'dynamicImg', src:require('../content/dynamic/'+ imgArr[1])})
                div = createElement('div',{className: 'dynamicDivImg'}, temp)
                tempArr.push(div)
            }
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
         // if any string is left that obviously hasnt created an element because when an element is created it is deleted from the main string , create one final paragraph(because it always ends with a paragraph)
         if (string){
            tempArr.push(createElement('p',{className: 'paragraph'},string))
         }
         return tempArr
    }
    
    //find and return the author object from people so that it gets passed to Author.js
    const authorObj = people.find(person => cardData.writer === (person.name + ' ' + person.surname))

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
            {paragraphGenerator(cardData.text ,cardData.images)}
        </div>
        <Author authorObj={authorObj} />
    </div>
  )
}

export default CardPage