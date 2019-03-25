'use strict';
module.exports = function (sequelize, DataTypes) {
  const patient = sequelize.define('patient', {
    type_documents: DataTypes.STRING,
    documents: DataTypes.STRING,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    live: DataTypes.BOOLEAN,
    user_created: DataTypes.INTEGER,
    users_update: DataTypes.INTEGER
  }, {
    tableName: 'patient'
  });
  return patient;
};