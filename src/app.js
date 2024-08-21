const express = require ('express'); //nos permite crear un servidor backend desde 0 de manera ágil
const morgan = require ('morgan');
const mysql = require ('mysql');//permite la conexion a una base de datos de Mysql
const myConnection = require ('express-myconnection');//permite utilizar los metodos de express

const app = express();
const cors = require ('cors');


const mascotaRouter= require('./routes/mascotas.router');
const empleadoRouter= require('./routes/empleados.router');
const diagnosticoRouter= require('./routes/diagnosticos.router')
const alumnoRouter= require('./routes/diagnosticos.router')
const usuarioRouter= require('./routes/usuarios.router')
const justificanteRouter= require('./routes/justificantes.router')

app.set ('port', 3000);//puerto del servidor backend
app.use (cors());//resuelve las colisiones demultiples servidores en un mismo equipo
app.use (morgan('dev'));//monitorear las  peticiones

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'saludutng2'  
}, 'single'));

app.use (express.json()); //permitirel envio de objetos json en las peticiones o solicitudes 
app.use (express.urlencoded({extended:false}));//"false" para que permita el envio de formularios completos
app.use(require('./routes/mascotas.router'));
app.use(require('./routes/empleados.router'));
app.use(require('./routes/diagnosticos.router'));
app.use(require('./routes/alumnos.router'));
app.use(require('./routes/usuarios.router'));
app.use(require('./routes/justificantes.router'));

module.exports= app;