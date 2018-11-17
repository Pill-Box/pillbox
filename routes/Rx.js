const db = require('../models')

module.exports = app => {

  app.post("/api/Rxs", function(req, res) {
    db.Rx.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
}


