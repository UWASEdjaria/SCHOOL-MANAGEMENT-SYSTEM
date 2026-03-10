const feeService = require('../services/feeService');

exports.deposit = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount, referenceId } = req.body;

    const result = await feeService.deposit(userId, amount, referenceId);
    res.status(200).json({ message: 'Deposit successful', data: result });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error processing deposit' });
  }
};

exports.withdraw = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;

    const result = await feeService.withdraw(userId, amount);
    res.status(200).json({ message: 'Withdrawal successful', data: result });
  } catch (error) {
    if (error.message === 'Insufficient balance for withdrawal') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error processing withdrawal' });
  }
};

exports.getBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    // Admins can check balance for specific user by passing a query param `?userId=X`
    const targetUserId = (req.user.role === 'Admin' && req.query.userId) 
      ? parseInt(req.query.userId) 
      : userId;

    const result = await feeService.getBalance(targetUserId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving balance' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const targetUserId = (req.user.role === 'Admin' && req.query.userId) 
      ? parseInt(req.query.userId) 
      : userId;

    const result = await feeService.getHistory(targetUserId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving history' });
  }
};
