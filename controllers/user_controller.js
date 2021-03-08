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
    res.end('your profile is created')
}