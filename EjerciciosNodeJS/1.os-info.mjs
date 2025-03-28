import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo: ')
console.log('___________________________________')
console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())
console.log('Memoria libre',freemem() /1024 /1024) //dividir entre 1024 para obtener la medida en MB
console.log('Memoria total', totalmem()/1024 /1024)
console.log('Uptime', uptime()/60/60)