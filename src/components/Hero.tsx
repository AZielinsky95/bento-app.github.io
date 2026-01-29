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

    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://us20.list-manage.com/subscribe/post?u=393d8b0631abc4754e2a34c51&id=b983b2d8d9';
      form.target = iframe.name;

      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'EMAIL';
      emailInput.value = email;
      form.appendChild(emailInput);

      iframe.contentDocument?.body.appendChild(form);
      form.submit();

      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);

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

  return (
    <section className="min-h-screen bg-white flex flex-col items-center pt-12 md:pt-[200px] pb-8 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="/images/bentologo.svg"
            alt="Bento Logo"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
          The most <span className="text-[#5C68D1] font-bold">powerful</span> way to track your <span className="text-[#5C68D1] font-bold">finances</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Create personalized dashboards, analyze spending across accounts, and uncover insights that help you save money. Personal finance, reimagined.
        </p>

        {/* Coming Soon Badge */}
        {/* <p className="text-gray-500 text-base font-medium mb-4">Coming soon to iOS</p> */}

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 text-base rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-[#5C68D1] focus:ring-2 focus:ring-[#5C68D1]/20 h-12"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#5C68D1] hover:bg-[#4a56bf] text-white px-8 py-3 text-base rounded-full font-semibold transition-all duration-200 disabled:opacity-50 whitespace-nowrap h-12"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>

        {/* Hero Phone Image */}
        <div className="flex justify-center -mx-6 md:mx-0">
          <img
            src="/images/handphone.png"
            alt="Bento App Dashboard"
            className="w-[120%] max-w-[600px] md:max-w-3xl lg:max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
