import api, { getDeviceId } from '../utils/api';
import Cookies from 'js-cookie';

export const login = async (email: string, password: string) => {
  const deviceId = getDeviceId();
  // Pass dummy device name, in production this would use user-agent parsing
  const deviceName = 'Admin Web Dashboard';

  const response = await api.post('/auth/login', {
    email,
    password,
    deviceId,
    deviceName
  });

  if (response.data.token) {
    // Save token to cookies for 1 day
    Cookies.set('token', response.data.token, { expires: 1 });
    // Save user data
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }

  return response.data;
};

export const logout = () => {
  Cookies.remove('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export const getUnverifiedDevices = async () => {
  const response = await api.get('/auth/unverified-devices');
  return response.data;
};

export const verifyDevice = async (verificationDeviceId: number | string) => {
  const response = await api.post('/auth/verify-device', { verificationDeviceId });
  return response.data;
};
