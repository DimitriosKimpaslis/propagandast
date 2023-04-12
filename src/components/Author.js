import React from 'react'
import '../styles/Author.css'

const Author = ({authorObj}) => {
  return (
    <div className='authorDiv'>
        <div className='authorImgDiv'>
            <img src={require('../content/people/'+ authorObj.image)} alt={authorObj.alt} />
        </div>
        <div className='authorText'>
            <h3 className='authorTextH3'>{authorObj.name + ' ' + authorObj.surname}</h3>
            <p className='authorTextP'>{authorObj.smallText}</p>
        </div>
        
    </div>
  )
}

export default Author