const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: [String] },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    link: { type: String, required: true },
    googleID: { type: String, required: true, unique: true }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;