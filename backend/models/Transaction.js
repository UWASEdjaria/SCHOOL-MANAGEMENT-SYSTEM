const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'id'
    }
  },
  type: {
    type: DataTypes.ENUM('Deposit', 'Withdrawal'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Completed', 'Rejected'),
    allowNull: false,
    defaultValue: 'Completed'
  },
  referenceId: {
    type: DataTypes.STRING,
    allowNull: true // E.g., external payment gateway ref
  }
}, {
  timestamps: true,
  tableName: 'transactions'
});

module.exports = Transaction;
