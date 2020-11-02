const helloWorld = () =>{
    const hello = 'Hello World'
    console.log (hello)
}
helloWorld()
console.log(hello) //Da error porque const es una varible local


//otro ejemplo

var scope = "i am global"
const functionScope = () => {
    var scope = "i am just a local"  //Esta scope esta declarada en el ambito lexico 
    const func = () => {
        return scope    //por eso al retornar scope devuelve i am just a local y no i am global
    }
    console.log(func())
}

functionScope()
console.log(scope)