'use client';
import Head from "next/head";
import Image from "next/image";
import ScrollUpButton from "../components/ScrollUp";
import Testimonials from "../components/Testimonial";
import AppsAccordion from "../components/Accordion";
import CountUp from "react-countup";
import Lottie from "lottie-react";
import groupAnimation from '../assets/Group-5.json';
import { InView } from 'react-intersection-observer';
import Link from "next/link";

const HomeSchema = 
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LH Agency",
    "alternateName": "LH Talent Management Agency",
    "url": "https://lhtalentagency.com",
    "description": "LH Talent Agency's blog page provides you with all the needed information with updated details, insights, and tips about the live streaming industry. Explore Now!",
    "publisher": {
      "@type": "Organization",
      "name": "LH Agency",
      "logo": "https://lhtalentagency.com/logo.png",
      "url": "https://lhtalentagency.com"
    },
    "sameAs": [
      "https://www.instagram.com/lhtalentagency/",
      "https://www.facebook.com/profile.php?id=61557976949556",
      "https://www.linkedin.com/company/live-hosting-agency"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lhtalentagency.com/blogs?tag={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const OrganizationSchema = 
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "LH Agency",
    "alternateName": "LH Talent Management Agency",
    "url": "https://lhtalentagency.com/",
    "logo": "https://lhtalentagency.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61557976949556",
      "https://www.instagram.com/lhtalentagency/",
      "https://www.linkedin.com/company/live-hosting-agency",
      "https://www.youtube.com/@LHTalentAgency"
    ]
  }
  
  


export default function Home() {
  return (
    <>
      <Head>
        <title>LH Talent Agency | Connecting Talent with Top Streaming Opportunities</title>
        <meta name="description" content="Discover LH Talent Agency, a leading live-streaming talent agency, connects talented streamers with top streaming opportunities. Join us today!" />
        <meta name="keywords" content="LH Talent Agency, Live Streaming Agency, Live Streaming Talent Agency" />

        
    {/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://lhtalentagency.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="LH Talent Agency | Connecting Talent with Top Streaming Opportunities" />
<meta property="og:description" content="Discover LH Talent Agency, a leading live-streaming talent agency, connects talented streamers with top streaming opportunities. Join us today!" />
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="lhtalentagency.com" />
<meta property="twitter:url" content="https://lhtalentagency.com" />
<meta name="twitter:title" content="LH Talent Agency | Connecting Talent with Top Streaming Opportunities" />
<meta name="twitter:description" content="Discover LH Talent Agency, a leading live-streaming talent agency, connects talented streamers with top streaming opportunities. Join us today!" />
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

        <link rel="canonical" href="https://lhtalentagency.com/" />
        <link rel="preload" href="/live-hosting.gif" as="image" type="image/gif" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
            {JSON.stringify(HomeSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(OrganizationSchema)}
          </script>

        </Head>
      <ScrollUpButton />
      <main className="h-auto w-full main">
        <div className="flex flex-col lg:flex-row w-[90%] xl:w-[80%] pb-8 mx-auto h-full pt-16 lg:pt-40 lg:pb-0">
          {/* Banner Text */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left 2xl:pl-12 gap-4 mb-8">
            <h1 className="text-[35px] max-w-[300px] mx-auto sm:mx-0 sm:max-w-none sm:text-[3rem] xl:text-6xl 2xl:text-[4.25rem] leading-[1.15] sm:leading-tight uppercase font-black">
              LH Talent Agency <span className="sm:hidden">where</span> <br />
              <span className="inline-flex items-center gap-4"><span className="hidden sm:block">where</span> talent 
                <span><Image src="/live-hosting.gif" alt="Live Icon" unoptimized className="w-auto h-12 sm:h-16 xl:h-20 2xl:h-24 object-contain sm:mt-1" loading="eager" width="50" height="24" />
                </span>
              </span> <br />
              meets opportunity
            </h1>
            
            <div className="flex flex-col gap-2">
            <p className="text-base lg:text-lg lg:pr-24 lg:leading-normal">With a network of over 30,000+ agents and 17,000+ hosts worldwide—from India to the USA, Africa, and beyond. We specialize in connecting top talent to live-streaming and video-calling apps. With our personalized guidance and expertise, make your live-streaming a winning journey.</p>
            <p className="text-base lg:text-xl lg:pr-24 font-semibold mt-2">Ready to take your streaming journey to the next level? Let us help you shine on the world&apos;s leading platforms.</p>
            </div>

       <Link href="/apply-now">
       <button
          className="bg-transparent hover:bg-[#DE0402] hover:text-white text-[#DE0402] border-[#DE0402] border-2 py-3 px-6 rounded-full font-semibold flex items-center gap-1 w-fit relative overflow-hidden group transition duration-300 mx-auto mt-2 lg:m-0"
          aria-label="Discover Now"
        >
          <span>Discover Now</span>
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left"
            >
              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

       </Link>
          </div>
          {/* Banner Image */}
          <div className="w-full lg:w-2/5 flex items-end">
            <Image src="/men-2.png" alt="LH Talent Agency - live streaming - Become a streamer" className="hidden lg:block mx-auto lg:m-0 w-64 lg:w-auto" loading="lazy" width="1000" height="256" />
          </div>
        </div>
      </main>


      {/* Section 2 */}
      <section>
        <div className="w-[90%] mx-auto bg-white pt-12 pb-20 lg:pt-24 lg:pb-32 ">
          <h2 className="uppercase text-center text-black font-extrabold text-4xl md:text-5xl leading-tight md:leading-snug">Our Services</h2>

          {/* Box Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-4 mx-auto mt-8 2xl:mt-16 max-w-7xl">
            {/* Box 1 */}
              <div className="box1 max-w-[400px] mx-auto">                 {/* Box Content  */}
                <div className="mt-56 px-8 text-center">
                <h3 className="text-2xl font-semibold">Hiring Talent</h3>

                <div className="h-[3px] w-[50px] bg-[#DE0402] rounded-full mx-auto mt-3"></div>

                <p className="mt-2">
							We discover and nurture extraordinary individuals with a passion for entertainment. Whether it&apos;s singing, dancing, comedy, or simply connecting with audiences, we give every talent a platform to shine and follow their dreams of becoming social stars. 
                </p>
                </div>
              </div>

            {/* Box 2 */}
              <div className="box2 max-w-[400px] mx-auto">                {/* Box Content  */}
                <div className="mt-56 px-8 text-center">
                <h3 className="text-2xl font-semibold">Recruit Agents</h3>

                <div className="h-[3px] w-[50px] bg-[#DE0402] rounded-full mx-auto mt-3"></div>

                <p className="mt-2">
							Behind every successful streamer, there is a dedicated agent. With countless streamers joining the industry, skilled agents are essential to guide them. We recruit agents with basic managerial skills who can mentor their streamers to thrive in the industry. 
						</p>
                </div>
              </div>


            {/* Box 3 */}
              <div className="box3 max-w-[400px] mx-auto">                 {/* Box Content  */}
                <div className="mt-56 px-8 text-center">
                <h3 className="text-2xl font-semibold">Manage Talent</h3>

                <div className="h-[3px] w-[50px] bg-[#DE0402] rounded-full mx-auto mt-3"></div>

                <p className="text-base mt-2">
							Managing talent is more than recruiting—it&apos;s about building careers. Our team focuses on providing personalized support, expert guidance, and growth strategies to help individuals build profitable careers and achieve their dreams.				  
						</p>
                </div>
              </div>


            

          </div>
        </div>
      </section>


       {/* Section 3 */}
       <section id="wwa">
        <div className="w-[90%] mx-auto pt-12 lg:pt-24 lg:pb-16">
        <h2 className="uppercase text-center text-white font-extrabold text-4xl lg:text-6xl 2xl:text-7xl"> What <span className="text-[#DE0500]">we</span> achieved</h2>
        <div className="flex flex-col lg:flex-row max-w-5xl lg:gap-8 mx-auto mt-8 lg:mt-0">
          <div className="w-full lg:w-1/2 text-white flex items-center mx-auto px-6 lg:px-12 py-6 lg:py-4 wwa-gradient lg:my-8 mb-4 text-lg text-center lg:text-left">
          <p className="text-base lg:text-lg leading-snug">Our journey began with a vision, and today, we are the top recruiter for most of our collaborated apps. Every milestone reflects our dedication to reaching new heights, from recruiting new talent to shaping careers.</p>
          </div>
          <InView>
            {({ref, inView}) => (
              <div ref={ref} className="w-full lg:w-1/2 my-4 flex items-center justify-center">
              <Lottie 
                animationData={groupAnimation}
                loop={inView}
                autoplay={inView}
              />
            </div>
            )
          }
          </InView>
          
        </div>

      {/* Host, Agent, App Section */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto pt-8 pb-16 lg:py-4 lg:mt-4">
        <div className="w-full lg:w-[35%] flex flex-col items-center justify-center gap-2 lg:gap-4">
        <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref}>
                {inView && (
                  <CountUp
                    className="text-5xl 2xl:text-7xl font-extrabold text-white"
                    duration={2}
                    end={17000}
                    suffix="+"
                  />
                )}
              </div>
            )}
          </InView>
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#DE0402] uppercase">Host</h3>
          <hr className="w-4/5 lg:hidden border-gray-300 my-8 mx-auto" />
        </div>
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center gap-2 lg:gap-4 lg:border-x border-gray-300">
        <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref}>
                {inView && (
                  <CountUp
                    className="text-5xl 2xl:text-7xl font-extrabold text-white"
                    duration={2}
                    end={15}
                    suffix="+"
                  />
                )}
              </div>
            )}
          </InView>
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#DE0402] uppercase">Apps</h3>
          <hr className="w-4/5 mx-auto lg:hidden border-gray-300 my-8" />
        </div>
        <div className="w-full lg:w-[35%] flex flex-col items-center justify-center gap-2 lg:gap-4">
        <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref}>
                {inView && (
                  <CountUp
                    className="text-5xl 2xl:text-7xl font-extrabold text-white"
                    duration={2}
                    end={30000}
                    suffix="+"
                  />
                )}
              </div>
            )}
          </InView>
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#DE0402] uppercase">Agent</h3>
        </div>
      </div>
        </div>
       </section>

        {/* Section 5 */} 
        <section className="bg-[#FFE9DF] py-12 lg:py-24">
          <div className="max-w-7xl mx-auto  w-[90%]">
            {/* top text */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
              <h2 className="uppercase text-center text-black font-extrabold text-4xl lg:text-6xl 2xl:text-7xl leading-snug">Our Apps</h2>
              <p className="text-base font-medium max-w-[36rem] text-center lg:text-left ">Explore our top collaborations with live streaming applications, where talent meets opportunity. Your success story begins here- let&apos;s create something big together.</p>
              <Link href="/apply-now" className="rounded-full mt-4 lg:mt-0">
              <button
        className="bg-transparent hover:bg-[#DE0402] hover:text-white text-[#DE0402] border-[#DE0402] border-2 py-3 px-6 rounded-full font-semibold flex items-center gap-1 w-fit relative overflow-hidden group transition duration-300 mx-auto lg:m-0"
        aria-label="View All"
      >
        <span>View All</span>
        <span className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left"
          >
            <path
              d="M4 12H20M20 12L16 8M20 12L16 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
              </button>
              </Link>
            </div>
            {/* app container */}
            <div>
              <AppsAccordion />
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="collaboration-section">
          <div className="mx-auto w-[90%] max-w-6xl text-black py-12 md:py-24 text-center flex flex-col items-center justify-center gap-4">

            <h2 className="text-[30px] sm:text-[3rem] lg:text-7xl font-bold leading-[1.15] sm:leading-tight capitalize">
            Powering Creativity <br />
            <span className="inline-flex flex-col lg:flex-row items-center justify-center">Through
              <span className="inline-flex w-32 lg:w-40 items-center justify-center mx-6 my-4 lg:mt-6">
              <Image src="/gif-coll.gif" alt="Animation" unoptimized className="w-full h-full object-cover" width="128" height="128" />
            </span>
            Collaboration
            </span>
            </h2>
            <p className="text-base lg:text-3xl max-w-2xl mx-auto font-semibold">Interested in collaborating? Let&apos;s make magic happen!</p>

          <a href="mailto:support@lhtalentagency.com">
          <button
          className="bg-transparent hover:bg-[#DE0402] hover:text-white text-[#DE0402] border-[#DE0402] border-2 py-3 px-6 rounded-full font-semibold flex items-center gap-1 w-fit relative overflow-hidden group transition duration-300 mx-auto lg:mt-4"
          aria-label="Get in Touch"
        >
          <span>Get in Touch</span>
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 z-10 transition-transform duration-300 ease-out"
            >
              <path
                d="M4 12H20M20 12L16 8M20 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          </button>
          </a>
          </div>
        </section>
        {/* Section 7 */}
        <section>
        <div className="mx-auto w-[90%] max-w-6xl py-12 md:py-24">
          <Testimonials />
        </div>
        </section>

    </>
  )
}