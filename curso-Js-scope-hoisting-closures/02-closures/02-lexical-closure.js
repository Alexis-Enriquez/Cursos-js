const buildCount = (i) =>{
    let count = i;          //una de las ideas del closure es tener un espacio donde la funcion pueda recordar que hizo 
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCount = buildCount(1);

myCount()
myCount()
myCount()
myCount()

const myOtherCount = buildCount(10)   //de esta manera se copia la funcion seteada en i (es una nueva funcion distinta a la ya creada)

myOtherCount()
myOtherCount()
myOtherCount()