import React from 'react'
import './styles.css'

function SearchItem({result}) {
  return (
    <div className="searchItem">
      <p>{result.volumeInfo.title}</p>
    </div>
  )
}

export default SearchItem
