'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../services/authService';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const data = await login(formData.username, formData.password);
      
      if (data.user.role === 'Admin') {
         setError('Admins must use the Admin Dashboard.');
         return;
      }
      
      router.push('/dashboard');
    } catch (err: any) {
      if (err.response?.data?.message) {
         setError(err.response.data.message);
      } else {
         setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0f172a] text-[#f8fafc] font-sans selection:bg-blue-500/30 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4f46e5]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#c084fc]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="bg-[#1e293b] p-8 rounded-2xl border border-white/10 shadow-2xl w-[400px] max-w-[95%] relative" style={{ zIndex: 50 }}>
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#818cf8] to-[#c084fc] bg-clip-text text-transparent mb-2">Student & Parent</h1>
          <p className="text-[#94a3b8] text-sm">Welcome back! Please enter your details.</p>
        </header>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 relative" style={{ zIndex: 60 }}>
          <div className="relative">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#818cf8] mb-2 ml-1">Username</label>
            <input
              type="text"
              placeholder="e.g. john_doe"
              autoFocus
              className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/50 focus:border-[#4f46e5] transition-all text-white placeholder-white/20 select-text relative z-[70] cursor-text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#818cf8] mb-2 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/50 focus:border-[#4f46e5] transition-all text-white placeholder-white/20 select-text relative z-[70] cursor-text"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-3.5 rounded-xl shadow-xl shadow-[#4f46e5]/20 transition-all transform active:scale-[0.98] disabled:opacity-50 relative z-[80]"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-white/5 space-y-4">
          <p className="text-sm text-[#94a3b8]">
            Don't have an account? <a href="/register" className="text-[#818cf8] hover:underline font-semibold">Create Account</a>
          </p>
          <a href="http://localhost/school-management-system/" className="text-xs text-[#94a3b8] hover:text-[#f8fafc] font-medium transition-colors inline-flex items-center gap-2">
            <span>←</span> Back to Main Site
          </a>
        </div>
      </div>
    </div>
  );
}
