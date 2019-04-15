const TipoDocumento = require('../../models/tipoDocumento/tipoDocumento');
const Estado = require('../../models/estado/estado');

var Professional = class Professional {
    constructor(IdProfesionales = '',
        IdTipoDocumento= '',
        NumeroDocumento= '',
        NombreCompleto= '',
        Apellidos= '',
        Nombres= '',
        Email='',
        IdCreadoPor= '',
        IdModificadoPor= '',
        FechaCreacion= '',
        FechaModificacion= '',
        IdEstado='') {
        this.IdProfesionales = IdProfesionales; 
        this.IdTipoDocumento = IdTipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.NombreCompleto = NombreCompleto;
        this.Apellidos = Apellidos;
        this.Nombres = Nombres;
        this.Email = Email;
        this.IdCreadoPor = IdCreadoPor;
        this.IdModificadoPor = IdModificadoPor;
        this.FechaCreacion = FechaCreacion;  
        this.FechaModificacion = FechaModificacion; 
        this.IdEstado = IdEstado;
    }
    tableName() {
        return 'm_Profesionales';
    }
    definePk(){
        return 'IdProfesionales';
    }
    defineColumnArray(){
        var columnArray = [
            this.tableName()+'.IdProfesionales as '+this.tableName()+'IdProfesionales',
            this.tableName()+'.IdTipoDocumento as '+this.tableName()+'IdTipoDocumento',
            this.tableName()+'.NumeroDocumento as '+this.tableName()+'NumeroDocumento',
            this.tableName()+'.NombreCompleto as '+this.tableName()+'NombreCompleto',
            this.tableName()+'.Apellidos as '+this.tableName()+'Apellidos',
            this.tableName()+'.Nombres as '+this.tableName()+'Nombres',
            this.tableName()+'.Email as '+this.tableName()+'Email',
            this.tableName()+'.IdCreadoPor as '+this.tableName()+'IdCreadoPor',
            this.tableName()+'.IdModificadoPor as '+this.tableName()+'IdModificadoPor',
            this.tableName()+'.FechaCreacion as '+this.tableName()+'FechaCreacion',
            this.tableName()+'.FechaModificacion as '+this.tableName()+'FechaModificacion',
            this.tableName()+'.IdEstado as '+this.tableName()+'IdEstado'];
        return columnArray;
    }
    columnName(){
        var columnArray = this.defineColumnArray();
        return columnArray.join(',');
    }
    relationTo(){
        var Relations = []; 
        Relations.push(new TipoDocumento());
        Relations.push(new Estado());
        return Relations;
    }
};
module.exports = Professional;
