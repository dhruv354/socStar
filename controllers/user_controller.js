const User = require('../models/user')


module.exports.profile = (req, res) => {
   return  res.render('user_profile', {})
}

module.exports.signIn = (req, res) => {
    res.render('user_sign_in')
}

module.exports.signUp = (req, res) => {
    res.render('user_sign_up')
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password){
        res.redirect('back')
    }
    // console.log(req.body);
    // return;
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding the user'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating the user'); return}

                return res.redirect('/users/sign-in')
            })
        }else{
            res.redirect('back')
        }
    })   
}

module.exports.createSession = (req, res) => {
    res.end('your session is created if you sign out you need to sign in')
}