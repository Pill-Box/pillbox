const db = require('../models')

module.exports = app => {
  app.get("/api/user/patients", (req, res) => {
    const query = {}

    ///////MAY CHANGE
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.User.findOne({
      where: query,
      include: [{
        model: Patient, 
        include: [db.Rx]
      }],

    }).then(data => {
      res.json(data);
    });
  });

  app.get("/api/user/patients/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Patient],
       }).then(data =>  {
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
