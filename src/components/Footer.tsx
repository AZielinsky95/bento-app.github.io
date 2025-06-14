const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#1F2223' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Removed logo and Bento text */}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Bento. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Smart AI budgeting for everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
