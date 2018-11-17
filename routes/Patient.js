const db = require('../models')

module.exports = app => {
  app.get("/api/patients", (req, res) => {
    db.Patient.findAll({
      include: [db.User]
    }).then(data => {
      res.json(data);
    });
  })

  app.get("/patients", (req, res) => {
    db.Patient.find({
      include: [db.User]
    }).then = (dbPatient) => {
      res.json(dbPatient);
    };
  })

  //New Patient route
  app.post('/api/patients', (req, res) => {
    db.Patient.create(req.body).then(data => {
      res.json(data)
    })

  })
}
