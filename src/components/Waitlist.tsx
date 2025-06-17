import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Waitlist = () => {
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

      // Submit to Mailchimp via hidden iframe
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
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
      
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
    <section id="waitlist" className="py-20 bg-gradient-to-br from-[#0D155D] to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be the First to Experience Bento
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our waitlist and get early access to the smartest budgeting app ever created.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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

          <p className="text-sm text-blue-200 mt-4">
            No spam, ever. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
