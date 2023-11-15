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
//? querys de la tabla usuarios
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
    const ID = request.params.ID;
    
    pool.query('SELECT * FROM users WHERE ID = ?', 
    ID, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
    });



//todo Agregar un nuevo usuario
app.post('/users', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, 
        result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

//todo Actualizar un usuario existente
app.put('/users/:ID', (request, response) => {  
    const ID = request.params.ID; 
    pool.query('UPDATE users SET ? WHERE ID = ?', [request.body, ID], (error, result) => {
    
        if (error) throw error;
        response.send('User update successfully.');
    });
});

//todo Eliminar usuario
app.delete(`/users/:ID`, (request, response) => {
const ID = request.params.ID;

pool.query(`DELETE FROM users WHERE ID =?`, ID, (error, result) => {
    if (error) throw error;
    response.send('User Deleted');
});
});



//? ----------------------------------------------------querys de tabla productos -----------------------------------------------------------
//todo Mostrar todos los productos
app.get('/productos', (request, response) => {
pool.query('SELECT * FROM productos',
(error, result) => {
    if (error) throw error;
    response.send(result);
});
});


//todo Mostrar un solo usuario por ID
app.get('/productos/:IdProd', (request, response) => {
    const IdProd = request.params.IdProd;
    
    pool.query('SELECT * FROM users WHERE ID = ?', 
    ID, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
    });



//todo Agregar un nuevo usuario
app.post('/productos', (request, response) => {
    pool.query('INSERT INTO productos SET ?', request.body, (error, 
        result) => {
        if (error) throw error;

        response.status(201).send(`User added with IdProd: ${result.insertIdProd}`);
    });
});

//? Actualizar un usuario existente
app.put('/productos/:IdProd', (request, response) => {  
    const ID = request.params.ID; 
    pool.query('UPDATE productos SET ? WHERE IdProd = ?', [request.body, IdProd], (error, result) => {
    
        if (error) throw error;
        response.send('User update successfully.');
    });
});

//todo Eliminar usuario
app.delete(`/productos/:IdProd`, (request, response) => {
const IdProd = request.params.IdProd;

pool.query(`DELETE FROM productos WHERE IdProd =?`, IdProd, (error, result) => {
    if (error) throw error;
    response.send('User Deleted');
});
});

}

module.exports = router;
