'use client';
import { useState } from 'react';

export default function Teachers() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [teachers] = useState([
    { id: 1, name: 'Dr. Smith', subject: 'Mathematics', email: 'smith@school.com', phone: '+250 788 111 222', experience: '10 years' },
    { id: 2, name: 'Ms. Johnson', subject: 'English', email: 'johnson@school.com', phone: '+250 788 333 444', experience: '8 years' },
    { id: 3, name: 'Mr. Brown', subject: 'Science', email: 'brown@school.com', phone: '+250 788 555 666', experience: '12 years' },
    { id: 4, name: 'Mrs. Davis', subject: 'History', email: 'davis@school.com', phone: '+250 788 777 888', experience: '6 years' }
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: '', subject: '', email: '', phone: '', qualification: '', experience: ''
  });

  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding teacher:', newTeacher);
    setShowAddForm(false);
    setNewTeacher({ name: '', subject: '', email: '', phone: '', qualification: '', experience: '' });
    alert('Teacher added successfully!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Teacher Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Teacher
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Teacher</h3>
          <form onSubmit={handleAddTeacher} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Teacher Name"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.email}
              onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.phone}
              onChange={(e) => setNewTeacher({...newTeacher, phone: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Qualification"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.qualification}
              onChange={(e) => setNewTeacher({...newTeacher, qualification: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Experience (e.g., 5 years)"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              value={newTeacher.experience}
              onChange={(e) => setNewTeacher({...newTeacher, experience: e.target.value})}
              required
            />
            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add Teacher
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{teacher.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{teacher.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{teacher.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{teacher.experience}</td>
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