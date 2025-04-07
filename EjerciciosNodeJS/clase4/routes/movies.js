import { Router } from 'express'
import { validateMovie, validatePartialMovie } from './schemas/movies.js'
import { MovieModel } from '../models/movie.js'


export const moviesRouter = Router()

// filter by gender
moviesRouter.get('/',async (req, res) => {
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    res.json(movies)
})

// filter by id
moviesRouter.get('/:id', async (req, res) => { 
    const { id } = req.params
    const movie = await MovieModel.getById({ id })
    if(movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found'})
})

// create
moviesRouter.post('/', async (req ,res)=> {
   const result = await validateMovie(req.body)
    
   if (!result.success){
       return res.status(400).json({ error: JSON.parse(result.error.message) })
   }
   
    const newMovie = await MovieModel.create({ input: result.data })

    res.status(201).json(newMovie)

})

// delete
moviesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params

    const result = await MovieModel.delete({ id })

    if (result === false) {
        return res.status(404).json({ message: 'Movie file found'})
    }

    return res.json({ message: 'Movie deleted'})
})

// update movie
moviesRouter.patch('/movies/:id', async (req, res) => {
    const result = validatePartialMovie(req.body)
   
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
   
    const { id } = req.params
    
    const updateMovie = await MovieModel.update({ id, input: result.data }) 

    return res.json(updateMovie)
})