var Estado = class Estado {
    constructor(IdEstado = '',
        Descripcion= '',
        Alive= '') {
        this.IdEstado = IdEstado; 
        this.Descripcion = Descripcion;
        this.Alive = Alive;
    }
    tableName() {
        return 'm_Estado';
    }
    definePk(){
        return 'IdEstado';
    }
    defineColumnArray(){
        var columnArray = [
            this.tableName()+'.IdEstado as '+this.tableName()+'IdEstado',
            this.tableName()+'.Descripcion as '+this.tableName()+'Descripcion',
            this.tableName()+'.Alive as '+this.tableName()+'Alive'];
        return columnArray;
    }
    columnName(){
        var columnArray = this.defineColumnArray();
        return columnArray.join(',');
    }
    relationTo(){
        var Relations = Array();
        return Relations;
    }
};
module.exports = Estado;
