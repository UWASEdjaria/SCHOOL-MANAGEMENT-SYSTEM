'use client';
import { useState } from 'react';

export default function Students() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students] = useState([
    { id: 1, name: 'John Doe', class: 'Grade 10A', email: 'john@email.com', phone: '+250 788 123 456', status: 'Active' },
    { id: 2, name: 'Jane Smith', class: 'Grade 9B', email: 'jane@email.com', phone: '+250 788 234 567', status: 'Active' },
    { id: 3, name: 'Mike Johnson', class: 'Grade 11A', email: 'mike@email.com', phone: '+250 788 345 678', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', class: 'Grade 10B', email: 'sarah@email.com', phone: '+250 788 456 789', status: 'Active' }
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '', class: '', email: '', phone: '', parentName: '', parentPhone: ''
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding student:', newStudent);
    setShowAddForm(false);
    setNewStudent({ name: '', class: '', email: '', phone: '', parentName: '', parentPhone: '' });
    alert('Student added successfully!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
          <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Student Name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.name}
              onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Class"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.class}
              onChange={(e) => setNewStudent({...newStudent, class: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.email}
              onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.phone}
              onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Parent Name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.parentName}
              onChange={(e) => setNewStudent({...newStudent, parentName: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Parent Phone"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newStudent.parentPhone}
              onChange={(e) => setNewStudent({...newStudent, parentPhone: e.target.value})}
              required
            />
            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add Student
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}