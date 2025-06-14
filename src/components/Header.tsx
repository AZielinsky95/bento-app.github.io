
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Bento</span>
          </div>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
