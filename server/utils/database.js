const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'db',
    'user',
    'password',
    {
        host: 'flytrap-db',
        dialect: 'mysql'
    });

module.exports = sequelize;