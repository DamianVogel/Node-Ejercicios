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


let getSalario = (empleado) => {
    
    return new Promise((resolve, reject)=>{

        let salarioEmpleado = salarios.find( salario =>  salario.id === empleado.id );

        if(!salarioEmpleado){
            reject(`No existe un salario con el id de empleado nro: ${empleado.id}`);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario,
                id: empleado.id
            });
        }
    
    });

}

getEmpleado(4).then(empleado =>{
    
    return getSalario(empleado);

}).then(resp_get_salario =>{
    console.log(`El salario del empleado ${resp_get_salario.nombre} es de ${resp_get_salario.salario}`);
}).catch(err => {
    console.log(err);
});




