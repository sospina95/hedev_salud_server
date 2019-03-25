
const express = require('express');
const router = express.Router();
const PatientCtrl =  require('../../controllers/patient/patient.controller');
router.get('/',PatientCtrl.getPatient);
module.exports = router;