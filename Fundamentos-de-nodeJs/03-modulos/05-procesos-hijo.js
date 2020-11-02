//const exec = require('child_process').exec
const {exec, spawn} = require('child_process')
const { stdout, stderr } = require('process')


//Exec ejecuta un comando de terminal que digas


/* exec('node 03-modulos/03-consola.js',(err,stdout,stderr)=>{
    if(err){
        console.error(err)
        return false
    }
    console.log(stdout)
}) */


let proceso = spawn('dir',['-la'])

proceso.stdout.on('data',(dato)=>{
    console.log('esta muerto?')
    console.log(process.killed)
    console.log(dato.toString())
})

proceso.on('exit',function(){
    console.log('el proceso termino')
})