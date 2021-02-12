const fs = require('fs');

const crearArchivoTabla = (tabla = 5)=>{

    var salida = '';

    console.log('Tabla del: '+ tabla);
    console.log('===================');

    for (let index = 1; index < 11; index++) {
        
        let multiplicacion = tabla*index;
        //console.log(`${tabla} x ${index} = ${multiplicacion}`);
        salida +=`${tabla} x ${index} = ${multiplicacion}\n`;

    }

    console.log(`${salida}\n`);

    return new Promise((resolve, reject)=>{

        nombreDelArchivo = `tabla-del-${tabla}`;

        fs.writeFile(nombreDelArchivo, salida, (err)=>{
            
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