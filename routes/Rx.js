const db = require('../models')

module.exports = app => {
  app.get("/api/patients", (req, res) => {
    db.Patient.findAll({
      include: [db.User]
    }).then = (data) => {
      res.json(data);
    };
  })

}
