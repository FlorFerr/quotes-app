import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'

const MainNavigation = () => {
  return (
    <header className='header'>
      <div className='logo'>Great Quotes</div>
      <nav className='nav'>
        <ul>
          <li><NavLink activeClassName='active' to='/quotes'>All Quotes</NavLink></li>
          <li><NavLink activeClassName='active' to='/new-quote'>Add a Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation