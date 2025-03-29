const http = require('node:http')
const {findAvaliblePort} = require('./10.free-port.js')


const server = http.createServer((req, res)=>{
    console.log('request recived')
    res.end('Hola mundo')
})

findAvaliblePort(8080).then(port=> {
    server.listen(port, () => {
        console.log(`server listeneng on port http://localhost:${port}`)
    })
})

// server.listen(3000,()=>{
//     console.log(`Server listening on port http://localhost:${server.address().port}`)
// })