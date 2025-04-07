import express, { json } from 'express'
import { moviesRouter } from './routes/movies'
import { corsMiddleware } from './middlewares/cors'






const app = express()
app.use('/movies', moviesRouter)
app.use(corsMiddleware()) 
app.disable('x-powered-by')


const ACEPTED_ORGINS = [ //URL que decido aceptar
    
]


// listar todas las películas por género
app.get('/movies', --)


// listar las películas por id
app.get('/movies/:id',--)

// listar todas las películas
app.get('/movies', (req, res) => {
    res.json(movies)
})

// insertar una película
app.post('/movies', --)

// eliminar peliculas
app.delete('/movies/:id', --)

//modificar una película
app.patch('/movies/:id', --)

app.options('/movies/:id', (req, res) => {
    const origin = req.get('origin') // recuperacion del header origin de la peticion
    if (ACEPTED_ORGINS.includes(origin) || !origin) {  // si no hay cabecera es porque se hace la petición desde el mismo servidor
        res.header('Access-Control-Allow-Origin', origin) // '*' le estamos dejando que cualquiera tenga acceso ( se podría poner para una url especifica ) 
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    }
    res.send(200)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})