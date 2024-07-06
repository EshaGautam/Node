const shopController = require('../controllers/shopController')

const express = require('express')
const router = express.Router()




router.get('/',shopController.sendingShopForm)




module.exports = router



