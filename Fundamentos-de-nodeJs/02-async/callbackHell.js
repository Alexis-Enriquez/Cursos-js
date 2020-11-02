function Hola(nombre,miCallback){
    setTimeout(function(){
        console.log(`hola ${nombre}`)
        miCallback(nombre)
    },1500)
}



function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla')
        callbackHablar()
    },100)
}


function Adios(nombre,miCallback){
    setTimeout(function(){
        console.log(`adios ${nombre}`)
        miCallback()
    },1000)
}



//  --
/* console.log('iniciando proceso...')
Hola('alexis',function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                Adios(nombre,()=>{
                    console.log('terminando proceso...')
                }) 
            })
        })
    })
}) */



// soluvionando el problema

function conversacion(nombre,veces,callback){
    if(veces>0){
        hablar(function(){
            conversacion(nombre,--veces,callback)
        })
    }else{
        Adios(nombre, callback)
    }
}


console.log('iniciando proceso...')
Hola('alexis',function(nombre){
    conversacion(nombre,3,function(){
        console.log('proceso terminado')
    })
})