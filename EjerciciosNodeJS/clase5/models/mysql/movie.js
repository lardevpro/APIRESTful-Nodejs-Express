import mysql from 'mysql2/promise'


const config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'moviesdb'
}

const connection = await mysql.createConnection(config)


export class MovieModel {
    static async getAll({ genre}) {
        const [movies] = await connection.query(
            'SELECT  BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie;'
        )
        return movies
    }
    static async getById({ id }) {
        const [movies] = await connection.query(
            `SELECT BIN_TO_UUID(id) id, title, year, director,
             duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?);`,
             [id]
            )   

            if(movies.length == 0) return null

            return movies[0]
    }
    static async create ({ input }) {
       const newMovie = {
         genre: genreInput, //es un array
         title,
         year,
         duration,
         director,
         rate,
         poster
      } = input

      const [uuidResult] = await connection.query('SELECT UUID() uuid') // se lo pedimos a la base de datos para no perderlo y poder devolverlo
      const [{ uuid }] = uuidResult //decontrcción

      try {

          await connection.query(
              `INSERT INTO movie (title, year, director, duration, poster, rate)
               VALUES(UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?)`,
               [title, year, director, duration, poster, rate]
  
          )
      } catch (e){ //esto es lo que verá el usuario, cuidad con enviar información sensible por defecto
        //se suele enviar la traza a un servicio interno
        throw new Error('Error creating movie');
        
      }

        const [movies] = await connection.query(
            `SELECT  BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?)`,
            [uuid]
        )
        return movies[0]
    }
    static async delete ({ id }) {

    }
    static async update ({ id, input }) {

    }
}