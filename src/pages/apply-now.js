import Head from "next/head";
import Image from "next/image";
import appsData from "../assets/Apps.json";
import BouncyButton from "../components/BouncyButton";

const Apply = () => {
  return (
    <>
      <Head>
        <title>Apply Now | LH Talent Agency: Start Your Streaming Career</title>
        <meta
          name="description"
          content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join LH Talent Agency today!"
        />
        <meta
          name="keywords"
          content="Live streaming Platforms, Live video streaming platforms, Broadcast streaming agency, Talent agency for streamers"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://lhtalentagency.com/apply-now" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apply Now | LH Talent Agency: Start Your Streaming Career" />
        <meta property="og:description" content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join LH Talent Agency today!" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lhtalentagency.com" />
        <meta property="twitter:url" content="https://lhtalentagency.com/apply-now" />
      <meta name="twitter:title" content="Apply Now | LH Talent Agency: Start Your Streaming Career" />
      <meta name="twitter:description" content="Ready to take the next step? Unlock the world of opportunities in live-streaming and content creation. Apply to join LH Talent Agency today!" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lhtalentagency.com/apply-now" />
      </Head>

      <div className="apply-bg w-full h-52 lg:h-72 bg-[#DE0402] flex items-center justify-center">
        <h1 className="text-white text-4xl lg:text-6xl font-extrabold uppercase">Apply Now</h1>
      </div>

      <div className="mx-auto w-[90%] max-w-6xl">
        <div
          id="wrapper"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-16 pb-20 lg:pt-12 lg:pb-28"
        >
          {appsData.map((app, index) => (
            <div
              key={index}
              className="w-full md:w-auto mx-auto max-w-xl border-[1px] border-[#00000012] rounded-3xl py-4 px-6 lg:px-12 lg:py-6 bg-gradient-to-b from-[#FEFEFC] to-[#F9F6E3]"
            >
              <div className="flex justify-center items-center gap-4 lg:gap-8">
                <Image
                  src={app.logo}
                  alt={app.name}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <h2 className="text-3xl lg:text-4xl font-medium uppercase whitespace-nowrap">
                  {app.name}
                </h2>
              </div>
              <div className="bg-[#16161612] w-full h-[1px] mt-6 mx-auto rounded-full"></div>

              <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 mt-6">
                <div className="flex flex-col gap-2 w-full md:w-2/3">
                  {app.description.map((descriptionArray, i) =>
                    descriptionArray.map((description, j) => (
                      <div
                        key={`${i}-${j}`}
                        className="flex items-start justify-start gap-2 border-b-[1px] border-[#00000012] last:border-b-0 pb-2"
                      >
                        <Image
                          src="/Apply-nowPage/apply-tick.svg"
                          alt="tick"
                          width={16}
                          height={16}
                          className="w-4 h-4 mt-1"
                        />
                        <p className="text-base">{description}</p>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex justify-center items-center flex-col gap-4 w-full md:w-1/3 my-auto">
                  {app.buttons.map((button, i) => (
                    <BouncyButton
                      key={i}
                      text={button.text}
                      href={button.url}
                      className="border-2 border-[#DE0402] hover:bg-[#DE0402] bg-transparent text-[#DE0402] hover:text-white whitespace-nowrap"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apply;
