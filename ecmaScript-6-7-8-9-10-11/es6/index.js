function newFunction(name, age, country) {
  var name = name || "alexis";
  var age = age || 22;
  var country = country || "arg";
  console.log(name, age, country);
}

// es6 parametros por defecto

function newFunction2(name = "alexis", age = 22, country = "arg") {
  console.log(name, age, country);
}

newFunction2("alexis", 22, "arg");

//template literals

let hello = "hello";
let world = "world";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

//multilinea antes de es6

let lorem =
  "una frase demasiado epica para ser real \n" +
  "otra frase demasiado epica para ser real pero en otra linea";

// multilinea despues de es6

let lorem2 = `una frase epica pero mas actualizada que la anterior
ahora esta es otra frase epica pero en otra linea sin necesidad de elementos aparte
las comillas francesas son magia`;

// desestructuracion de objetos

let person = {
  name: "alexis",
  age: 22,
  country: "arg",
};
console.log(person.name, person.age, person.country);

let { name, age, country } = person;

console.log(name, age, country);

let { name } = person;
console.log(name);

//spread operator (operador de propagacion para esparcir elementos)ahora vamos a unir un arreglo

let team1 = ["alexis", "persona2", "persona3", "persona4"];
let team2 = ["bot1", "bot2", "bot3", "bot4"];

let teams = ["jugadores = ", ...team1, ...team2]; //el spread es representado por ...nombre

//let
// con let asignamos una variable a su block scope

{
  var globalbar = "globar bar";
}
{
  let globallet = "global let";
}

console.log(globalbar);

console.log(globallet);

//objetos definidos de otra forma


let name = "alexis";
let age = 22;

//version vieja
obj = {
  name: name,
  edad: edad,
};

//version es6
obj2 = { name, age };

//arrow functions
//las arrow functions son funciones anonimas

const names = [
  {
    name: "alexis",
    edad: 22,
  },
  {
    name: "ayelen",
    age: 21,
  },
];
//version vieja
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//version arrow function

let listOfNames2 = names.map((item) => console.log(item));

const listOfNames3 = (name, age) => {
  console.log(name + age);
};

let listOfNames4 = (name) => {
  console.log(name);
};

const square = (num) => num * num;

//promesas

const helloPromise = (key) => {
  return new Promise((resolve, reject) => {
    if (key) {
      resolve("Hey!");
    } else {
      reject("Ah, no");
    }
  });
};

helloPromise(false)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB
  }
}

const calc = new calculator();
console.log(calc.sum(2,2))


//modulos

import{hello} from './module.js'

hello()


//generadores

function* helloWorld(){
    if(true){
        yield 'Hello, '
    }
    if(true){
        yield 'world'
    }
}

const generatorHello =helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)