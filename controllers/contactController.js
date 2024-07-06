const path = require('path')
const rootDir = require('../utils/path')


exports.sendingContactForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
}

exports.redirectingFromContact = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/success')
  
}