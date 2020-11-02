const fruits = () => {
    var fruit = 'apple'
    console.log(fruit)
}
fruits()
console.log(fruit) // esto va a generar un error porque no esta definido global mente el elemento fruit 


const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    let y = 2  //este da error no se puede volver a declarar con let 
    console.log(x)
    console.log(y)
}

anotherFunction()