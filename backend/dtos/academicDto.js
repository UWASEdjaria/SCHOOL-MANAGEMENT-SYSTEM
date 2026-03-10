const { body, validationResult } = require('express-validator');

const validateGrade = [
  body('studentId').isInt().withMessage('Valid Student ID is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('score').isInt({ min: 0, max: 100 }).withMessage('Score must be between 0 and 100'),
  body('remarks').optional().isString()
];

const validateAttendance = [
  body('studentId').isInt().withMessage('Valid Student ID is required'),
  body('date').isDate().withMessage('Valid Date is required (YYYY-MM-DD)'),
  body('status').isIn(['Present', 'Absent', 'Late', 'Excused']).withMessage('Invalid status')
];

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateGrade,
  validateAttendance,
  validateResult
};
