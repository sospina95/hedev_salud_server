
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
            'IdPacientes',
            'IdTipoDocumento',
            'NumeroDocumento',
            'NombreCompleto',
            'Apellidos',
            'Nombres',
            'FechaNacimiento',
            'Direccion',
            'Telefono',
            'Celular',
            'Genero',
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
    edit(IdPacientes){

    }
};
module.exports = Patient;
