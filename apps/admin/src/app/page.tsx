export default function AdminHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">TPG Admin Portal</h1>
        <p className="text-gray-600 text-center mb-8">Sign in to manage properties, developers, and projects.</p>
        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Login
        </button>
      </div>
    </div>
  );
}
