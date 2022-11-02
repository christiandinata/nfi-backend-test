const db = require("../models");
const User = db.user;
checkUserID = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(400).send({
          message: "User id is not registered",
        });
        return;
      }
      next();
    })
    .catch((err) => console.log({ message: err.message }));
};

const verifySignUp = {
  checkUserID: checkUserID,
};
module.exports = verifySignUp;
