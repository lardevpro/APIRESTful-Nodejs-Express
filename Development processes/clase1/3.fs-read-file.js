const { error } = require('node:console')
const fs = require('node:fs')



console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (error,text) => {
    console.log(text)
}) //fichero, codificación y callback asincrona




console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8',(error,text2) =>{
    console.log(text2)
}) 

