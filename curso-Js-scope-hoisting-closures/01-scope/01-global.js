var hello = "hello";
var hello = "hello"

let world = "hello world"; //puedo acceder a los let que estan por fuera de las funciones 
let world = "miau" // esto da error porque no se puede reescribir let dos veces con la misma variable
const helloWorld = "hello world! ";

console.log(hello);
console.log(world);
console.log(helloWorld);
console.log(`


`)

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction()



const helloWorld = () => {
    globalVar = 'iamglobal'   //puedo acceder a la variable como si la hubiera declarado con var
}

helloWorld() //llamo primero a la funcion para que se cree ese global var
console.log(globalVar)
