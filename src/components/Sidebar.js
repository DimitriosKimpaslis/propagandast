import React from 'react'
import '../styles/Sidebar.css'
import SearchBar from './SearchBar'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarSearch'>
            <h3>Αναζήτησε στην Propagandast</h3>
            <input></input>
        </div>       
    </div>
  )
}

export default Sidebar