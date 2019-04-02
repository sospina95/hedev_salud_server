

const PatientCtrl = {};
const Patient = require('../../models/patient/patient');
const tools =  require('../../utils/tools');

PatientCtrl.actionIndex = async (req, res) => {
    let patient = new Patient();
    tools.findByAll(patient,params=req['body']['params'],limit=req['body']['limit'],orderBy=req['body']['orderBy'],res);
}
PatientCtrl.actionCreate = async (req, res) => {
    console.log("req",req['body']);
    console.log("Controller patient create");
}
PatientCtrl.actionEdit = async (req, res) => {
    console.log("Controller patient edit");
}
PatientCtrl.actionDelete = async (req, res) => {
    console.log("Controller patient Delete");
}
PatientCtrl.actionSearch = async (req, res) => {
    console.log("Controller patient search");
}
PatientCtrl.actionReport = async (req, res) => {
    console.log("Controller patient Report");
}
module.exports = PatientCtrl;