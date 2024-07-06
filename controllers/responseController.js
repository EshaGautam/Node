const path = require('path')
const rootDir = require('../utils/path')

exports.sendingErrors=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','not-found.html'))
}

exports.sendingSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))

}