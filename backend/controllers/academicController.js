const academicService = require('../services/academicService');

exports.addGrade = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const { studentId, subject, score, remarks } = req.body;

    const result = await academicService.addGrade(teacherId, studentId, subject, score, remarks);
    res.status(201).json({ message: 'Grade added successfully', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Error adding grade' });
  }
};

exports.getGrades = async (req, res) => {
  try {
    const studentId = (req.user.role === 'Student' || req.user.role === 'Parent') 
      ? req.user.id 
      : parseInt(req.query.studentId); // Teachers and Admins can supply studentId

    if (!studentId) {
       return res.status(400).json({ message: 'Student ID is required' });
    }

    const result = await academicService.getStudentGrades(studentId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving grades' });
  }
};

exports.addAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    const result = await academicService.addAttendance(studentId, date, status);
    res.status(201).json({ message: 'Attendance recorded successfully', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Error recording attendance' });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const studentId = (req.user.role === 'Student' || req.user.role === 'Parent') 
      ? req.user.id 
      : parseInt(req.query.studentId);

    if (!studentId) {
       return res.status(400).json({ message: 'Student ID is required' });
    }

    const result = await academicService.getStudentAttendance(studentId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving attendance' });
  }
};
