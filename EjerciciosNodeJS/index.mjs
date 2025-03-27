//en la consola no se aprecia pero en el navegador cada uno tiene un color específico
console.log("Hola mundo")
console.error("Para los errores")
console.info("Mensaje de información")

console.log(globalThis) //es una varibale global en todo el sistema
                        //this apunta a window en navegador 
                        //global apunta a global
                        //todo sale de globalThis


import { sum } from './sum.mjs'//importación de modulo

console.log(sum(2,3))