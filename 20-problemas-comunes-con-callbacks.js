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
}]

let getEmpleado = (id,callback) =>{

    let empleadoDB = empleados.find( empleado =>  empleado.id === id );

    if(!empleadoDB){
        callback(`No existe un empleado con el id nro: ${id}`)
    }else{
        callback(null,empleadoDB)
    }
    
    
}

getEmpleado(4,(err, empleado)=>{
    
    if(err){
        return console.log(err);
    }
    
    console.log(empleado);
});


let getSalario = (empleado,callback) =>{


    let salarioEmpleado = salarios.find(salario => salario.id === empleado.id);

    if(!salarioEmpleado){
        callback(`No se encontro el salario para el empleado: ${empleado}`);
    }else{
        callback(null, salarioEmpleado);
    }

}

getSalario(1, (err, salarioEmpleado)=>{
    if(err){
        return console.log(err);
    }

    console.log(`Para el empleado: ${empleado} el salario es: ${salarioEmpleado}`);

})


