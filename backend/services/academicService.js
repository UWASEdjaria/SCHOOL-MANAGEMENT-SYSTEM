const { Grade, Attendance, User } = require('../models');

class AcademicService {
  async addGrade(teacherId, studentId, subject, score, remarks) {
    const grade = await Grade.create({
      teacherId,
      studentId,
      subject,
      score,
      remarks
    });
    return grade;
  }

  async getStudentGrades(studentId) {
    return await Grade.findAll({
      where: { studentId },
      include: [{ model: User, as: 'teacher', attributes: ['firstName', 'lastName'] }]
    });
  }

  async addAttendance(studentId, date, status) {
    // Check if attendance already exists for this date, if so update it
    let record = await Attendance.findOne({ where: { studentId, date } });
    if (record) {
      record.status = status;
      await record.save();
      return record;
    }
    
    record = await Attendance.create({
      studentId,
      date,
      status
    });
    return record;
  }

  async getStudentAttendance(studentId) {
    return await Attendance.findAll({
      where: { studentId },
      order: [['date', 'DESC']]
    });
  }
}

module.exports = new AcademicService();
