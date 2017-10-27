const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../configs/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/oauth/callback/google"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken + 'abcd');
    }
  )
);
