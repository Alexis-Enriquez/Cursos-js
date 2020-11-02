console.log(global)

let i = 0
let intervalo = setInterval(function(){
    if(i === 3){
        clearInterval(intervalo)
    }
    i++
    console.log('hola')
},1000)

setImmediate(function(){
    console.log('hola')
})


console.log(process)


console.log(__dirname)
console.log(__filename)

//no usar variables globales es un  mala practica


global.mivariable = 'mivariable'

console.log(global.mivariable)

console.log(mivariable)