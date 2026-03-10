const classService = require('../services/classService');

exports.createClass = async (req, res) => {
  try {
    const { name, academicYear } = req.body;
    const result = await classService.createClass(name, academicYear);
    res.status(201).json({ message: 'Class created successfully', data: result });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Class name already exists' });
    }
    res.status(500).json({ message: 'Error creating class' });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const result = await classService.getAllClasses();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving classes' });
  }
};

exports.assignTeacher = async (req, res) => {
  try {
    const { classId, teacherId, subject, dayOfWeek, startTime, endTime } = req.body;
    const result = await classService.assignTeacherToClass(classId, teacherId, subject, dayOfWeek, startTime, endTime);
    res.status(201).json({ message: 'Teacher assigned to class successfully', data: result });
  } catch (error) {
    if (error.message.includes('already has a class scheduled')) {
        return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error assigning teacher' });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const { classId } = req.query;
    if (!classId) return res.status(400).json({ message: 'Class ID is required' });

    const result = await classService.getClassSchedule(classId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving schedule' });
  }
};
