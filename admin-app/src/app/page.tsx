export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">School Management System</h1>
        <p className="text-xl mb-8">Admin Portal - Management Dashboard</p>
        <div className="space-x-4">
          <a href="/login" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
}
