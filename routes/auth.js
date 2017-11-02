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

  app.get('/api/current_user', (req, res) => {
    return res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    return res.send(req.user);
  })
};
