import React, { useState } from 'react';
import axios from 'axios';
import Books from '../components/books/Books.js';


function Home(){
    const [books, updateBooks] = useState([]);
    const [searchCriteria, updateCriteria] = useState('');

    const handleSubmit = e => {
        e.prevetnDefault();
        axios
        .get('/api/serch', {
            params: {
                q: searchCriteria
            }
        })
        .then(e.json)
    };
    return(
        <div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img
            src="https://www.knowerstech.com/wp-content/uploads/2017/01/google-book.png"
            className="large-google-logo"
          />{" "}
          <p className="lead sub-title-hp">
            Find your favourite books using the google book API
          </p>
        </div>
      </div>
      <form onSubmit={e => handleSubmit(e)} className="hp-form">
        <div className="form-group">
          <input
            placeholder="Search for books here"
            type="input"
            className="user-input"
            id="input"
            aria-describedby="emailHelp"
            value={searchCriteria}
            onChange={e => updateCriteria(e.target.value)}
          />
          <button type="submit" className="submit-button" role="submit">
            FIND BOOKS
          </button>
        </div>
      </form>
      {books && <Books books={books} location="home" />}
    </div>
    )
}

export default Home;