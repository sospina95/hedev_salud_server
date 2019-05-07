const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const db =  require('./database/config');
const http = require('http');

let con = db.testConection();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/patient',require("./routes/patient/patient.routes"));
app.use('/api/professional',require("./routes/professional/professional.routes"));

module.exports = app;