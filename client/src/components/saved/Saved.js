import React from 'react'
import './styles.css'
import SavedItem from './SavedItem'

function Saved() {
  return (
    <section>
      <div className="saved">
        <h3>Saved Books</h3>
        <SavedItem />
      </div>
    </section>
  )
}

export default Saved
