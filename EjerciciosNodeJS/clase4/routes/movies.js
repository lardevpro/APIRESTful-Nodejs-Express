import { Router, router } from 'express'
import { createRequire } from 'node:module'
import { randomUUID } from 'node:crypto'
import { validateMovie, validatePartialMovie } from './schemas/movies.js'

const require = createRequire(import.meta.url)
const movies = require('./movies.json')

export const moviesRouter = Router()

// filter by gender
moviesRouter.get('/', (req, res) => {
    const origin = req.get('origin') 
    
    if (ACEPTED_ORGINS.includes(origin) || !origin) {  
        res.header('Access-Control-Allow-Origin', origin)
    }

    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

// filter by id
moviesRouter.get('/:id', (req, res) => { 
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if(movie) return res.json(movie)

    res.status(500).json({ message: 'Movie not found'})
})

// create
moviesRouter.put('/', async (req ,res)=> {
   const result = await validateMovie(req.body)

   if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
   }

  
  const newMovie = {
    id: randomUUID(), // cración de clave aleatoria (nativa de node)
    ...result.data
  } 

  // esto se cambiará para meter los datos en la DB
  movies.push(newMovie)
  res.status(201).json(newMovie)
})

// delete
moviesRouter.delete('/:id', (req, res) => {
    const origin = req.get('origin') 
    
    if (ACEPTED_ORGINS.includes(origin) || !origin) { 
        res.header('Access-Control-Allow-Origin', origin) 
    }


    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id == id)

    if (movieIndex === -1) {
        return res.status(404).json({ message: 'Movie file found'})
    }

    movies.splice(movieIndex, 1)

    return res.json({ message: 'Movie deleted'})

})

// update movie
moviesRouter.patch('/movies/:id', async (req, res) => {
    const result = validatePartialMovie(req.body)
   
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
   
    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id = id)

    if (movieIndex == -1) {
        res.status(404).json({ message: 'Movie not found' })
    }

    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies [movieIndex] = updateMovie

    return res.json(updateMovie)
})