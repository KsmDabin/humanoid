import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black py-2 w-full fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-xl font-bold">Service Request System</h1>
      </div>
    </header>
  );
};

export default Header; 