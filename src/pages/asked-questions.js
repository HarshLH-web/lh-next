import Head from "next/head";
import FaqAccordion from "../components/FaqAccordion";

const FaqSchema = 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Who are streamers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Streamers are the individuals who perform live streaming in front of a live audience. They can share any information or their skills through broadcast. The skills can be related to music, dance, games or simply chatting with their fans. With LH Talent Agency, these streamers can easily earn money by following their passion for streaming. We connect them with popular live-streaming platforms and provide the guidance they need to succeed in the industry.Start your journey today!"
    }
  },{
    "@type": "Question",
    "name": "How can I earn money through live streaming?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can earn money by becoming an official streamer on a live-streaming platform. We are working with some popular streaming applications like Poppo Live, Niki Live, Chamet, etc. which provide amazing opportunities for live streamers to earn while sitting at home. The streamer shows their skills to the live audience and they send virtual gifts as an appreciation to their favorite streamer. These gifts can be easily converted into real money through easy withdrawal access. Apart from virtual gifts, the streamer can also earn additional rewards through daily tasks, occasional events, participating in Passion PK, etc."
    }
  },{
    "@type": "Question",
    "name": "How can I become an official streamer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To become an official streamer, you need to sign up with a talent agency or directly with a streaming platform. Agencies like LH Talent Agency can guide you through the process, provide training, and help you start earning. Check out the host registration process here."
    }
  },{
    "@type": "Question",
    "name": "What are the skills needed to become a host?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To become a successful host, you need good communication skills, confidence, and the ability to engage your audience. Being a live streamer or host lets you interact with your audience in real-time. The conversation has to be authentic to feel that connection with your viewers. Being entertaining, friendly, and consistent in streaming also helps you attract more viewers."
    }
  },{
    "@type": "Question",
    "name": "Is there a specific time requirement for streaming?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There’s no fixed time for streaming, but consistency helps you grow. A regular schedule makes it easier for your audience to connect with you and know when to tune in. Some platforms require a minimum number of streaming hours to earn rewards. The best part of streaming is the flexibility to work according to your schedule. LH Talent Agency can support you in setting up your schedule based on your audience reach."
    }
  }]
}

function Faq() {
  return (
    <>
    <Head>
      <title>FAQs | Live Hosting Agency: Answers to Your Streaming Questions</title>
      <meta name="description" content="Find answers to frequently asked questions about LH Talent Agency's services and opportunities. Get the information you need to succeed in the live-streaming industry." />
      <meta name="keywords" content="What is live streaming? How to Become a live-streaming Agent? How can i earn money through live streaming in 2025? What are the benefits of working as a host or Agent?" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lhtalentagency.com/asked-questions" />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://lhtalentagency.com/asked-questions" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FAQs | Live Hosting Agency: Answers to Your Streaming Questions" />
      <meta property="og:description" content="Find answers to frequently asked questions about LH Talent Agency's services and opportunities. Get the information you need to succeed in the live-streaming industry." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lhtalentagency.com" />
      <meta property="twitter:url" content="https://lhtalentagency.com/asked-questions" />
      <meta name="twitter:title" content="FAQs | Live Hosting Agency: Answers to Your Streaming Questions" />
      <meta name="twitter:description" content="Find answers to frequently asked questions about LH Talent Agency's services and opportunities. Get the information you need to succeed in the live-streaming industry." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

      <script type="application/ld+json">
        {JSON.stringify(FaqSchema)}
      </script>
    </Head>
    <div className="faq-bg w-full h-52 lg:h-72 flex items-center justify-center">
      <h1 className="text-white text-4xl lg:text-6xl font-extrabold text-center lg:leading-[1.15]">FAQ&rsquo;s</h1>
    </div>
    <div className=" pt-8 lg:pt-16 pb-4">
      <div className="mx-auto w-[90%] max-w-3xl text-center">
        <h2 className="text-[#252525] text-4xl lg:text-6xl font-extrabold uppercase lg:leading-[1.15]">Frequently Asked <br /> Questions</h2>
        <p className="text-[#5C5C5C] text-base lg:text-xl font-medium mt-4">Find answers to common questions about your live-streaming journey.
        Explore the FAQs and get ready to start with us! We’re here to help you every step of the way.</p>
      </div>
      <FaqAccordion />
    </div>
    </>
  )
}

export default Faq