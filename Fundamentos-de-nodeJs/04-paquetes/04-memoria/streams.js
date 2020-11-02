const fs = require('fs')
const stream = require('stream');
const { Transform } = require('stream');
const util = require('util')

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8')
/* readableStream.on('data',function(chunk){
    console.log(chunk)
}) */

/* readableStream.on('data',function(chunk){
    data+=chunk
})

readableStream.on('end',function(){
    console.log(data)
}) */

/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */


const transform = stream.Transform;

function mayus(){
    Transform.call(this)
}

util.inherits(mayus, transform)

mayus.prototype._transform= function(chunk,codif,cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

var MAYUS = new mayus()

readableStream
    .pipe(MAYUS)
    .pipe(process.stdout)