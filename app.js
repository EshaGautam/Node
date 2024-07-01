const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('hey my name is ISHA')
})

server.listen(4000)