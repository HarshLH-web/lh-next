import Image from "next/image";
import BlogForm from "../components/BlogForm";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Link from "next/link";

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
            type: "text",
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
  return (
    <>
    <Head>
      <title>Become an Agent at LH Talent Agency: Earn Big!</title>
      <meta name="description" content="Join our team at LH Talent Agency as an agent and play an important role in finding, recruiting, and nurturing live streamers. Start your agency and earn big!" />
      <meta name="keywords" content="Become an Agent, Become a live streaming agent, Start career as a streaming agent" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lhtalentagency.com/become-an-agent" />
    </Head>
        <div className="bg-[url('/become-agent-mobile.webp')] lg:bg-[url('/become-agent-bg.png')]  bg-cover bg-center bg-no-repeat h-40 lg:h-72 flex items-center justify-center">
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold uppercase text-center px-4">Become An Agent</h1>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] max-w-5xl mx-auto mt-12 lg:mt-[-50px] pb-12 lg:pb-20">
            <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                <h2 className="text-[#1C1B1B] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold pl-0">Good at managing <br /> a team and want to <br /> start your Agency?</h2>
                <Image src="/tab-line.svg" alt="Become Live Streamer" className="w-4/5 mt-4 mb-4 ml-4 lg:ml-0" width={100} height={100} />
                <div className="flex items-start justify-start gap-2 pb-2 lg:px-0">
                    {/* <img src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" /> */}
                    <p className="text-base lg:text-[20px] text-[#363636]">You have landed on the right platform.</p>
                </div>
                <div className="flex items-start justify-start gap-2 pb-2 lg:px-0">
                    {/* <img src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" /> */}
                    <p className="text-base lg:text-[20px] text-[#363636]">We welcome you to join us and become a part of the vibrant community.</p>
                </div>
                <div className="flex items-start justify-start gap-2 lg:px-0">
                    {/* <img src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" /> */}
                    <p className="text-base lg:text-[20px] text-[#363636]">Let us guide you on what you will get as an Agent.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <BlogForm fields={fields} className=" py-8 px-4 lg:px-6" />
            </div>
        </div>

        {/* Section 2 */}
        <div className="py-12 lg:py-20 collaboration-section">
            <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-md text-center">
                <h2 className="text-[#1C1B1B] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold pl-4 lg:pl-0 mb-2">Who are Agents?</h2>
                <ScrollingText className="text-[#1C1B1B] text-xl lg:text-2xl" text="The agents act as a bridge between talented streamers and live-streaming platforms. This opportunity will allow you to work with various talented individuals." />
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
                    <h2 className="text-[#000000] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold mb-2">What are the Responsibilities of an Agent?</h2>
                    <p className="text-[#363636] text-base lg:text-xl">As an agent, your first responsibility is to find and recruit skilled people who are passionate about streaming. You&apos;ll provide support and advice, helping them enhance their skills. Also, you will be the first point of contact for the streamers with any queries.</p>
                </div>
            </div>
        </div>
        {/* Section 4 */}
        <div className="py-12 lg:pt-20 lg:pb-16">
            <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-xl flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-0">
                <div className="w-full lg:w-1/2 pt-4">
                    <Image src="/benefits_of_agency.svg" alt="Unlock your live streaming potential with expert support" className="w-full max-w-[30rem] mx-auto" width={100} height={100} />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#000000] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold mb-2">Benefits of Choosing Us at<span className="text-[#DE0402]"> LH Talent Agency</span></h2>
                    <p className="text-[#363636] text-base lg:text-[19px] mb-4">At LH Talent Agency, we understand the challenges agents face, and we are here to support you at every step. We offer you valuable tips and resources that will help you succeed. By joining our team, you will gain access to the vast network of industry connections.</p>

                    <p className="text-[#363636] text-base lg:text-[19px] font-semibold">Ready to take the next step? </p>
                    <p className="text-[#363636] text-base lg:text-[19px] font-semibold">Fill out the <Link href="/become-an-agent" className="text-[#DE0402] underline hover:text-[#363636]">registration form</Link> above and start your journey as a talent agent with us today!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BecomeAnAgent;
