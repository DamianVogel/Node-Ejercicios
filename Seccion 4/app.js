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
                }).command('crear','Crea la tabla en base y limites seleccionados',{
                    base:{
                        demand:true,
                        alias:'b'
                    },
                    limite:{
                        demand:true,
                        alias: 'l'
                    }
                })
                .help()
                .argv;


//const argv = require('yargs');

const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

 switch(comando){

    case 'listar':
            listaTabla(argv.base, argv.limite);       
    break;

    case 'crear':
            crearArchivo(argv.base, argv.limite).then(respuesta =>{
                console.log(`El archivo ${respuesta} ha sido creado exitosamente`);
            }).catch(err =>{
                console.log(err);
            })
    break;    

    default:
        console.log(`Comando ${comando} no reconocido`);
    break;

}


//let base =  'asd';

//let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(`El limite es: ${argv.limite}`);
//console.log(argv2);

