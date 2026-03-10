const { sequelize, Account, Transaction } = require('../models');

// Service approach for handling business logic separately
class FeeService {
  async getOrCreateAccount(userId) {
    let account = await Account.findOne({ where: { userId } });
    if (!account) {
      account = await Account.create({ userId, balance: 0 });
    }
    return account;
  }

  async deposit(userId, amount, referenceId = null) {
    const transaction = await sequelize.transaction();
    try {
      const account = await this.getOrCreateAccount(userId);

      account.balance = parseFloat(account.balance) + parseFloat(amount);
      await account.save({ transaction });

      const newTx = await Transaction.create({
        accountId: account.id,
        type: 'Deposit',
        amount: amount,
        status: 'Completed',
        referenceId: referenceId
      }, { transaction });

      await transaction.commit();
      return { success: true, balance: account.balance, transaction: newTx };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async withdraw(userId, amount) {
    const transaction = await sequelize.transaction();
    try {
      const account = await this.getOrCreateAccount(userId);
      
      const currentBalance = parseFloat(account.balance);
      const withdrawAmount = parseFloat(amount);

      if (currentBalance < withdrawAmount) {
        throw new Error('Insufficient balance for withdrawal');
      }

      account.balance = currentBalance - withdrawAmount;
      await account.save({ transaction });

      const newTx = await Transaction.create({
        accountId: account.id,
        type: 'Withdrawal',
        amount: withdrawAmount,
        status: 'Completed'
      }, { transaction });

      await transaction.commit();
      return { success: true, balance: account.balance, transaction: newTx };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getBalance(userId) {
    const account = await this.getOrCreateAccount(userId);
    return { balance: parseFloat(account.balance) };
  }

  async getHistory(userId) {
    const account = await this.getOrCreateAccount(userId);
    const transactions = await Transaction.findAll({
      where: { accountId: account.id },
      order: [['createdAt', 'DESC']]
    });
    return transactions;
  }
}

module.exports = new FeeService();
