import React from 'react'
import './styles.css'
import SearchItem from './SearchItem'

function SearchResults({results}) {
  return (
    <section>
      <div className="searchResults">
        <h3>Results</h3>
        {results.map(result => (
          <SearchItem key={result.id} result={result} />
        ))}
      </div>
    </section>
  )
}

export default SearchResults
