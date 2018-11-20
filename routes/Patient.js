const db = require('../models')

module.exports = app => {
  
//Get all patients by user id
  app.get('/api/patients/:id', (req, res) => {
    db.Rx.findAll({
      where: {
        PatientId: req.params.id
      },
      include: [db.Patient],
    }).then(data => {
      res.json(data)
    })
  });

//Get all patients and rxs by user id
  app.get("/api/user/patient/rx/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Patient,
        include: [{
          model: db.Rx,
        }]
      }]
    }).then(data => {
      res.json(data);
    });
  })


  //New Patient route
  app.post('/api/patients', (req, res) => {
    db.Patient.create(req.body).then(data => {
      res.json(data)
    })

  })
}
