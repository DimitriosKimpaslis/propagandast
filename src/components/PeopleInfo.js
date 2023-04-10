import React from 'react'
import '../styles/PeopleInfo.css'

const PeopleInfo = ({person}) => {

    //if person object is empty (which it is at component load) fill it with something(problem with padding when person is empty)
    if(Object.keys(person).length === 0 && person.constructor === Object){
        person = {
            surname: 'Propagandast Team',
            description: 'Our review team is a group of five individuals who share a strong passion for movies. Despite our youth, we bring a high level of professionalism and expertise to our reviews. Our love for the art of filmmaking is evident in our insightful analysis of movies, and we are dedicated to providing a comprehensive evaluation of each film we review. While we may have a playful side, we take our work seriously and strive to offer our readers a well-informed and thoughtful critique of each movie we watch.'
        }
    }

    const goFacebook = () =>{
        window.open(person.facebook,)
    };

    const goInstagram = () =>{
        window.open(person.instagram,) ;
    }
    
  return (
    <div className='personInfoDiv'>
        <div className='personInfoDivCenter'>
            <div className='personInfo'>
                <h2>{person.surname} {person.name}</h2>
                <h6>{person.title}</h6>
                <p>{person.description}</p>
                <h3>{person.motto}</h3>
                <div className='personInfoMedia'>
                    <div className='personInfoFacebook'>
                        <img src={require('../content/logos/facebook-black.png')} alt='facebook' 
                        onMouseOver={e => (e.currentTarget.src = require('../content/logos/facebook-grey.png')) }
                        onMouseOut={e => (e.currentTarget.src = require('../content/logos/facebook-black.png'))}
                        onClick={goFacebook}
                        />
                    </div>
                    <div className='personInfoInstagram'>
                        <img src={require('../content/logos/instagram-black.png')}       alt='facebook' 
                            onMouseOver={e => (e.currentTarget.src = require('../content/logos/instagram-grey.png')) }
                            onMouseOut={e => (e.currentTarget.src = require('../content/logos/instagram-black.png'))}
                            onClick={goInstagram}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PeopleInfo