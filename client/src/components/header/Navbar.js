import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <header>
      <h1>Google Books</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link>Search</Link>
          </li>
          <li>
            <Link>Saved</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
