const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // e.g., "Grade 10A"
  },
  academicYear: {
    type: DataTypes.STRING,
    allowNull: false // e.g., "2023-2024"
  }
}, {
  timestamps: true,
  tableName: 'classes'
});

module.exports = Class;
