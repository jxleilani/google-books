import React from "react";
import "./styles.css";

function SearchItem({ result }) {
  return (
    <div className="searchItem">
      <p>{result.volumeInfo.title}</p>
      <p>{result.volumeInfo.subtitle}</p>
      <p>Written by: {result.volumeInfo.authors}</p>
      <div className="details">
        <img src={result.volumeInfo.imageLinks.smallThumbnail} alt="book cover" />
        <p>{result.volumeInfo.description}</p>
      </div>

      <div className="buttons">
        <button>View</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default SearchItem;
