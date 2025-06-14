
import { Check, Calendar, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Check,
      title: "AI-Powered Insights",
      description: "Get personalized financial recommendations based on your spending patterns and goals."
    },
    {
      icon: Calendar,
      title: "Automated Budgeting",
      description: "Let AI create and adjust your budget automatically as your income and expenses change."
    },
    {
      icon: User,
      title: "Smart Notifications",
      description: "Receive timely alerts about bill payments, unusual spending, and savings opportunities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Bento?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of personal finance management with our intelligent features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-200 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
