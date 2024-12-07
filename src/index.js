import express from 'express'; // framework para crear el servidor
import dotenv from 'dotenv'; // cargar variables de entorno
import router from './routes/router.js';// importar rutas
import db from './config/mongoose.js';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: 'json' };
import cors from 'cors';

dotenv.config();// cargar variables de entorno

const app = express();// crear servidor 

app.use(express.static('src/public')); // configurar directorio de archivos estáticos

app.use(express.urlencoded({ extended: true }));// configurar body parser para recibir datos de formularios

app.use(express.json());// configurar body parser para recibir datos en formato json

app.use('/', router);// configurar rutas

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.listen(3000, () => {console.log(`Servidor escuchando en http://localhost:3000`);});
// iniciar servidor en el puerto indicado en las variables de entorno