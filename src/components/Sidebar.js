import React from 'react'
import '../styles/Sidebar.css'
import SearchBar from './SearchBar'
import ColumnBlog from './ColumnBlog'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarSearch'>
            <h3>Αναζήτησε στην Propagandast</h3>
            <input></input>
        </div>       
        <ColumnBlog />
    </div>
  )
}

export default Sidebar