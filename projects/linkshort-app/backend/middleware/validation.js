const { body, validationResult } = require('express-validator');

const validateUrl = [
  body('originalUrl')
    .isURL({ protocols: ['http', 'https'] })
    .withMessage('Please provide a valid URL'),
  body('customAlias')
    .optional()
    .isLength({ min: 3, max: 20 })
    .withMessage('Custom alias must be between 3 and 20 characters')
    .matches(/^[a-zA-Z0-9-_]+$/)
    .withMessage('Custom alias can only contain letters, numbers, hyphens, and underscores'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUrl };
