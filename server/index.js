const express = require('express');
const morgan = require('morgan');
const app = express();
const { sequelize } = require('./database');
// var models = require('../models');
// models.patients.findAll().then(function (data) {
// if (data != null) {
//   res.status(200).json({
//     status: 200,
//     output: data,
//     detail: "Consulta Realizada"
//   });
// }
// });
const cors = require('cors');
var whitelist = ['http://localhost:4200', 'http://localhost:8100']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// settings
app.set('port',process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
// Routes
app.use('/api/index',require("../factory/routes/factory.routes"));
app.use('/api/patient',require("../routes/patient/patient.routes"));
// port
app.listen(app.get('port'), ()=> {
    console.log("Server on port ",app.get('port'));
})