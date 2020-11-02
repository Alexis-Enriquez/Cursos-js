const doSomething = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(()=>resolve('haciendo algo pero asincrono, a sin crono, jeje, bueno no'),3000)
            : reject(new Error('Error :'))
    })
}


/* const doSomethingAsync = async () => {
    const something = await doSomething()
    console.log(something)
}

console.log('Before')
doSomethingAsync()
console.log('After')



 */


const anotherFunction = async () => {
    try{
        const something = await doSomething()
        console.log(something)
    }catch(error){
        console.error(error)
    }
}


console.log('Before')
anotherFunction()
console.log('After')
