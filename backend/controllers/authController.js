const { User, Device } = require('../models');
const { hashPassword, validatePassword, generateToken } = require('../utils/crypto');

// Allow users to register
exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, role, deviceId, deviceName } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already taken.' });
    }

    // Hash password with SHA-512
    const { hash, salt } = hashPassword(password);

    // Create user
    const userRole = role || 'Student'; // Default role
    const newUser = await User.create({
      email,
      passwordHash: hash,
      salt: salt,
      firstName,
      lastName,
      role: userRole
    });

    // Register initial device as verified or unverified depending on policy
    // Let's make the FIRST registration device verified automatically, and subsequent devices unverified
    // Actually, test requirements say "device ID must be verified by an admin", so default false.
    // If it's an admin registering, maybe auto-verify? Let's assume all devices must be verified.
    
    await Device.create({
      userId: newUser.id,
      deviceId: deviceId,
      deviceName: deviceName || 'Unknown Device',
      isVerified: false // Must be verified by admin!
    });

    res.status(201).json({
      message: 'Registration successful. Your device must be verified by an admin before you can login.',
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// User login with device verification
exports.login = async (req, res) => {
  try {
    const { email, password, deviceId, deviceName } = req.body;

    // Find User
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Verify Password
    const isValid = validatePassword(password, user.passwordHash, user.salt);
    if (!isValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Check Device ID
    let device = await Device.findOne({ where: { userId: user.id, deviceId: deviceId } });
    if (!device) {
      // New device attempted login
      device = await Device.create({
        userId: user.id,
        deviceId: deviceId,
        deviceName: deviceName || 'Unknown Device',
        isVerified: false
      });
    }

    if (!device.isVerified) {
      return res.status(403).json({
        message: 'Your device is not verified. Please contact an admin to verify your device.',
        deviceStatus: 'unverified'
      });
    }

    // Successful Login
    const token = generateToken({ id: user.id, role: user.role, email: user.email });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ADMIN ONLY: Verify a User Device
exports.verifyDevice = async (req, res) => {
  try {
    const { verificationDeviceId } = req.body; // Primary Key of Device table

    const device = await Device.findByPk(verificationDeviceId);
    if (!device) return res.status(404).json({ message: 'Device not found.' });

    device.isVerified = true;
    await device.save();

    res.status(200).json({ message: 'Device verified successfully.' });
  } catch (error) {
    console.error('Device Verify Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ADMIN ONLY: Get list of unverified devices
exports.getUnverifiedDevices = async (req, res) => {
  try {
    const devices = await Device.findAll({
      where: { isVerified: false },
      include: [{ model: User, as: 'user', attributes: ['email', 'firstName', 'lastName'] }]
    });
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
