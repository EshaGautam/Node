
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({'extended':false}))

// incase we have routes which is like this admin/add-products then we will add common routes

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use('/',(req,res,next)=>{
    res.status(404).send(`<h1>Page Not Found</h1>`)
})


app.listen(4000)