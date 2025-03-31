const fs = require('node:fs')
const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // recibido correctamente
    res.end('Esta es la página Home')
  } else if (req.url === '/image-node-js.png') {
    fs.readFile('./node-js.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; chrset=utf-8')
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('<h1>error 404<h1/>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => { console.log(`Server listening on http://localhost:${desiredPort}`) })
