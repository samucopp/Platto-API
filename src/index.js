import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router.js';
import db from './config/mongoose.js';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: 'json' };
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static('src/public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {console.log(`Servidor escuchando en http://localhost:3000`);});