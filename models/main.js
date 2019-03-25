'use strict';
module.exports = (sequelize, DataTypes) => {
  const main = sequelize.define('main', {
    name: DataTypes.STRING,
    live: DataTypes.BOOLEAN,
    user_created: DataTypes.INTEGER,
    users_update: DataTypes.INTEGER
  }, {});
  main.associate = function(models) {
    // associations can be defined here
  };
  return main;
};