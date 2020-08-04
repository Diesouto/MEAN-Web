'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
        .then(() =>{
            console.log("Conexión a bbdd establecida con éxito...");
        
            //Creación del servidor
            app.listen(port, () => {
                console.log("Servidor corriendo correctamente en localhost:3700");
            });
        })
        .catch(err => console.log(err));



