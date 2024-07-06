// const http = require('http')

// const server = http.createServer((req,res)=>{

//     if(req.url==='/'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>`)
//         res.write(`<head><title>hey</title></head>`)
//         res.write(`<body><h1>Welcome Back!</h1></body>`)
//         res.write(`</html>`)
//        return res.end()
//     }

//    else if(req.url==='/home'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>`)
//         res.write(`<head><title>hey</title></head>`)
//         res.write(`<body><h1>Welcome to home page</h1></body>`)
//         res.write(`</html>`)
//        return res.end()
//     }

//    else if(req.url==='/about'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>`)
//         res.write(`<head><title>hey</title></head>`)
//         res.write(`<body><h1>Welcome to about js</h1></body>`)
//         res.write(`</html>`)
//        return res.end()
//     }

//    else if(req.url==='/node'){
//         res.setHeader('Content-Type','text/html')
//         res.write(`<html>`)
//         res.write(`<head><title>hey</title></head>`)
//         res.write(`<body><h1>Welcome to my node js project</h1></body>`)
//         res.write(`</html>`)
//        return res.end()
//     }
   
// })

// server.listen(4000)