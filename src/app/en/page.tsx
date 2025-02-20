export default function EnglishPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">English</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Language Settings</h2>
          <p className="text-gray-700 mb-4">
            Welcome to DABINKO&apos;s English version.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>English Documentation</li>
            <li>International Support</li>
            <li>Global Services</li>
            <li>Worldwide Network</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 