import React, { useEffect } from 'react'
import { data } from '../data';
import Cards from '../components/Cards';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import '../styles/Movies.css'



const Movies = () => {
  //find movies from data
  const movies = data.filter(review => review.type === 'movie');
  //do the first render sort so that it shows the latest movies
  const tempArray = movies.sort((post1, post2) => Number(post2.timeFilter) - Number(post1.timeFilter));

  const [posts , setPosts] = useState([]);
  const [searchResults , setSearchResults] = useState([]);

  useEffect(() =>{
    setPosts(movies);
    setSearchResults(tempArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='moviesDiv'>
      <h1 id='moviesH1'>ΤΑΙΝΙΕΣ</h1>
      <div className='flexSearchFilter'>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
        <Filter posts={posts} setSearchResults={setSearchResults} />
      </div>
      <Cards cardsData={searchResults} />
    </div>
  )
}

export default Movies