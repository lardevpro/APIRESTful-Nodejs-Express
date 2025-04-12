
const fs = require('node:fs')

fs.raddir('.',(error,files)=>{
    if(error){
    }

    files.array.forEach(files => {
        console.log(files)
    });

})
.catch(error=>{
    console.log('Error al leer el directorio: ',error)
})