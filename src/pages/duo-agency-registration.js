import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DuoAgencyRegistration = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

      // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return (
        <>
            {/* Get Policies */}
           <div ref={dropdownRef} className="right-4 top-4 lg:right-10 z-20 fixed">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-b from-[#FF055F] to-[#EA7005] text-white py-2 px-3 rounded-full shadow-md flex items-center gap-2 w-10 hover:w-36 transition-all duration-300 overflow-hidden whitespace-nowrap group ${isOpen ? "w-36" : "w-10"}`}
        >
        {/* Icon (always visible) */}
        <Image
            src="/duoo/download.svg"
            alt="Policies"
            width={20}
            height={20}
            className="min-w-4 h-4"
        />

        {/* Text (hidden until hover) */}
        <span className={`${isOpen ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity duration-300`}>
            Get Policies
        </span>
    </button>


      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 lg:mt-3 w-48 bg-gradient-to-b from-[#FF055F] to-[#EA7005] rounded-xl shadow-lg flex flex-col py-3 px-4 gap-2 animate-fadeIn">
          <a href="/duoo/Policies/Duoo-Host-Policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
            Host Policy
          </a>
          <hr className="border-white" />
          <a href="/duoo/Policies/Duoo-Agency-Policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
            Agent Policy
          </a>
          {/* <hr className="border-white" />
          <a href="/duoo/Policies/Duoo-Coin-Seller-Policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
            Coin Seller Policy
          </a> */}
        </div>
      )}
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#FF055F] to-[#EA7005] lg:bg-[url('/duoo/hero-bg.svg')] bg-contain bg-left-top bg-no-repeat min-h-[90vh]">
                <div className="flex flex-col-reverse lg:flex-row w-[90%] lg:w-[80%] 2xl:w-[75%] mx-auto pt-20 pb-12 lg:py-0 gap-6 lg:gap-0">
                    <div className="w-full lg:w-[70%] 2xl:w-[70%] lg:min-h-[98vh] 2xl:min-h-[90vh] flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-white gap-4">
                            <Image src="/duoo/logo.png" alt="Duo Agency Registration" className="w-36 lg:w-44 2xl:w-52" width={3000} height={100} />
                            <h1 className="text-2xl lg:text-4xl 2xl:text-[57px] font-bold text-center">Welcome to Duoo App Agency</h1>
                            <p className="text-base lg:text-lg 2xl:text-2xl text-center max-w-2xl 2xl:max-w-4xl 2xl:font-light">
                            Manage a team of streamers by becoming an official Duoo App Agency. Connect with top talent, recruit streamers for the platform, and grow in the world of live streaming.
                            </p>
                            <p className="text-base lg:text-xl 2xl:text-3xl text-center font-semibold">
                            Start your journey today with the Duoo App.
                            </p>
                            <div className="flex gap-2 lg:gap-4">
                            <Link href="https://play.google.com/store/apps/details?id=com.melot.meta&referrer=inviteCode=737854066" className="text-sm lg:text-base 2xl:text-lg duoo-btn-gradient font-semibold text-white px-4 py-2 2xl:px-6 rounded-full border-2 border-white lg:mt-4 text-center">Download Duoo</Link>
                            <Link href="https://agent.duoo.live/#/register?parentInviteCode=019428324" className="text-sm lg:text-base 2xl:text-lg duoo-btn-gradient font-semibold text-white px-4 py-2 2xl:px-6 rounded-full border-2 border-white lg:mt-4 text-center">Join Agency</Link>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center 2xl:justify-center w-full lg:w-[30%] 2xl:w-[30%]">
                        <Image src="/duoo/duoo-app.png" alt="Duo Agency Registration" width={3000} height={8000} className="w-36 lg:w-full max-w-[18rem]" />
                    </div>
                </div>
            </section>

            {/* Duoo App Agency Registration Process */}
            <section id="duoo-agency-registration" className="bg-white py-12 lg:py-16 flex flex-col items-center justify-center">
                <div className="flex flex-col-reverse lg:flex-row w-[90%] mx-auto max-w-5xl gap-4 lg:gap-12">
                    <div className="w-full lg:w-[40%] max-w-[25rem]">
                        <Image src="/duoo/agency-reg.png" alt="Duo Agency Registration" width={10000} height={8000} className="w-full max-w-72 lg:max-w-[25rem] mx-auto" />
                    </div>
                    <div className="w-full lg:w-[60%] flex flex-col justify-center">
                        <h2 className="text-2xl lg:text-5xl 2xl:text-[52px] font-bold text-left">Duoo App Agency Registration Process</h2>
                        <hr
                            style={{
                                height: "1px",
                                border: "none",
                                background: "linear-gradient(to right, #FF055F 0%, #ffd60045 70% , transparent 90%, transparent 100%)",
                            }}
                            className="mt-4 lg:mt-6 mb-4"
                        />
                        <ul className="list-decimal pl-6 space-y-1 2xl:space-y-2">
                            <li className="text-base lg:text-lg 2xl:text-2xl">Open the Duoo <Link href="https://agent.duoo.live/#/register?parentInviteCode=019428324" className="text-blue-500 underline">Agency Registration</Link> link.</li>
                            <li className="text-base lg:text-lg 2xl:text-2xl">Enter your phone number and click on <span className="font-semibold">“Get Code”</span>.</li>
                            <li className="text-base lg:text-lg 2xl:text-2xl">Paste the verification code that you received on your number.</li>
                            <li className="text-base lg:text-lg 2xl:text-2xl">Enter your agent name, resident country, and click <span className="font-semibold">“Register”</span>.</li>
                        </ul>
                        <p className="text-base lg:text-lg 2xl:text-xl text-left font-semibold mt-4">Inform us on <a href="https://wa.me/917065384660" className="text-blue-500 underline">WhatsApp at +917065384660</a> after completing the process.</p>
                    </div>
                </div>
                    <Link href="https://agent.duoo.live/#/register?parentInviteCode=019428324" className="duoo-btn-gradient font-semibold text-white px-4 py-2 lg:px-8 2xl:text-lg 2xl:px-12 rounded-full border-2 border-white mt-6 lg:mt-12 mx-auto">Register Your Duoo App Agency Now</Link>
            </section>


            {/*About Duoo App */}
            <section className="bg-[#FDF4DE] lg:bg-white pt-12 lg:pb-40 lg:pt-24">
                <div className="w-[90%] mx-auto max-w-5xl relative lg:pl-20">
                    <div className="w-full max-w-[18rem] absolute top-[-2rem] left-[2rem] 2xl:top-[-3rem] 2xl:left-[-2rem] hidden lg:block">
                        <Image src="/duoo/about-duoo.png" alt="Duo Agency Registration" width={10000} height={8000} className="w-full lg:max-w-[16rem] 2xl:max-w-[18rem]" />
                    </div>

                    <div className="w-full max-w-5xl flex flex-col justify-center bg-[#FDF4DE] lg:py-16 lg:pl-60 lg:pr-20 2xl:pr-24 rounded-[200px_200px_200px_100px]">
                        <h2 className="text-[1.75rem] lg:text-5xl 2xl:text-[52px] font-bold text-center lg:text-left">About Duoo</h2>
                        <p className="text-base lg:text-lg 2xl:text-[19px] text-center lg:text-left font-normal mt-3 lg:mt-6">Duoo is a new live streaming app that connects people around the world. Whether you&apos;re a singer, dancer, or just want to chat, Duoo gives you the opportunity. As a duoo host, show your talent, and earn rewards while doing what you love. Manage a team of streamers by becoming a duoo agent. Start your journey today and become a part of the Duoo App.</p>

                        <Image src="/duoo/about-duoo-mobile.png" alt="Duo Agency Registration" width={10000} height={8000} className="w-60 lg:hidden pl-4 mx-auto mt-6" />
                    </div>
                </div>
            </section>


            {/* Agency Commission Structure */}
            <section className="bg-gradient-to-b from-[#FF055F] to-[#EA7005] py-12 lg:py-18">
                <div className="w-[90%] mx-auto max-w-5xl text-white">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[46px] font-bold text-center">Duoo App Agency Commission Structure</h2>
                    <p className="text-base lg:text-lg 2xl:text-[20px] text-center font-normal mt-6 max-w-3xl mx-auto">Agency&apos;s Earning = Commissions from all hosts&apos; earnings + $7 bonus from each new host + 5% bonus from invited sub-agents</p>
                        
                    <Image src="/duoo/agency-commission-structure.svg" alt="Duoo App Agency Commission Structure" width={10000} height={8000} className="w-full max-w-3xl mx-auto mt-6" />

                    <ul className="list-decimal pl-6 space-y-1 lg:space-y-2 max-w-3xl mx-auto mt-8">
                    <li  style={{color: "#FFFFFF"}}><span className="font-semibold">Withdrawable hosts:</span> The hosts who earn at least 70k diamonds ($10) will be counted under the agency</li>
                    <li  style={{color: "#FFFFFF"}}><span className="font-semibold">Minimum agent withdrawal:</span> 700k diamonds ($100) per week.</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                <Link href="https://agent.duoo.live/#/register?parentInviteCode=019428324" className="duoo-btn-gradient font-semibold text-white px-4 py-2 lg:px-8 2xl:text-lg 2xl:px-12 rounded-full border-2 border-white mt-6 lg:mt-10 mx-auto">Join Duoo App Agency</Link>
                </div>
            </section>


            {/* Additional Rewards */}
            <section className="bg-white py-12 lg:py-18">
                <div className="w-[90%] mx-auto max-w-5xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[46px] font-bold text-center">Additional Rewards</h2>
                    <p className="text-base lg:text-lg 2xl:text-[20px] text-center font-normal mt-3 lg:mt-6 max-w-3xl mx-auto">Agency&apos;s Earning = Commissions from all hosts&apos; earnings + $7 bonus from each new host + 5% bonus from invited sub-agents</p>

                    <div className="bg-[#F0F0F0] border border-[#B3B3B3] py-4 px-6 lg:py-6 lg:px-12 rounded-3xl mt-6 lg:mt-8">
                        <p className="text-base lg:text-lg font-semibold">1. 5% from Sub-agent’s Invitation Bonus</p>
                        <p className="text-base lg:text-lg font-normal mt-1">The sub-agent works under your agency, and once they earn at least $100, you’ll receive a 5% bonus based on their income.</p>
                    </div>

                    <div className="bg-[#F0F0F0] border border-[#B3B3B3] py-4 px-6 lg:py-6 lg:px-12 rounded-3xl mt-6">
                        <p className="text-base lg:text-lg font-semibold">1. $7 Bonus from New Host</p>
                        <p className="text-base lg:text-lg font-normal mt-1">Agents get an extra $2 + $5 for every new hired anchor, if the anchor:</p>
                        <ul className="list-disc pl-6 space-y-1 lg:space-y-1 mt-2">
                            <li>Completed the Duoo Newbie Challenge (agent will get $2).</li>
                            <li>Works on Duoo, passes the ID verification, and receives a salary payment (no bonus before).</li>
                            <li>Both must achieve the salary targets (Agent: $100, Anchor: $10).</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Duoo Host Registration */}
            <section id="duoo-host-registration" className="bg-gradient-to-b from-[#FF055F] to-[#EA7005] py-12 lg:pt-24 lg:pb-16">
                <div className="w-[90%] mx-auto max-w-5xl text-white">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-left text-white lg:w-[35%]">Duoo Host Registration</h2>
                    <Image src="/duoo/line.svg" alt="Duoo Host Registration" width={1000} height={8000} className="w-[10px] hidden lg:block" />
                    <ul className="list-decimal pl-6 space-y-1 lg:space-y-1">
                        <li style={{color: "#ffffff"}}>Click on the Duoo App <Link href="https://play.google.com/store/apps/details?id=com.melot.meta&referrer=inviteCode=737854066" className="text-blue-400 underline">download link</Link>.</li>
                        <li style={{color: "#ffffff"}}>Sign up with your email or phone number.</li>
                        <li style={{color: "#ffffff"}}>Fill in your details like gender and date of birth, then tap <span className="font-semibold">“Finish.”</span></li>
                        <li style={{color: "#ffffff"}}>Go to your profile, select <span className="font-semibold">“To be a hostess”</span> and tap <span className="font-semibold">“Go”</span>.</li>
                        <li style={{color: "#ffffff"}}>Add a nickname and upload a photo.</li>
                        <li style={{color: "#ffffff"}}>Complete the face verification and submit.</li> 
                    </ul>
                    </div>
                        
                    <Image src="/duoo/host-reg.png" alt="Duoo App Agency Commission Structure" width={10000} height={8000} className="w-full max-w-5xl mx-auto mt-4 lg:mt-12" />

                    <p className="text-base lg:text-lg 2xl:text-[22px] text-center font-semibold mt-6 lg:mt-12 max-w-3xl mx-auto">You have successfully logged in as Duoo Host.</p>

                    <div className="flex items-center justify-center">
                    <Link href="https://play.google.com/store/apps/details?id=com.melot.meta&referrer=inviteCode=737854066" className="duoo-btn-gradient font-semibold text-white px-4 py-2 lg:px-8 2xl:text-lg 2xl:px-12 rounded-full border-2 border-white mt-4 lg:mt-8 mx-auto">Download Duoo</Link>
                    </div>

                </div>
            </section>


            {/* How to Invite Hosts and Sub-Agents in your Duoo App Agency */}
            <section className="bg-white py-12 lg:py-18">
                <div className="w-[90%] mx-auto max-w-7xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[40px] font-bold text-center max-w-3xl mx-auto">How to Invite Hosts and Sub-Agents in your Duoo App Agency</h2>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 mt-6 lg:mt-12 max-w-5xl mx-auto">
                        <div>
                            <Image src="/duoo/host-invite.png" alt="Duoo Host Registration" width={10000} height={8000} className="w-full max-w-72 lg:max-w-80 mx-auto " />
                        </div>
                        <div className="my-auto">
                            <h3 className="text-xl lg:text-[28px] font-bold text-left">How to invite Duoo Host:</h3>
                            <ul className="list-decimal pl-6 space-y-1 lg:space-y-1 mt-2 lg:mt-3">
                                <li>Open the dashboard.</li>
                                <li>Copy the invitation link and share it with the invitee.</li>
                            </ul>

                            <hr
                                style={{
                                    height: "1px",
                                    border: "none",
                                    background: "linear-gradient(to right, #FF055F 0%, #ffd60045 70% , transparent 90%, transparent 100%)",
                                }}
                                className="mt-6 mb-4"
                            />

                            <p className="text-base lg:text-lg 2xl:text-[20px] text-left font-normal mt-6 max-w-3xl mx-auto">The host will do the following steps:</p>
                            <ul className="list-decimal pl-6 space-y-1 lg:space-y-1 mt-2 lg:mt-2">
                                <li>Sign up with your phone number or email address.</li>
                                <li>Fill out the details such as your gender and date of birth.</li>
                                <li>Go to your profile section and click on <span className="font-semibold">“To be a Hostess”</span></li>
                                <li>Enter a nickname and complete the face-verification by submitting your photo.</li>
                                <li>Wait for the confirmation</li>
                            </ul>
                        </div>
                    </div>


                    <hr
                        style={{
                            height: "1px",
                            border: "none",
                            background: "#BCBCBC",
                        }}
                        className="mt-6 mb-4 lg:mt-12 lg:mb-0 max-w-5xl mx-auto"
                    />

                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-12 mt-8 lg:mt-10 max-w-5xl mx-auto">
                        <div>
                            <Image src="/duoo/sub-agent-invite.png" alt="Duoo Host Registration" width={10000} height={8000} className="w-full max-w-72 lg:max-w-80 mx-auto " />
                        </div>
                        <div className="my-auto">
                            <h3 className="text-xl lg:text-[28px] font-bold text-left">How to invite Sub-Agents:</h3>
                            <ul className="list-decimal pl-6 space-y-1 lg:space-y-1 mt-2 lg:mt-3">
                                <li>Open the agency dashboard and scroll down.</li>
                                <li>Copy the sub-agent invitation link and share it with the invited sub-agent.</li>
                            </ul>

                            <hr
                                style={{
                                    height: "1px",
                                    border: "none",
                                    background: "linear-gradient(to right, #FF055F 0%, #ffd60045 70% , transparent 90%, transparent 100%)",
                                }}
                                className="mt-6 mb-4"
                            />

                            <p className="text-base lg:text-lg 2xl:text-[20px] text-left font-normal mt-6 max-w-3xl mx-auto">The invited sub-agent will do the following steps:</p>
                            <ul className="list-decimal pl-6 space-y-1 lg:space-y-1 mt-2 lg:mt-2">
                                <li>Enter the phone number and click on <span className="font-semibold">“Get Code”</span>.</li>
                                <li>Paste the verification code that you received on your phone.</li>
                                <li>Enter your agent name, country, and click <span className="font-semibold">“Register”</span>.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Duoo Withdrawal Requirements */}
            <section className="bg-gradient-to-b from-[#FF055F] to-[#EA7005] py-12 lg:py-18">
                <div className="w-[90%] mx-auto max-w-4xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[40px] font-bold text-left lg:text-center max-w-3xl mx-auto text-white">Duoo Withdrawal Requirements</h2>
                    <ul className="list-disc pl-6 space-y-1 lg:space-y-1 mt-2 lg:mt-6">
                        <li style={{color: "#ffffff"}}>This application has an agency-based withdrawal system.</li>
                        <li style={{color: "#ffffff"}}>The Duoo App Agency must fulfill both requirements below to withdraw its earnings.</li>
                    </ul>

                    <Image src="/duoo/req.svg" alt="Duoo Withdrawal Requirements" width={10000} height={8000} className="w-full max-w-4xl mx-auto mt-4 lg:mt-8" />

                    <Image src="/duoo/withdrwal-rules.svg" alt="Duoo Withdrawal Requirements" width={10000} height={8000} className="w-full max-w-4xl mx-auto mt-4 lg:mt-10" />
                </div>


                <div className="w-[90%] mx-auto max-w-4xl mt-8 lg:mt-16">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[40px] font-bold text-left text-white">Duoo Rules & Regulations</h2>
                    <ul className="list-decimal pl-6 space-y-2 lg:space-y-4 mt-2 lg:mt-4">
                        <li style={{color: "#ffffff"}}><span className="font-bold">Underage Content:</span> The age limit for users is 18 years old or above. No underage content is allowed on the platform. If found, the account will be permanently banned.</li>
                        <li style={{color: "#ffffff"}}><span className="font-bold">Pornography:</span> Pornographic content, including nudity or sexual behavior, is strictly banned on the platform.</li>
                        <li style={{color: "#ffffff"}}><span className="font-bold">Inappropriate Content:</span> Always speak respectfully, show your full face on camera (niqab allowed in places like Egypt/Saudi Arabia), avoid fake visuals, offensive or political content, and ensure good lighting in a clean, quiet space during live.</li>
                        <li style={{color: "#ffffff"}}><span className="font-bold">Violation of Rules:</span> If a host receives three warnings for violations, their live streaming and weekly tasks will be terminated within one hour.
                        </li>
                    </ul>
                </div>



            </section>

        </>
    );
};

export default DuoAgencyRegistration;