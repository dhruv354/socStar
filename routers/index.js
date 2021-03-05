const express = require('express')
const  router = express.Router()
const homeController = require('../controllers/homeController')
console.log('router loaded')
//home page
router.get('/', homeController.home)
router.get('/users', require('./users'))






//export this router
module.exports = router