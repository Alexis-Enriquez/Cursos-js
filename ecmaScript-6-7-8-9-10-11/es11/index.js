//la carga de modulos bajo demanda 
//dynamic import()
//ejemplo:
if(true){
    const module = await import('./module')
     module.function()
}

//optional chaining
const nameLength = db?.user?.name?.length;

//globalThis

const getGlobalThis = () =>{
    if(typeof globalThis !== 'undefined') return globalThis
}

const theGlobalThis = getGlobalThis

//BigInt

const max = Number.MAX_SAFE_INTEGER

//promise.allSettled
 const promises = [
     fetch('/api-call-1'),
     fetch('/api-call-2'),
     fetch('/api-call-3')
 ]

 await Promise.allSettled(promises)