import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Navbar() {
  return (
    <header>
      <h1>Google Books</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
