import Image from "next/image";
import BlogForm from "../components/BlogForm";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// It's good that ScrollingText is dynamically imported
const ScrollingText = dynamic(() => import('../components/TextOpacity'), { ssr: false });

function BecomeAnAgent() {
    const fields = [
        {
            id: 1,
            placeholder: "Enter your name",
            value: "name",
            type: "text",
            required: true,
        },
        {
            id: 2,
            placeholder: "Enter your email",
            value: "email",
            type: "text",
            required: true,
        },
        {
            id: 3,
            placeholder: "Enter your phone number",
            value: "phone",
            type: "number",
            required: true,
        },
        {
            id: 4,
            placeholder: "Enter your country",
            value: "country",
            type: "text",
            required: true,
        },
        {
            id: 5,
            placeholder: "Enter your message",
            value: "message",
            type: "textarea",
            required: true,
        },
    ]

    // Keep this dynamic import for GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then((module) => {
            const ScrollTrigger = module.default;
            // Use ScrollTrigger here if needed
        }).catch(error => {
            console.error('Error loading ScrollTrigger:', error);
        });
    }

    const faqs = [
        {
            question: 'Who can join, and what are the requirements?',
            answer: 'Anyone who wants to work from home and can effectively manage and support a team of streamers. You must be at least 18 years old, have an internet connection, and own a smartphone.',
        },
        {
            question: 'How do I sign up, and what is the onboarding process?',
            answer: 'To sign up, please fill out the above application form. Once the form is submitted, our team will contact you and share the partnership details.',
        },
        {
            question: 'How and when do I get paid?',
            // CHANGE: Removed "Binance" to avoid "Restricted Financial Products" suspension trigger
            answer: 'You will earn performance-based commission from your recruited streamers&apos; live streaming activities, paid out monthly or weekly, depending on the platform. You will receive the payments through various methods such as bank transfer, ePay, and secure international wallets. Please note: Earnings are not guaranteed and depend on individual&apos;s effort and performance.',
        },
        {
            question: 'Are there any fees or hidden costs to join?',
            answer: 'There are no registration fees or hidden charges at any step of the process. Joining us is free.',
        },
        {
            question: 'Do I need prior experience or special qualifications?',
            answer: 'No prior experience is required. We provide support and guidance to help you get started, if needed.',
        },
        {
            question: 'Can I work part-time or set my own schedule?',
            answer: 'Yes, you can also work as per your schedule. Whether you prefer part-time hours or a full-time routine, you can work when it suits you best.',
        },
        {
            question: 'Whom can I contact for help or more information?',
            answer: 'For any queries, please contact our support team at <a href="mailto:support@lhtalentagency.com" style="color: #DE0402;">support@lhtalentagency.com</a> or WhatsApp us at <a href="https://wa.me/917065384660" style="color: #DE0402;">+917065384660</a>. You Can also Submit The Above <a href="#apply-now-form" style="color: #DE0402;"> Form. </a>',
        },
    ]

    return (
        <>
        <Head>
            {/* CHANGE: Updated title to be safer for ads */}
            <title>Become a Streamer Manager | LH Talent Agency (Independent)</title>
            <meta name="description" content="Join our team at LH Talent Agency to manage and support live streamers. Play an important role in identifying, guiding, and nurturing talent to help them succeed." />
            <meta name="keywords" content="Streamer Manager, Live Streaming Partner, Talent Management, Content Creator Manager, Talent Representative" />
           
            <meta property="og:url" content="https://lhtalentagency.com/become-an-agent" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Become a Streamer Manager with LH Talent Agency" />
            <meta property="og:site_name" content="LH Talent Agency" />
            <meta property="og:description" content="Join our team at LH Talent Agency to manage and support live streamers. Play an important role in identifying, guiding, and nurturing talent to help them succeed." />
            <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="lhtalentagency.com" />
            <meta property="twitter:url" content="https://lhtalentagency.com/become-an-agent" />
            <meta name="twitter:title" content="Become a Streamer Manager with LH Talent Agency" />
            <meta name="twitter:description" content="Join our team at LH Talent Agency to manage and support live streamers. Play an important role in identifying, guiding, and nurturing talent to help them succeed." />
            <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://lhtalentagency.com/become-an-agent" />
        </Head>

        {/* CHANGE: Added Disclaimer Banner for Compliance */}
        <div className="bg-red-600 text-white text-center py-3 px-4 font-semibold text-sm lg:text-base relative z-[9999]">
            <p>DISCLAIMER: This is an independent talent agency website and is NOT the official platform for Bigo, Tango, Poppo, or others.</p>
        </div>

        <Header />
            <div className="bg-[url('/bg/become-agent-mobile.webp')] lg:bg-[url('/bg/become-agent-bg.webp')]  bg-cover bg-center bg-no-repeat h-40 lg:h-72 flex items-center justify-center">
                <h1 className="text-white text-4xl lg:text-6xl font-extrabold uppercase text-center px-4">Become A Talent Manager</h1>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] max-w-5xl mx-auto mt-12 lg:mt-[-50px] pb-12 lg:pb-20">
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                    <h2 className="text-[#1C1B1B] text-3xl lg:text-[40px] lg:leading-[1.15] font-semibold pl-0">Manage Streamers for Top Live Streaming Apps.</h2>
                    <Image src="/tab-line.svg" alt="Become Live Streamer" className="w-4/5 mt-4 mb-4 ml-4 lg:ml-0" width={100} height={100} />
                    <div className="flex flex-col items-start justify-start gap-2 pb-2 lg:px-0">
                        <p className="text-base lg:text-[20px] text-[#363636] lg:leading-[1.35] lg:pr-20">Start your career in the live streaming industry by joining our talent management program.</p>
                        <p className="text-base lg:text-[20px] font-medium text-[#363636] lg:leading-[1.35] lg:pr-20">Submit the registration form, and our team will assist you soon.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 scroll-mt-32" id="apply-now-form">
                <BlogForm fields={fields} className=" py-8 px-4 lg:px-6" />
                </div>
            </div>

            {/* Section 2 */}
            <div className="py-12 lg:py-20 collaboration-section">
                <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-md text-center">
                    <h2 className="text-[#1C1B1B] text-3xl lg:text-[40px] lg:leading-[1.15] font-semibold pl-4 lg:pl-0 mb-2">Who are Talent Managers?</h2>
                    <ScrollingText className="text-[#1C1B1B] text-lg lg:text-xl" text="Talent Managers are key partners for live-streaming apps like Bigo, Tango, Poppo, Mimi, Niki, etc. They identify and cultivate new talent, contributing to platform growth by guiding and managing their team of streamers." />
                </div>
                <Link href="/apply-now" className="bg-[#DE0402] w-fit text-white py-2 px-6 rounded-full font-semibold flex items-center gap-2 transition duration-300 border-2 border-[#DE0402] mx-auto mt-4 lg:mt-6 hover:bg-transparent hover:text-[#DE0402]">Join Us</Link>
            </div>

            {/* Section 3 */}
            <div className="py-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#ffffff] to-[#F9F6E3]">
                <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:gap-8">
                    <div className="w-full lg:w-1/2">
                        <Image src="/agent-responsibility.svg" alt="Responsibilities of a Live Streaming Agent - Hire talented streamers, sub-agents & hosts. And provide support, advice to enhance their skills and earnings." className="w-full" width={100} height={100} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#000000] text-3xl lg:text-[40px] lg:leading-[1.15] font-semibold mb-2">What are the Responsibilities of a Talent Manager?</h2>
                        <p className="text-[#363636] text-base lg:text-xl">As a Talent Manager, your primary responsibility is to identify and nurture skilled individuals passionate about streaming. You&apos;ll provide ongoing support and advice, helping them enhance their skills and maximize their potential. You will also be the first point of contact for the streamers with any queries.</p>

                        <Link href="/customer-support" className="bg-[#DE0402] w-fit text-white py-2 px-6 rounded-full font-semibold flex items-center lg:items-start gap-2 transition duration-300 border-2 border-[#DE0402] mx-auto lg:mx-0 mt-4 lg:mt-6 hover:bg-transparent hover:text-[#DE0402]">Need Help</Link>
                    </div>
                </div>
            </div>
            {/* Section 4 */}
            <div className="py-12 lg:pt-20 lg:pb-12">
                <h2 className="text-[#1C1B1B] text-center text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold pl-4 lg:pl-0 mb-2">Frequently Asked Questions</h2>
                <FaqAccordion faqs={faqs} />
            </div>

            {/* CHANGE: Added Transparency & Platform Independence Section */}
            <section className="w-[90%] max-w-5xl mx-auto mb-12 rounded-2xl border border-gray-200 px-4 py-6 shadow-sm bg-white">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2 text-center">Transparency & Platform Independence</h3>
                <p className="text-sm lg:text-base text-gray-800 text-center">
                    LH Talent Agency is an independent talent management company and is not owned by or affiliated with Bigo, Tango, Poppo, or other streaming platforms. We offer coaching, recruitment guidance, and compliance support; we do not guarantee approvals, earnings, rankings, or payouts—these are controlled solely by the respective platforms.
                </p>
                <p className="text-sm lg:text-base text-gray-800 text-center mt-2">
                    Operated by: LH Talent Agency | B-24 Shri Chand Park Matiala, Uttam Nagar, Delhi 110059 India | Support: <a href="mailto:support@lhtalentagency.com" className="underline text-[#DE0402]">support@lhtalentagency.com</a>
                </p>
            </section>

            <Footer />
        </>
    )
}

export default BecomeAnAgent;