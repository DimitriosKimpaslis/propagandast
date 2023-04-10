import React from 'react'
import {quotes} from '../quotesData'
import '../styles/Quote.css'

const Quote = () => {
    const num = Math.floor(Math.random() * 10);
  return (
    <div className='quoteDiv'>
        <h1>Quote of the day</h1>
        <p>{quotes[num].text}</p>
        <h3>{quotes[num].author}</h3>
    </div>
  )
}

export default Quote