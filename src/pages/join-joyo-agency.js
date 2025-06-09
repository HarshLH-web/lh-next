import ImageModal from '@/components/ImageModal'
import Image from 'next/image'
import React from 'react'

function joinJoyoCommunity() { // Renamed function for broader appeal
  return (
    <>
      <section
        className="pt-0 pb-12 lg:pb-16 lg:pt-0 scroll-mt-20"
        id="community-registration" // More general ID
      >
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-0 lg:gap-20 w-[90%] max-w-6xl mx-auto">
          <div className="w-full max-w-xl">
            <ImageModal imageSrc="/joyo/joyo-agency.png" imageAlt="Joyo Live Community Registration Steps" width="max-w-xl" className="mx-auto w-full max-w-xl" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-[40px] font-bold gradient-heading w-fit py-2 lg:leading-[1.15] text-left mx-auto lg:mx-0">
              Joyo Live Community Registration
            </h2>
            <ul className="list-decimal text-base lg:text-lg pl-4 space-y-2 text-black/80 mt-2 lg:mt-4">
              <li>Download the Joyo Live app.</li>
              <li>Complete your profile with your <span className="font-semibold">name, age,</span> and <span className="font-semibold">gender.</span></li>
              <li>Click on the <span className="font-semibold">“Enrollment Link”</span>.</li> {/* Rephrased "Agency Registration" */}
              <li>Enter your Joyo ID from your profile and click <span className="font-semibold"> “Get”.</span></li>
              <li>Enter the <span className="font-semibold">verification code</span> sent via app message.</li>
              <li>Provide your <span className="font-semibold">contact name, mobile number,</span> and <span className="font-semibold">WhatsApp number</span></li> {/* "agent name" to "contact name" */}
              <li>Share your prior experience (if any) and click <span className="font-semibold"> “Submit”.</span></li>
            </ul>
          </div>
        </div>

        <p className="text-lg lg:text-xl font-medium text-black/80 text-center mt-0 lg:mt-0 px-6 lg:px-4">
          You’ll receive a confirmation within <span className="font-bold text-[#E152B8]">24 hours.</span>
        </p>
      </section>

      <section className="pt-10 pb-12 lg:pb-16 lg:pt-12 scroll-mt-20" style={{
        backgroundImage:
          "linear-gradient(to bottom, #FFE6FB 35%, #EEEDFF 80%, #FFFFFF)"
      }} id="user-recognition-program"> {/* Rephrased ID */}
        <div className="w-[90%] max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-[44px] font-bold gradient-heading w-fit py-2 lg:leading-[1.15] mx-auto text-center">
            User Recognition Program
          </h2> {/* Rephrased title */}
          <p className="text-base text-center lg:text-[22px] font-normal text-[#3C3C3C] max-w-xl mx-auto mt-2 mb-0 lg:mb-4">Limited-Time Offer: Get a 12% Bonus on Rewards for Your First 3 Months</p> {/* Rephrased "Bonus Commission" */}

          <ImageModal imageSrc="/joyo/agent-commission-structure.svg" imageAlt="Joyo Live User Reward Structure" width="max-w-2xl" className="mx-auto w-full max-w-xl" /> {/* Rephrased image alt text */}

          <p className="text-base text-center lg:text-[20px] font-normal text-black max-w-4xl mx-auto mt-0 lg:mt-6 mb-4">Users can receive rewards based on their network’s total Diamond engagement (including contributions from referred users and their content creators). Reward rates will vary.</p> {/* Rephrased "Agents earn a commission," "income," "sub-agents," "hosts," "commission rate," "vary monthly." */}
          <p className="text-base text-center lg:text-[20px] font-semibold text-black max-w-4xl mx-auto mt-6 mb-4">The more your network engages, the higher your potential rewards will be.</p> {/* Rephrased "team earns," "commission" to "network engages," "potential rewards" */}
        </div>
      </section>



      <section className="pt-10 lg:pt-16 pb-14 lg:pb-16 w-[100%] bg-linear-to-t from-[#CAD3FF] to-[#EABCFF] scroll-mt-20" id="content-creator-registration"> {/* Rephrased ID */}
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-[42px] font-bold text-[#000000] w-fit py-2 lg:leading-[1.15] text-center max-w-xl mx-auto">How to Register as a Joyo Live Content Creator</h2> {/* Rephrased "Host" */}
          <p className="text-lg lg:text-2xl text-center text-[#4D4D4D] mt-4 lg:mt-2 max-w-3xl mx-auto">Start your content creation journey on Joyo Live in just a few easy steps</p> {/* Rephrased "hosting journey" */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-2 lg:gap-16 max-w-6xl mx-auto mt-0 lg:mt-10">
            <div className="w-full lg:w-[35rem]">
              <ImageModal imageSrc="/joyo/host-reg.png" imageAlt="Joyo Live Content Creator Registration Steps" width="max-w-2xl" className="mx-auto w-full max-w-xl" /> {/* Rephrased image alt text */}
            </div>
            <div className="w-full lg:w-auto">
              <ul className="list-decimal text-base lg:text-lg pl-4 space-y-2 text-black/80">
                <li>Download the Joyo Live app.</li>
                <li>Sign up with your preferred method and tap <span className="font-bold">“Send SMS”</span>.</li>
                <li>Complete the security slider and verify your <span className="font-bold">phone number</span>.</li>
                <li>Fill in your basic information: <span className="font-bold">name, age, and gender</span>.</li>
                <li>Tap on <span className="font-bold">“Start the Journey”</span>.</li>
                <li>Go to your profile section in the app.</li>
                <li>Tap on <span className="font-bold">“Verification”</span>, then <span className="font-bold">“Join Community Program”</span>.</li> {/* Rephrased "Join Agency" */}
                <li>Enter the community invitation code <span className="font-bold">“S1ISDF”</span> and tap <span className="font-bold">“Confirm”</span>.</li> {/* Rephrased "agency invitation code" */}
              </ul>
            </div>
          </div>
          <p className="text-lg lg:text-2xl text-center mx-auto text-[#4D4D4D] mt-4 lg:mt-8 px-6 lg:px-0">
            You are now an official<span className="font-bold text-[#000000]"> Joyo Live Content Creator!</span>
          </p> {/* Rephrased "Joyo Live Host" */}
        </div>
      </section>


      <section className="pt-8 lg:pt-18 pb-16 lg:pb-16 w-[100%] bg-white">
        <div className="w-[90%] max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-14">
          <Image src="/joyo/rules.png" alt="Joyo Live Community Rules" className="w-[90%] max-w-[25rem] mx-auto pointer-events-none" width={1000} height={1000} /> {/* Rephrased alt text */}
          <div>
            <h2 className="text-3xl lg:text-[42px] font-bold gradient-heading w-fit pb-0 lg:py-2 lg:pr-32 lg:leading-[1.15] text-left">Joyo Live Community Guidelines</h2> {/* Rephrased title */}
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex lg:flex-row items-start justify-start gap-2 mt-2 lg:mt-4">
                <Image src="/joyo/tick.svg" alt="Joyo Live Account Rules" className="w-4 mt-2" width={1000} height={1000} />
                <p className="text-base leading-[1.35] lg:text-lg text-[#000000]">You must be 18 years or older.</p>
              </div>
              <div className="flex lg:flex-row items-start justify-start gap-2">
                <Image src="/joyo/tick.svg" alt="Joyo Live Account Rules" className="w-4 mt-2" width={1000} height={1000} />
                <p className="text-base leading-[1.35] lg:text-lg text-[#000000]">Only one verified account per user is allowed.</p>
              </div>
              <div className="flex lg:flex-row items-start justify-start gap-2">
                <Image src="/joyo/tick.svg" alt="Joyo Live Account Rules" className="w-4 mt-2" width={1000} height={1000} />
                <p className="text-base leading-[1.35] lg:text-lg text-[#000000]">Fake accounts, ID sharing, or multiple accounts may result in permanent bans.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default joinJoyoCommunity