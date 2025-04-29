import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import the ScrollingText component
const ScrollingText = dynamic(() => import("../components/TextOpacity"));

function Services() {
  const [activeTab, setActiveTab] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Content for each tab
  const tabs = [
    { id: 1, label: "Hiring Talent", image: '/1.svg', alt: "Hiring Talented Streamers", content: ["Recruiting Cheerful Streamers", "Every Content is Welcomed", "A Stage for Your Talent", "Limitless Income Source"] },
    { id: 2, label: "Recruit Agents", image: '/2.svg', alt: "Recruit live Streaming Agents", content: ["Onboard the Passionate Agents", "Managing a Team Effectively", "Support System for Streamers", "Earn Commission"] },
    { id: 3, label: "Manage Talent", image: '/3.svg', alt: "Manage Talented Hosts & Agents", content: ["Personalized Guidance", "Provide 24*7 Support Service", "Enhance Your Personality", "Boost Your Income"] },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get IP address
    const ipAddress = await fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => data.ip);

    // Prepare the form data
    const dataToSend = {
      name: formValues.name || '',
      email: formValues.email || '',
      phone: formValues.phone || '',
      website_link: formValues.website_link || '',
      message: formValues.message || '',
      ip_address: ipAddress,
      page_url: window.location.href,
    };

    try {
      const response = await fetch('https://webpanel.store/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        alert("Form submitted successfully");
        setFormValues({}); // Reset form after successful submission
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  if (typeof window !== 'undefined') {
    import('gsap/ScrollTrigger')
      .then((module) => {
        const ScrollTrigger = module.default;
        // Use ScrollTrigger here
      })
      .catch((error) => {
        console.error('Error loading ScrollTrigger:', error);
      });
  }

  return (
    <>
      <Head>
        <title>Our Services | LH Talent Agency | Grow Your Streaming Presence</title>
        <meta name="description" content="Explore the range of services offered by LH Talent Agency, including hiring hosts, recruiting agencies, and managing them. We help you to grow." />
        <meta name="keywords" content="Hire Talented Streamers, Recruit live Streaming Agents, Streamer Recruitment Agency, Promote Live Streaming platforms, Live streaming Services" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://lhtalentagency.com/our-services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | LH Talent Agency | Grow Your Streaming Presence" />
        <meta property="og:description" content="Explore the range of services offered by LH Talent Agency, including hiring hosts, recruiting agencies, and managing them. We help you to grow." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lhtalentagency.com" />
        <meta property="twitter:url" content="https://lhtalentagency.com/our-services" />
        <meta name="twitter:title" content="Our Services | LH Talent Agency | Grow Your Streaming Presence" />
        <meta name="twitter:description" content="Explore the range of services offered by LH Talent Agency, including hiring hosts, recruiting agencies, and managing them. We help you to grow." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lhtalentagency.com/our-services" />
      </Head>
      <div className="services-bg">
        <h1 className="text-black text-4xl lg:text-6xl font-extrabold uppercase">Our Services</h1>
      </div>
      <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-lg">
        <h2 className="text-center text-3xl lg:text-4xl font-bold uppercase mt-8 lg:mt-20">Creator <span className="text-[#DE0402]">Management Services</span></h2>
      </div>

      {/* Tab Section */}
      <div className="w-[90%] mx-auto lg:w-[80%] max-w-4xl mt-6 lg:mt-8 mb-12 lg:mb-24">
        {/* Tabs */}
        <div className="tabs flex space-y-2 lg:space-x-8 lg:space-y-0 flex-col lg:flex-row items-center justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-2 lg:py-3 rounded-2xl border-[1px] w-full flex items-center justify-center gap-4 lg:gap-0 cursor-pointer lg:flex-1 ${
                activeTab === tab.id ? 'tab-gradient text-black border-[#DE0402]' : 'bg-white text-black border-[#bfbfbf]'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <h3 className="text-lg lg:text-2xl font-semibold">{tab.label}</h3>
              {/* Triangle */}
              {activeTab === tab.id && (
                <span
                  className="hidden lg:block absolute -bottom-[15px] left-1/2 transform -translate-x-1/2 rotate-180"
                >
                  <svg
                    width="30"
                    height="20"
                    viewBox="0 0 30 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer triangle with a softened top vertex */}
                    <path
                      d="M0 15 L11 2 A3 3 0 0 1 13 2 L24 15 Z"
                      fill="#DE0402"
                    />
                    {/* Inner triangle with a softened top vertex */}
                    <path
                      d="M2 15 L11 4 A2 2 0 0 1 13 4 L22 15 Z"
                      fill="#FAF5E1"
                    />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="tab-content-shadow mt-4 lg:mt-8 p-4 rounded-2xl flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          <Image src={tabs.find((tab) => tab.id === activeTab)?.image} alt={tabs.find((tab) => tab.id === activeTab)?.alt} width={288} height={288} className="w-28 lg:w-72 h-28 lg:h-72 flex-1" />
          <div className="flex flex-col flex-1">
            {tabs.find((tab) => tab.id === activeTab)?.content.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-start gap-2">
                  <Image src="/red-arrow.svg" alt="arrow" width={20} height={20} className="w-4 h-4 lg:w-5 lg:h-5" />
                  <p className="text-base lg:text-xl font-semibold leading-normal">{item}</p>
                </div>
                {index < tabs.find((tab) => tab.id === activeTab)?.content.length - 1 && <hr className="w-[90%] my-2 border-t-[#DFDFDF]" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pt-12 lg:pt-20 pb-12 lg:pb-20 appPromotion-bg">
        <div className="w-[90%] mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-center md:justify-around pl-4 lg:pl-0 gap-8 lg:gap-0">
          <div className="flex items-center md:justify-center w-full lg:w-2/5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-80 text-white text-left">Live <br /> <span className="text-[#DE0402]">Streaming</span> <br /> App Promotions</h2>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-2/5 border-l-2 border-white py-4">
            <h4 className="text-xl lg:text-2xl font-semibold py-2 px-4 lg:px-6 bg-white rounded-[0px_25px_25px_0px] w-fit">Brand Awareness</h4>
            <h4 className="text-xl lg:text-2xl font-semibold py-2 px-4 lg:px-6 bg-white rounded-[0px_25px_25px_0px] w-fit">Promotional Campaigns</h4>
            <h4 className="text-xl lg:text-2xl font-semibold py-2 px-4 lg:px-6 bg-white rounded-[0px_25px_25px_0px] w-fit">Increase Userbase</h4>
            <h4 className="text-xl lg:text-2xl font-semibold py-2 px-4 lg:px-6 bg-white rounded-[0px_25px_25px_0px] w-fit">Gain More Agents</h4>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="py-12 lg:py-20">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase mb-6 lg:mb-8">Why <span className="text-[#DE0402]">Choose Us</span></h2>
        <div className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center w-[90%] mx-auto lg:w-[80%] max-w-5xl">
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">5+ Years <br /> of Expertise</p> 
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Top Recruiting <br /> Agency</p> 
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Guidance on <br /> Every-step</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Increase your <br /> Audience</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Boost your <br /> Revenue</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Personalized <br /> Support</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Get Applications <br /> Updates</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">Networking <br /> Growth</p>
          </div>
          <div className="flex items-center justify-center border-[1px] border-[#DFDFDF] rounded-xl h-16 lg:h-24 w-[45%] lg:w-[30%]">
            <p className="text-sm lg:text-xl text-center px-2">24*7 <br /> Support</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-12 lg:py-20 collaboration-section">
        <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-lg text-center">
          <ScrollingText className="text-3xl lg:text-3xl lg:leading-[1.35] font-semibold" text="Explore exciting opportunities in the live-streaming world! We provide personal support and guidance to help you succeed. Join us and let's make your dreams a reality!" />
        </div>
        <Link href="/apply-now" className="bg-[#DE0402] w-fit text-white py-2 px-6 rounded-full font-semibold flex items-center gap-2 transition duration-300 border-2 border-[#DE0402] mx-auto mt-4 lg:mt-8 hover:bg-transparent hover:text-[#DE0402]">Apply Now</Link>
      </div>

      {/* Section 5 */}
      <div className="w-[90%] mx-auto max-w-screen-lg lg:w-[80%] px-4 py-12 lg:px-16 lg:py-12 lg:mt-12 mb-20 lg:mb-40 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-16">
        {/* Form Container */}
        <div className="border border-[#DFDFDF] rounded-3xl p-6 w-full lg:w-1/2 tab-gradient">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input 
                id="name"
                type="text" 
                name="name" 
                value={formValues.name || ''} 
                onChange={handleInputChange}
                placeholder=" "
                required
                className="w-full py-2 px-4 rounded-full border border-[#DFDFDF] bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent peer" 
              />
              <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Enter your name</label>
            </div>
            <div className="relative">
              <input
                id="phone"
                type="text"
                name="phone"
                value={formValues.phone || ''}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-2 focus:ring-[#DE0402] focus:border-transparent peer"
                required
              />
              <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Phone Number</label>
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formValues.email || ''}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-2 focus:ring-[#DE0402] focus:border-transparent peer"
                required
              />
              <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Email</label>
            </div>
            <div className="relative">
              <input
                id="website_link"
                type="text"
                name="website_link"
                value={formValues.website_link || ''}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-2 focus:ring-[#DE0402] focus:border-transparent peer"
              />
              <label htmlFor="website_link" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Website Link</label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formValues.message || ''}
                onChange={handleInputChange}
                placeholder=" "
                className="w-full min-h-[8rem] py-2 px-4 rounded-3xl border border-[#DFDFDF] bg-white focus:outline-none focus:ring-2 focus:ring-[#DE0402] focus:border-transparent peer"
                required
              />
              <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Your message</label>
            </div>
            <button
              className="bg-transparent hover:bg-[#DE0402] text-[#DE0402] hover:text-white py-2 px-6 rounded-full font-semibold flex items-center gap-2 transition duration-300 border-2 border-[#DE0402] mx-auto mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 transition-transform duration-300 ease-out group-hover:scale-110 origin-left"
              >
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="hidden lg:block text-3xl lg:text-[40px] lg:leading-tight font-bold">
            Need a Boost <br /> for Your <br /> Live Streaming App?
          </h2>
          <h2 className="text-3xl lg:hidden lg:text-[40px] lg:leading-tight font-bold">
            Need a Boost for Your Live Streaming App?
          </h2>
          <p className="text-xl lg:text-2xl text-[#DE0402] font-medium mt-4 lg:mt-4">
            Partner with the Best <br /> Agency Today!
          </p>
          <Image src="/red-arrow-curved.svg" alt="curved-arrow" width={96} height={96} className="hidden lg:block w-16 lg:w-24 mt-4" />
        </div>
      </div>
    </>
  );
}

export default Services;