
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gray-900/90 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f8926b78-9e63-49c5-ad8b-2d0a25d0a7e9.png" 
              alt="Bento" 
              className="w-10 h-10 rounded-xl"
            />
            <span className="text-2xl font-bold text-white">Bento</span>
          </div>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-[#0D155D] hover:bg-[#0D155D]/80 text-white px-6 py-2 rounded-full transition-all duration-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
