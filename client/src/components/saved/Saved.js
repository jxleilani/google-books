import React, { useState, useEffect } from "react";
import "./styles.css";
import SavedItem from "./SavedItem";
import API from "../../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    renderBook();
  }, []);

  const handleDelete = (id) => {
    API.deleteBook(id)
      .then((results) => renderBook())
      .catch((err) => console.log(err));
  };

  const renderBook = () => {
    API.getSavedBooks()
      .then((results) => setSavedBooks(results.data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <div className="saved">
        <h3>Saved Books</h3>
        {savedBooks.map((book) => (
          <SavedItem key={book.title} item={book} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}

export default Saved;
