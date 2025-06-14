
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
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when Bento is available on the App Store.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
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
              className="flex-1 px-4 py-3 rounded-full border-0 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50"
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
