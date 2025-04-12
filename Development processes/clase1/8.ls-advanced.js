//sistema de módulos
const fs = require('node:fs/promises')//fileSystem
const path = require('node:path')//path
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'//process

//asincronía secuencial
async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.log(pc.red(` No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }

//asincronía en paralelo
const filesPromises = files.map(async file=>{
    const filePath = path.join(folder,file)
    let status
    try {
        stats = await fs.stat(filePath) // estado del archivo (valores)
    } catch  {
        console.log(`No se pudo leer el archivo ${filePath}`)
        process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = stats.isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return ` ${pc.blue(fileType)} ${pc.blue(file.padEnd(20))}  ${pc.green(fileSize)}  ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo=> console.log(fileInfo))

}

ls(folder)
