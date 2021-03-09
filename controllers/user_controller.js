const User = require('../models/user')


module.exports.profile = (req, res) => {
   if(req.cookies.user_id){
       User.findById(req.cookies.user_id, (err, user) => {
           //if user found
           if(user){
                return res.render('user_profile', {
                    name: user.name,
                    email: user.email
                })
           }
           //if user is not found
           else{
                return res.redirect('/users/sign-in')
           }
       })
       //if cookie for that user is not present
   }
   else{
    res.redirect('/users/sign-in')
}
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
    //find the user
    User.findOne({email: req.body.email}, function(err, user){
        //handle error
        if(err){console.log('Error in finding the user for signing in'); return}

        //handle user found
        if(user){
            if(user.password != req.body.password){
                //document.alert('password dont match')
                 return res.redirect('back')
            }
            //handle create session
            res.cookie('user_id', user._id)
            return res.redirect('/users/profile')

        }else{
            //handle user not found
            return res.redirect('back')
        }

    })


    //if user does not exist
}