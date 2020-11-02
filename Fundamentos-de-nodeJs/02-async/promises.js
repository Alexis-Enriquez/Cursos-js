function Hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`hola ${nombre}`)
            resolve(nombre)
        },1500)
    });
}

function Hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla ')
            resolve(nombre)
        },100)

    })
}

function Adios(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(`adios ${nombre}`)
            resolve(nombre)
        },1000)
    })
}


//------------

console.log('iniciado el proceso')
Hola('carlos')
.then(nombre => Hablar(nombre))
.then(nombre => Hablar(nombre))
.then(nombre => Hablar(nombre))
.then(nombre => Hablar(nombre))
.then(nombre=>Adios(nombre))
.then((nombre)=>{
    console.log('terminado el proceso')
})
.catch(error=>{
    console.error('ha habido un error')
    console.error(error)
})



/* 
console.log('iniciado el proceso')
Hola('carlos') 
.then(Adios) podria escribirse asi solamente con el llmaado a la funcion porque el parametro es el mismo
.then((nombre)=>{
    console.log('terminado el proceso')
}) */