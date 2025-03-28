
//esto solo para modulos nativos que no tiene promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)


const fs = require('node:fs/promises') 

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8') 
    .then(text => {
        console.log('primer archivo: ',text)
}) //fichero, codificación y promesa



console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text2=>{
    console.log(text2)
}) 

