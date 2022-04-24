const path = require('path');
const express = require("express");
const routes = require("./controllers/api");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require('./config/connection');
const app = express();

const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "what",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const auth = require("./utils/auth");

const hbs = exphbs.create({ auth });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/"));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("whats up"));
});
