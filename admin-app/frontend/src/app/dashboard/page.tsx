'use client';
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import Overview from '@/components/dashboard/Overview';
import Students from '@/components/dashboard/Students';
import Teachers from '@/components/dashboard/Teachers';
import Classes from '@/components/dashboard/Classes';
import FeeManagement from '@/components/dashboard/FeeManagement';
import DeviceVerification from '@/components/dashboard/DeviceVerification';
import Reports from '@/components/dashboard/Reports';
import Settings from '@/components/dashboard/Settings';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'students' && <Students />}
          {activeTab === 'teachers' && <Teachers />}
          {activeTab === 'classes' && <Classes />}
          {activeTab === 'fees' && <FeeManagement />}
          {activeTab === 'devices' && <DeviceVerification />}
          {activeTab === 'reports' && <Reports />}
          {activeTab === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  );
}