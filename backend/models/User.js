const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  passwordHash: {
    type: DataTypes.STRING(128), // 64 bytes hex is 128 chars
    allowNull: false
  },
  salt: {
    type: DataTypes.STRING(32), // 16 bytes hex is 32 chars
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Teacher', 'Student', 'Parent'),
    allowNull: false,
    defaultValue: 'Student'
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'users'
});

module.exports = User;
