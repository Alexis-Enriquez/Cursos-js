const fs = require('fs')

function leer(ruta,cb){
    fs.readFile(ruta,(err, data)=>{
        cb(data.toString())
    })
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function(err){
        if(err){
           console.error('no lo pude escibir', err) 
        }else {
            console.log('lo escribi');
        }
    })
}

function borrar(ruta,cb){
    fs.unlink(ruta,cb)
}


escribir(__dirname + '/archivo1.txt','soy un nuevo archivo',console.log)

leer(__dirname + '/archivoPara02.txt',console.log)



borrar(__dirname + '/archivo1.txt',console.log)