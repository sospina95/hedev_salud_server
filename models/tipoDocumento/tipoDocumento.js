
var tipoDocumento = class TipoDocumento {
    constructor(IdTipoDocumento = '',
    Descripcion= '',
    Abreviatura= '',
    alive='') {
        this.IdTipoDocumento = IdTipoDocumento; 
        this.Descripcion = Descripcion;
        this.Abreviatura = Abreviatura;
        this.alive = alive;
    }
    tableName() {
        return 'm_TipoDocumento';
    }
    definePk(){
        return 'IdTipoDocumento';
    }
    defineColumnArray(){
        var columnArray = [
            this.tableName()+'.IdTipoDocumento as '+ this.tableName()+'IdTipoDocumento',
            this.tableName()+'.Descripcion as '+ this.tableName()+'Descripcion',
            this.tableName()+'.Abreviatura as '+ this.tableName()+'Abreviatura',
            this.tableName()+'.alive as '+ this.tableName()+'alive'];
        return columnArray;
    }
    columnName(){
        var columnArray = this.defineColumnArray();
        return columnArray.join(',');
    }
    relationTo(){
        
    }
};
module.exports = tipoDocumento;
