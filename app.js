const path = require('path')


const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')
const successRoutes = require('./routes/success')
const rootDir = require('./utils/path')

const app = express()

app.use(bodyParser.urlencoded({'extended':false}))
app.use(express.static(path.join(rootDir,'public')))
// incase we have routes which is like this admin/add-products then we will add common routes

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)
app.use(successRoutes)

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','not-found.html'))
})


app.listen(4000)