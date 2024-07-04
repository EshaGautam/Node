
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({'extended':false}))

app.use('/add-products',(req,res,next)=>{
    res.send(`<form action='/products' method='POST'><input type='text' name='product_name'></input><input type='number' name='product_size'></input><button type='submit'>add</button></form>`)
})

app.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})


app.use('/',(req,res,next)=>{
    res.send('Its a home page')
})

app.listen(4000)