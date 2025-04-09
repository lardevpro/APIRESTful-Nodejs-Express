import { randomUUID } from 'node:crypto'
import movies from '../movies.json' assert { type: 'json' };


export class MovieModel {
    // list all
    static getAll = async ({ genre }) => {
        if (genre) {
            return movies.filter(
                movie => movie.genre.some(g => g.toLowerCase() == genre.toLowerCase())
            )
        }
        return movies
    }
    // filter by id
    static async  getById ({id}) {
        const movie = movies.find(movie => movie.id == id)
        return movie
    }
    // create movie
    static async create (input) {
        const newMovie = {
            id: randomUUID(), 
            ...input
          } 
        
         
          res.status(201).json(newMovie)

          return newMovie
    }

    static async delete ({ id }) {
        const movieIndex = movies.findIndex(movie => movie.id == id)
        if (movieIndex == -1) return false
    movies.splice(movieIndex, 1)
    return true
    }

    static async update ({ id, input }){
        const movieIndex = movies.find(movie => movie.id == id)
        if(movieIndex == -1) return false

        movies [movieIndex] = {
            ...movies[movieIndex],
            ...input
        }
        
        return movies[movieIndex]
    }
}