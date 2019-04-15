

const ProfessionalCtrl = {};
const Professional = require('../../models/professional/professional');
const tools =  require('../../utils/tools');
const config = require('../../database/config');

ProfessionalCtrl.actionIndex = async (req, res) => {
    let professional = new Professional();
    tools.findByAll(professional,params=req['body']['params'],limit=req['body']['limit'],orderBy=req['body']['orderBy'],res);
}
ProfessionalCtrl.actionCreate = async (req, res) => {
    let professional = new Professional();
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
                            tools.createUpdate(professional,params=req['body']['params'],res);
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
ProfessionalCtrl.actionEdit = async (req, res) => {
    console.log("Controller professional edit");
    let professional = new Professional();
    tools.createUpdate(professional,params=req['body']['params'],res);
}
ProfessionalCtrl.actionDelete = async (req, res) => {
    console.log("Controller professional Delete");
}
ProfessionalCtrl.actionSearch = async (req, res) => {
    console.log("Controller professional search");
}
ProfessionalCtrl.actionReport = async (req, res) => {
    console.log("Controller professional Report");
}
module.exports = ProfessionalCtrl;