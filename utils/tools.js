const Tools = {};
const config = require('../database/config');
Tools.findByAll = (Model,params=[],limit=0,orderBy=[],res) => {
    var sql = `
    SELECT
    ${Model.columnName()}
    FROM 
    ${Model.tableName()}
    WHERE
    1=1
    `;
    sql = sql + Tools.querySetWhere(params);
    sql = sql + Tools.querySetOrderBy(orderBy);
    if (limit!=0){
        sql+= ` LIMIT ${limit} `;
    }
    Tools.commandSql(sql,res);
}
Tools.findById = (Model,Id=0,res) => {
    if (Id!=0){
        var sql = `
        SELECT
        ${Model.columnName()}
        FROM 
        ${Model.tableName()}
        WHERE
        1=1
        `;
        sql+= `AND ${Model.definePk()} = '${Id}' `;
        Tools.commandSql(sql,res); 
    }else{
        res.send({data:[],message:{type:'Warning',body:'El campo '+Model.definePk()+' es Obligatorio.(*)'},status:401});
        res.status(401).end();
    }
}
Tools.createUpdate = (Model,params=[],res) =>{
    var sql = `INSERT INTO ${Model.columnName()} `;
    sql = sql + Tools.querySetInsert(params);
    sql = sql + Tools.querySetInsertValues(params);
    Tools.commandSqlCreateUpdate(sql,res);
}
Tools.commandSql = (sql,res) => {
    let con = config.config();
    con.connect(function(err) {
        const result = {data:[],message:{type:null,body:null},status:0};                    
        try {
            if(!err){
                con.query(sql, function (err, rs) {
                    try {
                        if (err==null) {
                            result.status = 200;
                            result.data = rs;
                            if (result.data.length!=0){
                                result.message.type = 'successfull';
                                result.message.body = 'Ok, ejecución exitosa';
                            }else{
                                result.message.type = 'Warning';
                                result.message.body = 'No se encontró ningun registro.';
                            }

                        } else {
                            throw err;
                        }
                    } catch (error) {
                        result.message.type = 'Error';
                        result.message.body = "Error-commandSql: "+error;
                        result.status = 500;
                    }
                    console.log("resultA",result);
                    res.send(result);
                    res.status(result.status).end(); 
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
Tools.commandSqlCreateUpdate = (sql,res) => {
    let con = config.config();
    con.connect(function(err) {
        const result = {data:[],message:{type:null,body:null},status:0};                    
        try {
            if(!err){
                con.query(sql, function (err, rs) {
                    try {
                        if (err==null) {
                            result.status = 200;
                            result.data = rs;
                            if (result.data.length!=0){
                                result.message.type = 'successfull';
                                result.message.body = 'Ok, ejecución exitosa';
                            }else{
                                result.message.type = 'Warning';
                                result.message.body = 'No se encontró ningun registro.';
                            }

                        } else {
                            throw err;
                        }
                    } catch (error) {
                        result.message.type = 'Error';
                        result.message.body = "Error-commandSql: "+error;
                        result.status = 500;
                    }
                    console.log("resultA",result);
                    res.send(result);
                    res.status(result.status).end(); 
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
Tools.querySetWhere = (params) => {
    var sql = '';
    if (params.length!=0){
        for(var key in params[0]){
            sql+=` ${params[0][key].condition} ${key} `;
            if (params[0][key].clausula=='in') {
                sql+= ` IN ('${params[0][key].value.join("','")}')`;
            } else if (params[0][key].clausula=='nin'){
                sql+= ` NOT IN ('${params[0][key].value.join("','")}')`;
            } else if (params[0][key].clausula=='liker'){
                sql+= ` LIKE '${params[0][key].value}%' `;
            } else if (params[0][key].clausula=='likel'){
                sql+= ` LIKE '%${params[0][key].value}' `;
            } else if (params[0][key].clausula=='like'){
                sql+= ` LIKE '%${params[0][key].value}%' `;
            } else {
                sql+=` ${params[0][key].clausula} '${params[0][key].value}' `;
            }
        }
    }
    return sql;
}
Tools.querySetOrderBy = (orderBy) => {
    var sql = ` ORDER BY `;
    if (orderBy.length!=0){
        orderBy.forEach(element => {
            sql+=` ${element.campos.join(',')} ${element.orderBy} `;
        });
    }
    return sql;
}

module.exports = Tools;