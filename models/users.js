'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      isEmail: true 
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    id_state: DataTypes.INTEGER,
    user_created: DataTypes.INTEGER,
    user_update: DataTypes.INTEGER
  }, {
    tableName: 'Users'
  });
  return Users;
};