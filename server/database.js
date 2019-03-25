const Sequelize = require('sequelize');
sequelize = new Sequelize('postgres://postgres:root@localhost:5432/hedev_salud');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = Sequelize;