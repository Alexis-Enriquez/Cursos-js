const somethingWillHappen = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('hey')
        }else{
            reject('ups no no')
        }
    })
}

/* somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))
 */


const somethingWillHappen2 = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('resuelto correctamente')
            },2000)
        }else{
            const error = new Error ('ocurrio un error');
            reject(error)
        }
    })
}

/* somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err)) */



//Esto es un metodo de las promesas para poder pasar todos los resultados en un array unico


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response =>{
    console.log('Array of results',response)
})

.catch(err=>{
    console.error(err)
})