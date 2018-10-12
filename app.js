

// Se encargan de incluir las dependencias que vamos a usar

var express = require("express"),
    app = express(),    // Facilita crear el servidor y realizar llamadas http
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   //Body parseado en Json
app.use(methodOverride());

//Comienzo de los metodos

var router = express.Router();   //Para crear cada instancia

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

//Conectamos con la base de datos
//Para arrancar MongoDB tenemos que ejecutar en otra terminal:
//  mongod all output going to: /usr/local/var/log/mongodb/mongo.log

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }

//Escucharemos en el puerto 3000

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
