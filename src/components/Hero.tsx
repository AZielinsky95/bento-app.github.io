
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
    <section className="min-h-screen bg-gradient-to-br from-[#1F2223] via-gray-800 to-[#0D155D] flex items-center justify-center">
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
          
          <div className="mb-8">
            <p className="text-xl text-blue-100 mb-8">
              Join our waitlist and get early access to the smartest budgeting app ever created.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:bg-white/20"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-[#0D155D] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>

            <p className="text-sm text-blue-200">
              No spam, ever. We respect your privacy.
            </p>
          </div>

          <p className="text-sm text-gray-400">Coming soon to iOS App Store</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
