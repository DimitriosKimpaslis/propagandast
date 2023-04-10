import React from 'react'
import '../styles/Filter.css';

const Filter = ({posts , setSearchResults}) => {
  let resultsArray = [];

  const select = (e) =>{
    let option = e.target.value;
    console.log(typeof(option) , option)
    if (!option) return setSearchResults(posts);

    if (option === 'oldest'){
      resultsArray = posts.sort((post1, post2) => Number(post1.timeFilter) - Number(post2.timeFilter));
      console.log(Number(posts[0].timeFilter))
      setSearchResults([...resultsArray]);
    }

    if (option === 'latest'){
      resultsArray = posts.sort((post1, post2) => Number(post2.timeFilter) - Number(post1.timeFilter));
      setSearchResults([...resultsArray]);
    }

    if (option === 'worst'){
      resultsArray = posts.sort((post1 , post2) => post1.rating - post2.rating);
      setSearchResults([...resultsArray])
    }

    if (option === 'best'){
      resultsArray = posts.sort((post1 , post2) => post2.rating - post1.rating  );
      setSearchResults([...resultsArray])
    }

    if (option === 'A-z'){
      resultsArray = posts.sort(function(post1, post2){
        if(post1.title < post2.title) { return -1; }
        if(post1.title > post2.title) { return 1; }
        return 0;
    })
      setSearchResults([...resultsArray])
    }

    if (option === 'Z-a'){
      resultsArray = posts.sort(function(post1, post2){
        if(post1.title < post2.title) { return 1; }
        if(post1.title > post2.title) { return -1; }
        return 0;
    })
      setSearchResults([...resultsArray])
    }
    
  }
  return (
    <div className='filterDiv'>
      <select id="filter" name="filter" onChange={select}>
        <option value="latest" >Τελευταίες κριτικές</option>
        <option value="oldest" >Παλιότερες κριτικές</option>
        <option value="A-z">Α-ζ</option>
        <option value="Z-a">Ζ-α</option>
        <option value="best">Υψηλότερη βαθμολογία</option>
        <option value="worst">Χαμηλότερη βαθμολογία</option>  
      </select>
    </div>
  )
}

export default Filter