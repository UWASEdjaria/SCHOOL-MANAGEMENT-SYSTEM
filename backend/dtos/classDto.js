const { body, validationResult } = require('express-validator');

const validateClass = [
  body('name').notEmpty().withMessage('Class name is required'),
  body('academicYear').notEmpty().withMessage('Academic year is required')
];

const validateSchedule = [
  body('classId').isInt().withMessage('Valid Class ID is required'),
  body('teacherId').isInt().withMessage('Valid Teacher ID is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('dayOfWeek').isIn(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).withMessage('Invalid day of week'),
  body('startTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Valid start time required (HH:MM)'),
  body('endTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Valid end time required (HH:MM)')
];

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateClass,
  validateSchedule,
  validateResult
};
