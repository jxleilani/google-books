import React from 'react'

function SavedItem({ item }) {
  return (
    <div className="savedItem">
      <p value="title">{item.title}</p>
      <p value="subtitle">{item.subtitle}</p>
      <p value="author">Written by: {item.author}</p>
      <div className="details">
        <img
          src={item.image}
          alt="book cover"
        />
        <p>{item.description}</p>
      </div>
      <div className="buttons">
        <button>View</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default SavedItem
