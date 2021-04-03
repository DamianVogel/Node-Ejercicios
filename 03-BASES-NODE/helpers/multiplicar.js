const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = (tabla = 5, listar, hasta)=>{

    var salida = ''; 
    var consola = '';


    for (let index = 1; index <=  hasta; index++) {
        
        let multiplicacion = tabla*index;
        //console.log(`${tabla} x ${index} = ${multiplicacion}`);
        salida +=`${tabla} ${'x'.green } ${index} ${'='.green} ${multiplicacion}\n`;
        //consola +=`${tabla} ${'x' } ${index} ${'='} ${multiplicacion}\n`;

    }
    if(listar){
        
        console.log('==================='.green);
        console.log('Tabla del: '.green + colors.blue( tabla));
        console.log('==================='.green);
        //console.log('===================');
        console.log(`${salida}\n`);

    } 

    return new Promise((resolve, reject)=>{

        nombreDelArchivo = `./salida/tabla-del-${tabla}.txt`;

        fs.writeFile(nombreDelArchivo, consola, (err)=>{
            
            if(err){
                let error = new Error;
                reject(error);
            } 

            resolve(nombreDelArchivo);
    
        });


    })

};

module.exports = {
    crearArchivoTabla:crearArchivoTabla
}