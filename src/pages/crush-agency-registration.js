import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CrushAgencyRegistration() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        role: "",
        appId: "",
        date: "",
        website: "",
    });
    const [ipAddress, setIpAddress] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

     // Fetch Client IP Address automatically
  useEffect(() => {
    async function fetchIp() {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setIpAddress(data?.ip || "");
      } catch (e) {
        setIpAddress("");
      }
    }
    fetchIp();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        role: formData.role,
        app_id: formData.appId,
        website_link: "https://lhtalentagency.com/crush-agency-registration",
        ip_address: ipAddress,
      };

      const response = await fetch("https://webpanel.store/api/crushdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitMessage("Submitted successfully. We'll reach out soon.");
      setFormData({ name: "", email: "", phone: "", country: "", role: "", appId: "", date: "", website: "" });
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (err) {
      setSubmitMessage("Submission failed. Please try again.");
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

    const whyCrushLive = [
        {   
            image: "/crush/huge_rewards.png",
            title: "Huge Rewards",
            description: "Earn gems, commissions, and bonuses through user invitations, game hosting, and completing tasks.",
            className: "h-40 w-48 lg:h-52 lg:w-60"
        },
        
        {
            image: "/crush/flexible_earning.png",
            title: "Flexible Earning",
            description: "Work from your comfort zone and at your preferred time, without strict schedules.",
            className: "h-40 w-48 lg:h-52 lg:w-60 mt-4 lg:mt-0"
        },
        
        
        {
            image: "/crush/rankings_rewards.png",
            title: "Rankings Rewards",
            description: "Compete in weekly charm rankings and win cash rewards, including up to $500 for 1st place.",
            className: "h-40 w-48 lg:h-52 lg:w-60"
        },
        
        
    ]

    const earningOpportunities = [
        {
            title: "Gift Income",
            description: "Agents can earn by receiving gifts from users. For every 10,000 coins gifted to the host, the host will receive a reward of 7,000 gems.",
        },
        {
            title: "Agency Gift Commission",
            description: "When an agency’s host receives gifts as gems, agents earn a commission. For every 10,000 gems gifted to the host, the agent can earn up to 2,000 gems in commission.",
        },
        {
            title: "Invite User",
            description: "Agents can invite new users to the platform. For every user who plays games and earns 10,000 coins, the agent will receive a reward of 20 gems.",
        },
        {
            title: "User Plays Games in Your Live/Party Room",
            description: "When a user plays games in an agent’s live or party room and reaches 10,000 coins, the agent will earn 30 gems.",
        },
        {
            title: "Invite Agent Commission",
            description: "Agents can also earn by inviting other agents to join the platform. The commission structure for inviting agents should be confirmed with the platform’s admin team.",
        },
        {
            title: "Task Rewards",
            description: "The platform offers various tasks for the agent and host. These tasks may offer base pay or additional bonuses based on task completion.",
        },  
        {
            title: "Rank Rewards",
            description: "Agents can participate in weekly charm rankings. The agent who ranks first in the charm rankings will receive a reward of $500 USD.",
        },  
    ]
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
                <a href="/Policies/Crush-Live-Host-Policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
                    Host Policy
                </a>
                <hr className="border-white" />
                <a href="/Policies/Crush-Live-Agent-Policy.pdf" download className="text-white hover:text-yellow-400 transition-all duration-300 text-center">
                    Agent Policy
                </a>
                </div>
            )}
        </div>


            <section className="crush-bg pt-16 pb-8 lg:pt-0">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 lg:ml-[10%]">
                    <div className="w-full lg:w-[30%]">
                        <Image src="/crush/crush.png" alt="Crush Agency Registration" className="w-full h-full object-cover max-w-36 lg:max-w-64 xl:max-w-72 2xl:max-w-80 mx-auto lg:mx-0 2xl:mx-auto" width={1000} height={1000} />
                    </div>
                    <div className="w-full lg:w-[70%] pb-8 lg:py-12 2xl:py-40 2xl:bg-contain bg-left bg-no-repeat relative lg:bg-[url('/crush/bg-2.svg')] xl:bg-[url('/crush/bg-3.svg')] 2xl:bg-[url('/crush/bg-2.svg')]  bg-cover ">

                    <Image src="/crush/logo.png" alt="Crush Agency Registration" className="absolute -bottom-[4.5rem] left-1/2 lg:top-1/2 lg:-left-1 2xl:-left-4 -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2 w-20 h-20 lg:w-24 2xl:w-32 lg:h-24 2xl:h-32" width={1000} height={1000} />

                    <div className="text-white space-y-2 lg:space-y-4 w-[85%] mx-auto lg:pl-16 2xl:max-w-2xl 2xl:ml-28 xl:pr-24 2xl:pr-0">
                        <h1 className="text-3xl lg:text-[42px] font-bold gradient-heading paytone-one w-fit py-2 lg:leading-[1.15] mx-auto lg:mx-0 lg:pr-16 text-center lg:text-left">Become a Crush Live Agent</h1>
                        <p className="text-base lg:text-[18px] 2xl:text-[20px] leading-tight text-center lg:text-left">Join the new Crush Live App and start your journey as a registered Crush Live Agent today!</p>
                        <p className="text-base lg:text-[18px] 2xl:text-[20px] leading-tight text-center lg:text-left">Whether you’re ready to manage your own team or show your talent as a host, Crush Live is offering new opportunities to connect, grow, and earn.</p>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="text-center w-full sm:w-fit bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-700 transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg mt-4 lg:mt-12 lg:text-[18px]">Download Crush Live</a>
                        <a href="https://invite.crushfun.live/agent?invitationCode=TZXQGL5F" className="text-center w-full sm:w-fit bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-700 transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg mt-0 lg:mt-12 lg:text-[18px]">Join Agency</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            {/* Crush Live Agency Registration Process */}
            <section id="crush-live-agency-registration-process" className="bg-white pb-12 pt-20 lg:py-16">
                <div className="w-[90%] mx-auto max-w-4xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-left lg:text-center">Crush Live Agency Registration</h2>
                    <div className="flex flex-col-reverse gap-6 lg:gap-12 mt-4 lg:mt-10">
                        <div>
                            <Image src="/crush/agency-reg.png" alt="Crush Agency Registration" className="hidden lg:block w-full h-full object-cover max-w-full xl:max-w-4xl" width={1000} height={1000} />
                            <Image src="/crush/agency-reg-phone.png" unoptimized alt="Crush Agency Registration" className="block lg:hidden w-full h-full object-cover max-w-full xl:max-w-4xl" width={1000} height={1000} />
                        </div>
                        <div>
                            <ul className="list-decimal pl-6 space-y-1 lg:space-y-2">
                                <li><a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="text-blue-700 underline">Download the Crush Live app.</a></li>
                                <li>Sign in using your preferred option.</li>
                                <li>Set up the profile with basic details.</li>
                                <li>Open the <a href="https://invite.crushfun.live/agent?invitationCode=TZXQGL5F" className="text-blue-700 underline"> agency registration link.</a></li>
                                <li>Enter your ID (from the profile section) and click “code”.</li>
                                <li>Check the in-app message for the verification code.</li>
                                <li>Enter the code and confirm.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4 lg:mt-6">
                        <Image src="/crush/tick.svg" alt="Crush Agency Registration" className="w-10 lg:w-12 h-10 lg:h-12" width={100} height={100} />
                        <p className="text-base lg:text-lg 2xl:text-[20px] font-bold leading-tight">You have successfully become a Crush Live Agent.</p>
                    </div>
                    <div className="flex items-center justify-center mt-2 mb-4 lg:mb-8">
                        <a href="https://invite.crushfun.live/agent?invitationCode=TZXQGL5F" className="bg-transparent border-2 border-[#575757] hover:bg-[#575757] text-[#575757] hover:text-white transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg mt-4 lg:mt-6 lg:text-[18px] mx-auto">Become Crush Live Agent</a>
                    </div>
                </div>

            {/* Crush Agency Interest Form */}
            <section className="bg-white pt-10 pb-10">
                <div className="w-[90%] mx-auto max-w-4xl">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center">Share Your Details</h2>
                    <p className="text-base lg:text-lg text-center mt-2">Fill the form and we will contact you.</p>

                    <form onSubmit={handleSubmit} className="bg-[#F7F7F7] mt-6 p-4 lg:p-6 rounded-2xl border border-[#E5E5E5]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Your name" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="you@example.com" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="+1 555 123 4567" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Country</label>
                                <input name="country" value={formData.country} onChange={handleChange} required type="text" placeholder="Country" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Role</label>
                                <input name="role" value={formData.role} onChange={handleChange} required type="text" placeholder="Agent / Host / Other" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">App ID</label>
                                <input name="appId" value={formData.appId} onChange={handleChange} required type="text" placeholder="Your App ID" className="w-full rounded-lg border border-[#D5D5D5] px-3 py-2 outline-none" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3 mt-4 lg:mt-8">
                            <button type="submit" disabled={isSubmitting} className="duoo-btn-gradient text-white font-semibold px-5 py-2 rounded-full disabled:opacity-70">
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                            {submitMessage ? (
                                <span className="text-sm text-center transition-all duration-300">{submitMessage}</span>
                            ) : null}
                        </div>
                    </form>
                </div>
            </section>
            </section>

            {/* Why Crush Live */}
            <section id="crush-live-agency-registration-process" className="py-12 lg:py-16 text-white rounded-3xl" style={{background: "linear-gradient(51deg,rgba(143, 56, 255, 1) 0%, rgba(162, 55, 255, 1) 25%, rgba(227, 104, 205, 1) 80%, rgba(255, 219, 94, 1) 100%)"}}>
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-center max-w-xl mx-auto"> Why Crush Live?</h2>
                <div className="w-[90%] mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-12 mt-6 lg:mt-10">
                    {whyCrushLive.map((item, index) => (    
                    <React.Fragment key={index}>
                    <div className="flex flex-col items-center justify-center gap-2">                      
                       <Image src={item.image} alt="Why Crush Live" className={`object-contain ${item.className} `} width={1000} height={1000} />
                        <p className="text-lg lg:text-xl font-semibold text-left lg:text-center max-w-xl mx-auto">{item.title}</p>
                        <p className="text-base lg:text-lg font-normal text-center max-w-xl mx-auto">
                        {item.description}
                        </p>
                    </div>
                    {index !== whyCrushLive.length - 1 && <hr className="w-full lg:w-[1px] h-[1px] lg:h-96 mt-6 lg:mt-0 bg-white/60" />}
                    </React.Fragment>
                    ))}
                </div>
            </section>


            {/* Agency Commission Structure */}
            <section id="crush-live-agency-commission-structure" className="py-12 lg:py-16">
                <div className="w-[90%] mx-auto max-w-3xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-center max-w-xl mx-auto mb-3 lg:mb-6"> Agency Commission Structure</h2>
                    <p className="text-base lg:text-lg leading-tight text-[#101010] text-center max-w-2xl mx-auto mt-3 lg:mt-6">
                    The agent’s commission is calculated on the total income of the agent for the past 30 days.
                    </p>
                    <p className="text-base lg:text-lg leading-tight text-[#101010] text-center max-w-2xl mx-auto mt-3 lg:mt-6">
                    The agent’s commission is calculated on the total income of the agent for the past 30 days.
                    Total Commission = Total Income of all the Hosts + Total Income of all the Sub-agents.
                    </p>

                    <Image src="/crush/commission-structure.svg" alt="Crush Live Agency Commission Structure" className="w-full h-full object-cover sm:max-w-lg mx-auto lg:max-w-3xl mt-6 lg:mt-10 mb-4" width={1000} height={1000} />
                </div>
                <div className="flex items-center justify-center lg:mb-8">
                        <a href="https://invite.crushfun.live/agent?invitationCode=TZXQGL5F" className="bg-transparent border-2 border-[#575757] hover:bg-[#575757] text-[#575757] hover:text-white transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg mt-4 lg:mt-6 lg:text-[18px] mx-auto">Join Crush Agency</a>
                    </div>
            </section>


            {/* Earning Opportunities for a Crush Live Agent */}
            <section id="crush-live-agency-earning-opportunities" className="py-12 lg:py-16 text-white rounded-3xl" style={{background: "linear-gradient(97deg,rgba(143, 56, 255, 1) 0%, rgba(162, 55, 255, 1) 25%, rgba(227, 104, 205, 1) 80%, #F1A196 100%)"}}>
                <div className="w-[90%] mx-auto max-w-5xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-center max-w-3xl mx-auto mb-4 lg:mb-6"> Earning Opportunities for a Crush Live Agent</h2>


                    <div className="flex flex-row items-center justify-center gap-12 mt-6 lg:mt-10">
                        <table className="min-w-full border-0 border-gray-300">
                            <tbody>
                                {earningOpportunities.map((item, index) => (
                                <tr className="" key={index}>
                                    <td className={`border-gray-300 px-2 lg:px-4 py-2 lg:py-4 font-semibold w-20 lg:w-auto ${index === 6 ? 'border-b-0' : 'border-b'}`}>{item.title}</td>
                                    <td className={`border-b border-l border-gray-300 text-[15px] lg:text-[16px] px-2 lg:px-8 py-2 lg:py-4 ${index === 6 ? 'border-b-0' : 'border-b'}`}>{item.description}</td>
                                </tr>  
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Image src="/crush/earning-opportunities.svg" alt="Crush Live Agency Earning Opportunities" className="w-full h-full object-cover sm:max-w-lg mx-auto lg:max-w-3xl mt-8 lg:mt-16 mb-6" width={1000} height={1000} />
                </div>
                <div className="flex items-center justify-center lg:mb-8">
                    <a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-700 transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg lg:mt-12 lg:text-[18px]">Download Crush Live</a>
                </div>
            </section>


            {/* Crush Live Host Registration Process */}
            <section id="crush-live-host-registration-process" className="bg-white py-12 lg:py-16">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-4 lg:mt-10">
                        <div>
                            <Image src="/crush/host-reg.png" alt="Crush Agency Registration" className="w-full h-full object-cover max-w-full sm:max-w-lg lg:max-w-xl xl:max-w-2xl" width={1000} height={1000} />
                        </div>
                        <div>
                            <h2 className="text-2xl lg:text-4xl 2xl:text-[44px] font-bold text-left mb-4">Crush Live Host Registration</h2>
                            <ul className="list-disc pl-6 space-y-1 lg:space-y-2">
                                <li><a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="text-blue-700 underline">Download the Crush Live app using this link.</a></li>
                                <li>Sign in using your preferred option.</li>
                                <li>Set up your profile with your nickname, birth date, and gender.</li>
                                <li>Go to the in-app message section and check for the agency invitation.</li>
                                <li>Accept the invitation request to join the agency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:mb-8 mt-4 lg:mt-6">
                        <a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="bg-transparent border-2 border-[#575757] hover:bg-[#575757] text-[#575757] hover:text-white transition-colors duration-300  px-4 lg:px-8 py-3 rounded-lg mt-4 lg:mt-6 lg:text-[18px] mx-auto">Download Crush Live</a>
                    </div>
            </section>  


            {/* How to invite a host and a sub-agent */}
            <section id="crush-live-host-sub-agent-invite" className="text-white py-12 lg:py-16 rounded-3xl" style={{background: "linear-gradient(97deg,rgba(143, 56, 255, 1) 0%, rgba(162, 55, 255, 1) 25%, rgba(227, 104, 205, 1) 80%, #F1A196 100%)"}}>
                <div className="w-[90%] mx-auto max-w-5xl">
                    <h2 className="text-2xl lg:text-4xl 2xl:text-[52px] font-bold text-center max-w-3xl mx-auto mb-3 lg:mb-6"> How to invite a host and a sub-agent?</h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-4 lg:mt-10">
                        <Image src="/crush/host-invite.png" alt="Crush Agency Registration" className="w-full h-full object-cover max-w-96 lg:max-w-[26rem] xl:max-w-[30rem]" width={1000} height={1000} />
                        <div>
                            <h3 className="text-xl lg:text-2xl 2xl:text-[30px] font-bold text-left mb-4">Host Invitation Process:</h3>
                            <ul className="list-disc pl-6 space-y-1 lg:space-y-2">
                            <li style={{color: "#ffffff"}}>Go to your profile section and click on <span className="font-semibold">“Add host”.</span></li>
                            <li style={{color: "#ffffff"}}>Enter your inviting host’s ID, and click confirm.</li>
                            <li style={{color: "#ffffff"}}>The profile will be displayed to you.</li>
                            <li style={{color: "#ffffff"}}>Click on <span className="font-semibold">“Add Host”</span> to accept them in your agency.</li>
                            </ul>
                        </div>
                    </div>

                    <hr
                                style={{
                                    height: "1px",
                                }}
                                className="mt-6 mb-4 border-t border-white/60"
                            />

                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-12 mt-10 lg:mt-16">
                        <Image src="/crush/sub-agent-invite.png" alt="Crush Agency Registration" className="w-full h-full object-cover max-w-96 lg:max-w-[26rem] xl:max-w-[30rem]" width={1000} height={1000} />
                        <div>
                            <h3 className="text-xl lg:text-2xl 2xl:text-[30px] font-bold text-left mb-4">Sub-agent Invitation Process:</h3>
                            <ul className="list-disc pl-6 space-y-1 lg:space-y-2">
                            <li style={{color: "#ffffff"}}>Go to your profile section and click on <span className="font-semibold">“Invite Agent”.</span></li>
                            <li style={{color: "#ffffff"}}>Copy the link and send the invitation agent link to your invitee.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:mb-8 mt-6 lg:mt-8">
                    <a href="https://invite.crushfun.live/invite?inviteCode=23929095&languages=auto&imageType=1" className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-700 transition-colors duration-300 px-4 lg:px-8 py-3 rounded-lg lg:mt-12 lg:text-[18px]">Download Crush Live</a>
                </div>
            </section>

            {/* Account Rule */}
            <section id="crush-live-account-rule" className="bg-white py-12 lg:py-16">
                <div className="w-[90%] mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-4 lg:mt-10">
                    <Image src="/crush/rule.svg" alt="Crush Agency Registration" className="w-full h-full object-cover max-w-[80%] lg:max-w-96" width={1000} height={1000} />
                    <div>
                        <h2 className="text-2xl lg:text-4xl 2xl:text-[44px] font-bold text-left mb-4">Account Rule</h2>
                        <ul className="list-decimal pl-6 space-y-1 lg:space-y-2 2xl:space-y-4">
                            <li style={{lineHeight: "1.25"}}>Only users 18 years and older are allowed.</li>
                            <li style={{lineHeight: "1.25"}}>Face authentication ID must match the real, live-going person. If violated, the ID will be permanently banned.</li>
                            <li style={{lineHeight: "1.25"}}>Each person can only use their own face authentication ID to make withdrawals.</li>
                            <li style={{lineHeight: "1.25"}}>Content must not include nudity, hate speech, illegal activities, or false/misleading information.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}