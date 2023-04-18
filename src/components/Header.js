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
    window.scrollTo(0, 0)
    navigate(path);
  }

  const notReady = () =>{
    alert('This feature is in development');
  }


  const dropdownHandler = (e) => {
    const style = {
      display: 'block',
      animation: 'navigation 5s'
    }
    const mobileUlDiv = document.getElementById('mobileUlDiv');
    const mobileUl = document.getElementById('mobileUl');
    mobileUlDiv.style.display = 'block';
    mobileUl.style.display = 'block';
    mobileUlDiv.style.animation = style;
  }

  const closeDropdown = () =>{
    const mobileUlDiv = document.getElementById('mobileUlDiv');
    const mobileUl = document.getElementById('mobileUl');
    mobileUlDiv.style.display = 'none';
    mobileUl.style.display = 'none';
  }

  return (
    <div className='top'>
        <div className='logo' onClick={goHomePage}>
            <img src={logo} alt='logo' />
        </div>
        <div className='nav'>
          <ul>
              <li><NavLink to='reviews' onClick={window.scrollTo(0, 0)}>ΚΡΙΤΙΚΕΣ</NavLink></li>
              <li><NavLink to='blog' onClick={window.scrollTo(0, 0)}>BLOG</NavLink></li>
              <li><NavLink to='writers' onClick={window.scrollTo(0, 0)}>ΕΜΕΙΣ</NavLink></li>
          </ul>
          
          <div className='dropdown'>
            <p className='signIn' onClick={notReady}>Sign in</p>
            <div className='dropdownImg'>
              <img src={require('../content/logos/dropdown.png')} onClick={dropdownHandler} />
            </div>
            <div id='mobileUlDiv'>
              <div id='closeDropdown'>
                <img src={require('../content/logos/close.png')} onClick={closeDropdown} />
              </div>
              <ul id='mobileUl'>
                <li><NavLink to='reviews' onClick={closeDropdown}>ΚΡΙΤΙΚΕΣ</NavLink></li>
                <li><NavLink to='blog' onClick={closeDropdown}>BLOG</NavLink></li>
                <li><NavLink to='writers' onClick={closeDropdown}>ΕΜΕΙΣ</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='userIcon'>
            <img src={iconProfile} alt='icon profile' onClick={notReady}/>
          </div>
        </div>
        
    </div>
  )
}

export default Header