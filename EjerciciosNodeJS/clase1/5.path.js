const path = require('node:path')


//path.sep muestra el tipo de barra que se utiliza el sistema operativo
console.log(path.sep)

//path.join() crea la ruta sin necesidad de poner barras
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//path.basename() devuelve el nombre del fichero
const base = path.basename('/tmp/archivos-secretos/password.txt')
console.log(base)

//devuelve la extensión del fichero
const extension = path.extname('/tmp/archivos-secretos/password.txt')
console.log(extension)