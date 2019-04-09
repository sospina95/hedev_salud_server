
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
            'IdProfesionales',
            'IdTipoDocumento',
            'NumeroDocumento',
            'NombreCompleto',
            'Apellidos',
            'Nombres',
            'Email',
            'IdCreadoPor',
            'IdModificadoPor',
            'FechaCreacion',
            'FechaModificacion',
            'IdEstado'];
        return columnArray;
    }
    columnName(){
        var columnArray = this.defineColumnArray();
        return columnArray.join(',');
    }
};
module.exports = Professional;
