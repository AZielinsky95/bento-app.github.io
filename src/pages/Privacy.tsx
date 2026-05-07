import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Privacy Policy Content */}
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <article className="prose prose-sm prose-gray max-w-none prose-headings:text-gray-900 prose-headings:mt-3 prose-headings:mb-1 prose-h2:mt-5 prose-h3:mt-3 prose-p:text-gray-700 prose-p:my-1 prose-li:text-gray-700 prose-li:my-0 prose-ul:my-1 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-td:text-gray-700">
          <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-6">
            <strong>Effective Date:</strong> May 2, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> May 2, 2026
          </p>

          <p>
            Bento is a product of <strong>Azio Labs Inc.</strong> ("<strong>Azio Labs</strong>," "<strong>Bento</strong>," "<strong>we</strong>," "<strong>our</strong>," or "<strong>us</strong>"). This Privacy Policy explains how we collect, use, disclose, store, and otherwise process personal information when you use the Bento mobile application, <strong>Benii</strong> (Bento's AI assistant), related services, and any features or content we make available through them (collectively, the "<strong>Services</strong>").
          </p>
          <p>
            By creating an account, connecting financial accounts, using Benii or other AI features, or otherwise using the Services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy. Where we rely on your consent, you may withdraw it at any time by contacting us or deleting your account, though this may affect your ability to use certain features of the Services.
          </p>

          {/* Table of Contents */}
          <hr className="my-4" />
          <nav>
            <p className="font-semibold text-gray-900 mb-1">Contents</p>
            <ol className="columns-1 md:columns-2 text-sm">
              <li><a href="#1-scope">Scope</a></li>
              <li><a href="#2-who-we-are">Who We Are</a></li>
              <li><a href="#3-what-information-we-collect">What Information We Collect</a></li>
              <li><a href="#4-how-we-collect-information">How We Collect Information</a></li>
              <li><a href="#5-sources-of-information">Sources of Information</a></li>
              <li><a href="#6-legal-basis-for-processing">Legal Basis for Processing</a></li>
              <li><a href="#7-how-we-use-information">How We Use Information</a></li>
              <li><a href="#8-benii-and-ai-features">Benii and AI Features</a></li>
              <li><a href="#9-how-we-disclose-information">How We Disclose Information</a></li>
              <li><a href="#10-advertising-analytics-and-tracking">Advertising, Analytics, and Tracking</a></li>
              <li><a href="#11-cross-border-processing-and-storage">Cross-Border Processing and Storage</a></li>
              <li><a href="#12-data-retention">Data Retention</a></li>
              <li><a href="#13-account-deletion">Account Deletion</a></li>
              <li><a href="#14-data-security">Data Security</a></li>
              <li><a href="#15-data-breach-notification">Data Breach Notification</a></li>
              <li><a href="#16-internal-access-to-user-data">Internal Access to User Data</a></li>
              <li><a href="#17-your-choices-and-rights">Your Choices and Rights</a></li>
              <li><a href="#18-additional-rights-for-california-residents">Additional Rights for California Residents (CCPA/CPRA)</a></li>
              <li><a href="#19-children-and-age-restrictions">Children and Age Restrictions</a></li>
              <li><a href="#20-third-party-services-and-linked-accounts">Third-Party Services and Linked Accounts</a></li>
              <li><a href="#21-changes-to-this-privacy-policy">Changes to This Privacy Policy</a></li>
              <li><a href="#22-contact">Contact</a></li>
            </ol>
          </nav>
          <hr className="my-4" />

          {/* Section 1 */}
          <h2 id="1-scope">1. Scope</h2>
          <p>
            This Privacy Policy applies to personal information we collect, use, disclose, and retain in connection with the Services.
          </p>
          <p>This Privacy Policy does not apply to:</p>
          <ul>
            <li>websites, services, or applications operated by third parties that Bento links to or integrates with;</li>
            <li>the privacy practices of financial institutions or other third parties whose accounts or services you choose to connect to Bento; or</li>
            <li>information processed by third parties under their own privacy policies, such as Apple App Store billing and third-party account connection providers.</li>
          </ul>
          <p>
            Bento is currently offered only to users in the <strong>United States and Canada</strong>.
          </p>
          <p>
            Azio Labs is a Canadian company subject to Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable provincial privacy legislation. Where Bento is used by individuals in the United States, applicable U.S. federal and state privacy laws may also apply.
          </p>

          {/* Section 2 */}
          <h2 id="2-who-we-are">2. Who We Are</h2>
          <p>The Services are provided by:</p>
          <address className="not-italic">
            <strong>Azio Labs Inc.</strong><br />
            1 Hycrest Ave, PH1<br />
            Toronto, Ontario, Canada<br />
            M2N 6V8<br />
            Email: <strong>bento@aziolabs.com</strong>
          </address>

          {/* Section 3 */}
          <h2 id="3-what-information-we-collect">3. What Information We Collect</h2>
          <p>
            We collect personal information from you directly, from your use of the Services, from third-party providers you authorize, and from service providers that support our operations.
          </p>
          <p>
            Depending on how you use Bento, the categories of personal information we collect may include:
          </p>

          <h3>A. Account and Profile Information</h3>
          <ul>
            <li>email address;</li>
            <li>account identifiers;</li>
            <li>authentication-related information;</li>
            <li>subscription status;</li>
            <li>preferences and settings.</li>
          </ul>
          <p>
            Bento currently supports authentication methods such as <strong>Sign in with Apple</strong> and <strong>email with one-time password (OTP)</strong> through third-party authentication providers.
          </p>

          <h3>B. Financial Information</h3>
          <p>If you choose to connect financial accounts through Bento, we may collect or receive:</p>
          <ul>
            <li>account names and account types;</li>
            <li>balances and holdings information;</li>
            <li>transaction history;</li>
            <li>merchant names;</li>
            <li>category and tag information;</li>
            <li>budget information;</li>
            <li>recurring transaction or recurring spending details;</li>
            <li>institution names, linked account connection status, sync metadata, and connection error information;</li>
            <li>related connection metadata.</li>
          </ul>
          <p>
            Bento is a <strong>read-only</strong> finance application. Users cannot send, receive, or transfer money through the Services.
          </p>

          <h3>C. Benii and AI-Related Information</h3>
          <p>If you use Benii or other AI features, we may collect and process:</p>
          <ul>
            <li>your prompts and questions;</li>
            <li>conversation history;</li>
            <li>assistant responses;</li>
            <li>tool results used to answer your questions, which may include limited financial data such as transactions, balances, merchant names, categories, tags, budget information, and internal identifiers;</li>
            <li>system prompts, moderation results, and related technical metadata.</li>
          </ul>

          <h3>D. Technical, Device, and Usage Information</h3>
          <p>We may collect information relating to your use of the Services, such as:</p>
          <ul>
            <li>device and app information;</li>
            <li>IP address and request metadata;</li>
            <li>crash reports, error logs, and stack traces;</li>
            <li>product usage events;</li>
            <li>subscription and onboarding events.</li>
          </ul>

          <h3>E. Support and Communications</h3>
          <p>If you contact us, we may collect:</p>
          <ul>
            <li>your name and contact details;</li>
            <li>the contents of your messages;</li>
            <li>support history;</li>
            <li>information you choose to provide in connection with a request, bug report, privacy inquiry, or support issue.</li>
          </ul>

          <h3>F. On-Device Data</h3>
          <p>The Bento iOS app may store certain information locally on your device, including:</p>
          <ul>
            <li>authentication tokens;</li>
            <li>cached account information;</li>
            <li>app preferences.</li>
          </ul>
          <p>
            This information is stored using iOS secure storage mechanisms and is generally removed when you sign out or delete the app, though some residual data may persist on-device depending on iOS behavior.
          </p>

          {/* Section 4 */}
          <h2 id="4-how-we-collect-information">4. How We Collect Information</h2>
          <p>We collect information in the following ways:</p>

          <h3>A. Information You Provide Directly</h3>
          <p>We collect information you provide when you:</p>
          <ul>
            <li>create an account;</li>
            <li>use Bento;</li>
            <li>contact support;</li>
            <li>communicate with us;</li>
            <li>ask questions using Benii or other AI features.</li>
          </ul>

          <h3>B. Information Collected Automatically</h3>
          <p>
            We and our service providers may automatically collect certain technical and usage information when you use the Services, including analytics events, crash information, request metadata, and log data.
          </p>

          <h3>C. Information from Financial Connection Providers and Other Third Parties</h3>
          <p>
            If you choose to connect your financial accounts, we receive information from providers you authorize, including financial account connection providers such as Plaid. When you connect an account through Plaid, you will be presented with Plaid's own authorization and data consent flow, which is governed by Plaid's privacy policy.
          </p>
          <p>
            We may also receive limited information from other service providers that help us provide the Services, such as analytics, hosting, authentication, error monitoring, subscription, and AI service providers.
          </p>

          {/* Section 5 */}
          <h2 id="5-sources-of-information">5. Sources of Information</h2>
          <p>We may collect personal information from the following sources:</p>
          <ul>
            <li><strong>you</strong>, including when you sign up, connect accounts, use Bento, contact support, or use Benii;</li>
            <li><strong>financial account connection providers</strong> you authorize, such as Plaid;</li>
            <li><strong>service providers</strong> that help us operate Bento, such as hosting, authentication, AI, analytics, and error monitoring providers;</li>
            <li><strong>Apple</strong>, in connection with in-app purchases, subscriptions, and subscription status.</li>
          </ul>

          {/* Section 6 */}
          <h2 id="6-legal-basis-for-processing">6. Legal Basis for Processing</h2>
          <p>We process personal information on the following legal bases:</p>
          <table>
            <thead>
              <tr>
                <th>Processing activity</th>
                <th>Legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Creating and managing your account</td>
                <td><strong>Contractual necessity</strong> — required to provide the Services you signed up for</td>
              </tr>
              <tr>
                <td>Connecting and syncing financial accounts via Plaid</td>
                <td><strong>Consent</strong> — you authorize each connection through Plaid's consent flow</td>
              </tr>
              <tr>
                <td>Providing Benii and AI features</td>
                <td><strong>Consent</strong> — you choose to use AI features and submit prompts</td>
              </tr>
              <tr>
                <td>Displaying transactions, balances, and budgets</td>
                <td><strong>Contractual necessity</strong> — core functionality of the Services</td>
              </tr>
              <tr>
                <td>Product analytics</td>
                <td><strong>Legitimate interest</strong> — understanding product usage to improve the Services</td>
              </tr>
              <tr>
                <td>Error monitoring and crash reporting</td>
                <td><strong>Legitimate interest</strong> — maintaining service stability and debugging</td>
              </tr>
              <tr>
                <td>Security, fraud prevention, and abuse detection</td>
                <td><strong>Legitimate interest</strong> — protecting users and the integrity of the Services</td>
              </tr>
              <tr>
                <td>Responding to support requests</td>
                <td><strong>Contractual necessity</strong> — fulfilling our obligations to you</td>
              </tr>
              <tr>
                <td>Complying with legal obligations</td>
                <td><strong>Legal obligation</strong> — required by applicable law</td>
              </tr>
            </tbody>
          </table>
          <p>
            Where we rely on consent, you may withdraw it at any time by contacting us at <strong>bento@aziolabs.com</strong> or by deleting your account. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.
          </p>
          <p>
            Where we rely on legitimate interest, we have assessed that our interests do not override your privacy rights, taking into account the nature of the data, the purpose of processing, and the safeguards in place.
          </p>

          {/* Section 7 */}
          <h2 id="7-how-we-use-information">7. How We Use Information</h2>
          <p>We use personal information for the following purposes:</p>

          <h3>A. To Provide and Operate the Services</h3>
          <ul>
            <li>create and manage your account;</li>
            <li>authenticate users;</li>
            <li>connect and maintain linked financial accounts;</li>
            <li>display transactions, balances, budgets, and related financial information;</li>
            <li>provide subscriptions and account-related functionality.</li>
          </ul>

          <h3>B. To Provide Benii and Other AI Features</h3>
          <ul>
            <li>respond to user questions and prompts;</li>
            <li>generate summaries, explanations, and insights based on user data;</li>
            <li>retrieve and use limited financial data needed to answer a question;</li>
            <li>monitor, improve, debug, and support our AI functionality.</li>
          </ul>

          <h3>C. To Maintain, Secure, and Improve the Services</h3>
          <ul>
            <li>monitor performance and stability;</li>
            <li>debug and fix errors;</li>
            <li>detect, prevent, and investigate fraud, abuse, and security incidents;</li>
            <li>moderate content and apply safety checks to user input;</li>
            <li>understand how users interact with Bento and improve product functionality.</li>
          </ul>

          <h3>D. To Communicate With You</h3>
          <ul>
            <li>respond to support inquiries;</li>
            <li>provide service and administrative communications;</li>
            <li>provide notices relating to your account, subscriptions, privacy, security, and changes to our Services.</li>
          </ul>

          <h3>E. To Comply With Legal Obligations and Protect Rights</h3>
          <ul>
            <li>comply with applicable laws, regulations, legal process, and lawful requests;</li>
            <li>enforce our terms and policies;</li>
            <li>protect the rights, safety, property, and security of Azio Labs, Bento, our users, and others.</li>
          </ul>

          {/* Section 8 */}
          <h2 id="8-benii-and-ai-features">8. Benii and AI Features</h2>
          <p>
            Bento includes AI-powered features, including the assistant currently branded as <strong>Benii</strong>. If you choose to use those features, your prompts, conversation history, and certain limited financial information relevant to your request may be processed by our AI service provider(s).
          </p>
          <p>To support AI responses, Bento may send:</p>
          <ul>
            <li>the raw user prompt;</li>
            <li>conversation history;</li>
            <li>a system prompt;</li>
            <li>limited tool results generated from Bento's database, which may include transactions, balances, merchant names, categories, tags, budgets, recurring spending information, internal identifiers, and related internal query information.</li>
          </ul>
          <p>Our AI provider may cache certain technical data for performance purposes.</p>
          <p>
            We apply controls designed to limit the amount of information used for AI responses and to reduce the risk of misuse, including limiting tool results, restricting the scope of AI-driven database access, and screening user input.
          </p>
          <p>
            Under our current AI provider's API data usage terms, API inputs and outputs are not used to train its models by default. Abuse monitoring logs may be retained for a limited period as described in the provider's policies. These terms may change over time; we encourage you to review our AI provider's current policies.
          </p>
          <p>
            AI-generated content may be inaccurate, incomplete, or inappropriate in some circumstances. Benii and Bento's AI features are intended to assist users and do not constitute financial, legal, tax, accounting, or investment advice.
          </p>

          {/* Section 9 */}
          <h2 id="9-how-we-disclose-information">9. How We Disclose Information</h2>
          <p>
            We do <strong>not</strong> sell your personal information, including your financial data. We do <strong>not</strong> currently use your financial data for targeted advertising.
          </p>
          <p>We may disclose personal information to the following categories of recipients:</p>

          <h3>A. Service Providers</h3>
          <p>
            We disclose personal information to vendors and service providers that help us operate Bento, including providers for:
          </p>
          <ul>
            <li>financial account connection;</li>
            <li>database and authentication services;</li>
            <li>hosting and infrastructure;</li>
            <li>AI processing;</li>
            <li>product analytics;</li>
            <li>error tracking and monitoring;</li>
            <li>subscription processing through Apple.</li>
          </ul>
          <p>Bento currently uses the following service providers:</p>
          <ul>
            <li><strong>Plaid</strong> — financial account connection and transaction data</li>
            <li><strong>Supabase</strong> — database hosting and user authentication</li>
            <li><strong>OpenAI</strong> — AI processing for Benii</li>
            <li><strong>Mixpanel</strong> — product analytics (server-side and client-side)</li>
            <li><strong>Sentry</strong> — error tracking and crash reporting (server-side and client-side)</li>
            <li><strong>Fly.io</strong> — application hosting and infrastructure</li>
            <li><strong>Apple App Store</strong> — in-app purchases and subscriptions</li>
          </ul>
          <p>
            We seek to ensure that service providers that process personal information on our behalf are subject to terms that restrict how they may use, retain, and disclose that information. These restrictions are intended to include, as applicable:
          </p>
          <ul>
            <li>processing personal information <strong>only</strong> for the purposes of performing services on our behalf and as permitted by applicable law;</li>
            <li><strong>not selling, sharing, or using</strong> personal information for their own commercial purposes, including advertising or profiling unrelated to the services they provide to us;</li>
            <li>implementing reasonable security measures to protect personal information; and</li>
            <li>deleting or returning personal information upon termination of the service relationship, subject to legal retention requirements.</li>
          </ul>
          <p>
            For purposes of the California Consumer Privacy Act (CCPA/CPRA), we treat disclosures to our service providers as made under service provider relationships as contemplated by the CCPA, and not as "sales" or "shares" of personal information.
          </p>
          <p>
            This list is current as of the date above and may not be exhaustive at all times. If we make material changes to our service providers, we will update this Privacy Policy accordingly.
          </p>

          <h3>B. At Your Direction or With Your Authorization</h3>
          <p>
            We may disclose information where you direct us to do so or where disclosure is necessary to provide a feature you choose to use, such as connecting a financial account through a third-party provider.
          </p>

          <h3>C. Legal, Compliance, and Protection Purposes</h3>
          <p>We may disclose information where we believe it is necessary to:</p>
          <ul>
            <li>comply with applicable law, regulation, court order, subpoena, or lawful request;</li>
            <li>protect the rights, property, or safety of Azio Labs, Bento, our users, or others;</li>
            <li>investigate fraud, security incidents, abuse, or violations of our terms.</li>
          </ul>

          <h3>D. Corporate Transactions</h3>
          <p>
            We may disclose or transfer information in connection with an actual or proposed merger, financing, acquisition, reorganization, sale of assets, insolvency event, or similar corporate transaction.
          </p>

          <h3>E. De-Identified and Aggregated Information</h3>
          <p>
            We may create de-identified, anonymized, or aggregated information from personal information we collect. If we do, we may use and disclose that information for lawful business purposes, including analytics, service improvement, research, and product development, so long as it cannot reasonably identify you.
          </p>

          {/* Section 10 */}
          <h2 id="10-advertising-analytics-and-tracking">10. Advertising, Analytics, and Tracking</h2>
          <p>
            Bento uses third-party services for product analytics and error monitoring, both on the server and within the iOS client. Current providers are identified in <a href="#9-how-we-disclose-information">Section 9A (Service Providers)</a>.
          </p>
          <p>At the time of publication:</p>
          <ul>
            <li>Bento uses server-side and client-side product analytics for product usage and funnel events;</li>
            <li>Bento uses server-side and client-side error monitoring and crash reporting;</li>
            <li>Bento does <strong>not</strong> currently use cookie-based web analytics for a public web product experience;</li>
            <li>Bento does <strong>not</strong> currently use session replay tools;</li>
            <li>the iOS client does <strong>not</strong> currently include third-party attribution or advertising tracking SDKs.</li>
          </ul>
          <p>
            We may use additional analytics, advertising measurement, and tracking technologies in the future. If we enable such technologies, we will update this Privacy Policy to describe those practices and, where required, provide applicable choices or disclosures.
          </p>

          <h3>Do Not Track Signals</h3>
          <p>
            Bento does not currently respond to "Do Not Track" (DNT) browser signals, as there is no industry-accepted standard for how to respond to such signals in a mobile application context.
          </p>

          {/* Section 11 */}
          <h2 id="11-cross-border-processing-and-storage">11. Cross-Border Processing and Storage</h2>
          <p>
            Azio Labs is a Canadian company, but Bento currently uses service providers and infrastructure located in the <strong>United States</strong>. As a result, your personal information may be stored and processed outside your province, territory, or country of residence, including in the United States.
          </p>
          <p>
            Where personal information is processed in another jurisdiction, it may be subject to the laws of that jurisdiction and may be accessible to courts, law enforcement, regulators, or government authorities in accordance with applicable law.
          </p>
          <p>
            Bento's data storage and processing are currently U.S.-based. Specific hosting regions may change from time to time as we update our infrastructure.
          </p>

          {/* Section 12 */}
          <h2 id="12-data-retention">12. Data Retention</h2>
          <p>
            We retain personal information for as long as reasonably necessary to provide the Services, fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, and protect the security and integrity of Bento.
          </p>
          <p>As a general guide, approximate retention periods include:</p>
          <ul>
            <li><strong>Account and profile data:</strong> until account deletion</li>
            <li><strong>Financial data (including transactions, accounts, balances):</strong> until account deletion</li>
            <li><strong>Chat history:</strong> up to approximately 1 year, then automatically deleted</li>
            <li><strong>Soft-deleted transactions:</strong> approximately 90 days, then permanently purged</li>
            <li><strong>Connection attempts:</strong> approximately 90 days</li>
            <li><strong>Application logs:</strong> approximately 30 days</li>
            <li><strong>Error tracking data:</strong> approximately 90 days</li>
            <li><strong>Analytics data:</strong> approximately 2 years</li>
            <li><strong>Backups:</strong> approximately 7 to 30 days, depending on configuration</li>
            <li><strong>Residual vendor logs or backups after account deletion:</strong> typically up to 30 to 90 days through routine rotation</li>
          </ul>
          <p>These periods are approximate and may vary based on operational, legal, or technical requirements.</p>
          <p>
            When a user deletes their account, Bento deletes primary user data from its production database and revokes linked financial account access tokens. Residual copies may remain temporarily in backups or vendor logs until they are overwritten or rotated out in the ordinary course.
          </p>

          {/* Section 13 */}
          <h2 id="13-account-deletion">13. Account Deletion</h2>
          <p>
            If you delete your Bento account, we will delete your primary account data from our production database, revoke linked financial account access tokens, and delete the related authenticated user account.
          </p>
          <p>Certain information may remain temporarily in:</p>
          <ul>
            <li>automated backups;</li>
            <li>security and error logs;</li>
            <li>analytics systems;</li>
            <li>records retained for legal, security, fraud prevention, or compliance purposes.</li>
          </ul>
          <p>We do not guarantee immediate deletion from every backup or vendor-controlled log system.</p>

          {/* Section 14 */}
          <h2 id="14-data-security">14. Data Security</h2>
          <p>
            We seek to protect your personal information from unauthorized access, use, disclosure, alteration, and destruction using appropriate administrative, technical, and organizational safeguards based on the type of data and how we process it.
          </p>
          <p>Depending on the nature of the data and the processing involved, these safeguards may include:</p>
          <ul>
            <li>encryption in transit using HTTPS;</li>
            <li>encryption of sensitive credentials at rest before database storage;</li>
            <li>per-user data isolation enforced through authenticated user identifiers;</li>
            <li>input sanitization and controls designed to prevent unsafe query execution;</li>
            <li>restrictions designed to limit AI-driven database access to read-only queries;</li>
            <li>moderation and safety screening of user input.</li>
          </ul>
          <p>
            Although we work to protect the security of your account and other data that we hold, no method of transmission over the internet or method of electronic storage is completely secure. As a result, we cannot guarantee absolute security.
          </p>

          {/* Section 15 */}
          <h2 id="15-data-breach-notification">15. Data Breach Notification</h2>
          <p>
            In the event of a data breach involving your personal information, we will notify you and applicable regulatory authorities as required by applicable law, including PIPEDA and applicable U.S. state breach notification laws. Where required, we will provide information about the nature of the breach, the types of information affected, and steps you can take to protect yourself.
          </p>

          {/* Section 16 */}
          <h2 id="16-internal-access-to-user-data">16. Internal Access to User Data</h2>
          <p>
            Authorized Azio Labs personnel may access user data, including financial data and chat data, on a need-to-know basis for purposes such as:
          </p>
          <ul>
            <li>customer support;</li>
            <li>debugging;</li>
            <li>quality assurance;</li>
            <li>service maintenance and improvement;</li>
            <li>fraud prevention and security review.</li>
          </ul>
          <p>We may log or audit internal access to user data for security, support, and accountability purposes.</p>
          <p>
            Bento does not currently support shared or delegated access between users. Each Bento account is intended for the use of a single individual.
          </p>

          {/* Section 17 */}
          <h2 id="17-your-choices-and-rights">17. Your Choices and Rights</h2>
          <p>
            Depending on where you live and subject to applicable law, you may have rights relating to your personal information. These may include the right to request access to, correction of, deletion of, or information about the personal information we hold about you. In some jurisdictions, you may also have the right to request a portable copy of certain personal information or to withdraw consent where processing is based on consent.
          </p>
          <p>
            We may need to verify your identity before processing a request, and we may decline or limit a request where permitted or required by applicable law.
          </p>

          <h3>A. Account and Data Deletion</h3>
          <p>
            You may delete your account through Bento. You may also contact us at <strong>bento@aziolabs.com</strong> regarding deletion requests.
          </p>

          <h3>B. Access Requests</h3>
          <p>
            You may request access to your personal information by contacting us at <strong>bento@aziolabs.com</strong>. We will respond within 30 days or within the timeframe required by applicable law.
          </p>
          <p>Bento does not currently offer a self-serve data export tool.</p>

          <h3>C. Correction Requests</h3>
          <p>
            If you believe personal information we hold about you is inaccurate, you may contact us to request correction, subject to applicable law and operational limitations.
          </p>

          <h3>D. Withdrawal of Consent</h3>
          <p>
            Where processing is based on your consent, you may withdraw consent at any time by contacting us at <strong>bento@aziolabs.com</strong> or by deleting your account. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.
          </p>

          <h3>E. Additional Rights Depending on Jurisdiction</h3>
          <p>
            Depending on applicable law, you may also have additional rights, including rights relating to data portability, withdrawal of consent, or the right to file a complaint with a privacy regulator or other public authority.
          </p>

          <h3>F. Marketing and Analytics Choices</h3>
          <p>
            If Bento later uses additional advertising, attribution, or tracking tools that require user choice or opt-out mechanisms under applicable law, we may update this Privacy Policy and provide applicable options where required.
          </p>

          {/* Section 18 */}
          <h2 id="18-additional-rights-for-california-residents">18. Additional Rights for California Residents (CCPA/CPRA)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("<strong>CCPA/CPRA</strong>"), provides you with additional rights regarding your personal information.
          </p>

          <h3>Categories of Personal Information We Collect</h3>
          <p>In the preceding 12 months, we have collected the following categories of personal information as defined by the CCPA:</p>
          <ul>
            <li><strong>Identifiers</strong> — email address, account identifiers, device identifiers</li>
            <li><strong>Financial information</strong> — account names, balances, transaction history, merchant names, budget information</li>
            <li><strong>Internet or electronic network activity</strong> — app usage data, analytics events, crash reports, log data</li>
            <li><strong>Inferences</strong> — spending patterns, category breakdowns, and insights generated by Benii</li>
          </ul>

          <h3>Sensitive Personal Information</h3>
          <p>We collect the following categories of sensitive personal information as defined by the CPRA:</p>
          <ul>
            <li><strong>Financial account information</strong> — account names, balances, transaction history, and related data collected through Plaid</li>
          </ul>
          <p>
            We use sensitive personal information <strong>only</strong> to provide and improve the Services (displaying your financial data, powering Benii insights, and maintaining your account). We do <strong>not</strong> use sensitive personal information for profiling, advertising, or any purpose other than providing the Services. Because our use is limited to what is necessary to provide the Services you request, no "Limit Use of Sensitive Personal Information" opt-out is required.
          </p>

          <h3>Sale and Sharing of Personal Information</h3>
          <p>
            <strong>We do not sell your personal information.</strong> We do not share your personal information for cross-context behavioral advertising purposes. We have not sold or shared personal information in the preceding 12 months.
          </p>

          <h3>Your California Privacy Rights</h3>
          <p>As a California resident, you have the right to:</p>
          <ul>
            <li><strong>Right to know</strong> — request what personal information we have collected, used, disclosed, or sold about you;</li>
            <li><strong>Right to delete</strong> — request that we delete personal information we have collected from you, subject to certain exceptions;</li>
            <li><strong>Right to correct</strong> — request correction of inaccurate personal information we hold about you;</li>
            <li><strong>Right to opt-out of sale/sharing</strong> — we do not sell or share your personal information, so no opt-out is necessary;</li>
            <li><strong>Right to non-discrimination</strong> — we will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>

          <h3>How to Submit a Request</h3>
          <p>
            You may submit a request by contacting us at <strong>bento@aziolabs.com</strong>. We will verify your identity before processing your request, which may require you to confirm information associated with your account. You may also designate an authorized agent to make a request on your behalf by providing written authorization to us at the same email address.
          </p>
          <p>We will respond to verifiable requests within 45 days, or notify you if we need an extension of up to an additional 45 days.</p>

          <h3>Financial Incentives</h3>
          <p>We do not offer financial incentives or price differences in exchange for the collection, sale, or deletion of personal information.</p>

          <h3>Retention</h3>
          <p>
            For details on how long we retain each category of personal information, see <a href="#12-data-retention">Section 12 (Data Retention)</a>.
          </p>

          {/* Section 19 */}
          <h2 id="19-children-and-age-restrictions">19. Children and Age Restrictions</h2>
          <p>
            Bento is intended only for individuals who are <strong>18 years of age or older</strong>. We do not knowingly collect personal information from individuals under 18. If we learn that we have collected personal information from an individual under 18, we will take steps designed to delete that information.
          </p>
          <p>
            If you believe that an individual under 18 may have provided us personal information, please contact us at <strong>bento@aziolabs.com</strong>.
          </p>

          {/* Section 20 */}
          <h2 id="20-third-party-services-and-linked-accounts">20. Third-Party Services and Linked Accounts</h2>
          <p>
            Bento relies on third-party providers to connect financial accounts, power subscriptions, support AI functionality, and operate core infrastructure.
          </p>
          <p>
            When you connect a financial account through Plaid, you will be presented with Plaid's own authorization and data consent flow, which is governed by Plaid's privacy policy. Plaid's end-user privacy policy is available at <a href="https://plaid.com/legal/#end-user-privacy-policy" target="_blank" rel="noopener noreferrer">https://plaid.com/legal/#end-user-privacy-policy</a>. We encourage you to review it before connecting your accounts.
          </p>
          <p>
            Your use of third-party financial account connections and third-party services may also be subject to those providers' own privacy policies and terms. We encourage you to review those policies, including the policies of providers such as Plaid and Apple.
          </p>

          {/* Section 21 */}
          <h2 id="21-changes-to-this-privacy-policy">21. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our Services, practices, vendors, legal obligations, or product features.
          </p>
          <p>
            If we make a material change, we may provide notice through the Services, by email, or by other appropriate means. The "Last Updated" date at the top of this Privacy Policy indicates when it was most recently revised.
          </p>
          <p>
            Your continued use of the Services after an updated Privacy Policy becomes effective means you acknowledge the updated Privacy Policy.
          </p>

          {/* Section 22 */}
          <h2 id="22-contact">22. Contact</h2>
          <p>
            Azio Labs Inc. is responsible for personal information under its control. Privacy inquiries may be directed to our privacy contact at <strong>bento@aziolabs.com</strong>.
          </p>
          <p>
            If you have questions, concerns, or requests relating to this Privacy Policy or your personal information, you can also reach us at:
          </p>
          <address className="not-italic">
            <strong>Azio Labs Inc.</strong><br />
            1 Hycrest Ave, PH1<br />
            Toronto, Ontario, Canada<br />
            M2N 6V8<br />
            Email: <strong>bento@aziolabs.com</strong>
          </address>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
