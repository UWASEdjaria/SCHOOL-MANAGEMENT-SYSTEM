const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const { validateClass, validateSchedule, validateResult } = require('../dtos/classDto');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');

router.use(authenticateToken);

// Admin-only operations for creating classes and assigning teachers
router.post('/', authorizeRoles('Admin'), validateClass, validateResult, classController.createClass);
router.post('/assign-teacher', authorizeRoles('Admin'), validateSchedule, validateResult, classController.assignTeacher);

// Anyone can view classes and schedules
router.get('/', authorizeRoles('Admin', 'Teacher', 'Student', 'Parent'), classController.getClasses);
router.get('/schedule', authorizeRoles('Admin', 'Teacher', 'Student', 'Parent'), classController.getSchedule);

module.exports = router;
