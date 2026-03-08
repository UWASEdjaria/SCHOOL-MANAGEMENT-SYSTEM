export default function Overview() {
  const stats = [
    { title: 'Total Students', value: '1,247', change: '+12 this month', color: 'bg-blue-500' },
    { title: 'Total Teachers', value: '89', change: '+3 this month', color: 'bg-green-500' },
    { title: 'Total Classes', value: '45', change: 'No change', color: 'bg-purple-500' },
    { title: 'Pending Fees', value: '2,450,000 RWF', change: '-500,000 RWF this week', color: 'bg-red-500' }
  ];

  const recentActivities = [
    { action: 'New student registration', user: 'John Doe', time: '2 hours ago' },
    { action: 'Fee payment received', user: 'Jane Smith', time: '4 hours ago' },
    { action: 'Grade updated', user: 'Teacher Mike', time: '6 hours ago' },
    { action: 'New teacher added', user: 'Admin', time: '1 day ago' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl font-bold mr-4`}>
                {stat.value.charAt(0)}
              </div>
              <div>
                <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div>
                  <span className="text-gray-800 font-medium">{activity.action}</span>
                <p className="text-gray-500 mt-2">{activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-100 text-blue-700 p-4 rounded-lg hover:bg-blue-200">
              <div className="text-2xl mb-2">👨🎓</div>
              <div className="text-sm font-medium">Add Student</div>
            </button>
            <button className="bg-green-100 text-green-700 p-4 rounded-lg hover:bg-green-200">
              <div className="text-2xl mb-2">👨🏫</div>
              <div className="text-sm font-medium">Add Teacher</div>
            </button>
            <button className="bg-purple-100 text-purple-700 p-4 rounded-lg hover:bg-purple-200">
              <div className="text-2xl mb-2">🏫</div>
              <div className="text-sm font-medium">Create Class</div>
            </button>
            <button className="bg-red-100 text-red-700 p-4 rounded-lg hover:bg-red-200">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-medium">View Reports</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}