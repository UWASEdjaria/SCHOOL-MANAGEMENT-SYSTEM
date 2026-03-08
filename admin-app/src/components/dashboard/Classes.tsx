'use client';
import { useState } from 'react';

export default function Classes() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [classes] = useState([
    { id: 1, name: 'Grade 10A', teacher: 'Dr. Smith', students: 32, subject: 'Mathematics', room: 'Room 101' },
    { id: 2, name: 'Grade 9B', teacher: 'Ms. Johnson', students: 28, subject: 'English', room: 'Room 102' },
    { id: 3, name: 'Grade 11A', teacher: 'Mr. Brown', students: 30, subject: 'Science', room: 'Room 103' },
    { id: 4, name: 'Grade 10B', teacher: 'Mrs. Davis', students: 25, subject: 'History', room: 'Room 104' }
  ]);

  const [newClass, setNewClass] = useState({
    name: '', teacher: '', subject: '', room: '', capacity: ''
  });

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding class:', newClass);
    setShowAddForm(false);
    setNewClass({ name: '', teacher: '', subject: '', room: '', capacity: '' });
    alert('Class created successfully!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Class Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          + Create Class
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Create New Class</h3>
          <form onSubmit={handleAddClass} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Class Name (e.g., Grade 10A)"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={newClass.name}
              onChange={(e) => setNewClass({...newClass, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Class Teacher"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={newClass.teacher}
              onChange={(e) => setNewClass({...newClass, teacher: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Main Subject"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={newClass.subject}
              onChange={(e) => setNewClass({...newClass, subject: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Room Number"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={newClass.room}
              onChange={(e) => setNewClass({...newClass, room: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Capacity"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={newClass.capacity}
              onChange={(e) => setNewClass({...newClass, capacity: e.target.value})}
              required
            />
            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Create Class
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                {classItem.students} students
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div><strong>Teacher:</strong> {classItem.teacher}</div>
              <div><strong>Subject:</strong> {classItem.subject}</div>
              <div><strong>Room:</strong> {classItem.room}</div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
                View Students
              </button>
              <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-200">
                Edit
              </button>
              <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}