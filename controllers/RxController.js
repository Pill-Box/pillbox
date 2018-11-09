const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Rx
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    const Rx = {
        _id: req.body._id,
       name: req.body.headline.main,  
    };
    db.Rx
        .create(Rx)
        .then(dbRx => res.json(dbRx))
        .catch(err => res.status(422).json(err));
  },
};
