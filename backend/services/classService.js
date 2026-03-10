const { Class, Schedule, User } = require('../models');

class ClassService {
  async createClass(name, academicYear) {
    return await Class.create({ name, academicYear });
  }

  async getAllClasses() {
    return await Class.findAll();
  }

  async assignTeacherToClass(classId, teacherId, subject, dayOfWeek, startTime, endTime) {
    // Check for schedule conflicts
    const conflict = await Schedule.findOne({
      where: { teacherId, dayOfWeek, startTime, endTime }
    });

    if (conflict) {
      throw new Error('Teacher already has a class scheduled at this time');
    }

    return await Schedule.create({
      classId,
      teacherId,
      subject,
      dayOfWeek,
      startTime,
      endTime
    });
  }

  async getClassSchedule(classId) {
    return await Schedule.findAll({
      where: { classId },
      include: [{ model: User, as: 'teacher', attributes: ['firstName', 'lastName', 'email'] }]
    });
  }
}

module.exports = new ClassService();
