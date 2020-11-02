const http = require('http')


function router(request, response){
    console.log('nueva peticion')
    console.log(request.url)

    switch(request.url){
        case '/hola':
            response.write('hola, que tal!')
            response.end()
            break;

        default:
            response.write('error 404: no se lo que queres')
            response.end()
            

    }


    response.writeHead(201,{'Content-Type':'text/plain'})

    //Escribir respuesta al usuario
    response.write('esto es una respuesta, que emocion!, es una respuesta! ')


    response.end()

}

http.createServer(router).listen(3002)

console.log("escuchando http en el puerto 3002")