const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res)=>{ 
    console.log('request recived: ',req.url)
    console.log('request recived') //esto se ejecuta cuando se recibe una req (callback)
    res.end('Hola mundo')
})


server.listen(desiredPort, () => {
    console.log(`server listeneng on port http://localhost:${desiredPort}`)
})


