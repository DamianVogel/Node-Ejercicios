
require('colors');

const { 
    inquirerMenu, 
    pausarMenu,
    leerInput,
    listadoTareasBorrar 
} = require('./helpers/inquirer');

const {
    guardarDB,
    leerArchivo
} = require('./helpers/guardarArchivo');

const Tareas = require('./models/tareas');

const main = async () => {
    
    let opt = '';
    
    const tareas = new Tareas();
    const tareasDB = leerArchivo();

    if(tareasDB){

        tareas.cargarTareasFromArray(tareasDB);

    }


    do{
    
        opt = await inquirerMenu();
        
        switch(opt){
    
            case '1':
                
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                
            break;

            case '2':
                
                //console.log( tareas._listado);
                tareas.listadoCompleto();
            
            break;

            case '3':
                
                //console.log( tareas._listado);
                tareas.listarPendientesCompletadas(true);
            
            break;

            case '4':
                
                //console.log( tareas._listado);
                tareas.listarPendientesCompletadas(false);
            
            break;

            case '6':
                
                const id = await listadoTareasBorrar(tareas.listadoArr);
                console.log( id );
            
            break;


        }
        
        guardarDB(tareas.listadoArr);

        if(opt !== '0') await pausarMenu(); 

    } while ( opt !== '0' )



}



main();




