const db = require('../models')

module.exports = app => {
  app.get("/rx", (req, res) => {
    db.Rx.findAll({
      include: [db.User]
    }).then = (dbRx) => {
      res.json(dbRx);
    };
  })
}
