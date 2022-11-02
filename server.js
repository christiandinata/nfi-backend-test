const db = require("./models");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => console.log({ message: err.message }));

const router = require("./router");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.enable("trust proxy");

router(app);

app.listen(process.env.PORT || 3000);
