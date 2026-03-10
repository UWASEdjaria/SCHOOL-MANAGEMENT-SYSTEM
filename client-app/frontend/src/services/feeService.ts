import api from '../utils/api';

export const getBalance = async () => {
  const response = await api.get('/fees/balance');
  return response.data;
};

export const getTransactionHistory = async () => {
  const response = await api.get('/fees/history');
  return response.data.transactions;
};

export const depositFee = async (amount: number, description?: string) => {
  const response = await api.post('/fees/deposit', { amount, description });
  return response.data;
};

export const withdrawFee = async (amount: number, description?: string) => {
  const response = await api.post('/fees/withdraw', { amount, description });
  return response.data;
};
