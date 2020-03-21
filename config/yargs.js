
const createOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Crea un elemento por hacer'
    },
}
const listOptions = {}
const updateOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}
const deleteOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Borra un elemento'
    },
}

const argv = require('yargs')
    .command('crear','Crea un elemento por hacer',createOptions)
    .command('listar','Descripción de la tarea por hacer',listOptions)
    .command('actualizar','Marca como completado o pendiente la tarea',updateOptions)
    .command('borrar','Borra un elemento',deleteOptions)  
    .help()
    .argv;

module.exports = {
    argv
}