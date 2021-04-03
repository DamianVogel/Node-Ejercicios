
const { options, boolean } = require('yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( nombreDelArchivo =>{
        console.log(colors.green(`El archivo del ${nombreDelArchivo} fue creado satisfactoriamente`));
    })
    .catch( err => console.error(err));


