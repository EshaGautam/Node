const path = require('path')
const rootDir = require('../utils/path')


exports.sendingShopForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}