const path = require('path')

const express = require('express')
const router = express.Router()
const responseController = require('../controllers/responseController')



router.get('/success',responseController.sendingSuccess)




module.exports = router



