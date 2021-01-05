import React from 'react';
import Book from '../book/Book.js';


const Books = ({ books }) => (
    <div>
        {books.map((book, i) => (
            <Book book={book} />
        ))}
    </div>
);

export default Books;