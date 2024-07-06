const path = require('path')
const rootDir = require('../utils/path')

exports.sendingAdminFiles = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}


exports.redirectingAdmin = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
  
}