'use client';
import { useState } from 'react';

export default function FeeManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const feeOverview = [
    { category: 'Total Collected', amount: '₹12,45,000', change: '+8%', color: 'text-green-600' },
    { category: 'Pending Fees', amount: '₹2,45,000', change: '-12%', color: 'text-red-600' },
    { category: 'This Month', amount: '₹3,20,000', change: '+15%', color: 'text-blue-600' },
    { category: 'Overdue', amount: '₹85,000', change: '-5%', color: 'text-orange-600' }
  ];

  const recentPayments = [
    { student: 'John Doe', class: 'Grade 10A', amount: '₹15,000', date: '2024-01-20', status: 'Paid' },
    { student: 'Jane Smith', class: 'Grade 9B', amount: '₹15,000', date: '2024-01-19', status: 'Paid' },
    { student: 'Mike Johnson', class: 'Grade 11A', amount: '₹15,000', date: '2024-01-18', status: 'Pending' },
    { student: 'Sarah Wilson', class: 'Grade 10B', amount: '₹15,000', date: '2024-01-17', status: 'Overdue' }
  ];

  const [feeStructure, setFeeStructure] = useState([
    { class: 'Grade 9', tuition: 12000, meals: 3000, transport: 2000, activities: 1000 },
    { class: 'Grade 10', tuition: 13000, meals: 3000, transport: 2000, activities: 1000 },
    { class: 'Grade 11', tuition: 14000, meals: 3000, transport: 2000, activities: 1000 },
    { class: 'Grade 12', tuition: 15000, meals: 3000, transport: 2000, activities: 1000 }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Management</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('structure')}
          className={`px-4 py-2 rounded ${activeTab === 'structure' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Fee Structure
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 rounded ${activeTab === 'payments' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Payment History
        </button>
      </div>

      {activeTab === 'overview' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {feeOverview.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600 text-sm font-medium">{item.category}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">{item.amount}</p>
                <p className={`text-sm mt-1 ${item.color}`}>{item.change} from last month</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Payments</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Student</th>
                    <th className="text-left py-3 px-4">Class</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((payment, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{payment.student}</td>
                      <td className="py-3 px-4">{payment.class}</td>
                      <td className="py-3 px-4">{payment.amount}</td>
                      <td className="py-3 px-4">{payment.date}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                          payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'structure' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure by Class</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Class</th>
                  <th className="text-left py-3 px-4">Tuition</th>
                  <th className="text-left py-3 px-4">Meals</th>
                  <th className="text-left py-3 px-4">Transport</th>
                  <th className="text-left py-3 px-4">Activities</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{fee.class}</td>
                    <td className="py-3 px-4">₹{fee.tuition.toLocaleString()}</td>
                    <td className="py-3 px-4">₹{fee.meals.toLocaleString()}</td>
                    <td className="py-3 px-4">₹{fee.transport.toLocaleString()}</td>
                    <td className="py-3 px-4">₹{fee.activities.toLocaleString()}</td>
                    <td className="py-3 px-4 font-bold">₹{(fee.tuition + fee.meals + fee.transport + fee.activities).toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'payments' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">All Payment Records</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search student..."
                className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Student</th>
                  <th className="text-left py-3 px-4">Class</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((payment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{payment.student}</td>
                    <td className="py-3 px-4">{payment.class}</td>
                    <td className="py-3 px-4">{payment.amount}</td>
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">Mobile Money</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                      <button className="text-green-600 hover:text-green-800">Receipt</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}