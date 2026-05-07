import Footer from "@/components/Footer";

const Help = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="container mx-auto px-6 py-12 max-w-2xl flex-1">
        <article className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h1 className="text-3xl font-bold mb-4">Need Help?</h1>

          <p>
            If you are experiencing technical issues with the Bento app, please contact us at{" "}
            <a href="mailto:bento@aziolabs.com">bento@aziolabs.com</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">Reach out from the app:</h2>
          <ol>
            <li>Go to the more menu of the app.</li>
            <li>Scroll down to the About section.</li>
            <li>Select <strong>Report Issue</strong>.</li>
          </ol>

          <p className="mt-6">We will do our best to get back to you as soon as we can!</p>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
