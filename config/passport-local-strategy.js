const passport = require('passport')
const User = require('../models/user')

const LocalStrategy = require('passport-local').strategy

passport.use(new LocalStrategy({
    usernameField: 'email'
}, function(email, password, done){
    //find the user and establish a identity
    //first email is the email present in the database
    //second email is the email passed in the callback of passport
    User.findOne({email: email}, function(err, user){
        if(err){
            console.log('Error in finding the user ---> passport'); 
            return done(err)
        }
        //user not found or password is not correct
        if(!user || user.password != password){
            console.log('Invalid username/password');
            return done(null, false)
        }

        return done(null, user);

    })
}))