const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'//acepta nulos y por defecto un .


async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.log(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }


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

    return `${fileType.padEnd(10)} ${fileSize.toString().padEnd(5)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo=> console.log(fileInfo))

}

ls(folder)
