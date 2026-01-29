const Features = () => {
  return (
    <section className="py-12 md:py-16 px-2 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to
            <br />
            manage your money.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful features designed to make managing your finances effortless
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {/* Feature 1: Fully Customizable Experience */}
          <div className="bg-[#F5F5F5] rounded-3xl pt-5 md:pt-8 px-6 md:px-10 pb-0 overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2 flex items-end justify-center">
                <img
                  src="/images/device1.png"
                  alt="Customizable Dashboard"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-left pt-0 md:pt-8 md:pb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  A Fully Customizable Experience
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Build Bento around how you think about money. {" "}
                  <span className="font-semibold">Compose personalized dashboards</span> with a flexible {" "}
                  <span className="font-semibold">widget</span> system tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Track Budgets, Tags, and More */}
          <div className="bg-[#F5F5F5] rounded-3xl py-5 md:py-10 px-6 md:px-10">
            <div className="flex flex-col-reverse md:flex-row-reverse gap-4 md:gap-6">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src="/images/widgetspread.png"
                  alt="Budget Tracking"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-left pt-0 md:pt-8 md:pb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Choose What You Track
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Set budgets, tag transactions, and track recurring expenses—all in one place. Finally, a clear picture of where your money goes.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Talk Directly to Your Finances */}
          <div className="bg-[#F5F5F5] rounded-3xl pt-5 md:pt-8 px-6 md:px-10 pb-0 overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2 flex items-end justify-center">
                <img
                  src="/images/device2.png"
                  alt="AI Assistant"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-left pt-0 md:pt-8 md:pb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Talk Directly to Your Finances
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Tired of spreadsheets? Meet Benii. Benii delivers deep insights into your spending and automatically <span className="font-semibold">tags, recategorizes, and analyzes</span> your transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4: All Your Accounts in One Place */}
          <div className="bg-[#F5F5F5] rounded-3xl pt-5 md:pt-8 px-6 md:px-10 pb-0 overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row-reverse gap-4 md:gap-6">
              <div className="w-full md:w-1/2 flex items-end justify-center">
                <img
                  src="/images/device3.png"
                  alt="All Accounts View"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-left pt-0 md:pt-8 md:pb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  All Your Accounts in One Place
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  A unified view of your financial accounts, with powerful grouping and visualization built directly into your dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5: Bank-Level Security */}
          <div className="bg-[#F5F5F5] rounded-3xl py-5 md:py-10 px-6 md:px-10">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src="/images/banklvlsecurity.svg"
                  alt="Bank Level Security"
                  className="w-full max-w-sm"
                />
              </div>
              <div className="w-full md:w-1/2 text-left pt-0 md:pt-8 md:pb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Bank-Level Security
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Your data stays yours. <span className="font-semibold">Read-only access</span>, <span className="font-semibold">AES-256 encryption</span>, and a strict policy: we <span className="font-semibold">never sell your data</span>. Ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
