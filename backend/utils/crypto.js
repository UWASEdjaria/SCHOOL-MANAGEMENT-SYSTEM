const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// SHA-512 password hash matching verification requirements
const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
};

// Validate password against hash and salt
const validatePassword = (password, hash, salt) => {
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return verifyHash === hash;
};

// Generate JWT token
const generateToken = (payload) => {
  // Session expires closely matching inactivity rules, default to 1 day
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { hashPassword, validatePassword, generateToken, verifyToken };
