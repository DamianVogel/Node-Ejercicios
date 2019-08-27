const { crearArchivo } = require('./multiplicar/multiplicar');


//let base =  'asd';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];



crearArchivo(base).then(respuesta =>{
    console.log(`El archivo ${respuesta} ha sido creado exitosamente`);
}).catch(err =>{
    console.log(err);
})