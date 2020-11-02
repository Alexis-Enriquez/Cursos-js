function Hola(nombre,miCallback){
    setTimeout(function(){
        console.log(`hola ${nombre}`)
        miCallback(nombre)
    },1000)
}

function Adios(nombre,miCallback){
    setTimeout(function(){
        console.log(`adios ${nombre}`)
        miCallback()
    },1000)
}




console.log('iniciando proceso...')
Hola('alexis',function(nombre){
    Adios(nombre,()=>{
        console.log('terminando proceso...')
    }) 
})

