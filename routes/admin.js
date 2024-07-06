
const express = require('express')
const router = express.Router()

const adminControllers = require('../controllers/adminController')




router.get('/add-products',adminControllers.sendingAdminFiles)


router.post('/add-products',adminControllers.redirectingAdmin)

module.exports = router



