const os = require('os');
const { constants } = require('crypto');

console.log(os.arch()) // si es de 64 o de 32 bits la maquina aaa sarpaadoo
console.log(os.platform()) // para saber el sistema operativo
console.log(os.cpus()) // para saber la cantida de cores que tiene el procesador de la computadora
console.log(os.cpus().length) //directamente te dice el numero de cuantos
console.log(os.constants) //este no lo entendi muy bien, buscar mas informacion sobre el tema
console.log(os.freemem()) //muestra la cantidad de memoria ram que hay disponible

/* //una funcion que pasa de bytes a gb 
const SIZE = 1024
function kb(bytes){return bytes/ SIZE}
function mb(bytes){return kb(bytes)/ SIZE}
function gb(bytes){return mb(bytes)/ SIZE}

 console.log(kb(os.freemem()))
 console.log(mb(os.freemem()))
 console.log(gb(os.freemem())) */


console.log(os.totalmem()) // te dice la cantidad total de memoria en bytes
//console.log(gb(os.totalmem()))

console.log(os.homedir()) // te lleva al directorio raiz.   

console.log(os.tmpdir()) // la ubicacion de donde guarda los archivos temporales

console.log(os.hostname()) // nos dice el nombre del servidor en el que se ejecuta

console.log(os.networkInterfaces()) //me trae toda la informacion de red activa en la maquina