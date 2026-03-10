interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'students', label: 'Students', icon: '👨‍🎓' },
    { id: 'teachers', label: 'Teachers', icon: '👨‍🏫' },
    { id: 'classes', label: 'Classes', icon: '🏫' },
    { id: 'fees', label: 'Fee Management', icon: '💰' },
    { id: 'devices', label: 'Device Requests', icon: '📱' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg hidden lg:block">
      <div className="p-4 sm:p-6 border-b">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-4 sm:px-6 py-3 text-left hover:bg-gray-50 ${
              activeTab === item.id ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-600' : 'text-gray-800'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span className="text-sm sm:text-base">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}