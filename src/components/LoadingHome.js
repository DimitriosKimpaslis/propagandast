import React from 'react'
import '../styles/Loading.css'

const LoadingHome = ({loadingHome}) => {
  if(loadingHome === false ){
    const loading = document.getElementsByClassName('loadingDiv')[0];
    loading.style.display = 'none';
    const loadingImg = document.getElementById('loadingImg');
    loadingImg.style.animationIterationCount = '1';
  }
  return (
    <div className='loadingDiv'>
        <img src={require('../content/logos/logo512.png')} id='loadingImg'/>
    </div>
  )
}

export default LoadingHome