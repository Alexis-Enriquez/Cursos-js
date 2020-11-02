//array flat devuelve un array con los sub arrays que tenga
let array = [1,2,3,[1,2,3,[1,2,3]]]

console.log(array.flat())

console.log(array.flat(Infinity))


// flat map no lo entendi muy bien, te trae el valor del array y lo que le pases de funcion

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2]))

//trimstart

let hello = '        hello world'
console.log(hello.trimStart()) //borra los espacios del principio

//trimend

let hello = 'hello world          '
console.log(hello.trimEnd()) //borra los espacios del final

//opcional catch binding
 
//estructura previa
try{

}catch(error){
    error
}
//estructura nueva
try{

}catch{
    error //no es necesario pasar el error como parametro
}


//from entries construye un objeto con la clave valor que hay dentro de cada sub arreglo


let entries = [['name', 'alexis'],['age','22']]

console.log(Object.fromEntries(entries))

//una forma de acceder a la descripcion de un objeto del tipo simbolo

let mySymbol = `my simbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)