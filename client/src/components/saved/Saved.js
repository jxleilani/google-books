import React from "react";
import "./styles.css";
import SavedItem from "./SavedItem";

function Saved() {
  const savedBooks = [
    {
      title: "Harry Potter",
      subtitle: "Subtitle of the book",
      author: "JK Rowling",
      description: "The book description goes here.",
      image:
        "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
    {
      title: "Harry Potter 2",
      subtitle: "2 Subtitle of the book",
      author: "2 JK Rowling",
      description: "2 The book description goes here.",
      image:
        "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  ];

  return (
    <section>
      <div className="saved">
        <h3>Saved Books</h3>
        {savedBooks.map((book) => (
          <SavedItem key={book.title} item={book} />
        ))}
      </div>
    </section>
  );
}

export default Saved;
