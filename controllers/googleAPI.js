const db = require('../models');

module.exports = {
    searchByParam: function(req, res){
       const {query: params} = req;
       makeRequest('https://www.googleapis.com/books/v1/volumes', params)
       .then(() => console.log('Not done yet!'))
       .catch(err => {
           res.status(422).send(err)
       })
    }
}