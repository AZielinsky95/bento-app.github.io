
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-[#0D155D] flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f8926b78-9e63-49c5-ad8b-2d0a25d0a7e9.png" 
              alt="Bento" 
              className="w-24 h-24 rounded-2xl mx-auto mb-8 shadow-2xl"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smart AI Budgeting
              <br />
              <span className="text-blue-400">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bento uses advanced AI to help you manage your finances effortlessly. 
              Get personalized insights, automated budgeting, and smart spending recommendations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-[#0D155D] hover:bg-[#0D155D]/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join the Waitlist
            </Button>
            <p className="text-sm text-gray-400">Coming soon to iOS App Store</p>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-blue-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
