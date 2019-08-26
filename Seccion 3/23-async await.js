/*
    ASYNC - AWAIT
*/


//COMO ASYNC
// let getNombre = async() =>{
        
//     return 'Damian';
// }

//COMO PROMESA

let getNombre = () => {
    
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            resolve('Damian');
        },3000);
        
        //reject('error');

    })
}

let saludo = async ()=>{

    let nombre = await getNombre();

    return `Hola ${nombre}`;

}


// getNombre().then( resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log("Error de ASYNC",err);
// });

saludo().then(mensaje =>{
    console.log(mensaje);
});