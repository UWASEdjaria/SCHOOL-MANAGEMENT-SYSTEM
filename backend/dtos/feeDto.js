const { body, validationResult } = require('express-validator');

// DTO rules for Fee Management payload
const validateTransaction = [
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
  body('referenceId').optional().isString().trim()
];

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateTransaction,
  validateResult
};
