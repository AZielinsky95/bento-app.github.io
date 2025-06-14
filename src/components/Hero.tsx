
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
    <section className="min-h-screen bg-[#111111] flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-12">
              <img 
                src="/lovable-uploads/f8926b78-9e63-49c5-ad8b-2d0a25d0a7e9.png" 
                alt="Bento" 
                className="w-8 h-8 rounded-lg mr-3"
              />
              <span className="text-white text-xl font-semibold">Bento</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Bento Finance
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              Works out of the box with automated categorization and intuitive design. Ask anything based on real data.
            </p>
            
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 text-base rounded-full border-0 bg-gray-800 text-white placeholder-gray-500 focus:bg-gray-700 focus:ring-2 focus:ring-white/20 h-12"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-base rounded-full font-semibold transition-all duration-200 disabled:opacity-50 whitespace-nowrap h-12"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Categorization */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Categorization</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed to make sense quickly — and keep delivering.
              </p>
            </div>

            {/* Ask Anything */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Ask Anything</h3>
              <p className="text-gray-400 leading-relaxed">
                Grounded in real data and logic, not speculation.
              </p>
            </div>

            {/* Widget-Based Dashboards */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Widget-Based Dashboards</h3>
              <p className="text-gray-400 leading-relaxed">
                Build your dashboard like a bento box with only what you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
