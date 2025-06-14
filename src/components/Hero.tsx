
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // TODO: Replace with actual Mailchimp integration
    // You'll need to provide your Mailchimp API key and audience ID
    try {
      // Placeholder for Mailchimp API call
      // const response = await fetch('/api/mailchimp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Simulate API call for now
      setTimeout(() => {
        toast({
          title: "You're on the waitlist!",
          description: "We'll notify you when Bento is available on the App Store.",
        });
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error subscribing to waitlist:', error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#1F2223] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <img 
                  src="/lovable-uploads/f8926b78-9e63-49c5-ad8b-2d0a25d0a7e9.png" 
                  alt="Bento" 
                  className="w-8 h-8 rounded-lg mr-3"
                />
                <span className="text-white text-xl font-semibold">Bento</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bento Finance
              </h1>
              <p className="text-lg text-gray-300 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Works out of the box with automated categorization and intuitive design. Ask anything based on real data
              </p>
            </div>
            
            <div className="mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 text-base rounded-full border-0 bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600 focus:ring-2 focus:ring-white/20"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-base rounded-full font-semibold transition-all duration-200 disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-sm text-gray-400 mb-8">
                Coming soon to iOS App Store
              </p>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative z-10 ml-12">
                <div className="w-80 h-[600px] bg-white rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-100 rounded-[2.5rem] relative overflow-hidden">
                    {/* Phone UI placeholder */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-center">
                      <div className="w-32 h-6 bg-black rounded-full"></div>
                    </div>
                    <div className="pt-16 p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Daily Dashboard</h3>
                        <div className="flex justify-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {/* Chart area */}
                      <div className="bg-white rounded-2xl p-4 mb-4">
                        <div className="flex justify-between items-end h-32">
                          <div className="w-6 bg-blue-200 rounded-t" style={{ height: '60%' }}></div>
                          <div className="w-6 bg-blue-300 rounded-t" style={{ height: '80%' }}></div>
                          <div className="w-6 bg-blue-400 rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-6 bg-blue-500 rounded-t" style={{ height: '90%' }}></div>
                          <div className="w-6 bg-blue-600 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                      </div>
                      {/* Budget categories */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">Shopping</span>
                          </div>
                          <span className="text-sm font-medium">$125</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">Food</span>
                          </div>
                          <span className="text-sm font-medium">$89</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600">Transport</span>
                          </div>
                          <span className="text-sm font-medium">$45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary phone mockup */}
              <div className="absolute top-8 -left-8 z-0">
                <div className="w-64 h-[480px] bg-white rounded-[2.5rem] p-2 shadow-xl opacity-80">
                  <div className="w-full h-full bg-gray-50 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white flex items-center justify-center">
                      <div className="w-24 h-4 bg-black rounded-full"></div>
                    </div>
                    <div className="pt-14 p-4">
                      <div className="text-center mb-4">
                        <h4 className="text-base font-medium text-gray-700">Bento Chat</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-sm max-w-48 ml-auto text-sm">
                          How much did I spend on food this week?
                        </div>
                        <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-48 text-sm">
                          You spent $89 on food this week, which is 12% less than last week!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
