import React from 'react';
import Book from '../book/Book.js';


const Books = ({ books, location, refresh  }) => (
    <div>
        {books.map((book, i) => (
            <Book book={book} book={book} location={location} key={i} refresh={refresh} />
        ))}
    </div>
);

export default Books;