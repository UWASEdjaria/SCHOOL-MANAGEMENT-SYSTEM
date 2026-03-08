'use client';
import { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('school');
  const [schoolSettings, setSchoolSettings] = useState({
    name: 'Green Valley High School',
    address: 'Kigali, Rwanda',
    phone: '+250 788 123 456',
    email: 'admin@greenvalley.edu.rw',
    website: 'www.greenvalley.edu.rw'
  });

  const [academicSettings, setAcademicSettings] = useState({
    currentYear: '2024',
    currentTerm: 'Term 1',
    termStartDate: '2024-01-15',
    termEndDate: '2024-04-15',
    gradingSystem: 'A-F'
  });

  const handleSaveSchool = (e: React.FormEvent) => {
    e.preventDefault();
    alert('School settings saved successfully!');
  };

  const handleSaveAcademic = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Academic settings saved successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('school')}
          className={`px-4 py-2 rounded ${activeTab === 'school' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          School Info
        </button>
        <button
          onClick={() => setActiveTab('academic')}
          className={`px-4 py-2 rounded ${activeTab === 'academic' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Academic Settings
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 rounded ${activeTab === 'users' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          User Management
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 rounded ${activeTab === 'backup' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Backup & Security
        </button>
      </div>

      {activeTab === 'school' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">School Information</h3>
          <form onSubmit={handleSaveSchool} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">School Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={schoolSettings.name}
                onChange={(e) => setSchoolSettings({...schoolSettings, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={schoolSettings.address}
                onChange={(e) => setSchoolSettings({...schoolSettings, address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={schoolSettings.phone}
                onChange={(e) => setSchoolSettings({...schoolSettings, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={schoolSettings.email}
                onChange={(e) => setSchoolSettings({...schoolSettings, email: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Website</label>
              <input
                type="url"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={schoolSettings.website}
                onChange={(e) => setSchoolSettings({...schoolSettings, website: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                Save School Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'academic' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Settings</h3>
          <form onSubmit={handleSaveAcademic} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Academic Year</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={academicSettings.currentYear}
                onChange={(e) => setAcademicSettings({...academicSettings, currentYear: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Current Term</label>
              <select
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={academicSettings.currentTerm}
                onChange={(e) => setAcademicSettings({...academicSettings, currentTerm: e.target.value})}
              >
                <option value="Term 1">Term 1</option>
                <option value="Term 2">Term 2</option>
                <option value="Term 3">Term 3</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Term Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={academicSettings.termStartDate}
                onChange={(e) => setAcademicSettings({...academicSettings, termStartDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Term End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={academicSettings.termEndDate}
                onChange={(e) => setAcademicSettings({...academicSettings, termEndDate: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Grading System</label>
              <select
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
                value={academicSettings.gradingSystem}
                onChange={(e) => setAcademicSettings({...academicSettings, gradingSystem: e.target.value})}
              >
                <option value="A-F">A-F System</option>
                <option value="1-100">Percentage (1-100)</option>
                <option value="1-10">Scale (1-10)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                Save Academic Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded">
              <div>
                <div className="font-medium">Admin User</div>
                <div className="text-sm text-gray-600">System Administrator</div>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">Edit</button>
                <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm">Disable</button>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border rounded">
              <div>
                <div className="font-medium">Teacher Portal</div>
                <div className="text-sm text-gray-600">Teacher Access</div>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Active</button>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">Manage</button>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border rounded">
              <div>
                <div className="font-medium">Student Portal</div>
                <div className="text-sm text-gray-600">Student & Parent Access</div>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Active</button>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">Manage</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'backup' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup & Security</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Database Backup</h4>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Create Backup
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Restore Backup
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">Last backup: January 20, 2024 at 2:30 AM</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Security Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Enable two-factor authentication</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Require password change every 90 days</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Enable login notifications</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">System Maintenance</h4>
              <div className="flex gap-4">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Clear Cache
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  System Check
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}