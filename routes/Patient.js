const db = require('../models')

module.exports = app => {
  app.get("/api/user/patients/:id", (req, res) => {
    db.User.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Patient
      }]
      // include: [{ model: db.Rx }]
    }).then(data => {
        db.Rx.findAll({
        where: {
        PatientId: data[0].Patients[0].UserId
        },
        include: [db.Patient],
      }).then(data => {
        res.json(data)
      })
      // res.json(data);
    });
  });

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

  // app.get("/api/user/patients/:id", (req, res) => {
  //   db.User.findAll({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [{
  //       model: db.Patient}] 
  //       // include: [{ model: db.Rx }]
  //     }).then(data => {
  //     res.json(data);
  //   });
  // });


  // app.get('/api/patients/:id', (req, res) => {
  //   db.Patient.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [ db.Rx ],
  //   }).then(data => {
  //     res.json(data)
  //   })
  // });

  app.get("/api/user/patients/:id/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Patient],
    }).then(data => {
      res.json(data);
    });
  });

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
