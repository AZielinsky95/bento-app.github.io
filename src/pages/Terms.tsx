import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Terms of Service Content */}
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <article className="prose prose-sm prose-gray max-w-none prose-headings:text-gray-900 prose-headings:mt-3 prose-headings:mb-1 prose-h2:mt-5 prose-h3:mt-3 prose-p:text-gray-700 prose-p:my-1 prose-li:text-gray-700 prose-li:my-0 prose-ul:my-1 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-td:text-gray-700">
          <h1 className="text-3xl font-bold mb-1">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-6">
            <strong>Effective Date:</strong> May 2, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> May 2, 2026
          </p>

          <p>
            These Terms of Service (these "<strong>Terms</strong>") are a binding agreement between you and <strong>Azio Labs Inc.</strong> ("<strong>Azio Labs</strong>," "<strong>Bento</strong>," "<strong>we</strong>," "<strong>our</strong>," or "<strong>us</strong>") and govern your access to and use of the Bento mobile application, <strong>Benii</strong>, and any related services, content, features, and functionality we make available (collectively, the "<strong>Services</strong>").
          </p>
          <p>
            By creating an account, clicking to accept these Terms, connecting financial accounts, purchasing a subscription, using <strong>Benii</strong>, or otherwise accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Services.
          </p>

          {/* Table of Contents */}
          <hr className="my-4" />
          <nav>
            <p className="font-semibold text-gray-900 mb-1">Contents</p>
            <ol className="columns-1 md:columns-2 text-sm">
              <li><a href="#1-eligibility">Eligibility</a></li>
              <li><a href="#2-about-bento">About Bento</a></li>
              <li><a href="#3-changes-to-these-terms">Changes to These Terms</a></li>
              <li><a href="#4-privacy-policy">Privacy Policy</a></li>
              <li><a href="#5-account-registration-and-security">Account Registration and Security</a></li>
              <li><a href="#6-financial-account-connections">Financial Account Connections and Your Authorization</a></li>
              <li><a href="#7-benii">Benii</a></li>
              <li><a href="#8-subscriptions">Subscriptions, Free Trials, Billing, and Refunds</a></li>
              <li><a href="#9-referral-programs">Referral Programs, Promotions, and Special Offers</a></li>
              <li><a href="#10-acceptable-use">Acceptable Use and Restrictions</a></li>
              <li><a href="#11-user-content">User Content, Feedback, and Communications</a></li>
              <li><a href="#12-intellectual-property">Intellectual Property and Limited License</a></li>
              <li><a href="#13-third-party-services">Third-Party Services</a></li>
              <li><a href="#14-service-availability">Service Availability, Changes, and Force Majeure</a></li>
              <li><a href="#15-beta-features">Beta and Experimental Features</a></li>
              <li><a href="#16-electronic-communications">Electronic Communications</a></li>
              <li><a href="#17-termination">Termination</a></li>
              <li><a href="#18-disclaimers">Disclaimers</a></li>
              <li><a href="#19-limitation-of-liability">Limitation of Liability</a></li>
              <li><a href="#20-indemnity">Indemnity</a></li>
              <li><a href="#21-dispute-resolution">Dispute Resolution, Arbitration, and Class Action Waiver</a></li>
              <li><a href="#22-export-controls">Export Controls and Sanctions Compliance</a></li>
              <li><a href="#23-governing-law">Governing Law and Disputes</a></li>
              <li><a href="#24-apple-specific-terms">Apple-Specific Terms</a></li>
              <li><a href="#25-miscellaneous">Miscellaneous</a></li>
              <li><a href="#26-contact-us">Contact Us</a></li>
            </ol>
          </nav>
          <hr className="my-4" />

          {/* Section 1 */}
          <h2 id="1-eligibility">1. Eligibility</h2>
          <p>
            Bento is intended only for individuals who are <strong>18 years of age or older</strong> and who are capable of forming a binding contract under applicable law.
          </p>
          <p>By using the Services, you represent and warrant that:</p>
          <ul>
            <li>you are at least 18 years old;</li>
            <li>you have the legal capacity to agree to these Terms;</li>
            <li>you are using the Services only for yourself and not on behalf of another person or entity unless expressly authorized by us in writing; and</li>
            <li>your use of the Services complies with applicable law.</li>
          </ul>
          <p>Bento does not support shared accounts, family accounts, delegated access, or third-party advisor access at this time.</p>

          {/* Section 2 */}
          <h2 id="2-about-bento">2. About Bento</h2>
          <p>
            Bento is a <strong>read-only</strong> personal finance application. Bento allows users to connect financial accounts through third-party providers, view and organize financial information, and use <strong>Benii</strong> to ask questions and receive responses based on data available through the Services.
          </p>
          <p>Bento does <strong>not</strong> allow users to send, receive, transfer, or move money.</p>
          <p>
            Bento is not a bank, credit union, broker-dealer, investment adviser, tax preparer, accountant, insurer, money transmitter, payment processor, or lender. Bento is not a consumer reporting agency under the Fair Credit Reporting Act (FCRA) and does not provide consumer reports or credit scores. Information displayed in Bento should not be used to determine eligibility for credit, insurance, employment, or other purposes governed by the FCRA.
          </p>

          {/* Section 3 */}
          <h2 id="3-changes-to-these-terms">3. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we will endeavor to provide at least 30 days' notice before such changes take effect, unless a shorter period is required by law or circumstances. Notice may be provided through the Services, by email, or by other appropriate means. We will update the "Last Updated" date at the top of these Terms when we make changes.
          </p>
          <p>Your continued use of the Services after updated Terms become effective means you agree to the revised Terms.</p>

          {/* Section 4 */}
          <h2 id="4-privacy-policy">4. Privacy Policy</h2>
          <p>
            Your use of the Services is also subject to our <a href="/privacy">Privacy Policy</a>, which describes how we collect, use, disclose, and retain your personal information.
          </p>

          {/* Section 5 */}
          <h2 id="5-account-registration-and-security">5. Account Registration and Security</h2>
          <p>
            To use Bento, you may need to create an account through a supported authentication method, such as <strong>Sign in with Apple</strong> or <strong>email with one-time password (OTP)</strong>. Supported methods may change over time.
          </p>
          <p>You agree to:</p>
          <ul>
            <li>provide accurate, current, and complete information;</li>
            <li>keep your account information up to date;</li>
            <li>maintain the confidentiality of your login credentials;</li>
            <li>promptly notify us of any unauthorized access to or use of your account; and</li>
            <li>accept responsibility for all activity that occurs under your account.</li>
          </ul>
          <p>
            Each Bento account is for a <strong>single individual's personal use only</strong>. You may not share your login credentials, allow another person to access your account, or otherwise permit another person to use the Services through your account.
          </p>
          <p>
            We may suspend or terminate your account if we believe your account is being used in violation of these Terms or in a way that creates risk for Bento, our users, or third parties.
          </p>

          {/* Section 6 */}
          <h2 id="6-financial-account-connections">6. Financial Account Connections and Your Authorization</h2>
          <p>
            If you choose to connect financial accounts to Bento, you authorize Bento and its service providers, including third-party financial account connection providers such as Plaid, to access, retrieve, receive, and refresh information from the financial institutions and accounts you choose to connect.
          </p>
          <p>By connecting a financial account, you represent and warrant that:</p>
          <ul>
            <li>you are the lawful holder of the account or otherwise have the right and authority to authorize access to it;</li>
            <li>you authorize Bento and its service providers to access, retrieve, receive, and refresh information from that account on your behalf;</li>
            <li>you understand that Bento relies on third-party providers and third-party financial institutions to obtain account information; and</li>
            <li>you understand that account access and consent flows may be provided through third-party providers such as Plaid.</li>
          </ul>
          <p>You acknowledge that:</p>
          <ul>
            <li>Bento is not endorsed or sponsored by your financial institutions;</li>
            <li>your financial institutions and connection providers may have their own terms and privacy policies;</li>
            <li>Bento cannot guarantee continued access to any given institution or account; and</li>
            <li>account data displayed in Bento may be delayed, incomplete, or inaccurate due to factors outside our control, including third-party provider limitations, institution delays, or connection issues.</li>
          </ul>
          <p>You may disconnect a linked account at any time through supported product functionality, subject to technical limitations.</p>

          {/* Section 7 */}
          <h2 id="7-benii">7. Benii</h2>
          <p>Bento includes AI-powered functionality called <strong>Benii</strong>.</p>
          <p>Benii is intended to help users understand and interact with their financial information, but it has important limits.</p>
          <p>By using Benii, you acknowledge and agree that:</p>
          <ul>
            <li>Benii may generate content that is inaccurate, incomplete, outdated, misleading, or otherwise incorrect;</li>
            <li>Benii responses are generated using automated systems and should be independently reviewed before you rely on them;</li>
            <li>Benii does <strong>not</strong> provide financial, investment, tax, accounting, legal, or other professional advice;</li>
            <li>you are solely responsible for evaluating and deciding whether to rely on any Benii output; and</li>
            <li>you will not use Benii for any unlawful, deceptive, abusive, harmful, or prohibited purpose.</li>
          </ul>
          <p>
            To provide Benii functionality, Bento may send your prompts, conversation history, system instructions, and limited financial information relevant to your request to our AI service providers.
          </p>
          <p>You must not use Benii to:</p>
          <ul>
            <li>attempt to extract prompts, models, weights, source code, or other underlying systems;</li>
            <li>generate unlawful, fraudulent, harassing, harmful, or deceptive content;</li>
            <li>interfere with or disrupt Benii functionality;</li>
            <li>use Benii to build or train competing systems;</li>
            <li>publicly distribute, publish, or make available Benii outputs for commercial purposes; or</li>
            <li>submit content you do not have the right to provide.</li>
          </ul>
          <p>We may monitor, moderate, restrict, suspend, or terminate access to Benii at any time.</p>

          {/* Section 8 */}
          <h2 id="8-subscriptions">8. Subscriptions, Free Trials, Billing, and Refunds</h2>

          <h3>A. Paid Subscription</h3>
          <p>Access to some or all Bento features may require a paid subscription.</p>
          <p>Bento currently offers subscription plans billed through the <strong>Apple App Store</strong>.</p>

          <h3>B. Free Trial</h3>
          <p>
            Bento may offer a free trial for eligible users. The length and terms of any free trial are determined by Bento and may change over time. If you begin a free trial, your subscription will automatically convert to your selected paid plan through Apple at the end of the trial period unless you cancel at least 24 hours before the end of the current trial period.
          </p>
          <p>Eligibility for any free trial or promotion is determined by Bento and/or Apple.</p>

          <h3>C. Billing Through Apple</h3>
          <p>If you subscribe through the Apple App Store:</p>
          <ul>
            <li>your purchase, billing, renewal, cancellation, and payment method are handled by Apple;</li>
            <li>auto-renewable subscriptions automatically renew unless canceled at least 24 hours before the end of the current period;</li>
            <li>your account will be charged for renewal within 24 hours before the end of the current period;</li>
            <li>you are responsible for managing or canceling your subscription through your <strong>App Store Settings</strong>; and</li>
            <li>Apple's terms, policies, and procedures may also apply.</li>
          </ul>

          <h3>D. Cancellation</h3>
          <p>
            You may cancel your subscription at any time through Apple's subscription management tools. Cancellation will generally stop future renewals and take effect at the end of your then-current billing period, subject to Apple's processes. In general, if you cancel, you will continue to have access to paid features through the end of the period you have already paid for, unless Apple's rules or applicable law require otherwise.
          </p>

          <h3>E. Failed Billing or Subscription Issues</h3>
          <p>
            Because Apple processes Bento subscriptions, Bento does not control failed payment handling, billing retries, purchase validation issues, or Apple account payment problems. If Apple is unable to process or maintain your subscription, Bento may suspend or limit access to paid features.
          </p>

          <h3>F. Refunds</h3>
          <p>
            Bento does not process payments directly and does not provide refunds outside of Apple's processes for App Store purchases. Refund requests must be made through Apple and are subject to Apple's standard refund process and eligibility requirements.
          </p>

          <h3>G. Changes to Pricing or Plans</h3>
          <p>
            We may change pricing, plan features, trial eligibility, or subscription offerings from time to time on a going-forward basis. If required by applicable law or Apple's platform rules, we will provide notice before such changes take effect. Unless otherwise required by Apple or applicable law, changes will apply prospectively and not retroactively.
          </p>

          {/* Section 9 */}
          <h2 id="9-referral-programs">9. Referral Programs, Promotions, and Special Offers</h2>
          <p>
            We may, from time to time, offer referral programs, promotional offers, discounts, credits, or other incentives. If we do, those offers may be subject to additional terms, eligibility requirements, limits, and conditions.
          </p>
          <p>We reserve the right to modify, suspend, or terminate any referral program, promotion, discount, credit, or special offer at any time.</p>

          {/* Section 10 */}
          <h2 id="10-acceptable-use">10. Acceptable Use and Restrictions</h2>
          <p>You agree not to use the Services in any way that:</p>
          <ul>
            <li>violates any applicable law, regulation, or third-party right;</li>
            <li>infringes, misappropriates, or otherwise violates intellectual property, privacy, publicity, or contractual rights;</li>
            <li>is fraudulent, deceptive, misleading, abusive, harassing, defamatory, obscene, threatening, or otherwise objectionable;</li>
            <li>attempts to gain unauthorized access to the Services, other users' accounts, or related systems or networks;</li>
            <li>interferes with the operation, integrity, or security of the Services;</li>
            <li>introduces malware, malicious code, or other harmful material;</li>
            <li>scrapes, spiders, crawls, copies, or systematically extracts content or data from the Services;</li>
            <li>reverse engineers, decompiles, disassembles, probes, or attempts to derive source code, models, prompts, weights, or non-public components of the Services;</li>
            <li>uses the Services to develop, train, improve, or benchmark competing products or services;</li>
            <li>uses Benii or any Service output to develop or train AI or machine-learning systems;</li>
            <li>circumvents technical safeguards, rate limits, or access restrictions; or</li>
            <li>uses another person's credentials or allows another person to use yours.</li>
          </ul>
          <p>We may investigate violations of these Terms and may suspend, restrict, or terminate access to the Services if we believe a violation has occurred.</p>

          {/* Section 11 */}
          <h2 id="11-user-content">11. User Content, Feedback, and Communications</h2>
          <p>
            If you submit feedback, suggestions, ideas, bug reports, or other communications to us regarding Bento or the Services, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, and otherwise exploit that feedback for any lawful purpose without compensation to you.
          </p>
          <p>
            You represent and warrant that any information or content you provide through the Services does not violate applicable law or third-party rights and that you have the right to provide it.
          </p>
          <p>
            We may create aggregated, de-identified, or anonymized data derived from your use of the Services. Such data does not identify you and is not considered personal information. We may use aggregated or de-identified data for any lawful business purpose, including analytics, product improvement, and research.
          </p>

          {/* Section 12 */}
          <h2 id="12-intellectual-property">12. Intellectual Property and Limited License</h2>
          <p>
            The Services, including Bento, <strong>Benii</strong>, related software, visual interfaces, content, design, text, graphics, trademarks, and other materials, are owned by Azio Labs or its licensors and are protected by intellectual property and other laws.
          </p>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal, non-commercial use.
          </p>
          <p>
            Except as expressly permitted by these Terms, you may not copy, modify, distribute, reproduce, republish, display, transmit, create derivative works from, or otherwise exploit the Services.
          </p>

          {/* Section 13 */}
          <h2 id="13-third-party-services">13. Third-Party Services</h2>
          <p>
            The Services may rely on, interoperate with, or link to third-party services, including financial institutions, Plaid, Apple, OpenAI, and other service providers.
          </p>
          <p>We do not control third-party services and are not responsible for their availability, accuracy, content, privacy practices, terms, security, or performance.</p>
          <p>Your use of third-party services may be subject to separate terms and privacy policies imposed by those providers.</p>

          {/* Section 14 */}
          <h2 id="14-service-availability">14. Service Availability, Changes, and Force Majeure</h2>
          <p>
            We may modify, suspend, discontinue, or restrict all or part of the Services at any time, with or without notice, to the fullest extent permitted by law.
          </p>
          <p>
            We do not guarantee that the Services or any feature, content, institution connection, or AI functionality will always be available, uninterrupted, timely, secure, or error-free.
          </p>
          <p>
            Azio Labs will not be liable for any failure or delay in performing its obligations under these Terms to the extent caused by circumstances beyond its reasonable control, including but not limited to: natural disasters, epidemics, acts of government, war, terrorism, labor disputes, power or internet outages, failures of third-party service providers (including Plaid, OpenAI, Apple, Supabase, or hosting providers), cyberattacks, or other events beyond reasonable control.
          </p>

          {/* Section 15 */}
          <h2 id="15-beta-features">15. Beta and Experimental Features</h2>
          <p>
            We may offer features, tools, or functionality designated as "beta," "experimental," "preview," or similar. Such features are provided on an as-is basis, may be unstable or incomplete, and may be modified or discontinued at any time without notice.
          </p>
          <p>
            Beta and experimental features are subject to the disclaimers and limitations of liability set out in these Terms. Your use of beta or experimental features is at your own risk.
          </p>

          {/* Section 16 */}
          <h2 id="16-electronic-communications">16. Electronic Communications</h2>
          <p>
            By creating an account or using the Services, you consent to receive communications from us electronically, including by email, push notification, or in-app message. You agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communications be in writing.
          </p>

          {/* Section 17 */}
          <h2 id="17-termination">17. Termination</h2>
          <p>You may stop using the Services at any time.</p>
          <p>We may suspend or terminate your access to the Services or your account at any time, with or without notice, if:</p>
          <ul>
            <li>you violate these Terms;</li>
            <li>we believe your use creates legal, security, reputational, or operational risk;</li>
            <li>required by law, regulation, or third-party platform/provider requirements; or</li>
            <li>we discontinue the Services.</li>
          </ul>
          <p>
            Termination or suspension may result in the loss of access to your account, subscription benefits, chat history, linked account connections, and related information, subject to our Privacy Policy and applicable law. If we terminate your account, any active subscription will remain subject to Apple's terms and processes.
          </p>
          <p>
            Sections of these Terms that by their nature should survive termination will survive, including provisions relating to ownership, disclaimers, limitations of liability, indemnity, disputes, governing law, and any payment obligations accrued before termination.
          </p>

          {/* Section 18 */}
          <h2 id="18-disclaimers">18. Disclaimers</h2>
          <p>THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.</p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, AZIO LABS DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY, AND AVAILABILITY.
          </p>
          <p>WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT:</p>
          <ul>
            <li>THE SERVICES WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR AVAILABLE AT ALL TIMES;</li>
            <li>ANY FINANCIAL INFORMATION, ACCOUNT DATA, OR AI OUTPUT WILL BE COMPLETE, ACCURATE, CURRENT, OR RELIABLE;</li>
            <li>ANY ACCOUNT CONNECTION WILL REMAIN AVAILABLE; OR</li>
            <li>ANY DEFECTS WILL BE CORRECTED.</li>
          </ul>
          <p>
            FINANCIAL DATA DISPLAYED IN BENTO IS OBTAINED FROM THIRD-PARTY PROVIDERS AND FINANCIAL INSTITUTIONS AND MAY BE DELAYED, INCOMPLETE, OR INACCURATE DUE TO FACTORS OUTSIDE OUR CONTROL. YOU SHOULD NOT RELY SOLELY ON BENTO FOR FINANCIAL RECORDKEEPING OR DECISION-MAKING. BENTO SHOULD NOT BE USED AS YOUR SOLE SOURCE OF TRUTH FOR ACCOUNT BALANCES, TAX RECORDS, BILLS, PAYMENT DUE DATES, OR OTHER TIME-SENSITIVE FINANCIAL OBLIGATIONS.
          </p>
          <p>Bento and Benii are not substitutes for professional financial, investment, legal, accounting, tax, or other professional advice. You are solely responsible for your decisions and actions.</p>

          {/* Section 19 */}
          <h2 id="19-limitation-of-liability">19. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, AZIO LABS AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITY, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, THE TOTAL AGGREGATE LIABILITY OF AZIO LABS AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, LICENSORS, AND SERVICE PROVIDERS FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF:
          </p>
          <ul>
            <li>CAD $100; or</li>
            <li>THE AMOUNT YOU PAID TO AZIO LABS, IF ANY, FOR THE SERVICES IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.</li>
          </ul>
          <p>Some jurisdictions do not allow certain exclusions or limitations of liability, so some of the above may not apply to you.</p>

          {/* Section 20 */}
          <h2 id="20-indemnity">20. Indemnity</h2>
          <p>
            To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Azio Labs and its affiliates, officers, directors, employees, contractors, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, and fees (including reasonable legal fees) arising out of or relating to:
          </p>
          <ul>
            <li>your use of the Services;</li>
            <li>your violation of these Terms;</li>
            <li>your violation of applicable law or third-party rights; or</li>
            <li>your misuse of account connections, Benii, or other Service functionality.</li>
          </ul>

          {/* Section 21 */}
          <h2 id="21-dispute-resolution">21. Dispute Resolution, Arbitration, and Class Action Waiver</h2>

          <h3>A. Informal Resolution</h3>
          <p>
            Before initiating any formal dispute resolution proceeding, you and Azio Labs each agree to first attempt to resolve any dispute, claim, or controversy arising out of or relating to these Terms or the Services informally. The party raising the dispute must send the other party a written notice describing the nature of the dispute, the relief sought, and the contact information of the complaining party (a "<strong>Dispute Notice</strong>"). Dispute Notices to Azio Labs should be sent to <strong>contact@aziolabs.com</strong>. Dispute Notices to you will be sent to the email address associated with your account.
          </p>
          <p>
            Both parties agree to negotiate in good faith for at least <strong>30 days</strong> after the Dispute Notice is received. If the dispute is not resolved within this 30-day period, either party may proceed to binding arbitration as described below.
          </p>

          <h3>B. Binding Arbitration</h3>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES THAT IS NOT RESOLVED THROUGH THE INFORMAL RESOLUTION PROCESS DESCRIBED ABOVE WILL BE RESOLVED BY <strong>BINDING INDIVIDUAL ARBITRATION</strong> AND NOT IN COURT, EXCEPT THAT EITHER PARTY MAY BRING AN INDIVIDUAL ACTION IN SMALL CLAIMS COURT IF THE CLAIM QUALIFIES.
          </p>
          <ul>
            <li>
              <strong>For users located in the United States:</strong> Arbitration will be administered by the <strong>American Arbitration Association ("AAA")</strong> under its Consumer Arbitration Rules then in effect. The arbitration will be conducted by a single arbitrator, in the English language, and will take place in the county where you reside or, at your election, by telephone, video conference, or online. For claims of USD $10,000 or less, the arbitration will be conducted on the basis of written submissions unless either party requests an oral hearing. The AAA Rules are available at <a href="https://www.adr.org" target="_blank" rel="noopener noreferrer">www.adr.org</a>. To the extent the AAA filing fee exceeds what you would have paid to file in court, Azio Labs will pay the difference.
            </li>
            <li>
              <strong>For users located in Canada:</strong> Arbitration will be administered by the <strong>ADR Institute of Canada ("ADRIC")</strong> or a comparable Canadian arbitration body, under its applicable rules then in effect. The arbitration will be conducted by a single arbitrator, in the English language, and will take place in Ontario, Canada, or by telephone, video conference, or online at the claimant's election.
            </li>
          </ul>
          <p>
            The arbitrator may award the same relief that a court could award, including injunctive or declaratory relief, but only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claim. The arbitrator's decision will be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.
          </p>

          <h3>C. Jury Trial Waiver</h3>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND AZIO LABS EACH WAIVE THE RIGHT TO A TRIAL BY JURY IN ANY ACTION, PROCEEDING, OR COUNTERCLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES.
          </p>

          <h3>D. Class Action Waiver</h3>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND AZIO LABS AGREE THAT ANY DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES WILL BE RESOLVED ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION, CONSOLIDATED ACTION, REPRESENTATIVE ACTION, OR PRIVATE ATTORNEY GENERAL ACTION.
          </p>
          <p>
            IF THIS CLASS ACTION WAIVER IS FOUND TO BE UNENFORCEABLE AS TO A PARTICULAR CLAIM OR REQUEST FOR RELIEF, THEN THAT CLAIM OR REQUEST FOR RELIEF WILL BE SEVERED AND PROCEED IN COURT WHILE THE REMAINING CLAIMS PROCEED IN ARBITRATION.
          </p>

          <h3>E. Non-Waivable Rights</h3>
          <p>Nothing in this Section 21 limits any non-waivable rights you may have under applicable consumer protection, privacy, or other laws.</p>

          <h3>F. Opt-Out</h3>
          <p>
            You may opt out of the arbitration, jury trial waiver, and class action waiver provisions in this Section 21 by sending written notice to <strong>contact@aziolabs.com</strong> within <strong>30 days</strong> of first accepting these Terms. Your notice must include your name, email address associated with your Bento account, and a clear statement that you wish to opt out of arbitration. If you opt out, disputes will be resolved in court as described in Section 23.
          </p>

          {/* Section 22 */}
          <h2 id="22-export-controls">22. Export Controls and Sanctions Compliance</h2>
          <p>
            You represent and warrant that you are not located in, ordinarily resident in, or otherwise subject to sanctions or embargoes that would prohibit your use of the Services under applicable export control or sanctions laws.
          </p>
          <p>You agree not to use, access, export, re-export, or otherwise make the Services available in violation of applicable export control, trade, or sanctions laws.</p>

          {/* Section 23 */}
          <h2 id="23-governing-law">23. Governing Law and Disputes</h2>
          <p>
            These Terms and any dispute, claim, or controversy arising out of or relating to the Services or these Terms will be governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of laws principles.
          </p>
          <p>
            Subject to Section 21 (Dispute Resolution, Arbitration, and Class Action Waiver), you and Azio Labs agree that the courts located in Ontario, Canada will have exclusive jurisdiction over any dispute, claim, or controversy arising out of or relating to these Terms or the Services that is not subject to arbitration, and each party irrevocably submits to the jurisdiction of those courts.
          </p>

          {/* Section 24 */}
          <h2 id="24-apple-specific-terms">24. Apple-Specific Terms</h2>
          <p>If you access or use the Services through an Apple device or download the Bento app from the Apple App Store, you acknowledge and agree that:</p>
          <ul>
            <li>these Terms are between you and Azio Labs, not Apple;</li>
            <li>Apple is not responsible for the Services or their content;</li>
            <li>Apple has no obligation to furnish maintenance or support services for the Services;</li>
            <li>to the maximum extent permitted by law, Apple has no warranty obligation with respect to the Services;</li>
            <li>Apple is not responsible for addressing claims relating to the Services or your possession or use of them, including product liability claims, legal compliance claims, consumer protection claims, or intellectual property claims;</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you; and</li>
            <li>you will comply with any applicable third-party terms when using the Services.</li>
          </ul>

          {/* Section 25 */}
          <h2 id="25-miscellaneous">25. Miscellaneous</h2>
          <p>
            These Terms, together with our Privacy Policy and any additional terms expressly incorporated by reference, constitute the entire agreement between you and Azio Labs regarding the Services.
          </p>
          <p>If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect.</p>
          <p>Our failure to enforce any provision of these Terms is not a waiver of that provision or any other provision.</p>
          <p>You may not assign, transfer, or delegate your rights or obligations under these Terms without our prior written consent. We may assign or transfer these Terms without restriction.</p>
          <p>Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and Azio Labs. You have no authority to bind or act on behalf of Azio Labs in any way.</p>
          <p>Section headings are for convenience only and do not affect interpretation.</p>

          {/* Section 26 */}
          <h2 id="26-contact-us">26. Contact Us</h2>
          <p>
            If you have questions about these Terms or the Services, contact us at the address below. For privacy-related inquiries, please see our <a href="/privacy">Privacy Policy</a>.
          </p>
          <address className="not-italic">
            <strong>Azio Labs Inc.</strong><br />
            1 Hycrest Ave, PH1<br />
            Toronto, Ontario, Canada<br />
            M2N 6V8<br />
            Email: <strong>contact@aziolabs.com</strong>
          </address>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
