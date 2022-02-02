const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
// require path for rendering the static public foles
const path = require('path');
// require helper functions to pass to handlebars
const helpers = require('./utils/helpers');
// require express-handlebars
const exphbs = require('express-handlebars');
// activate handlebars this is also where you will pass in helper functions etc.
const hbs = exphbs.create({helpers});

const routes = require('./controllers');
// require express session
const session = require('express-session');
// require connect-session-sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// require dotenv so we can use our .env file to configure our secret in cont sess
require('dotenv').config();

// make a session
const sess = {
    secret: process.env.mySecret,
    cookie:{},
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

// have express session use our sess object everytime a route is hit for access to express sesion
app.use(session(sess));
// set handlebars as the template engine of choice
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use path to help serve ;our static files
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log(`now listening on ${PORT}`));
}).catch(err => {
    console.log(err);
});
