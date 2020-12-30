import React from 'react';
import axios from 'axios';

const Book =({
    book: {title, authors}
}) => (
    <div className="card">
    <div className="card-header book-title">{title}</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item book-author">{authors}</li>
    </ul>
  </div>
)

export default Book;