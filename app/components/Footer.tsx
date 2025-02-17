import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Service Request System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 