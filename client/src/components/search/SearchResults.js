import React from 'react'
import './styles.css'
import SearchItem from './SearchItem'

function SearchResults() {
  return (
    <section>
      <div className="searchResults">
        <h3>Results</h3>
        <SearchItem />
      </div>
    </section>
  )
}

export default SearchResults
