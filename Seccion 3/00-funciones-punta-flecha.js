
let nombre= (nombre) => {return `hola ${ nombre }`};

console.log(nombre('Damian'));

let operacion = {
    nro: 1,
    cliente: 'ball'
};


//DESESTRUCTURACION
let {nro, cliente} =  operacion;

console.log(nro, cliente);