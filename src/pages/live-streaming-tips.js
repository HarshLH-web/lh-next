// Remove static imports
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic";
import { useEffect } from 'react';

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// Use dynamic imports for gsap and ScrollTrigger
const gsap = dynamic(() => import('gsap'), { ssr: false });
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });

const tipsData = [
  {
    image: "/Stay Positive.png",
    title: "Stay Positive",
    alt: "Positive attitude can change your whole live stream.",
    description: "Your smile and a positive attitude can change your whole live stream and create a welcoming atmosphere for your audience.",
  },
  {
    image: "/Engage with Viewers.png",
    title: "Engage with Viewers",
    alt: "Interact and Engage with viewers",
    description: "Make sure to greet your audience when they join you and keep interacting with them during your stream. Acknowledge and thank them for their support and gifts.",
  },
  {
      image: "/Consistency.png",
      title: "Consistency",
      alt: "Make consistency in live streaming to build your audience.",
      description: "Stream regularly to build and maintain your audience. Longer streaming times may increase your earnings.",
  },
]
const tipsData2 = [
  {
    image: "/Set the Scene.png",
    title: "Set the Scene",
    alt: "Nice background can enhance the viewer's experience",
    description: "Ensure your streaming background is neat with good lighting. A pleasant background can enhance the viewer's experience",
  },
  {
    image: "/Showcase Your Talents.png",
    title: "Showcase Your Talents",
    alt: "Show your talent like singing, dancing, or gaming what you love with confidence.",
    description: "Whether it's singing, dancing, or gaming, perform with confidence and passion to captivate your audience.",
  },
]

const videoCallTipsData = [
  {
    description: "Prepare a basic set of questions on different fields to keep the conversation flowing.",
  },
  {
    description: "Start with simple greetings and gradually get into more detailed discussions to build a connection.",
  },
  {
    description: "Invite users to follow you to keep them updated on your streaming schedule.",
  },
  {
    description: "Always thank viewers for gifts and support.",
  },
  {
    description: "Avoid sharing personal contact information and keep all communications within the app.",
  },  
]

function StreamingTips() {
  useEffect(() => {
    // Ensure gsap and ScrollTrigger are only used on the client side
    gsap.then((gsapModule) => {
      const gsap = gsapModule.default;
      ScrollTrigger.then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Your gsap and ScrollTrigger logic here
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Streaming Tips | LH Talent Agency: Enhance Your Streaming</title>
        <meta name="description" content="Discover valuable streaming tips and best practices from LH Talent Agency to improve your live content and engage with your audience effectively." />
        <meta name="keywords" content="Streaming Tips, Live Streaming Tips and Tricks, Best Streaming Tips for Beginners, Tips For Hosts, How to Become a Successful Streamer" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://lhtalentagency.com/become-an-agent" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Streaming Tips | LH Talent Agency: Enhance Your Streaming" />
        <meta property="og:description" content="Discover valuable streaming tips and best practices from LH Talent Agency to improve your live content and engage with your audience effectively." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lhtalentagency.com" />
        <meta property="twitter:url" content="https://lhtalentagency.com/streaming-tips" />
        <meta name="twitter:title" content="Streaming Tips | LH Talent Agency: Enhance Your Streaming" />
        <meta name="twitter:description" content="Discover valuable streaming tips and best practices from LH Talent Agency to improve your live content and engage with your audience effectively." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lhtalentagency.com/streaming-tips" />
      </Head>
      <div className='blog-bg'>
      <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>Streaming Tips</h1>
      </div>
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mt-8 lg:mt-16 uppercase px-2">Advice for <span className="text-[#DE0400]">Streamers</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-8 mx-auto mt-8 lg:mt-16 w-[90%] max-w-[68rem]">
        {tipsData.map((tip, index) => (
          <div key={index} className="tab-gradient border border-gray-200 cursor-pointer rounded-[35px] shadow-md">
            <div className="aspect-w-12 aspect-h-6">
              <Image src={tip.image} alt={tip.alt} className="w-full h-full object-cover rounded-lg" width={1000} height={100} />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 mx-auto mt-8 lg:mt-12 w-[90%] max-w-[44rem]">
        {tipsData2.map((tip, index) => (
          <div key={index} className="tab-gradient border border-gray-200 rounded-[35px] shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <Image src={tip.image} alt={tip.alt} className="w-full h-full object-cover rounded-lg" width={1000} height={100} />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-16 w-[90%] mx-auto max-w-5xl flex flex-col lg:flex-row gap-2 lg:gap-8 items-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center uppercase lg:whitespace-nowrap"><span className="text-[#DE0400]">Technical</span> Tips</h2>
        <p className="text-base lg:text-lg text-center lg:text-left"><span className="text-[#DE0400] font-medium">Stable Internet:</span> A reliable and fast internet connection is important for uninterrupted streaming and clear video quality.</p>
      </div>

      <div className="flex items-center justify-center collaboration-section mt-10 lg:mt-12">
       <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-[90%] max-w-6xl mx-auto py-12 gap-4 lg:gap-16">
          <div className="w-full max-w-[35rem] text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-semibold uppercase">Be a <span className="text-[#DE0400]">Successful Streamer</span></h2>
            <p className="text-base lg:text-lg text-black/80 mt-2 lg:mt-4 mb-2 leading-[1.375]">When setting up your profile, choose a clear profile picture and wear comfortable clothing. Before streaming, check your background settings and always keep the set-up neat and clean. You can also include a few aesthetic elements in the background (if desired). Greet your viewers by name to create a welcoming atmosphere.
            </p>
            <p className="text-base lg:text-lg text-black/80 font-semibold">Stay updated on app policies and occasional events to maximize income.</p>
            <Link href="/become-live-streamer">
   <button
      className="bg-transparent hover:bg-[#DE0402] hover:text-white text-[#DE0402] border-[#DE0402] border-2 py-2 px-6 rounded-full font-semibold flex items-center gap-1 w-fit relative overflow-hidden group transition duration-300 mx-auto mt-2 lg:mt-4 lg:ml-0"
    >
      <span>Get Started</span>
    </button>

   </Link>
          </div>
          <div className="w-full max-w-[28rem]">
            <Image src="/Be a Successful Streamer.png" alt="Become a Successful Streamer with LH Talent Agency! Join Today" className="w-full h-full object-cover rounded-lg" width={1000} height={100} />
          </div>
       </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-20 mb-40 lg:mb-44 lg:gap-20">
        <div className="hidden lg:block">
          <Image src="/Tips for Video Calling Hosts.png" alt="Get tips for video calling hosts to enhance your communication skills with audience and improve earnings" className="w-full object-cover rounded-lg" width={1000} height={100} />
        </div>
        <div className="w-[full] max-w-[33rem] px-6">
        <h2 className="text-3xl lg:text-5xl font-semibold uppercase mb-4 lg:mb-6 lg:leading-[1.15]">Tips for<span className="text-[#DE0400]"> Video Calling</span> Hosts</h2>
              {videoCallTipsData.map((tip, index) => (
                <div key={index} className="flex items-start justify-start gap-2 pb-2 px-2 lg:px-0 mb-1">
                    <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                    <p className="text-base lg:text-[18px] text-[#363636] leading-[1.35]">{tip.description}</p>
                </div>
              ))}
        </div>
      </div>

      
    </>

  )
}

export default StreamingTips