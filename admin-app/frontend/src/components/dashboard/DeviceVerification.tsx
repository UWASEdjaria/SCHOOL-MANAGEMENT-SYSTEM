'use client';
import { useState, useEffect } from 'react';
import { getUnverifiedDevices, verifyDevice } from '../../services/authService';

interface Device {
  id: number;
  deviceId: string;
  deviceName: string;
  createdAt: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

export default function DeviceVerification() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDevices = async () => {
    try {
      const data = await getUnverifiedDevices();
      setDevices(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error fetching devices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleVerify = async (deviceId: number) => {
    try {
      await verifyDevice(deviceId);
      // Remove from list
      setDevices(devices.filter(d => d.id !== deviceId));
    } catch (err: any) {
      alert(err.response?.data?.message || 'Error verifying device');
    }
  };

  if (loading) return <div>Loading devices...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Verification Requests</h2>
      
      {devices.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-gray-500 text-center">
          No pending device verification requests.
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {devices.map((device) => (
                <tr key={device.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{device.user.firstName} {device.user.lastName}</div>
                    <div className="text-sm text-gray-500">{device.user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{device.deviceName || 'Unknown Device'}</div>
                    <div className="text-xs text-gray-400 font-mono mt-1">{device.deviceId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(device.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleVerify(device.id)}
                      className="text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded transition-colors"
                    >
                      Approve Access
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
