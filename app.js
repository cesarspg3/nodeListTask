const argv = require('./config/yargs').argv
const { create, getListado, update, deleteDesc } = require('./toDo/toDo')
const colors = require('colors');

const { descripcion, completado } = argv
const comando = argv._[0];

switch(comando) {
    case 'crear':
        const task = create(descripcion);
        console.log(task);
        break;
    case 'listar':
        const listado = getListado()

        for( let tarea of listado) {
            const { descripcion, completado } = tarea;
            console.log('====== Por haacer ======='.green);
            console.log(`descripcion: ${descripcion}`);
            console.log(`completado: ${completado}`);
            console.log('========================='.green);
        } 
        break;
    case 'actualizar':
        const updated = update(descripcion, completado);
        console.log(updated);
        break;
    case 'borrar':
        const deleted = deleteDesc(descripcion);
        console.log(deleted);
        break;
    default:
        console.log('comando no reconocido');
        break;
}
