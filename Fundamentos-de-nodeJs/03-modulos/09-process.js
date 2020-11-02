//no es necesasrio requerir process porque ya viene en modulos globales

//const prces = require('process') esto funciona pero no hace falta

process.on('beforeExit',()=>{
    console.log('ale, el proceso va a terminar')
})
process.on('exit',()=>{
    console.log('ale, el proceso acabo')
    setTimeout(()=>{
        console.log('esto no se va a ver nunca')
    },3000) //aunque la funcion sea asincrona la estamos ejecutando en le momento que se ejecuta el final del proceso por eso no entra 
})

process.on('uncaughtException', (err, origen)=>{
    console.error('vaya se nos ah olvidado capturar un error')
    console.error(err)
})
//process.on('uncaughtRejection') para promesas realizadas sin catch


/* functionQueNoExiste()
console.log('si el error no se captura romperia') */