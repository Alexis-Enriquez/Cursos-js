const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins  
    console.log(`moneyBox: ${saveCoins}`)
}

moneyBox(5) //devuelve 5
moneyBox(10) //devuelve 10 , no suma los elementos, no esta recordando la suma, no se hace el closure

//como lo solucionariamos con closures
const moneyBox = () => {            //creo una funcion padre que contiene la variable y la funcion que necesito
    var saveCoins = 0               //esta es la variable que necesito, esta afuera de la funcion, por eso no se pisa
    const countCoins = (coins)=>{   //Esta es la funcion que necesito
        saveCoins += coins
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins               //Retorno la funcion que necesito porque la funcion padre solo es un contenedor
}

let myMoneyBox = moneyBox()

myMoneyBox(4)
myMoneyBox(6)
