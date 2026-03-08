import Grade from '../models/Grade.js';
import Attendance from '../models/Attendance.js';
import Student from '../models/Student.js';

export const getGrades = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.user._id });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const grades = await Grade.find({ studentId: student._id });
    res.json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.user._id });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const attendance = await Attendance.find({ studentId: student._id }).sort('-date');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
