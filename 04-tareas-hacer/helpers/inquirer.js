const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            }, 
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }

        ]
    }

]









const inquirerMenu = async() =>{

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción:'.green);
    console.log('===========================\n'.green);
    

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const pausarMenu = async()=>{

    const seleccion = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.green} para continuar`
            
        }
    ];
    
    console.log('\n');
    const { enter  } = await inquirer.prompt(seleccion);

    return enter;
}


const leerInput = async( message )=>{

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){

                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }

    ]

    const {desc} = await inquirer.prompt(question);

    return desc;
}


const  listadoTareasBorrar = async( tareas=[])=> {

        
    const opciones = tareas.map( (tarea,i)=>{

        const idx = `${i+1}. `.green;

        return {

            value:tarea.id,
            name: `${idx} ${tarea.desc}`

        }

    });

    opciones.unshift({
        value: '0',
        name:'0. '.green + 'Cancelar'
    })

    //console.log(opciones);

    const preguntas = [
        {
            type:'list',
            name: 'id',
            message: 'Borrar',
            choices:opciones
        }

    ]

    const { id } = await inquirer.prompt(preguntas); 
    return id;
}

const confirmar = async (message)=>{

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;


}


const  mostrarListadoCheckList = async( tareas=[])=> {

        
    const opciones = tareas.map( (tarea,i)=>{

        const idx = `${i+1}. `.green;

        return {

            value:tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked:(tarea.completadoEn) ? true:false

        }

    });

    

    //console.log(opciones);

    const pregunta = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices:opciones
        }

    ]

    const { ids } = await inquirer.prompt(pregunta); 
    return ids;
}


module.exports = {
    inquirerMenu,
    pausarMenu,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}