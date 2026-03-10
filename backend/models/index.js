const { sequelize } = require('../config/database');
const User = require('./User');
const Device = require('./Device');
const Account = require('./Account');
const Transaction = require('./Transaction');
const Grade = require('./Grade');
const Attendance = require('./Attendance');
const Class = require('./Class');
const Schedule = require('./Schedule');

// Define relationships
User.hasMany(Device, { foreignKey: 'userId', as: 'devices' });
Device.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasOne(Account, { foreignKey: 'userId', as: 'account' });
Account.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Account.hasMany(Transaction, { foreignKey: 'accountId', as: 'transactions' });
Transaction.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

User.hasMany(Grade, { foreignKey: 'studentId', as: 'grades' });
Grade.belongsTo(User, { foreignKey: 'studentId', as: 'student' });

User.hasMany(Grade, { foreignKey: 'teacherId', as: 'givenGrades' });
Grade.belongsTo(User, { foreignKey: 'teacherId', as: 'teacher' });

User.hasMany(Attendance, { foreignKey: 'studentId', as: 'attendanceRecords' });
Attendance.belongsTo(User, { foreignKey: 'studentId', as: 'student' });

Class.hasMany(Schedule, { foreignKey: 'classId', as: 'schedules' });
Schedule.belongsTo(Class, { foreignKey: 'classId', as: 'classDetails' });

User.hasMany(Schedule, { foreignKey: 'teacherId', as: 'teachingSchedules' });
Schedule.belongsTo(User, { foreignKey: 'teacherId', as: 'teacher' });

module.exports = {
  sequelize,
  User,
  Device,
  Account,
  Transaction,
  Grade,
  Attendance,
  Class,
  Schedule
};
