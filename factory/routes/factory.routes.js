const express = require('express');
const router = express.Router();
const FactoryCtrl =  require('../factory.controller');
router.post('/',FactoryCtrl.FactoryCore);
module.exports = router;