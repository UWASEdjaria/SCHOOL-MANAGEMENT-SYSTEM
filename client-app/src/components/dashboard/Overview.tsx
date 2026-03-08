export default function Overview() {
  const stats = [
    { title: 'Total Fees', value: '2,450,000 RWF', status: 'Due: 450,000 RWF' },
    { title: 'Attendance', value: '95%', status: 'This Month' },
    { title: 'Grades', value: 'A-', status: 'Average' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className="text-sm text-gray-700 mt-1">{stat.status}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-800">Math Assignment Submitted</span>
            <span className="text-sm text-gray-600">2 days ago</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-800">Fee Payment Due</span>
            <span className="text-sm text-red-600 font-medium">Due in 5 days</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-800">Parent-Teacher Meeting</span>
            <span className="text-sm text-gray-600">Next week</span>
          </div>
        </div>
      </div>
    </div>
  );
}