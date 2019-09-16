const opts = {
    base:{
        demand:true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
};


const argv = require('yargs')
                .command('listar','Imprime en Consola la tabla de multiplicar',opts)
                .command('crear','Crea la tabla en base y limites seleccionados',opts)
                .help().argv;
                

module.exports = {
    argv
};