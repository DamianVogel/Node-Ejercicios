let empleados = [{
    id:1,
    nombre:'Damian'
},{
    id:2,
    nombre:'Cristian'
},{
    id:3,
    nombre:'Matias'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) =>{

    return new Promise((resolve, reject)=>{

        let empleadoDB = empleados.find( empleado =>  empleado.id === id );

        if(!empleadoDB){
            reject(`No existe un empleado con el id nro: ${id}`);
        }else{
            resolve(empleadoDB);
        }
    
    });
    
}

getEmpleado(10).then(empleado =>{
    console.log(empleado);
}, err =>{
  console.log(err);  
});