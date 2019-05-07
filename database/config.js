var mysql = require('mysql2');
const bdConfig = {};
bdConfig.config = () =>{
    const con = mysql.createConnection({
        host: "192.168.50.21",
        user: "root",
        password: "123456",
        database: "hedev_salud"
    });
    return con;
}
bdConfig.testConection = () => {
    bdConfig.config().connect(function(err) {
        let res = {connect:false,message:'Ok'};
        try {
            if (!err) {
                res.connect = true;
            } else {
                throw err;  
            } 
        } catch (error) {
            res.message = 'Error-testConection :'+error;
        }
        console.log("conexion message bd : ",res.message);
        console.log("conexion bd : ",res.connect);
    });
}
module.exports = bdConfig;