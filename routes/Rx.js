const db = require('../models')

module.exports = app => {
  app.get("/api/patients", (req, res) => {
    db.Patient.findAll({
      include: [db.User]
    }).then = (data) => {
      res.json(data);
    };
  })

  app.post("/api/Rxs", function(req, res) {
    db.Rx.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/patients", (req, res) => {
    db.Patient.findAll({
      include: [db.User]
    }).then = (dbPatient) => {
      res.json(dbPatient);
    };
  })
}

