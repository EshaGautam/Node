const path = require('path')


const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./utils/path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')
const successRoutes = require('./routes/success')
const responseController = require('./controllers/responseController')


const app = express()

app.use(bodyParser.urlencoded({'extended':false}))
app.use(express.static(path.join(rootDir,'public')))
// incase we have routes which is like this admin/add-products then we will add common routes

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)
app.use(successRoutes)

app.use('/',responseController.sendingErrors)


app.listen(4000)