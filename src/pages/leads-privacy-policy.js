import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeadsPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | LH Talent Agency</title>
        <meta
          name="description"
          content="Privacy Policy for LH Talent Agency: how we collect and use your data when you apply via Facebook Lead Ads."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lhtalentagency.com/leads-privacy-policy" />
      </Head>

      <Header />

      <main className="w-[95%] lg:w-[90%] max-w-5xl mx-auto pt-10 lg:pt-16 pb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1C1B1B]">
            Privacy Policy for LH Talent Agency
          </h1>
          <p className="text-[#363636] mt-3">
            <strong>Effective Date:</strong> January 21, 2026
          </p>

          <section className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1C1B1B] mb-2">
              1. Introduction
            </h2>
            <p className="text-[#363636]">
              Welcome to LH Talent Agency. We value your privacy and are committed to protecting
              your personal data. This Privacy Policy explains how we collect and use your
              information when you apply to our Agency Partnership Program via Facebook Lead Ads.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1C1B1B] mb-2">
              2. Data We Collect
            </h2>
            <p className="text-[#363636] mb-3">
              When you submit our Lead Form, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#363636]">
              <li>Full Name</li>
              <li>Mobile/WhatsApp Number</li>
              <li>Email Address</li>
              <li>Country</li>
              <li>Professional Experience (as provided in form answers)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1C1B1B] mb-2">
              3. How We Use Your Data
            </h2>
            <p className="text-[#363636] mb-3">
              We use the information collected solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#363636]">
              <li>To contact you regarding your application to become an agent or host.</li>
              <li>
                To provide information about commission structures and platform registration
                (Chamet, Taka Live, etc.).
              </li>
              <li>To provide support and training for our agency partners.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1C1B1B] mb-2">
              4. Data Sharing
            </h2>
            <p className="text-[#363636]">
              LH Talent Agency does not sell, rent, or share your personal information with
              third-party advertisers. Your data is only shared internally with our recruitment
              team to process your application.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1C1B1B] mb-2">
              5. Your Rights
            </h2>
            <p className="text-[#363636]">
              You have the right to request the deletion of your data at any time. To do so,
              please contact us directly via the WhatsApp link provided in our Lead Form or via
              email.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
