import React from 'react';
import axios from 'axios';

const Book =({
    book: {title, authors, description, thumbnail, infoLink, googleID, _id},
    location, 
    refresh
}) => (
    <div className="card">
    <div className="card-header book-title">{title}</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item book-author">{authors}</li>
      <div className="image-desc-container">
        <li className="description book-description">{description}</li>
        <img src={thumbnail} className="thumbnail"></img>
      </div>
      <li className="list-group-item href">
        <a href={infoLink}>{infoLink}</a>
        {location === "home" ? (
          <button
            className="save-delete-button"
            onClick={() => {
              axios.post(
                "/api/books",
                {
                  googleID,
                  title,
                  authors,
                  description,
                  thumbnail,
                  link: infoLink
                },
                alert("Book now saved.")
              );
            }}
          >
            Save For Later
          </button>
        ) : (
          <button
            className="save-delete-button"
            onClick={() => {
              axios
                .delete(
                  "/api/books",
                  {
                    params: {
                      id: _id
                    }
                  },
                  alert("Book now removed.")
                )
                .then(() => refresh());
            }}
          >
            Delete Book
          </button>
        )}
      </li>
    </ul>
  </div>
)

export default Book;