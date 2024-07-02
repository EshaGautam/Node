const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        fs.readFile('message.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.setHeader('Content-Type','text/html')
            res.write(`<html>`)
            res.write(`<head><title>hey</title></head>`)
            res.write(`<body><h1>${data}</h1><h1><form  method='POST' action='/message'><input type='input' name='message'></input><button type='submit'>send</button></form></h1></body>`)
            res.write(`</html>`)
           return res.end()
        })
       
    }
    if(req.url==='/message' && req.method==='POST'){
        const body =[]
        req.on('data',(dataChunk)=>{
          body.push(dataChunk)
        })
       return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            // console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt',message,err =>{
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()
            })
        })

       
    }

})

server.listen(4000)