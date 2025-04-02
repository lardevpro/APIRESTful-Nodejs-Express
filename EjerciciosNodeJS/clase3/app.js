const express = require('express')
const movies = require('./movies.json')
const crypto = require('node:crypto')
const app = express()
app.use(express.json()) //middleware
app.disable('x-powered-by')


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

app.post('/movies', (req ,res)=> {
    const {
        title,
        genre,
        director,
        year,
        duration,
        rate,
        poster
    } = req.body
  
    const newMovie = {
    id: crypto.randomUUID(), //cración de clave aleatoria (nativa de node)
    title,
    genre,
    director,
    year,
    duration,
    rate: rate ?? 0,
    poster
    } 
  movies.push(newMovie)
  res.status(201).json(newMovie)
})


app.get('/movies/:id', (req, res) => { //path to regex
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if(movie) return res.json(movie)

    res.status(500).json({ message: 'Movie not found'})
})

app.get('/movies', (req, res) => {
res.json(movies)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})