const db = require('../models');

module.exports = {
    findAll: function(req, res){
    db.Book.find(req.query)
    .then(dbNook => resizeBy.json(dbBook))
    .catch(err => resizeBy.status(422).json(err))
 }
};