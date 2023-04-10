import React from 'react'
import '../styles/Loading.css'

const LoadingHome = ({loadingHome}) => {
  if(loadingHome === false ){
    const loading = document.getElementsByClassName('loadingDiv')[0];
    loading.style.display = 'none';
  }
  return (
    <div className='loadingDiv'>
        <h1>Loading...</h1>
    </div>
  )
}

export default LoadingHome