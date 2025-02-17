const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Service Request System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 