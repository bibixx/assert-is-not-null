import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export const Terms = () => {
  return (
    <>
      <Header />
      <div className="bg-green-50 p-8">
        <div className="container max-w-6xl mx-auto bg-green-50">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Terms of Service</h1>
          <p>
            Welcome to Leaf It to Me, your trusted plant care dashboard. By accessing or using our services, you agree
            to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">1. Acceptance of Terms</h2>
          <p>
            By using Leaf It to Me, you agree to these Terms and Conditions, as well as our Privacy Policy. If you do
            not agree, please do not use our services.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">2. Services Provided</h2>
          <p>
            Leaf It to Me offers a digital dashboard to help you manage and care for your plants. Features may include
            plant care tips, watering schedules, and more. We strive to provide accurate and helpful information, but
            cannot guarantee the success of your plant care.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">3. WarsawJS Meetup Special Clause</h2>
          <p>
            In the spirit of WarsawJS, remember that just as JavaScript frameworks evolve faster than your houseplants
            can wilt, so too can our terms. If you find a bug in your plant care routine, just like in code, try turning
            it off and on again (i.e., give it a little water and sunlight), and if that fails, consult our dashboard or
            a fellow green-thumbed developer!
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this site, including but not limited to software, text, graphics, and
            logos, are the property of Leaf It to Me or its content suppliers and are protected by international
            copyright laws.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">5. Limitation of Liability</h2>
          <p>
            Leaf It to Me shall not be liable for any indirect, incidental, special, or consequential damages arising
            out of or in connection with the use of our services.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at our discretion, without notice,
            for conduct that we believe violates these Terms and Conditions or is harmful to other users or us.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">7. Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. Changes will be effective immediately upon
            posting. Your continued use of the service constitutes acceptance of the revised terms.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of Poland. Any disputes arising from these terms will be resolved in
            the courts of Warsaw.
          </p>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">9. User Obligations</h2>
          <ul>
            <ol>
              Account Responsibility: You are responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
            </ol>
            <ol>Compliance: You agree to use our services in compliance with all applicable laws and regulations.</ol>
          </ul>
          <h2 className="text-2xl text-green-800 font-semibold mt-4 mb-1">10. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at support@leafittome.com.</p>
          <Footer />
        </div>
      </div>
    </>
  );
};
