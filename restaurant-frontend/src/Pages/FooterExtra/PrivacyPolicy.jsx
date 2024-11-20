import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
 <div>
    <Helmet>
        <title>Grand Restaurant | Privacy Policy </title>
    </Helmet>
    <div className="text-stone-300 py-24">
      <header>
        <h1>Privacy Policy</h1>
    </header>

    <main className="text-left px-40 leading-loose">
        <section className="mt-10">
            <h2 className="text-lg font-bold" >1. Information We Collect</h2>
            <p>We may collect various types of information from you, including:</p>
            <ul className="ml-10">
                <li>Personal Information</li>
                <li>Payment Information</li>
                <li>Device and Usage Information</li>
                <li>Cookies</li>
            </ul>
        </section>

        <section className="mt-10">
            <h2 className="text-lg font-bold">2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="ml-10">
                <li>To provide and maintain our website and services.</li>
                <li>To process and fulfill reservations and orders.</li>
                <li>To communicate with you about your reservations, orders, and other inquiries.</li>
                <li>To send you promotional and marketing materials with your consent.</li>
                <li>To monitor and analyze website usage to improve our services.</li>
            </ul>
        </section>

        <section className="mt-10">
            <h2 className="text-lg font-bold">3. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. However, we may share your information with the following:</p>
            <ul className="ml-10">
                <li>Service Providers</li>
                <li>Legal Obligations</li>
            </ul>
        </section>

        <section className="mt-10">
            <h2 className="text-lg font-bold">4. Your Choices</h2>
            <p>You have certain rights regarding your personal information:</p>
            <ul className="ml-10">
                <li>You can opt-out of receiving marketing communications by following the instructions in the emails you receive.</li>
                <li>You can request access, correction, or deletion of your personal information by contacting us at [Contact Information].</li>
            </ul>
        </section>

        <section className="mt-10">
            <h2 className="text-lg font-bold">5. Security</h2>
            <p>We take reasonable measures to safeguard your information. However, no method of transmission over the internet is entirely secure, so we cannot guarantee the absolute security of your data.</p>
        </section>

        <section>
            <h2 className="text-lg font-bold">6. Updates to this Privacy Policy</h2>
            <p>We may update this Privacy Policy to reflect changes to our information practices. Any updates will be posted on this page, and the "Last Updated" date will be revised accordingly.</p>
        </section>

        <section className="mt-10">
            <h2 className="text-lg font-bold">7. Contact Us</h2>
            <p>If you have any questions or concerns about our Privacy Policy, please contact us at [Contact Information].</p>
        </section>
    </main>

    <footer>
        <p>Thank you for choosing [Your Restaurant Name]. We value your trust and are committed to protecting your privacy.</p>
    </footer>
    </div>
 </div>


  );
};

export default PrivacyPolicy;
