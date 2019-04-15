

const PatientCtrl = {};
const Patient = require('../../models/patient/patient');
const tools =  require('../../utils/tools');
const config = require('../../database/config');

PatientCtrl.actionIndex = async (req, res) => {
    let patient = new Patient();
    tools.findByAll(patient,params=req['body']['params'],limit=req['body']['limit'],orderBy=req['body']['orderBy'],res);
}
PatientCtrl.actionCreate = async (req, res) => {
    let patient = new Patient();
    let con = config.config();
    con.connect(function(err) {
        const result = {data:[],message:{type:null,body:null},status:0};                    
        try {
            if(!err){
                var sql = `INSERT INTO m_Usuarios (Username,Password,Email,IdCreadoPor) 
                            VALUES ('${req['body']['params'][0].NumeroDocumento}','${req['body']['params'][0].NumeroDocumento}','${req['body']['params'][0].Email}','${req['body']['params'][0].IdCreadoPor}');`;
                con.query(sql, function (err, rs) {
                    try {
                        if (err==null) {
                            tools.createUpdate(patient,params=req['body']['params'],res);
                        } else {
                            throw err;
                        }
                    } catch (error) {
                        result.message.type = 'Error';
                        result.message.body = "Error-commandSql: "+error;
                        result.status = 500;
                        res.send(result);
                        res.status(result.status).end();
                    } 
                });
            }else{
                throw err;
            }
        } catch (error) {
            result.message.tittle = 'Error';
            result.message.body = 'Error-conexion :'+error;
            result.status = 500;
            res.send(result);
            res.status(result.status).end(); 
        }
    });
}
PatientCtrl.actionEdit = async (req, res) => {
    let patient = new Patient();
    tools.createUpdate(patient,params=req['body']['params'],res);
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