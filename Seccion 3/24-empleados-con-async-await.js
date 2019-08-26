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

let getEmpleado = async (id) =>{

    let empleadoDB = empleados.find( empleado =>  empleado.id === id );

    if(!empleadoDB){
        throw new Error(`No existe un empleado con el id nro: ${id}`);
    }else{
        return empleadoDB;
    }
     
}

let getSalario = async(empleado) => {
    
        let salarioEmpleado = salarios.find( salario =>  salario.id === empleado.id );

        if(!salarioEmpleado){
            throw new Error(`No existe un salario para el empleado con el id nro: ${empleado.id}`);
        }else{
            return{
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario,
                id: empleado.id
            };
        }

}


let getInformacion = async (id)=>{

    let empleado = await getEmpleado(id);

    let respuesta = await getSalario(empleado);

    return `El empleado ${respuesta.nombre} tiene un sueldo de ${respuesta.salario}`;
}

getInformacion(4)
    .then( mensaje =>{console.log(mensaje)})
    .catch( err => console.log(err));


