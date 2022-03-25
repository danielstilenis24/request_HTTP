const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const routerApi = require('./src/routes');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Using the port', port));

app.use(express.json());

/*Solicitudes HTTP: (GET, GET{id}, POST, PUT, PATACH, DELETE}
  http://localhost:5000/clase_enfasis */

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Connect with mongoDB'))
  .catch((error) => console.error(error));


routerApi(app);