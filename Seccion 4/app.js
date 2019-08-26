const fs = require('fs');


let base =  2;
let data = '';


for(let i = 1; i < 11 ; i++){
    data +=`${i} * ${base} = ${i * base}\n`;
}

//const data = new Uint8Array(Buffer.from('Hola Mundo'));

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla ${base}.txt ha sido creado.`);
});