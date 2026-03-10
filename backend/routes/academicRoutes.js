const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academicController');
const { validateGrade, validateAttendance, validateResult } = require('../dtos/academicDto');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

router.use(authenticateToken);

// Teachers and Admins can add/update
router.post('/grades', authorizeRoles('Teacher', 'Admin'), validateGrade, validateResult, academicController.addGrade);
router.post('/attendance', authorizeRoles('Teacher', 'Admin'), validateAttendance, validateResult, academicController.addAttendance);

// Everyone can view, but controller filters depending on role
router.get('/grades', authorizeRoles('Student', 'Parent', 'Teacher', 'Admin'), academicController.getGrades);
router.get('/attendance', authorizeRoles('Student', 'Parent', 'Teacher', 'Admin'), academicController.getAttendance);

module.exports = router;
