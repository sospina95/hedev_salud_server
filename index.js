const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const db =  require('./database/config');
let con = db.testConection();
app.set('port',process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors('*'));

// Routes
app.use('/api/patient',require("./routes/patient/patient.routes"));
app.use('/api/professional',require("./routes/professional/professional.routes"));

// port
app.listen(app.get('port'), ()=> {
    console.log("Server on port ",app.get('port'));
})