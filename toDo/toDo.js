const fs = require('fs');

let listTodo = [];

const writeDb = () => {
    return new Promise ( (resolve, reject) => {
        const data = JSON.stringify(listTodo);
        fs.writeFile('db/data.json', data, (err) => {
            if(err) {
                reject(console.log('error al guardar'));
            } else {
                resolve(listTodo);
            }
        })
    })
}

const loadDb = () => {
    try {
        listTodo = require('../db/data.json');
    } catch (error) {
        listTodo = [];
    }
}

const getListado = () => {
    loadDb();
    return listTodo;
}

const update = (descripcion, completado) => {
    loadDb();
    const index = listTodo.findIndex(task => task.descripcion === descripcion);
    if(index >= 0) {
        listTodo[index].completado = completado;
        writeDb();
        return true;
    } else {
        return false;
    }
}

const deleteDesc = (descripcion) => {
    loadDb();
    const index = listTodo.findIndex(task => task.descripcion === descripcion);
    if(index >= 0) {
        listTodo.splice(index,1)
        writeDb();
        return true;
    } else {
        return false;
    }
}

const create = async (descripcion) => {
    loadDb();
    const toDo = {
        descripcion,
        completado: false
    }
    listTodo.push(toDo);
    const writeDbResponse =  await writeDb()
    return writeDbResponse;
}

module.exports = {
    create,
    getListado,
    update,
    deleteDesc
} 