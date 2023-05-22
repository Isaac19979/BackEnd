const express= require('express');
const cors = require('cors');
const cors2 = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();


//Crear el servidor/aplicacion express

const app = express();

//Base de datos

dbConnection();


//Directorio Público
app.use(express.static('public'))


//CORS
app.use( cors({origin: '*'}) ); //Se pueden aceptar peticiones que solo vienen de un dominio pero hay que agregarlo si conocemos el dominio

//Lectura y parceo del body
app.use(express.json());


//Rutas (middleware)
app.use('/api/auth', require("./routes/auth") ); 


app.listen(process.env.PORT,() =>{
    console.log(`Servidor corriendo en puerto ${4000}`);
});



// EMPACADORA
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(cors2({origin: 'localhost:3000/empleados/'}))
// app.listen(3000, () => console.log('Server started at port : 3000'));
//Clientes

// const expressE = require('express');
// const {mongooseE} = require('./db/db.js');
var clienteController = require('./controllers/clienteController.js');
// var appE = expressE();

app.use('/clientes',clienteController);


//Empleados

var empleadosController = require('./controllers/empleadoController.js'); 
app.use('/empleados',empleadosController);

//Productos

var productoController = require('./controllers/productoController.js');
app.use('/productos',productoController);


//Proveedores

var proveedorController = require('./controllers/proveedorController.js');
app.use('/proveedor',proveedorController);