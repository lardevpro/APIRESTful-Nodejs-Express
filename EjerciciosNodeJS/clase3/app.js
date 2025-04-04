const express = require('express')
const movies = require('./movies.json')
const crypto = require('node:crypto')
const { validateMovie } = require('./schemas/movies');



const app = express()
app.use(express.json()) // middleware
app.disable('x-powered-by')

// listar todas las películas por género
app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

// insertar una película
app.post('/movies', async (req ,res)=> {
   const result = await validateMovie(req.body)

   if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
   }

  
  const newMovie = {
    id: crypto.randomUUID(), // cración de clave aleatoria (nativa de node)
    ...result.data
  } 

  // esto se cambiará para meter los datos en la DB
  movies.push(newMovie)
  res.status(201).json(newMovie)
})

// listar las películas por id
app.get('/movies/:id', (req, res) => { //path to regex
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if(movie) return res.json(movie)

    res.status(500).json({ message: 'Movie not found'})
})

// listar todas las películas
app.get('/movies', (req, res) => {
res.json(movies)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})