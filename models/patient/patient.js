
const TipoDocumento = require('../../models/tipoDocumento/tipoDocumento');
const Estado = require('../../models/estado/estado');


var Patient = class Patient {
    constructor(IdPacientes = '',
        IdTipoDocumento= '',
        NumeroDocumento= '',
        NombreCompleto= '',
        Apellidos= '',
        Nombres= '',
        FechaNacimiento= '',
        Direccion= '',
        Telefono= '',
        Celular= '',
        Genero= '',
        Email= '',
        IdCreadoPor= '',
        IdModificadoPor= '',
        FechaCreacion= '',
        FechaModificacion= '',
        IdEstado='') {
        this.IdPacientes = IdPacientes; 
        this.IdTipoDocumento = IdTipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.NombreCompleto = NombreCompleto;
        this.Apellidos = Apellidos;
        this.Nombres = Nombres;
        this.FechaNacimiento = FechaNacimiento; 
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.Celular = Celular;
        this.Genero = Genero;
        this.Email = Email;
        this.IdCreadoPor = IdCreadoPor;
        this.IdModificadoPor = IdModificadoPor;
        this.FechaCreacion = FechaCreacion;  
        this.FechaModificacion = FechaModificacion; 
        this.IdEstado = IdEstado;
    }
    tableName() {
        return 'm_Pacientes';
    }
    definePk(){
        return 'IdPacientes';
    }
    defineColumnArray(){
        var columnArray = [
            this.tableName()+'.IdPacientes as '+this.tableName()+'IdPacientes',
            this.tableName()+'.IdTipoDocumento as '+this.tableName()+'IdTipoDocumento',
            this.tableName()+'.NumeroDocumento as '+this.tableName()+'NumeroDocumento',
            this.tableName()+'.NombreCompleto as '+this.tableName()+'NombreCompleto',
            this.tableName()+'.Apellidos as '+this.tableName()+'Apellidos',
            this.tableName()+'.Nombres as '+this.tableName()+'Nombres',
            this.tableName()+'.FechaNacimiento as '+this.tableName()+'FechaNacimiento',
            this.tableName()+'.Direccion as '+this.tableName()+'Direccion',
            this.tableName()+'.Telefono as '+this.tableName()+'Telefono',
            this.tableName()+'.Celular as '+this.tableName()+'Celular',
            this.tableName()+'.Genero as '+this.tableName()+'Genero',
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
module.exports = Patient;
