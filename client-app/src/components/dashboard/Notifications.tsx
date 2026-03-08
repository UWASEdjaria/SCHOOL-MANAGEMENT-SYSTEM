'use client';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: 'Fee Payment Reminder',
      message: 'Term 3 fees are due in 5 days. Please make payment to avoid late fees.',
      type: 'warning',
      date: '2024-01-20',
      read: false
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      message: 'Scheduled for next Friday at 2:00 PM. Please confirm your attendance.',
      type: 'info',
      date: '2024-01-18',
      read: true
    },
    {
      id: 3,
      title: 'Grade Report Available',
      message: 'Term 2 grade report is now available in your dashboard.',
      type: 'success',
      date: '2024-01-15',
      read: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`border-l-4 p-4 rounded-r-lg shadow ${getTypeColor(notification.type)} ${
              !notification.read ? 'ring-2 ring-blue-200' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <span className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-500 mt-2">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No notifications at this time</div>
        </div>
      )}
    </div>
  );
}