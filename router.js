const Backend = require("./controllers/backend");
const { verifySignUp, verifyUser } = require("./services");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/", function (req, res) {
    res.send("Server is runninggg");
  });

  // POST
  app.post(
    "/register",
    [verifySignUp.checkDuplicateUsername],
    Backend._register
  );

  app.post("/deposit", [verifyUser.checkUserID], Backend._deposit);

  app.post("/withdraw", [verifyUser.checkUserID], Backend._withdraw);
};
