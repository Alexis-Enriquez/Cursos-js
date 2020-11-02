const bcrypt = require('bcrypt')

const password = '1234segura!';

bcrypt.hash(password, 5, function(err,hash){
    console.log(hash)


    bcrypt.compare(password,hash,function(err, res){ // compare trae un booleano que te dice si la password coincide con el hash
        console.log(err)
        console.log(res)
    })
})