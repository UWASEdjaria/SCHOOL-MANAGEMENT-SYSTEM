'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getBalance, getTransactionHistory } from '../../services/feeService';

export default function Fees() {
  const router = useRouter();
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const balRes = await getBalance();
      setBalance(balRes.balance);

      const histRes = await getTransactionHistory();
      setTransactions(histRes);
    } catch (err: any) {
      setError('Failed to load fee information.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePayNow = () => {
    router.push('/payment');
  };

  if (loading) return <div>Loading fee data...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Account Balance Card */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-600 mb-1">Current Balance</h3>
          <p className={`text-4xl font-bold ${balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
             {balance.toLocaleString()} RWF
          </p>
          <p className="text-sm text-gray-500 mt-2">
             {balance < 0 ? 'You have outstanding fees.' : 'Your account is in good standing.'}
          </p>
          <button 
            onClick={handlePayNow}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Deposit Funds (Pay Fees)
          </button>
        </div>

        {/* Transaction History Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
          
          {transactions.length === 0 ? (
            <p className="text-gray-500 italic">No transactions found.</p>
          ) : (
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {transactions.map((t, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                  <div>
                    <div className="font-semibold text-gray-800 capitalize">{t.type}</div>
                    <div className="text-xs text-gray-500">{new Date(t.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${t.type === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
                      {t.type === 'deposit' ? '+' : '-'}{t.amount.toLocaleString()} RWF
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}