const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('forum_db', 'root', 'Azerty123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
