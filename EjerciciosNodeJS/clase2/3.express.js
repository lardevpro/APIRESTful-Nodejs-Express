const ditto = require('./pokemon/ditto.json')
const expres = require('express')
const app = expres()

app.disable('x-powered-by')

app.use((req, res, next) => {
  console.log('mi primer middelware')
  // comprobaciones pertinentes
  next()
})

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status('<h1>Mi página web</h1>')
})

app.get('/pokemon', (req, res) => {
  res.json(ditto)
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

app.post('/pokemon', (req, res) => {

})

// debe ser la última opción
app.use((req, res) => {
  res.send('<h1>404</h1>')
})
