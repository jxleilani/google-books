import React, { useState } from "react";
import "./styles.css";
import Axios from "axios";
import SearchResults from "./SearchResults";

function SearchBox() {
  // const [apiKey, setApiKey] = useState("");
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }

  function handleSubmit(e) {
    e.preventDefault();

    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        book +
        "&key=AIzaSyAQEeM3VZUNqCg425e-m_I6GXS3x_LrdIg" +
        "&maxResults=10"
    )
      .then((res) => {
        console.log(res.data.items)
        setResult(res.data.items);
        // console.log("Results:" + JSON.stringify(result));
      })
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <div className="searchBx">
        <h3>Book Search</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}></input>
          <button>Search</button>
        </form>
      </div>
      <SearchResults results={result} />
    </section>
  );
}

export default SearchBox;
