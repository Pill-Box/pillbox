const db = require('../models')

module.exports = app => {
  app.get("/rx", (req, res) => {
    db.Rx.findAll({
      include: [db.User]
    }).then = (dbRx) => {
      res.json(dbRx);
    };
  })

  app.post("/api/Rxs", function(req, res) {
    db.Rx.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

}
