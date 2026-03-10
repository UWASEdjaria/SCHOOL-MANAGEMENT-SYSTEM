const { verifyToken } = require('../utils/crypto');
const { User, Device } = require('../models');

// Extract token and verify
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  // Format typically "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    // Attach user information
    req.user = decoded;
    
    // Optionally check if user still exists in DB
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
};

// Role-based access control middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Access forbidden. Insufficient permissions.' 
      });
    }
    next();
  };
};

module.exports = {
  authenticateToken,
  authorizeRoles
};
