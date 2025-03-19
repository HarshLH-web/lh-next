// import React from 'react'

import Head from "next/head"


const OurTeam = [
  {
    name: "Mr. Mahesh Bairwa",
    description: "Brings 8 years of experience in the live streaming industry and leads the company with a strategic vision. With an MBA in Human Resources and expertise in digital marketing, he drives innovation and growth.",
    designation: "Founder & Director"
  },
  {
    name: "Mr. Apoorv Verma",
    description: "He drives the company's strategy and leads marketing initiatives with a strong focus on digital growth. Backed by 6 years of affiliate marketing experience, he brings valuable expertise to the digital landscape.",
    designation: "CEO & CMO"
  },
  {
    name: "Mr. Abhijit Gadhavi",
    description: "With 10 years of expertise in hospitality and customer support, Abhijit manages international customer relations. He is dedicated to delivering exceptional service and maintaining high customer satisfaction globally.",
    designation: "CRM - INT."
  },
  {
    name: "Mr. Rohit Kundara",
    description: "Rohit oversees customer support in India and Pakistan, bringing 5 years of experience in customer service and sales. His leadership ensures exceptional client satisfaction and smooth operations in these regions.",
    designation: "CRM - IND & PAK"
  }
]

function About() {
  return (
    <>
    <Head>
      <title>About LH Talent Agency | Your Partner in Live Streaming Success</title>
      <meta name="description" content="Learn about LH Talent Agency, one of the top live-streaming agencies. Our mission is to create a community for talented content creators and hosts." />
      <meta name="keywords" content="Live Streaming, Talent Agency, Content Creator Agency" />
      <link rel="canonical" href="https://lhtalentagency.com/about-talent-agency" />
    </Head>
    <div>
      <div className="about-bg">
        <h1 className="text-black text-4xl lg:text-6xl font-extrabold uppercase">About</h1>
      </div>
      <h2 className="text-center text-4xl lg:text-5xl font-bold uppercase mt-10 lg:mt-20">we are <span className="text-[#DE0402]">talent agency</span></h2>
      
      <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-xl flex flex-col lg:flex-row justify-center gap-2 lg:gap-12 mt-4 lg:mt-8 px-2 lg:px-0">
        <div className="flex-1">
          <p className="text-justify text-base lg:text-lg leading-normal text-[#727272]">LH Talent Agency bridges the gap between talented streamers and influencers with the leading live-streaming applications worldwide. We are passionate about empowering streamers and providing adequate support to help them thrive in the broadcasting industry.
          We reach a network of over 30,000 agents and 17,000 hosts and work with individuals from regions including India, Pakistan, the Philippines, the USA, Africa, and Europe.
          We specialize in recruiting talented streamers and guiding them to achieve their dreams of becoming social stars or influencers. We welcome talent who brings energy, originality, and authenticity to their broadcasts. 
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-2 lg:gap-4 text-justify">
          <p className="text-base lg:text-lg leading-normal text-[#727272]">We collaborate with various live-streaming and video-calling applications like Poppo Live, Mimi, Chamet, Niki, HoneyCam, etc. We are proud to offer personalized support to each streamer and agent and contribute to their profitable live-streaming journey.
          We don&apos;t just see ourselves as a talent agency; we&apos;re a community of creators who support one another in achieving our goals.
          </p>
          <p className="text-base lg:text-xl font-semibold">At LH Talent Agency, the possibilities are endless. Whether you are an aspiring streamer or an experienced influencer, we invite you to be a part of an exciting journey.</p>
        </div>
      </div>

      {/* Section 2 */}

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-20">
        <div className="flex-1 bg-black text-white text-center py-12 lg:py-20 rounded-[20px_20px_0px_0px] lg:rounded-[0px_35px_35px_0px]">
          <div className="w-[90%] lg:w-[80%] 2xl:px-20 mx-auto lg:ml-auto lg:pr-12 lg:mx-0">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase mb-2 lg:mb-4">Mission</h2>
            <p className="text-base lg:text-lg leading-normal">Our mission is to create a supportive community where every talent shines. We are dedicated to discovering and nurturing talents and ensuring every streamer has been given personalized support and opportunities to thrive in the live-streaming world. </p>
          </div>
        </div>
        <div className="flex-1 bg-[#DE0402] text-white text-center py-12 lg:py-20 rounded-[0px_0px_20px_20px] lg:rounded-[35px_0px_0px_35px]">
          <div className="w-[90%] lg:w-[85%] 2xl:px-20 mx-auto lg:mr-auto lg:pl-12 lg:mx-0">
            <h2 className="text-3xl lg:text-6xl font-bold uppercase mb-2 lg:mb-4">Vision</h2>
            <p className="text-base lg:text-lg leading-normal">We picture a world where different talents come together and live-streaming becomes a colorful, vibrant community of creativity and connections. We aim to make live streaming a great space to share stories and passions, making each broadcast a celebration.</p>
          </div>
        </div>
      </div>
    

      {/* Section 3 */}

      <div className="pb-12 lg:pb-12">
        <h2 className="text-center text-4xl lg:text-5xl font-bold uppercase mt-10 lg:mt-20">Our <span className="text-[#DE0402]">team</span></h2>
        <div className="w-[90%] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4 mt-4 lg:mt-8 max-w-[985px] xl:max-w-[1170px] 2xl:max-w-[1500px] mx-auto">
          {OurTeam.map((item, index) => (
            <div className="flex-1 text-center border-[1px] border-[#F6B6B6] rounded-2xl overflow-hidden" key={index}>
              <p className="text-base text-[#878787] p-4 bg-[#F4F4F4]">{item.description}</p>
              <div className="flex flex-col gap-0 py-3">
              <p className="text-lg text-[#DE0402] font-semibold">{item.name}</p>
              <p className="text-base lg:text-sm font-medium">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default About