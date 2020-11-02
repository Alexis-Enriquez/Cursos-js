function sum (num1, num2){
    return num1 + num2
}


function calc(num1, num2 , cb){
    return cb(num1,num2)
}


console.log(calc(6,2,sum))

//en esta clase creamos un script en package json para poder correr los callbacks con node

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        return 
    },3000)
}