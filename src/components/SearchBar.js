import React, { useEffect } from 'react'
import '../styles/Search.css'

const SearchBar = ({posts , setSearchResults , type, MainOrSide}) => {
    const handleSubmit = (e) => e.preventDefault();
    let resultsArray = [];
    
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts);
        resultsArray = posts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||  post.reviewTitle.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResults(resultsArray);
    }
    

  return (
        <div className='searchDiv' onSubmit={handleSubmit}>
            <input 
            className='search__input'  
            type='text'
            id='search'
            onChange={handleSearchChange}
            placeholder={'Αναζήτηση κριτικής...'} />
        </div>
  )
}

export default SearchBar