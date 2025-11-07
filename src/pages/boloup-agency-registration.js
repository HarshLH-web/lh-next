import { useEffect, useRef, useState } from "react";

const { default: Image } = require("next/image")

export default function BoloupAgencyRegistration() {

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
    <div
      className="overflow-x-hidden"
    >

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
                <a href="/boloup/Policies/Boloup-App-host-policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
                    Host Policy
                </a>
                <hr className="border-white" />
                <a href="/boloup/Policies/Boloup-App-agency-policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
                    Agent Policy
                </a>
                <hr className="border-white" />
                <a href="/boloup/Policies/Boloup-App-star-host_s-idol_live-perfomer-policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
                    Star Host & Live Performer Policy
                </a>
                </div>
            )}
        </div>


        <main className="flex items-center justify-center min-h-[95vh] bg-[url('/boloup/main-bg-2.svg')] bg-cover bg-bottom bg-no-repeat text-white relative">
            <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] max-w-5xl 2xl:max-w-6xl mx-auto gap-10 lg:gap-0 2xl:gap-10 pt-24 lg:pt-16 pb-24">
                <div className="flex flex-col items-center justify-center w-full lg:w-[50%] 2xl:w-[40%]">
                <Image src="/boloup/hero-img.png" alt="Bolo Up" className="w-full h-full max-w-60 pl-4 lg:max-w-[22rem] 2xl:max-w-96 object-cover" width={500} height={500} />
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-[50%] 2xl:w-[60%] 2xl:pr-20">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-[1.15] text-center mb-4 lg:mb-5 lg:text-left">Become a Part of the Bolo Up Agency</h1>
                    <p className="text-base lg:text-[18px] 2xl:text-[20px] text-center lg:text-left">
                    Registrations at Bolo Up Agency are open now. Whether you want to become an agent or a host, now it’s the time to get started. Build your team, grow your network, and explore exciting features on the BoloUp app.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start gap-4 w-full mt-4 lg:mt-6">
                    <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="bg-[url('/boloup/border.svg')] bg-contain bg-center bg-no-repeat rounded-lg px-8 py-2">
                    <span className="text-white rounded-lg">Download App</span>
                    </a>
                    <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="bg-[url('/boloup/border.svg')] bg-contain bg-center bg-no-repeat rounded-lg px-8 py-2">
                    <span className="text-white rounded-lg">Register Now</span>
                    </a>
                    </div>
                </div>
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-10">
                    <Image src="/boloup/logo.png" alt="Bolo Up" className="w-24 h-24" width={1000} height={1000} />
                </div>
            </div> 
        </main>

        {/* Agency Registration */}
        <section className="relative bg-white pb-20 lg:pb-28 scroll-mt-20" id="agency-registration">
            <div className="flex flex-col items-center justify-center pt-20 lg:pt-24 pb-0">
                <h2 className="text-[28px] leading-[1.35] lg:text-[44px] font-bold text-center px-6 lg:px-0">Bolo Up Agency Registration</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mt-4 lg:mt-8 w-[90%] max-w-[60rem] mx-auto">
                    <div className="w-full lg:w-[50%] 2xl:w-[40%]">
                        <Image src="/boloup/agency-registration.png" alt="Agency Registration" className="w-full h-full max-w-[24rem] 2xl:max-w-96 object-cover mx-auto" width={500} height={500} />
                    </div>
                    <div className="w-full lg:w-[50%] 2xl:w-[60%]">
                        <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-base lg:text-[18px] ">Open the <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="text-blue-500 underline">Agency Registration Link</a> and <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="text-blue-500 underline">Download</a> the BoloUp App.</li>
                            <li className="text-base lg:text-[18px]">Create an account using any preferred option.</li>
                            <li className="text-base lg:text-[18px]">Create your Agency name & select your gender.</li>
                            {/* <li className="text-base lg:text-[18px]">Submit the required details.</li> */}
                            <li className="text-base lg:text-[18px]">Accept the agency registration request from Admin.</li>
                            <li className="text-base lg:text-[18px]">Now you have your agency dashboard to start working on the BoloUp App.</li>
                            <li className="text-base lg:text-[18px]">Complete the face authentication process.</li>
                        </ul>
                    </div>
                </div>
                <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="bg-gradient-to-r from-[#FF005E] via-[#F89B07] to-[#D124A4] text-white px-4 lg:px-8 py-3 rounded-lg mt-6 lg:mt-12 lg:text-[18px] mx-4 text-center relative z-10">Register Your BoloUp App Agency Now</a>
            </div>

            <div className="absolute bottom-[-2px] left-[-2px] right-[-1px]">
                <Image src="/boloup/black-curve.svg" className="w-full" alt="Host Registration" width={500} height={500} />
            </div>
        </section>

        {/* How to invite Sub-agents under your agency */}
        <section className="relative bg-[#101010] text-white pt-12 lg:pt-16 pb-24 lg:pb-40">
            <div className="flex flex-col items-center justify-center w-[90%] max-w-5xl mx-auto">
                <h2 className="text-[28px] leading-[1.35] lg:text-[44px] font-bold text-center max-w-xl mx-auto">How to Invite Sub-agents under your agency</h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto mt-8 lg:mt-10">
                    <div className="w-full lg:w-[40%]">
                        <Image src="/boloup/sub-agent-1.png" alt="Host Invite" className="w-full max-w-96" width={500} height={500} />
                    </div>
                    <div className="w-full lg:w-[60%]">  
                        <h3 className="text-xl lg:text-[26px] font-semibold">Method - 1:</h3>
                        <ul className="list-decimal pl-6 space-y-2 mt-2 lg:mt-4">
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Open agency dashboard.</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Select the option of <span className="font-semibold">“Sub-agency Invite (Link)”.</span></li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Copy the invitation link and share it with your invitee.</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >The sub-agent will click on the link and download the app.</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >After signing in, a pop-up will show on the screen with a request to join the agency. Accept the invitation to join.</li>
                        </ul>
                    </div>
                </div>
                <hr style={{ height: "1px", border: "none", backgroundColor: "#ffffff24", width: "100%" }} className="mt-10 mb-6 lg:mb-2" />

                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto mt-6 lg:mt-14">
                    <div className="w-full lg:w-[40%]">
                        <Image src="/boloup/sub-agent-2.png" alt="Host Invite" className="w-full max-w-96" width={500} height={500} />
                    </div>
                    <div className="w-full lg:w-[60%]">  
                        <h3 className="text-xl lg:text-[26px] font-semibold">Method - 2:</h3>
                        <ul className="list-decimal pl-6 space-y-2 mt-2 lg:mt-4">
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Open agency dashboard.</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Select the option of <span className="font-semibold">“Sub-agency Invite (ID)”.</span></li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >Enter the ID number, the invitee verification code, and send the invite.</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >The sub-agent will download the app and will share the ID (available in the profile section) and verification code (in the profile section, under create agency).</li>
                            <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}} >The sub-agent will receive a request from the agency. They need to accept the invitation to join.</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
            <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="bg-gradient-to-r from-[#FF005E] via-[#F89B07] to-[#D124A4] text-white px-4 lg:px-8 py-3 rounded-lg mt-8 lg:mt-12 lg:text-[18px] relative z-10">Download BoloUp App</a>
            </div>

            <div className="absolute bottom-[-2px] left-[-1px] right-[-1px]">
                <Image src="/boloup/white-curve-2.svg" className="w-full" alt="Host Registration" width={500} height={500} />
            </div>
        </section>
       

        {/* Host Registration */}
        <section className="relative scroll-mt-20" id="host-registration">
            <div className="flex flex-col items-center justify-center pt-12 pb-20 lg:pb-24">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-[90%] max-w-[60rem] mx-auto">
                    <div>
                        <h2 className="text-[28px] leading-[1.35] lg:text-[44px] font-bold text-center mb-2">Bolo Up Host Registration</h2>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mt-6 lg:mt-7">
                        <div className="w-full lg:w-[40%]">
                            <Image src="/boloup/host-registration.png" alt="Host Registration" className="w-full h-full object-cover" width={500} height={500} />
                        </div>
                        <div className="w-full lg:w-[60%]">
                            <ul className="list-decimal pl-6 space-y-2">
                            <li className="text-base lg:text-[18px] leading-tight">Open the <a href="https://boloup.onelink.me/PDV4/mekpm61f" className="text-blue-500 underline">host registration link</a>.</li>
                            <li className="text-base lg:text-[18px] leading-tight">Download the BoloUp App and create your account.</li>
                            <li className="text-base lg:text-[18px] leading-tight">Then, go to your profile section and click on <span className="font-semibold">“Become Host”</span>.</li>
                            <li className="text-base lg:text-[18px] leading-tight">Enter the Agency ID <span className="font-semibold">“2019466”</span> to join as a Bolo Up Host.</li>
                            <li className="text-base lg:text-[18px] leading-tight">Submit the details.</li>
                            <li className="text-base lg:text-[18px] leading-tight">You will receive the invitation request from<span className="font-semibold"> LH Talent Agency.</span></li>
                            <li className="text-base lg:text-[18px] leading-tight">Accept the invitation request twice to join.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 mt-6 lg:mt-10">
                        <p className="text-lg lg:text-[20px] font-semibold">Get more details on Bolo Up Host</p>
                        <a href="https://boloup.onelink.me/PDV4/mekpm61f" className="bg-gradient-to-r from-[#FF005E] via-[#F89B07] to-[#D124A4] text-white px-4 lg:px-8 py-3 rounded-lg lg:text-[18px] relative z-10">Download BoloUp App</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-2px] left-[-2px] right-[-1px]">
                <Image src="/boloup/black-curve.svg" className="w-full" alt="Host Registration" width={500} height={500} />
            </div>
        </section>

        {/* How to invite Hosts under your agency */}
        <section className="relative bg-[#101010] text-white pt-12 lg:pt-16 pb-24 lg:pb-40">
            <div className="flex flex-col items-center justify-center w-[90%] max-w-5xl mx-auto">
                <h2 className="text-[28px] leading-[1.25] lg:text-[44px] font-bold text-center max-w-xl mx-auto">How to invite Hosts under your agency</h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto mt-6 lg:mt-10">
                    <div className="w-full lg:w-[40%]">
                        <Image src="/boloup/host-method-1.png" alt="Host Invite" className="w-full max-w-96" width={500} height={500} />
                    </div>
                    <div className="w-full lg:w-[60%]">  
                        <h3 className="text-xl lg:text-[26px] font-semibold">Method - 1:</h3>
                        <ul className="list-decimal pl-6 space-y-2 mt-2 lg:mt-4">
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Open agency dashboard.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Select the option of <span className="font-semibold">“Host Invite (ID / Phone No.)”.</span></li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Enter the Host ID or phone number.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Confirm the host profile. And click “Invite”.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>The host will receive a request from the agency. They need to accept the invitation to join the agency.</li>
                        </ul>
                    </div>
                </div>
                
                <hr style={{ height: "1px", border: "none", backgroundColor: "#ffffff24", width: "100%" }} className="mt-10 mb-6 lg:mb-2" />


                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-10 max-w-5xl mx-auto mt-6 lg:mt-14">
                    <div className="w-full lg:w-[40%]">
                        <Image src="/boloup/host-method-2.png" alt="Host Invite" className="w-full max-w-96" width={500} height={500} />
                    </div>
                    <div className="w-full lg:w-[60%]">  
                        <h3 className="text-xl lg:text-[26px] font-semibold">Method - 2:</h3>
                        <ul className="list-decimal pl-6 space-y-2 mt-2 lg:mt-4">
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Open agency dashboard.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Click on the <span className="font-semibold">“Host Invite (Link)”.</span></li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>Copy the invite link and share it with your host.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>The host must download BoloUp and create an account to become your host.</li>
                            <li className="text-base lg:text-[18px]" style={{color:"white"}}>After signing, the host will receive a request from the agency. They need to accept the invitation to join the agency.</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
            <a href="https://boloup.onelink.me/PDV4/mekpm61f" className="bg-gradient-to-r from-[#FF005E] via-[#F89B07] to-[#D124A4] text-white px-4 lg:px-8 py-3 rounded-lg mt-8 lg:mt-12 lg:text-[18px] relative z-10">Download BoloUp App</a>
            </div>

            <div className="absolute bottom-[-2px] left-[-1px] right-[-1px]">
            <Image src="/boloup/white-curve.svg" className="w-full" alt="Host Registration" width={500} height={500} />
            </div>
        </section>


        {/* Agency Commission Structure */}
        <section className="relative bg-white text-black pt-12 lg:pt-16 pb-24 lg:pb-36">
            <h2 className="text-[26px] leading-[1.35] lg:text-[44px] font-bold text-center max-w-xl mx-auto px-4">Bolo Up Agency Commission Structure</h2>
            <div className="flex flex-col items-center justify-center gap-0 mt-8 w-[90%] max-w-5xl mx-auto">

                {/* Box 1 */}
                <div className="flex flex-col items-start justify-start gap-2 w-full border border-[#c4c4c4] bg-[#ebebeb] rounded-t-3xl pt-6 lg:pt-7 pb-10 lg:pb-16 px-4 lg:px-10 border-b-0">
                    <h3 className="text-xl lg:text-[26px] font-semibold">1. Commission Earnings</h3>
                    <p className="text-lg lg:text-[20px] font-semibold">From Hired Hosts</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-base lg:text-[18px]" >Earn commission up to 20% on the gifts your hosts receive.</li>
                        <li className="text-base lg:text-[18px]" >Get an extra 15% on gifts shared in party rooms.</li>
                        <li className="text-base lg:text-[18px]" >Formula:
                            <ul className="list-disc pl-6">
                                <li>Basic Commission = Host Basic Income × Commission Rate</li>
                                <li>Host Basic Income = Host Gift Income + Host Call Income</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Box 2 */}
                <div className="mt-[-20px] flex flex-col items-start justify-start gap-2 w-full border border-[#c4c4c4] bg-[#ebebeb] rounded-t-3xl pt-6 lg:pt-7 pb-10 lg:pb-16 px-4 lg:px-10">
                    <h3 className="text-xl lg:text-[26px] font-semibold">2. Extra Rewards for Agents</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">From Hired Hosts: </span>Earn up to $270 when upgrading, plus weekly leaderboard rewards up to $1,000 (with more agencies, earn up to $9,000 weekly).</li>
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">Invite New Users: </span>Earn points and a weekly bonus up to $5,500 when new users recharge and play.</li>
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">Room Profit Sharing: </span>Get up to 0.75% of total bets in your room (no limit). Top 3 ranks get extra benefits for a week.</li>
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">Game Loss Rebate: </span>If you lose coins, you can get back up to $3,000 weekly.</li>
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">Weekly Star Activity: </span>Light up the &quot;Weekly Star Gift&quot; to earn up to 4,900,000 diamonds (~$490) per week.</li>
                        <li className="text-base lg:text-[18px]"><span className="font-semibold">Host Invite Reward: </span>Invite a new host and spin to win up to $16.</li>
                    </ul>
                </div>

                {/* Box 3 */}
                <div className="mt-[-20px] flex flex-col items-start justify-start gap-2 w-full border border-[#c4c4c4] bg-[#ebebeb] rounded-3xl pt-6 lg:pt-7 pb-10 lg:pb-16 px-4 lg:px-10">
                    <h3 className="text-xl lg:text-[26px] font-semibold">3. Coin Seller Opportunity</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-base lg:text-[18px] font-semibold">Better Exchange Rate:
                            <ul className="list-disc pl-6 font-normal">
                                <li>Highest Coin Seller Price: 1 USD = 10,000 coins</li>
                                <li>In-App Purchase Price: 1 USD = 7,300 coins</li>
                            </ul>
                        </li>
                        <li className="text-base lg:text-[18px] font-semibold">How It Works:
                            <ul className="list-disc pl-6 font-normal">
                                <li>Trade directly with users.</li>
                                <li>Users send you diamonds as gifts.</li>
                                <li>Convert diamonds into coins in your trade account (10,000 diamonds = 10,000 coins).</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <a href="https://boloup.onelink.me/PDV4/dib2l0jy" className="bg-gradient-to-r from-[#FF005E] via-[#F89B07] to-[#D124A4] text-white px-4 lg:px-8 py-3 rounded-lg mt-10 lg:mt-12 lg:text-[18px] mx-4 text-center relative z-10">Join BoloUp App Agency Now</a>
                </div>

            <div className="absolute bottom-[-2px] left-[-1px] right-[-1px]">
                <Image src="/boloup/color-curve.svg" className="w-full" alt="Comission Structure" width={500} height={500} />
            </div>
        </section>


        {/* Why Join BoloUp */}
        <div className="flex flex-col items-center justify-center text-white pt-12 lg:pt-20 lg:pb-10 relative overflow-hidden" style={{background: "linear-gradient(to bottom, #E41414 10%, #F20831 40%, #AB33C9 100%)"}}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[6rem] mx-auto w-[90%] max-w-[75rem] pb-10 lg:pt-10 lg:pb-10 xl:pt-0 xl:pb-10 2xl:pb-8">
                <div className="w-full lg:w-[50%]">
                    <h2 className="text-[28px] leading-[1.35] lg:text-[44px] font-bold text-left mb-3 pl-4 lg:pl-0">Why Join BoloUp</h2>
                    <Image src="/boloup/header-line.svg" alt="Why Join BoloUp" className="w-[90%] pl-4 lg:w-full lg:pl-0" width={500} height={500} />
                    <ul className="list-decimal pl-6 pb-10 sm:pb-24 lg:pb-16 xl:pb-28 mt-5 space-y-2 lg:pr-6 xl:pr-0">
                        <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}}><span className="font-semibold">Easy Registration:</span> Signing up as an agent or host will take only a few minutes.</li>
                        <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}}><span className="font-semibold">Fast Host Invitations:</span> Invite others to join your agency via link, ID, or phone number.</li>
                        <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}}><span className="font-semibold">Opportunities to Grow:</span> Bolo Up offers various ways for agents and hosts to build teams and engage with the app&apos;s features.</li>
                        <li className="text-base lg:text-[18px]" style={{color: "#ffffff"}}><span className="font-semibold">In-built Features:</span> Explore platform tools, activities, and engagement options.</li>
                    </ul>
                </div>
                <div className="hidden lg:block w-full lg:w-[50%]">
                    <Image src="/boloup/join-boloup.png" alt="Why Join BoloUp Agency?" className="w-full h-full max-w-[32rem] object-cover mx-auto rotate-[-4deg] xl:rotate-[-1deg]  lg:scale-150 xl:scale-125" width={500} height={500} />
                </div>
            </div>
            <div className="absolute bottom-[-1px] left-0 w-full">
                <Image src="/boloup/bottom-curve.svg" className="w-full" alt="Why Join BoloUp" width={500} height={500} />
            </div>
        </div>

        {/* Platform Rules */}
        <section className="relative bg-white text-black pt-14 lg:pt-10 pb-20 lg:pb-28">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-[90%] max-w-5xl mx-auto">
                <div className="w-full lg:w-[40%]">
                    <Image src="/boloup/rules.svg" className="w-72 mx-auto lg:w-full" alt="Rules" width={500} height={500} />
                </div>    
                <div className="w-full lg:w-[60%]">
                    <h2 className="text-[28px] leading-[1.35] lg:text-[44px] font-bold text-left pl-2 lg:pl-0">Platform Rules</h2>
                    <ul className="list-decimal pl-6 space-y-2 mt-4">
                        <li className="text-base lg:text-[18px]">All hosts must be at least 18 years old or above.</li>
                        <li className="text-base lg:text-[18px]">Content must not include nudity, hate speech, illegal activities, or false/misleading information.</li>
                        <li className="text-base lg:text-[18px]">Agencies are responsible for monitoring their hosts and ensuring they follow the platform rules.</li>
                        <li className="text-base lg:text-[18px]">Recruiting hosts from other agencies or promoting any third-party platforms is strictly prohibited.</li>
                    </ul>
                </div>
            </div>    
        </section>




    </div>
        </>
    )
}