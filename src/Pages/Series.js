import React ,{useEffect} from 'react'
import { data } from '../data';
import Cards from '../components/Cards';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import '../styles/Movies.css'

const Series = () => {
  //find series from data
  const series = data.filter(review => review.type === 'series');

  //create a sorted series array from latest to oldest for first render
  const tempArray = series.sort((post1, post2) => Number(post2.timeFilter) - Number(post1.timeFilter));

  //initiate state
  const [posts , setPosts] = useState([]);
  const [searchResults , setSearchResults] = useState([]);

  const type = 'serie';

  //set first state
  useEffect(() =>{
    setPosts(series);
    setSearchResults(tempArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='moviesDiv'>
      <h1 id='moviesH1'>ΣΕΙΡΕΣ</h1>
      <div className='flexSearchFilter'>
        <SearchBar posts={posts} setSearchResults={setSearchResults} type={type} />
        <Filter posts={posts} setSearchResults={setSearchResults} />
      </div>
      <Cards cardsData={searchResults} />
      <div className='footer'></div>
    </div>
  )
}

export default Series
