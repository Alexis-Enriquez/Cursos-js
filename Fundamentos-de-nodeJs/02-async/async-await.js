async function Hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`hola ${nombre}`)
            resolve(nombre)
        },1500)
    });
}

async function Hablar(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla ')
            resolve(nombre)
        },2000)

    })
}

async function Adios(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(`adios ${nombre}`)
            resolve(nombre)
        },1000)
    })
}



async function main(){
    const nombre1 ='alexis'
    let nombre = await Hola(nombre1)
    await Hablar()
    Hablar()
    Hablar()
    await Hablar()
    await Adios(nombre)
    console.log('teerrrmina el proceso')
}




console.log('empezo el proooceso')
main()