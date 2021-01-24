const db = require('../server/models');
const makeRequest = require("../server/utils/makeRequest");

const checkBookIntegrity = books => {
  return books.filter(
    book =>
      book.id &&
      book.volumeInfo.title &&
      book.volumeInfo.infoLink &&
      book.volumeInfo.authors &&
      book.volumeInfo.description &&
      book.volumeInfo.imageLinks &&
      book.volumeInfo.imageLinks.thumbnail
  );
};

const filterDuplicates = (newBooks, existingBooks) =>
  newBooks.filter(newBook =>
    existingBooks.every(
      existingBook => existingBook.googleID.toString() !== newBook.id
    )
  );

module.exports = {
  searchByParam: function(req, res) {
    const { query: params } = req;
    makeRequest("https://www.googleapis.com/books/v1/volumes", params)
      .then(({ data: { items: books } }) => checkBookIntegrity(books))
      .then(newBooks =>
        db.Book.find().then(existingBooks =>
          filterDuplicates(newBooks, existingBooks)
        )
      )
      .then(uniqueBooks => res.json(uniqueBooks))
      .catch(err => {
        res.status(422).send(err);
      });
  }
};
