//* cargue la conexion del grupo MySQL
const { request, response } = require('express');
const pool = require('../data/config');

//*ruta de la app
const router = app => {
//*mostrar mensaje de bienvenida de root
app.get('/', (request, response) =>{
    response.send({
        message: 'Bienvenido a Node.js Express REST API!'
    });
});


//todo Mostrar todos los usuarios
app.get('/users', (request, response) => {
pool.query('SELECT * FROM users',
(error, result) => {
    if (error) throw error;
    response.send(result);
});
});


//todo Mostrar un solo usuario por ID
app.get('/users/:ID', (request, response) => {
    const id = request.params.id;
    
    pool.query('SELECT * FROM users WHERE ID =?', 
    id, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
    });



//todo Agregar un nuevo usuario
app.post('/users', (request, response) => {
    pool.query('INSERT INSTO users SET ?', request.body, (error, 
        result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

//todo Actualizar un usuario existente
app.put(`/users/:ID`, (request, response) =>{
    const ID = request.params.ID;

    pool.query('UPDATE users SET ? WHERE ID = ?', [request.body, ID], (error, result) => {
        if (error) throw error;

        response.send('User update successfully.');
    });
})
//todo Eliminar usuario
app.delete(`/users/:ID`, (request, response) => {
const ID = request.params.ID;

pool.query(`DELETE FROM users WHERE ID =?`, ID, (error, result) => {
    if (error) throw error;
    response.send('User Deleted');
});
});

}

module.exports = router;
