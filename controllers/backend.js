// require("dotenv").config();
const db = require("../models");
const User = db.user;
// Register new user
exports._register = async function (req, res, next) {
  User.create({
    username: req.body.username,
  })
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  console.log(User);
};

// Deposit
exports._deposit = async function (req, res, next) {
  let currUser = await User.findOne({ where: { username: req.body.username } });
  User.update(
    { balance: currUser.balance + req.body.deposit },
    { where: { username: req.body.username } }
  )
    .then((user) => {
      res
        .status(201)
        .send(`balance now: ${currUser.balance + req.body.deposit}`);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
// Withdraw
exports._withdraw = async function (req, res, next) {
  let currUser = await User.findOne({ where: { username: req.body.username } });

  if (currUser.balance < req.body.withdraw) {
    res.status(400).send(`Withdraw can't be higher than ${currUser.balance}`);
  } else {
    User.update(
      { balance: currUser.balance - req.body.withdraw },
      { where: { username: req.body.username } }
    )
      .then((user) => {
        res
          .status(201)
          .send(`balance now: ${currUser.balance - req.body.withdraw}`);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};
