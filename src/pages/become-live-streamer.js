import Image from "next/image";
import BlogForm from "../components/BlogForm";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function BecomeLiveStreamer() {
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
            placeholder: "Enter your Gender",
            value: "gender",
            type: "text",
            required: true,
        },
        {
            id: 5,
            placeholder: "Enter your Country",
            value: "country",
            type: "text",
            required: true,
        },
        {
            id: 6,
            placeholder: "Enter your message",
            value: "message",
            type: "textarea",
            required: true,
        },
    ]
  return (
    <>
    <Head>
      <title>Join LH Talent Agency as a Live Streamer: Unlock Your Potential</title>
      <meta name="description" content="Want to become a live streamer? Join LH Talent Agency for expert guidance and exciting opportunities to enhance your streaming career." />
      <meta name="keywords" content="Become Live Streamer, join as a Live Streamer, Become a Successful Streamer" />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://lhtalentagency.com/become-live-streamer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Join LH Talent Agency as a Live Streamer: Unlock Your Potential" />
      <meta property="og:description" content="Want to become a live streamer? Join LH Talent Agency for expert guidance and exciting opportunities to enhance your streaming career." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lhtalentagency.com" />
      <meta property="twitter:url" content="https://lhtalentagency.com/become-live-streamer" />
      <meta name="twitter:title" content="Join LH Talent Agency as a Live Streamer: Unlock Your Potential" />
      <meta name="twitter:description" content="Want to become a live streamer? Join LH Talent Agency for expert guidance and exciting opportunities to enhance your streaming career." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lhtalentagency.com/become-live-streamer" />
    </Head>
    <Header />
        <div className="bg-[url('/become-live-streamer-bg.png')] bg-cover bg-top bg-no-repeat h-40 lg:h-72 flex items-center justify-center">
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold uppercase text-center">Become <br /> Live Streamer</h1>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] max-w-5xl mx-auto mt-12 lg:mt-[-50px]">
            <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                <h2 className="text-[#1C1B1B] text-3xl lg:text-5xl font-semibold pl-0">Ready to start your <br /> live-streaming <br /> career?</h2>
                <Image src="/tab-line.svg" alt="Become Live Streamer" className="w-4/5 mt-4 mb-4 ml-4 lg:ml-0" width={100} height={100} />
                <div className="flex items-start justify-start gap-2 pb-2 lg:px-0">
                    {/* <img src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" /> */}
                    <p className="text-base lg:text-[20px] text-[#363636]">You are at the right place. We are glad to have you.</p>
                </div>
                <div className="flex items-start justify-start gap-2 lg:px-0">
                    {/* <img src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" /> */}
                    <p className="text-base lg:text-[20px] text-[#363636]">Let us guide you on what you will get as a Live Streamer.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <BlogForm fields={fields} className=" py-8 px-4 lg:px-6" />
            </div>
        </div>
       
        {/* Section 2 */}
        <div className="py-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#ffffff] to-[#F9F6E3]">
            <div className="w-[90%] mx-auto lg:w-[80%] max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
                <div className="w-full lg:w-auto rounded-2xl overflow-hidden lg:rounded-none">
                    <Image src="/who_is_streamer.png" alt="Become Live Streamer under LH Talent Agency" className="w-full max-w-[25rem] mx-auto" width={1000} height={100} />
                </div>
                <div className="w-full lg:w-1/2 pl-0">
                    <h2 className="text-[#000000] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold mb-2">Who is a Streamer?</h2>
                    <p className="text-[#363636] text-base lg:text-xl mb-4">A Streamer is a person who shares their talent on live platforms like Poppo Live, Niki Live, Mimi Live, Chamet, etc. Whether it is dancing, music, comedy, cooking, or simply chatting, streamers make the experience memorable for the audience. </p>
                    <p className="text-[#363636] text-base lg:text-xl mb-8">If you love entertainment and engaging with people, streaming might be the right fit for you.</p>
                    <div className="gap-6 flex items-center justify-center lg:justify-start flex-wrap">
                    <Link href="/apply-now" className="bg-[#DE0400] text-base lg:text-lg text-white px-6 py-2 rounded-full cursor-pointer hover:bg-[#DE0400]/80 transition-all duration-300 inline-block whitespace-nowrap">Currently Hiring</Link>
                    <Link href="/live-streaming-tips" className="bg-[#DE0400] text-base lg:text-lg text-white px-6 py-2 rounded-full cursor-pointer hover:bg-[#DE0400]/80 transition-all duration-300 inline-block whitespace-nowrap">Get More Tips</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 3 */}
        <div className="py-12 lg:pt-12 lg:pb-16 collaboration-section">
            <div className="w-[90%] mx-auto lg:w-[80%] max-w-[840px] flex flex-col items-center justify-center gap-8 lg:gap-8">
                <h2 className="text-[#1C1B1B] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold pl-4 lg:pl-0 mb-2 text-center"> <span className="text-[#DE0400]">Why Choose</span> <br />Live Streaming as a Career?</h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 w-full pl-0 lg:pl-8">
                    <div className="w-full lg:w-1/3">
                        <Image src="/entertainment.png" alt="Live stream with entertainment, turn your dreams into reality" className="w-full max-w-[25rem] mx-auto" width={1000} height={100} />
                    </div>

                    <div className="w-full lg:w-2/3 pl-0 lg:pl-8 text-left">
                        <h3 className="text-[#1C1B1B] text-xl lg:text-2xl lg:leading-[1.15] font-semibold ml-2 lg:ml-0 mb-2">Entertainment</h3>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Turn what you love into a successful career.</p>
                        </div>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Share your talent and grow as an entertainer.</p>
                        </div>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Make your dreams a reality.</p>
                        </div>
                    </div>

                    <div className="w-full border-t border-[#00000040] mt-4 mb-4 lg:hidden"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 w-full pl-0 lg:pl-8">
                    <div className="w-full lg:w-1/3 ">
                        <Image src="/monetization.png" alt="Monetize your account and make money from every live stream" className="w-full max-w-[25rem] mx-auto" width={1000} height={100} />
                    </div>

                    <div className="w-full lg:w-2/3 pl-0 lg:pl-8 text-left">
                        <h3 className="text-[#1C1B1B] text-xl lg:text-2xl lg:leading-[1.15] font-semibold ml-2 lg:ml-0 mb-2">Monetization</h3>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Make money from every live stream.</p>
                        </div>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Get paid for doing what you enjoy.</p>
                        </div>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Be consistent and generate good income.</p>
                        </div>
                    </div>

                    <div className="w-full border-t border-[#00000040] mt-4 mb-4 lg:hidden"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 w-full pl-0 lg:pl-8">
                    <div className="w-full lg:w-1/3">
                        <Image src="/flexible_timing.png" alt="Live Streaming offers a dynamic career with flexible timing" className="w-full max-w-[25rem] mx-auto" width={1000} height={100} />
                    </div>

                    <div className="w-full lg:w-2/3 pl-0 lg:pl-8 text-left">
                        <h3 className="text-[#1C1B1B] text-xl lg:text-2xl lg:leading-[1.15] font-semibold ml-2 lg:ml-0 mb-2">Flexible Timing</h3>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Work when it suits you best.</p>
                        </div>
                        <div className="flex items-start justify-start gap-1 pb-2 px-2 lg:px-0">
                            <Image src="/Apply-nowPage/apply-tick.svg" alt="arrow" className="w-4 h-4 mt-1" width={1000} height={100} />
                            <p className="text-base lg:text-[20px] text-[#363636]">Stream on your schedule, enjoy your freedom, and maintain the perfect work-life balance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 4 */}
        <div className="pt-8 pb-12 lg:pt-20 lg:pb-16">
            <div className="w-[90%] mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                <div className="w-full xl:w-1/2 p-4 lg:p-0">
                    <Image src="/benefits_of_choosing_us.svg" alt="Unlock your live streaming potential with expert support" className="w-full max-w-[23rem] mx-auto" width={100} height={100} />
                </div>
                <div className="w-full xl:w-1/2">
                    <h2 className="text-[#1C1B1B] text-3xl lg:text-[42px] lg:leading-[1.15] font-semibold *: lg:pl-0 mb-4">Benefits of <br />Choosing Us?</h2>
                    <p className="text-[#363636] text-base lg:text-[19px] mb-4">At LH Talent Agency, we understand the unique needs of every streamer. We offer personalized support and guidance according to your queries. We help you increase your audience and enhance your engaging skills, leading to increased income. With our expertise, you can focus on the most important thing-streaming. We will take care of the rest for you.</p>
                    <p className="text-[#363636] text-base lg:text-[19px] font-semibold">Ready to start the journey? </p>

                    <p className="text-[#363636] text-base lg:text-[19px] font-semibold">Fill out the <Link href="/become-live-streamer" className="text-[#DE0400] underline hover:text-[#363636]">registration form</Link> above and join our live-streaming world!</p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default BecomeLiveStreamer;