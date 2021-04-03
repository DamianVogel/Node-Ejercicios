const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                
                .option('l',{
                    alias: 'listar',
                    type:'boolean',
                    default:'false',
                    describe: 'Es la bandera que nos indicara si se visualizara la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type:'number',
                    //demandOption: true,
                    default:10,
                    describe: 'Dato que indicará hasta que valor debera realizarse la tabla'
                })
                .check( (argv, options)=>{
                    
                    if(isNaN(argv.base)){
                        throw 'La base tiene que ser un numero'
                    }

                    if(isNaN(argv.hasta)){
                        throw 'Hasta tiene que ser un numero'
                    }

                    return true;
                
                })
                .argv;
 
// option ('l')
// listar
// default false
// mostrara la tabla


module.exports = argv;