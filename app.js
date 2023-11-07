var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('Mi primera api');
})

app.get('/saluido', function(req, res){
    res.send('Hola Mundoo!!!');
    })
    
app.get('/despedida', function(req, res){
          res.send('adios mundo cruel');
        })
        
    app.get('/despedida/familia', function(req, res){
    res.send('Los quiero a todos');
          })
          app.get('/despedida/empleados', function(req, res){
            res.send('Que quieres un beso? rumebele');
                  })
        
app.listen(3000, function(){
console.log('Aplicacion ejemplo, escuchando el puerto 3000');
});