const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center pt-12 md:pt-[140px] pb-8 px-4 md:px-6 overflow-hidden">
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
        <p className="text-[#67686D] text-[20px] leading-[32px] max-w-lg mx-auto mb-8">
          Create personalized dashboards, track spending across accounts, and get insights that actually help you save money. Personal finance, reimagined.
        </p>

        {/* App Store Button */}
        <div className="flex justify-center mb-0 md:mb-2">
          <a
            href="https://apps.apple.com/ca/app/bento-budget-money-tracker/id6754046684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-105"
          >
            <img
              src="/images/apple.svg"
              alt="Download on the App Store"
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div>

        {/* Hero Phone Image */}
        <div className="flex justify-center -mx-6 md:mx-0">
          <img
            src="/images/handphone.png"
            alt="Bento App Dashboard"
            className="w-[185%] max-w-[1000px] md:max-w-5xl lg:max-w-6xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
