import React, { useState, useEffect } from "react";
import "./styles.css";
import API from "../../utils/API";

function SearchItem({ result }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    if(book.hasOwnProperty("title")){
      // now that I have the book I want to save it
      console.log(book);

      API.saveBook(book)
      .then(() => console.log("hello"))
      .catch((err) => console.log(err));
    }
  }, [book]);

  const handleSave = (e) => {
    e.preventDefault();

    setBook({
      title: result.volumeInfo.title,
      subtitle: result.volumeInfo.subtitle,
      author: result.volumeInfo.authors,
      description: result.volumeInfo.description,
      image: result.volumeInfo.imageLinks.smallThumbnail,
      link: result.volumeInfo.infoLink
    });
  };

  return (
    <div className="searchItem">
      <p value="title">{result.volumeInfo.title}</p>
      <p value="subtitle">{result.volumeInfo.subtitle}</p>
      <p value="author">Written by: {result.volumeInfo.authors}</p>
      <div className="details">
        <img
          src={result.volumeInfo.imageLinks.smallThumbnail}
          alt="book cover"
        />
        <p>{result.volumeInfo.description}</p>
      </div>
      <div className="buttons">
        <a href={result.volumeInfo.infoLink}><button>View</button></a>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default SearchItem;
