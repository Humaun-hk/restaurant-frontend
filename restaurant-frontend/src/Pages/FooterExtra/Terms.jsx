import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div>
        <Helmet>
            <title>Grand Restaurant | Terms of Use </title>
        </Helmet>
      <header className="bg-mybrown p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      </header>

      <main className="p-4 text-left mx-4 lg:mx-40 text-stone-300">
        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to the terms and conditions ("Terms") for [Your Restaurant
            Name]. These Terms outline your rights and responsibilities when
            using our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">2. Website Use</h2>
          <p>
            By using our website, you agree to comply with these Terms. You must
            not use the website for any unlawful or prohibited purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">3. Privacy</h2>
          <p>
            Your use of our website is also governed by our Privacy Policy.
            Please review it to understand how we handle your personal
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>
            The content on our website, including text, images, and logos, is
            protected by copyright and other intellectual property laws. You may
            not use, reproduce, or distribute our content without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            We do our best to provide accurate and up-to-date information on our
            website, but we are not liable for any errors, omissions, or
            inaccuracies. Your use of our website is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time, and any changes will be
            posted on this page. By continuing to use our website, you agree to
            the revised Terms.
          </p>
        </section>
      </main>

      <footer className="p-4 text-center text-stone-300 mb-10">
        <p>
          Thank you for using [Your Restaurant Name]. If you have any questions
          or concerns about these Terms, please contact us at [Contact
          Information].
        </p>
      </footer>
    </div>
  );
};

export default Terms;
