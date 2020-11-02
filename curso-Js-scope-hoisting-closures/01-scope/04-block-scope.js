const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    var fruits2 = "banana";
    var fruits3 = "kiwi";
  }
  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
};

console.log(fruits1); // no se puede acceder al elemento fruits uno porque es una var pero es del entorno en el que esta
fruits(); //se puede acceder a todos los elementos

//haciendo unos cambios

const fruits = () => {
  if (true) {
    var fruits1 = "apple"; //Esta asignado dentro del scope de la funcion
    let fruits2 = "banana"; //Esta asignado dentro del scope del if
    const fruits3 = "kiwi"; //Esta asignado dentro del scope del if
  }
  console.log(fruits1);
  console.log(fruits2); //da error
  console.log(fruits3); //da error
};

fruits();

//reacomodando para que ande

const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";
    console.log(fruits2); //esto anda
    console.log(fruits3); //esto tambien
  }
  console.log(fruits1);
};

fruits();

//otro ejemplo del scope

let x = 1;

{
  let x = 2;
  console.log(x);
}

console.log(x);

// un ejeplo mas 

const anotherFunctionn = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunctionn() //despues del tiempo devuelve 10 numeros 10 

//la version corregida con let 

const anotherFunctionn = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
  };
  
  anotherFunctionn() 
