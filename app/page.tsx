export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          🔧 Royalty Repair CRM
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Enterprise-grade Customer Relationship Management system for repair service businesses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">👥 Customer Management</h3>
            <p className="text-gray-600">Complete customer profiles and service history</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">🔧 Repair Tracking</h3>
            <p className="text-gray-600">End-to-end job management and tracking</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">💰 Invoice & Payments</h3>
            <p className="text-gray-600">Automated billing and payment processing</p>
          </div>
        </div>
        <div className="mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Deployment Successful - Build Stabilization Complete
          </div>
        </div>
      </div>
    </div>
  )
}