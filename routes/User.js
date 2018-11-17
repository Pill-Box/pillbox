const db = require('../models')

module.exports = app => {
    app.get('/api/user/:id', (req, res) => {
        db.User.findOne({
            where: {
                ////JAMES: --->>>THIS WILL PROBABLY CHANGE WITH PASSPORT
                id: req.params.id
            },
            include: [db.Patient]
        }).then(data => {
            res.json(data)
        })
    })

    app.post('/api/user', (req, res) => {
        db.User.create(req.body).then(data => {
            res.json(data)
        })
    })
}