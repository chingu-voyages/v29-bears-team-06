const Sequelize = require('sequelize');
const db = require('../utils/database');


/*
        id: 0,
        project_id: 0,
        developer_id: 0,
        title: 'ticket',
        description: 'Same ticket description', 
        type: 'bug',
        priority: 'high',
        status: 'inprogress',
        due_date: '00-00-00',
        created_at: '00-00-00',
        updated_at: '00-00-00'
*/

const Ticket = db.define('tickets', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    project_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
    },
    developer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    due_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
});

module.exports = Ticket;
