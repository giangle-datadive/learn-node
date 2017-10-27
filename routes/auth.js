const passport = require('passport');

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email"] })
  );

  app.get(
    "/oauth/callback/google",
    passport.authenticate("google"),
    (req, res) => {
      res.send({
        test: "test"
      });
    }
  );
};
