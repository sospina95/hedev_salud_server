const express = require('express');
const router = express.Router();
const ProfessionalCtrl =  require('../../controllers/professional/professional.controller');
router.post('/',ProfessionalCtrl.actionIndex);
router.post('/create',ProfessionalCtrl.actionCreate);
router.post('/edit',ProfessionalCtrl.actionEdit);
router.post('/delete',ProfessionalCtrl.actionDelete);
router.post('/search',ProfessionalCtrl.actionSearch);
router.post('/report',ProfessionalCtrl.actionReport);
module.exports = router;