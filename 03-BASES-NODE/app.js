
const { crearArchivoTabla } = require('./helpers/multiplicar');

console.clear();
crearArchivoTabla(5)
    .then( nombreDelArchivo =>{
        console.log(`El archivo del ${nombreDelArchivo} fue creado satisfactoriamente`);
    })
    .catch( err => console.error(err));

