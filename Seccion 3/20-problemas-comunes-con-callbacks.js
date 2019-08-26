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

let getSalario = (empleado , callback) =>{


    let salarioEmpleado = salarios.find(salario => salario.id === empleado.id);

    if(!salarioEmpleado){
        callback(`No se encontro el salario para el empleado: ${empleado.nombre}`);
    }else{
        //callback(null, salarioEmpleado);
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioEmpleado.salario,
            id: empleado.id
        });
    }

}





getEmpleado(3, (err, empleado)=>{
    
    if(err){
        return console.log(err);
    }
    
    getSalario(empleado, (err,resp) => {
        if(err){
            return console.log(err);
        }
    
        console.log(`Para el empleado: ${resp.nombre} el salario es: ${resp.salario}`);   
    });
  
});





