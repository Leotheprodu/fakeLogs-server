require('dotenv').config({ override: true });
const express = require('express');
const cors = require('cors');
const { dbConnectMySql } = require('./config/mysql');

const app = express();
const PUERTO = process.env.PORT || 5000;
app.use(
    cors({
        origin: process.env.LINK_CORS,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Origin',
            'X-Requested-With',
            'Accept',
            'x-client-key',
            'x-client-token',
            'x-client-secret',
            'Authorization',
        ],
        credentials: true,
    })
);
app.set('trust proxy', 1);
app.use(express.json());
app.use('/api', require('./routes'));

app.get('/', (req, res) => {
    res.send('¡Hola, este es mi servidor Express!');
});

app.listen(PUERTO, () => {
    console.log(`Servidor Express en funcionamiento en el puerto ${PUERTO}`);
});
dbConnectMySql();
