import React from 'react'
import '../styles/Header.css'
import logo from '../content/logos/logo.png';
import iconProfile from '../content/logos/iconProfile.png'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  //Logo on click goes to home page
  const goHomePage = () => {
    const path = '/'
    navigate(path);
  }

  const notReady = () =>{
    alert('This feature is in development');
  }

  return (
    <div className='top'>
        <div className='logo' onClick={goHomePage}>
            <img src={logo} alt='logo' />
        </div>
        <div className='nav'>
          <ul>
              <li><NavLink to='movies'>ΤΑΙΝΙΕΣ</NavLink></li>
              <li><NavLink to='series'>ΣΕΙΡΕΣ</NavLink></li>
              <li><NavLink to='writers'>ΕΜΕΙΣ</NavLink></li>
          </ul>
          <div className='userIcon'>
            <img src={iconProfile} alt='icon profile' onClick={notReady}/>
          </div>
        </div>
        
    </div>
  )
}

export default Header