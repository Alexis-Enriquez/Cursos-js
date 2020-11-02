//hoisting: el levantamiento de las declaraciones 

//lo que se escribe

a  = 2
var a
console.log(a)


//luego en el prosceso de hoisting javascript eleva las declaraciones por lo que quedaria como
//ocurre cuando se compila el codigo previo a ser interpretado por el navegador 
var a; //declaracion elevada
 a = 2;
 console.log(a)



 //caso donde no funciona 
console.log(a)
var a = 2  //En este caso no funciona porque javascript solo eleva la declaracion(var a) y no el valor asignado(2)

// caso hoisting aplicado a funciones 
function nameOfDog (name){
    console.log(name)
}
nameOfDog()  //este seria el caso normal

//caso donde se utiliza el hoisting a favor

nameOfDog() //esto funciona ya que en las funciones se guarda tanto la declaracion como la asignacion 
function nameOfDog (name){
    console.log(name)
}



