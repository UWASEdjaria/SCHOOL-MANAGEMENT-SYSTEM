'use client';
import { useState } from 'react';

export default function Reports() {
  const [activeReport, setActiveReport] = useState('academic');

  const academicReports = [
    { class: 'Grade 10A', students: 32, avgGrade: 'B+', passRate: '94%', topSubject: 'Mathematics' },
    { class: 'Grade 9B', students: 28, avgGrade: 'A-', passRate: '96%', topSubject: 'English' },
    { class: 'Grade 11A', students: 30, avgGrade: 'B', passRate: '90%', topSubject: 'Science' },
    { class: 'Grade 10B', students: 25, avgGrade: 'B+', passRate: '92%', topSubject: 'History' }
  ];

  const attendanceReports = [
    { class: 'Grade 10A', totalStudents: 32, present: 30, absent: 2, rate: '94%' },
    { class: 'Grade 9B', totalStudents: 28, present: 27, absent: 1, rate: '96%' },
    { class: 'Grade 11A', totalStudents: 30, present: 28, absent: 2, rate: '93%' },
    { class: 'Grade 10B', totalStudents: 25, present: 24, absent: 1, rate: '96%' }
  ];

  const financialReports = [
    { month: 'January 2024', collected: '₹3,20,000', pending: '₹45,000', total: '₹3,65,000', rate: '88%' },
    { month: 'December 2023', collected: '₹3,15,000', pending: '₹30,000', total: '₹3,45,000', rate: '91%' },
    { month: 'November 2023', collected: '₹3,10,000', pending: '₹25,000', total: '₹3,35,000', rate: '93%' },
    { month: 'October 2023', collected: '₹3,05,000', pending: '₹40,000', total: '₹3,45,000', rate: '88%' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports & Analytics</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveReport('academic')}
          className={`px-4 py-2 rounded ${activeReport === 'academic' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Academic Reports
        </button>
        <button
          onClick={() => setActiveReport('attendance')}
          className={`px-4 py-2 rounded ${activeReport === 'attendance' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Attendance Reports
        </button>
        <button
          onClick={() => setActiveReport('financial')}
          className={`px-4 py-2 rounded ${activeReport === 'financial' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Financial Reports
        </button>
      </div>

      {activeReport === 'academic' && (
        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Academic Performance Overview</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Export Report
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Overall Pass Rate</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">B+</div>
                <div className="text-sm text-gray-600">Average Grade</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">115</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">4</div>
                <div className="text-sm text-gray-600">Active Classes</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Class</th>
                    <th className="text-left py-3 px-4">Students</th>
                    <th className="text-left py-3 px-4">Avg Grade</th>
                    <th className="text-left py-3 px-4">Pass Rate</th>
                    <th className="text-left py-3 px-4">Top Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {academicReports.map((report, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{report.class}</td>
                      <td className="py-3 px-4">{report.students}</td>
                      <td className="py-3 px-4">{report.avgGrade}</td>
                      <td className="py-3 px-4">{report.passRate}</td>
                      <td className="py-3 px-4">{report.topSubject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeReport === 'attendance' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Daily Attendance Report</h3>
            <div className="flex gap-2">
              <input
                type="date"
                className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                defaultValue="2024-01-20"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Export Report
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Class</th>
                  <th className="text-left py-3 px-4">Total Students</th>
                  <th className="text-left py-3 px-4">Present</th>
                  <th className="text-left py-3 px-4">Absent</th>
                  <th className="text-left py-3 px-4">Attendance Rate</th>
                </tr>
              </thead>
              <tbody>
                {attendanceReports.map((report, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{report.class}</td>
                    <td className="py-3 px-4">{report.totalStudents}</td>
                    <td className="py-3 px-4 text-green-600">{report.present}</td>
                    <td className="py-3 px-4 text-red-600">{report.absent}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        parseInt(report.rate) >= 95 ? 'bg-green-100 text-green-800' :
                        parseInt(report.rate) >= 90 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {report.rate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeReport === 'financial' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Financial Report</h3>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Export Report
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Month</th>
                  <th className="text-left py-3 px-4">Collected</th>
                  <th className="text-left py-3 px-4">Pending</th>
                  <th className="text-left py-3 px-4">Total Expected</th>
                  <th className="text-left py-3 px-4">Collection Rate</th>
                </tr>
              </thead>
              <tbody>
                {financialReports.map((report, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{report.month}</td>
                    <td className="py-3 px-4 text-green-600">{report.collected}</td>
                    <td className="py-3 px-4 text-red-600">{report.pending}</td>
                    <td className="py-3 px-4">{report.total}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        parseInt(report.rate) >= 90 ? 'bg-green-100 text-green-800' :
                        parseInt(report.rate) >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {report.rate}
                      </span>
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