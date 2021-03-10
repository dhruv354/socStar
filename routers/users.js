const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')

router.get('/profile', userController.profile)
//for signing in
router.get('/sign-in', userController.signIn)
//for signing up
router.get('/sign-up', userController.signUp)
//for creation of a user in database
router.post('/create', userController.create);
//for creating session while the time user is logged in
router.post('/create-session', userController.createSession)
//for signing out
router.post('/sign-out', userController.signOut)


module.exports = router