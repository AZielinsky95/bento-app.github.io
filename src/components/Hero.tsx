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
          description: "We'll notify you when Bento is available on the App Store."
        });
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error subscribing to waitlist:', error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  return <section className="min-h-screen bg-[#111111] flex flex-col items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-16">
            <img src="/lovable-uploads/103b3f9e-3958-45e1-9be2-7845e0a8be77.png" alt="Bento" className="w-12 h-12 rounded-lg mr-4" />
            <span className="text-white font-bold text-5xl">Bento</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-16 leading-tight max-w-3xl mx-auto">
            Your <span className="inline-block w-6 h-6 md:w-8 md:h-8 mx-1 mb-1 bg-gradient-to-r from-[#5C68D1] to-[#6E7CF7] rounded-sm" style={{
            maskImage: `url('/lovable-uploads/3ae8efa3-758c-4fe8-9674-1cf074892ac7.png')`,
            WebkitMaskImage: `url('/lovable-uploads/3ae8efa3-758c-4fe8-9674-1cf074892ac7.png')`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center'
          }}></span> <span className="bg-gradient-to-r from-[#5C68D1] to-[#6E7CF7] bg-clip-text text-transparent">AI</span> <span className="bg-gradient-to-r from-[#5C68D1] to-[#6E7CF7] bg-clip-text text-transparent">powered</span> financial assistant is coming soon.
          </h1>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center mb-20">
            <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 px-6 py-3 text-base rounded-full border-0 bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600 focus:ring-2 focus:ring-white/20 h-12" required />
            <Button type="submit" disabled={isSubmitting} className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base rounded-full font-semibold transition-all duration-200 disabled:opacity-50 whitespace-nowrap h-12">
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Intelligent */}
            <div className="bg-gray-800/50 rounded-2xl p-8 text-left border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">✨</span>
                <h3 className="text-lg font-semibold text-white">Intelligent</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Tired of spreadsheets? Bento lets you talk to your finances directly.</p>
            </div>

            {/* Secure */}
            <div className="bg-gray-800/50 rounded-2xl p-8 text-left border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🔒</span>
                <h3 className="text-lg font-semibold text-white">Secure</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">We use read-only access through trusted providers like Plaid. Your data stays yours.</p>
            </div>

            {/* Modular */}
            <div className="bg-gray-800/50 rounded-2xl p-8 text-left border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🧩</span>
                <h3 className="text-lg font-semibold text-white">Modular</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">A fresh take on personal finance. No one-size-fits-all. Build your own experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;