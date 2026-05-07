import Footer from "@/components/Footer";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F6FC] to-white flex flex-col">
      <main className="container mx-auto px-6 py-16 md:py-24 max-w-2xl flex-1">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Need <span className="text-[#5C68D1]">Help?</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            If you are experiencing technical issues with the Bento app, send us an email and we'll do our best to get back to you as soon as we can.
          </p>

          <a
            href="mailto:bento@aziolabs.com"
            className="inline-flex items-center gap-2 bg-[#5C68D1] hover:bg-[#4a56bf] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            bento@aziolabs.com
          </a>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">
              Or reach out from the app
            </h2>
            <ol className="space-y-4">
              {[
                <>Go to the <strong className="text-gray-900">More</strong> menu of the app.</>,
                <>Scroll down to the <strong className="text-gray-900">About</strong> section.</>,
                <>Select <strong className="text-gray-900">Report Issue</strong>.</>,
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5C68D1]/10 text-[#5C68D1] font-semibold text-sm flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
