//operador de reposo, extrae caracteristicas de un objeto no construido

const obj = {
  name: "alexis",
  age: 22,
  country: "arg",
};

let {name, ...all} = obj
console.log(name, all) //quita el nombre de lo que devuelve
console.log(all) // devuelve un objeto sin el nombre


//union de propiedades de varios objetos usando el operador spread

const obj ={
    name:'alexis',
    age:22,
}
const obj2 ={
    ...obj,
    country : 'argentina',
}

console.log(obj2)


//promise finally


const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(()=>resolve('hello world'),3000) 
        
        : reject (new Error('test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizo'))




// una forma de manejar el regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(`${day} ${month} ${year}`)
