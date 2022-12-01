const keys = require("./keys");
const userModel = require("../model/users")
const JwtStrategy = require("passport-jwt");
const ExtractJwt = require("passport-jwt");
const option = {
    secretOrKey: keys.secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(option,
            (jwt_payload, done) => {
                userModel.findById(jwt_payload.id)
                    .then((user) => {
                        console.log("user found");
                        return done(null, false)
                    })
                    .catch(error => {
                        console.log(error);
                        return done(error, false)
                    })
            })
    )
}
