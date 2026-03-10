const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Device = sequelize.define('Device', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Name of the table
      key: 'id'
    }
  },
  deviceId: {
    type: DataTypes.STRING,
    allowNull: false, // A unique string or fingerprint from the client
  },
  deviceName: {
    type: DataTypes.STRING,
    allowNull: true // E.g. "Chrome on Windows", "iPhone Safari"
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true,
  tableName: 'devices'
});

module.exports = Device;
