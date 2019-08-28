const argv = require('yargs')
                .command('listar','Imprime en Consola la tabla de multiplicar',{
                    base:{
                        demand:true,
                        alias: 'b'
                    },
                    limite:{
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv


const { crearArchivo } = require('./multiplicar/multiplicar');


//let base =  'asd';

//let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(`El limite es: ${argv.limite}`);
//console.log(argv2);

// crearArchivo(base).then(respuesta =>{
//     console.log(`El archivo ${respuesta} ha sido creado exitosamente`);
// }).catch(err =>{
//     console.log(err);
// })