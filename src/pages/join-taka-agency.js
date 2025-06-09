import ImageModal from '@/components/ImageModal'
import Image from 'next/image'
import React from 'react'

function joinTakaAgency() { // Renamed function for broader appeal
  return (
    <>
      <section
        className="pt-0 pb-12 lg:pb-16 lg:pt-0 "
        id="registration-process" // More general ID
      >
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-2 lg:gap-20 w-[90%] max-w-5xl mx-auto">
          <div className="w-full max-w-96">
            <ImageModal imageSrc="/taka/agency-registration.png" imageAlt="Taka Live Account Setup Steps" className="w-full max-w-96" width='max-w-lg' height={1000} />
          </div>
          <div>
            <h2 className="text-4xl lg:text-[42px] font-semibold gradient-heading paytone-one w-fit py-2 lg:leading-[1.15] text-left mx-auto lg:mx-0 lg:pr-16">
              Joining Taka Live: Your Registration Guide
            </h2>
            <ul className="list-decimal text-base lg:text-lg pl-4 space-y-2 text-black/80 mt-2 lg:mt-4">
              <li>Download the TAKA Live app.</li>
              <li>Sign in using your email address or mobile number.</li>
              <li>Complete the initial profile setup.</li>
              <li>Choose your preferred language.</li>
              <li>Fill in your personal details, including gender and date of birth.</li>
              <li>Grant necessary app permissions for full functionality.</li>
              <li className="font-semibold">Complete the identity verification process.</li>
              <ul className="list-disc pl-2">
                <li>Go to your profile section.</li>
                <li>Tap on &quot;Verify Now&quot; in the banner that indicates &quot;Complete Verification&quot;.</li>
                <li>Follow the on-screen instructions for a smooth verification.</li>
              </ul>
            </ul>
          </div>
        </div>

        <p className="text-xl font-medium text-black/80 text-center mt-6 lg:mt-16 px-4">
          You are now successfully set up on{" "}
          <span className="font-bold text-black">TAKA LIVE</span>.
        </p>
        {/* <p className="text-center max-w-2xl mx-auto text-black text-base lg:text-xl font-medium mt-6 lg:mt-12 px-4">If you already have an account on Taka Live or are experiencing any technical issues, please fill out our support form, and our team will assist you promptly.</p> */}
      </section>

      <section className="pt-8 lg:pt-16 pb-4 lg:pb-10 w-[100%] bg-linear-to-t from-[#FFFFFF] to-[#9BDDFE]">
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-[42px] font-semibold gradient-heading paytone-one w-fit py-2 lg:leading-[1.15] text-center max-w-4xl mx-auto">Understanding Taka Live&apos;s User Recognition Program</h2>
          <p className="text-xl lg:text-2xl text-center mx-auto text-[#4D4D4D] mt-4 lg:mt-2">Grow your network and unlock exclusive benefits.</p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-16 max-w-5xl mx-auto mt-0 lg:mt-10">
            <div className="w-full lg:w-auto">
              <ImageModal imageSrc="/taka/taka-commission-table.svg" imageAlt="Taka Live User Recognition Tiers" className="w-full max-w-[28rem]" width='max-w-xl' height={1000} />
            </div>
            <div className="w-full lg:w-auto">
              <ul className="list-disc text-base lg:text-lg font-semibold pl-4 space-y-2 text-black/80">
                <li>The more your network engages, the higher your recognition level.</li>
                <li>Gain benefits from direct referrals and the communities they build.</li>
                <li>Recognition levels vary based on activity and contribution.</li>
                <li>Opportunities for additional platform rewards and bonuses.</li>
              </ul>
            </div>
          </div>

          {/* Remove or heavily rephrase the commission formula section if aiming for max safety */}
          {/* <div className="text-center mt-14 bg-linear-to-r from-transparent via-[#F2FFCE] to-transparent bg-no-repeat bg-contain bg-center py-4 lg:p-6 w-[90%] lg:mt-16 max-w-4xl mx-auto border-t border-b border-black/20">
            <h3 className="text-xl lg:text-2xl font-semibold">Earnings Calculation Example:</h3>
            <p className="text-base lg:text-xl text-[#4D4D4D] pt-2">
              (Your Earning Tier Percentage - Referred User’s Earning Tier Percentage) * (Total Engagment Value from the Referred User’s Network) = Your Potential Earnings
            </p>
          </div> */}
        </div>
      </section>


      <section className="pb-12 pt-4 lg:pt-8 w-[90%] max-w-7xl mx-auto scroll-mt-12" id="invite-others">
        <h2 className="text-4xl lg:text-5xl font-semibold gradient-heading paytone-one w-fit py-2 lg:leading-[1.15] text-center lg:text-left mx-auto">How to Invite Others to Taka Live</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-20 max-w-6xl mx-auto mt-0 lg:mt-10">
          <div className="w-full lg:w-1/2">
            <ImageModal imageSrc="/taka/host-invite.webp" imageAlt="Invite New Users to Taka Live" className="w-full max-w-lg" width='max-w-xl' height={1000} />
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="list-decimal pl-4 text-base lg:text-lg text-black/80 space-y-2 lg:space-y-2">
              <li>Log in to the TAKA App.</li>
              <li>Go to “My Account” and select “My Data”.</li>
              <li>Find the “Invite” section (usually in the top right corner) and tap “Invite Now”.</li>
              <li>You will get a unique invitation link to share with new potential users.</li>
              <li>Users will download the app through this link to be linked to your network.</li>
              <li>You can monitor your “invitation list” to see if new users have joined under your account.</li>
            </ul>
          </div>
        </div>
        <hr className="w-[96%] lg:w-[80%] mx-auto border-t border-black/20 mt-10" />

        <p className="text-center text-2xl lg:text-3xl font-semibold text-black/80 mt-10 max-w-5xl mx-auto">For new users, completing the identity verification process is essential after app download.</p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-20 max-w-4xl mx-auto mt-0 lg:mt-10">
          <div className="w-full lg:w-1/2">
            <ImageModal imageSrc="/taka/host-invite-2.png" imageAlt="Identity Verification Steps on Taka Live" className="w-full" width='max-w-xl' height={1000} />
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="list-disc pl-4 text-base lg:text-lg text-black/80 space-y-2 lg:space-y-3">
              <li>Access your profile section.</li>
              <li>Tap on <span className="font-semibold">&quot;Verify Now&quot;</span> in the banner that says <span className="font-semibold">&quot;Complete Verification&quot;</span>.</li>
              <li>Follow the displayed instructions to finalize verification.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="pt-8 lg:pt-16 pb-12 lg:py-16 bg-green-200"
        id="content-creator-registration" // Changed ID
      >
        <div className="flex lg:flex-row flex-col-reverse items-center justify-center gap-2 lg:gap-20 w-[90%] max-w-5xl mx-auto">
          <div className="w-full max-w-96">
            <ImageModal imageSrc="/taka/agency-registration.png" imageAlt="Taka Live Content Creator Onboarding" className="w-full max-w-[22rem]" width='max-w-lg' height={1000} />
          </div>
          <div>
            <h2 className="text-4xl lg:text-[42px] font-semibold gradient-heading paytone-one w-fit py-2 lg:leading-[1.15] text-left mx-auto lg:mx-0 lg:pr-16">
              Taka Live Content Creator Onboarding Process
            </h2>
            <ul className="list-decimal text-base lg:text-lg pl-4 space-y-2 text-black/80 mt-2 lg:mt-4">
              <li>Download the TAKA Live app.</li>
              <li>Sign in using your email address or mobile number.</li>
              <li>Complete the initial profile setup.</li>
              <li>Choose your preferred language.</li>
              <li>Fill in your personal details, including gender and date of birth.</li>
              <li>Grant necessary app permissions for broadcasting.</li>
              <li className="font-semibold">Complete the identity verification process.</li>
              <ul className="list-disc pl-2">
                <li>Go to your profile section.</li>
                <li>Tap on <span className="font-semibold">&quot;Verify Now&quot;</span> in the banner that indicates <span className="font-semibold">&quot;Complete Verification&quot;</span>.</li>
                <li>Follow the on-screen instructions for verification.</li>
              </ul>
            </ul>
          </div>
        </div>

        <p className="text-xl font-medium text-black/80 text-center mt-6 lg:mt-16 px-4">
          You are now successfully onboarded with{" "}
          <span className="font-bold text-black">TAKA LIVE</span>.
        </p>
        {/* <p className="text-center max-w-2xl mx-auto text-black text-xl font-bold mt-6 lg:mt-12 px-4">If you already have an account on Taka Live or are experiencing any technical issues, please fill out our support form, and our team will assist you promptly.</p> */}

      </section>
    </>
  )
}

export default joinTakaAgency