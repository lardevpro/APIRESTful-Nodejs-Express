const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // recibido correctamente
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hola añudadod amigo mío')
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
