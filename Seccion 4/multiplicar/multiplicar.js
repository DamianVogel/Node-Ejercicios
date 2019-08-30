const fs = require('fs');

let data = '';


let listaTabla = (base, limite) =>{
    
    return new Promise ((resolve, reject)=>{
        
        if(!Number(base) || !Number(limite)){
            reject(`La base ${base} o el ${limite} no es un numero`);
            return
        }
        
        for(let i = 1; i < limite ; i++){
            console.log(`${i} * ${base} = ${i * base}`);
        }
        
        //const data = new Uint8Array(Buffer.from('Hola Mundo'));
        
        // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          
        //     if (err) 
        //         reject(err);
        //     else
        //         resolve(`tabla-${base}.txt`);
        
        // });
    })



}


let crearArchivo = (base)=>{

    return new Promise ((resolve, reject)=>{
        
        if(!Number(base)){
            reject(`La base ${base} no es un numero`);
            return
        }
        
        for(let i = 1; i < 11 ; i++){
            data +=`${i} * ${base} = ${i * base}\n`;
        }
        
        //const data = new Uint8Array(Buffer.from('Hola Mundo'));
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        
        });
    })

}

module.exports = {
    crearArchivo,
    listaTabla
}

//COMO UTILIZAR LA FUNCION EN UN ARCHIVO QUE ESTA EN OTRO LADO. 
