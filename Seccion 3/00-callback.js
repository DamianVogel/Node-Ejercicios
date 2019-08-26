// setTimeout( ()=>{
//     console.log("hola mundo");
// },3000);

let getUsuarioById = (id, callback) =>{

    let usuario = {
        nombre: 'Damian',
        id
    }

    if(id === 20){
        callback(`El usuario con ${id}, no existe en la base de datos`);
    }else{
        callback(null, usuario);
    }
   

}

getUsuarioById(21, (err,usuario)=>{
    
    if(err){
        return console.log("Error");
    }
    
    console.log("El usuario de base de datos es: ,",usuario);
})