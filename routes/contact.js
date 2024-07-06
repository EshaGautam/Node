
const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contactController')





router.get('/contact-us',contactController.sendingContactForm)


router.post('/contact-us',contactController.redirectingFromContact)

module.exports = router



