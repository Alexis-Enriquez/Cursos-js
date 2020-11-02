function otraFuncion() {
  return seRompeAsync();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsync() {
  setTimeout(() => {
    return 3 + z;
  }, 2000);
}

try {
  otraFuncion();
} catch (err) {
  console.error("se rompio");
}

//los errores rompen con la ejecucion

/* console.log('me sigo ejecutando')

try{
    seRompe()
}
catch(err){
    console.error(err)
    console.error(err.message)
} */


// la manera de tratar errores en una funcion asincrona 
// es utilizando la estructura try catch adentro del mismo setTimeOut o el que se este llamando
//Ejemplo

function seRompeAsync() {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error(error.message)
        }
    }, 2000);
  }