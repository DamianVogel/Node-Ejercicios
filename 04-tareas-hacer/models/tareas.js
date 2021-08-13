
require('colors');
const { inquirerMenu } = require('../helpers/inquirer');
const Tarea = require('./tarea');


class Tareas {

    //_listado = {};

    get listadoArr(){
        
        const listado = [];
    
        Object.keys(this._listado).forEach ( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    
    }

    cargarTareasFromArray( tareas = []){

        tareas.forEach(tarea => {
            
            this._listado[tarea.id]=tarea;
        
        });

    }


    constructor() {

        this._listado = {};

    }

    borrarTarea( id = ''){

        if(this._listado[id]){
            delete this._listado[id];
        }


    }

    crearTarea( desc = ''){
        
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    
    }

    listadoCompleto(){

        console.log('\n');
        
        this.listadoArr.forEach( (tarea,index) => {
            
            
        
            const idx = `${index + 1}.`.green;
            const { desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log( `${idx}    ${desc} ::  ${estado }` );    

        });

    }

    listarPendientesCompletadas(completadas = true){

        console.log('\n');     
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {
             
            
            const { desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if(completadas ){
                
                if(completadoEn){
                    contador += 1;
                    console.log( `${contador}    ${desc} ::  ${estado } :: ${completadoEn}` );    
                
                }
            }else{
                
                if(!completadoEn){
                    contador += 1;
                    console.log( `${contador}    ${desc} ::  ${estado }` );    
                
                }
            }
            

        });


    }

   

};

module.exports = Tareas;