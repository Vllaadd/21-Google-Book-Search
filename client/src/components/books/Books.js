import React from 'react';

const Books = ({ books, location, refresh }) => (
    <div>
        {books.map((book, i) => (
            <Book book={book} />
        ))}
    </div>
);

export default Books;