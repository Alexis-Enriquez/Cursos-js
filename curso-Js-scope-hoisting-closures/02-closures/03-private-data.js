const person = () => {
  var saveName = "name";
  return {
    getName: () => {    //Este medotodo sirve para traer el nombre de la variable
      return saveName;
    },
    setName: (name) => {    //Este metodo sirve para asignar un valor a la variable
      saveName = name;
    },
  };
};

newPerson = person()
console.log(newPerson.getName()) //la idea es que sin estos metodos no podemos acceder a la propiedad buscada
newPerson.setName('Alexis') //y sin este metodo no podriamos reescribir el valor de la propiedad
console.log(newPerson.getName())