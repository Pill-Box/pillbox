const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport")
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/*', (req, res) => {
//   let url = path.join(__dirname, '../client/build', 'index.html');
//   if (!url.startsWith('/app/')) // we're on local windows
//     url = url.substring(1);
//   res.sendFile(url);
// });


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Requiring our models for syncing
var db = require("./models");

//	Import Passport Strategies & Config
require('./config/jwtConfig');
require('./config/passport');

app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
require('./routes/Rx')(app);
require('./routes/Patient')(app);
require('./routes/User')(app);
require('./routes/auth')(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log(`App listening on PORT ${PORT}`);
    });
});

