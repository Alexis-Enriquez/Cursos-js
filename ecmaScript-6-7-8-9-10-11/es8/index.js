//object entries transforma las propiedades de un objeto en arreglos, dentro de un arreglo mayor

const data = {
  frontend: "exi",
  backend: "alexis",
  design: "ale",
};

const entries = Object.entries(data);

console.log(entries);

//object values devuelve los valores de las propiedades en un arreglo
const data = {
  frontend: "exi",
  backend: "alexis",
  design: "ale",
};
const values = Object.values(data);
console.log(values);

//padStart y padEnd
// reciben 2 parametros el primero es la cantidad de caracteres y el segundo son esos caracteres

const string = "hello";
console.log(string.padStart(7,'hi'))
//es 7 porque es la suma de 5 + 2 y devuelve hihello
const string = "hello";
console.log(string.padEnd(7,'hi')) //devuelve hellohi

//trailing comas

const obj ={
    name: 'alexis',
    age: 22,
    country: 'arg', //se puede dejar la coma abierta para agregar mas elementos
}

//async y await

const helloWorld = (key) => {
    return new Promise((resolve,reject)=>{
        (key)// es un operador ternario
            ? setTimeout(()=> resolve('hello world'),3000)
            : reject(new error('test error'))
    })
}

const helloAsync = async () =>{
    const hello = await helloWorld(true)
    console.log(hello);
}

helloAsync()


//otra forma de tratamiento de errores
const anotherFunction = async ()=>{
    try{
        const hello = await helloWorld(true)
        console.log(hello)
    }
    catch(error){
        console.log(error)
    }
}
anotherFunction()