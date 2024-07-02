const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html')
        res.write(`<html>`)
        res.write(`<head><title>hey</title></head>`)
        res.write(`<body><h1><form  method='POST' action='/message'><input type='input' name='message'></input><button type='submit'>send</button></form></h1></body>`)
        res.write(`</html>`)
       return res.end()
    }
    if(req.url==='/message' && req.method==='POST'){
        fs.writeFileSync('message.txt','DUMMY')
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }

})

server.listen(4000)