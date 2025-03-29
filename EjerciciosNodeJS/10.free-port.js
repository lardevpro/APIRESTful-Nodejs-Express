const { promises } = require('node:dns')
const net = require('node:net')

function findAvaliblePort(desiredPort) {
    return new promises((resolve, reject) => {
        const server = net.createServer()
    
        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve.close(() =>{
                resolve(port)
            }) 
        })

    server.on('error', (err) => {
                if(err.code == 'EADDRINUSE'){
                    findAvaliblePort(0).then(port => resolve(port))
                } else {
                    reject(err)
                }
            })
        })
    })
}

module.exports = { findAvaliblePort }