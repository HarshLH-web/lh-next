import ImageModal from '@/components/ImageModal'
import Image from 'next/image'
import React, { useState } from 'react' // Import useState

function JoinChamet() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [modalImageAlt, setModalImageAlt] = useState(''); // To pass alt text to modal

    const openModal = (imageUrl, imageAlt) => {
        setModalImageUrl(imageUrl);
        setModalImageAlt(imageAlt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageUrl('');
        setModalImageAlt('');
    };

    return (
        <>
            <section id="agent" className="bg-[#ffffff] pb-12 lg:pb-20 lg:pt-0 bg-bottom scroll-mt-16">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="text-center w-full md:w-[80%] lg:w-[75%] mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-bold text-[#3B0447] leading-[1.25] lg:leading-[1.25]">
                            Agency Registration
                        </h2>
                        <p className="md:text-lg pt-4 text-[#3B0447] mx-auto">
                            This is a leading live video and streaming platform dedicated to fostering genuine connections, making friends, and enjoying diverse entertainment. <span className="font-semibold">All content on the platform must strictly adhere to community guidelines, which unequivocally prohibit any nudity, sexually explicit material, sexually suggestive content, illicit activities, or harmful behavior.</span> Become an official Agent and manage your own network of talented broadcasters and supporting sub-agents.
                        </p>
                        <p className="md:text-xl pt-2">
                            Follow these steps to register as an Agent:
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-12 py-4 lg:py-8">
                        <div className="p-4">
                            {/* ImageModal component for user-name.png */}
                            <ImageModal imageSrc="https://chametappagency.com/Images/user-name.png" imageAlt="Chamet Agency Registration Step 1 - Enter Email/Phone" width="max-w-xl" className="w-auto lg:max-w-88 object-cover cursor-pointer" />
                        </div>
                        <div>
                            <ul className="list-decimal pl-6 space-y-2 text-lg">
                                <li>Open the Agent Program Registration Link.</li>
                                <li>Enter Your <strong>E-Mail ID or Phone Number</strong><span className="text-sm"> (Email-ID is recommended for easier recovery)</span></li>
                                <li>Click on &ldquo;Send&rdquo; to receive verification code.</li>
                                <li>Enter the <strong>Verification Code</strong> received.</li>
                                <li>Create a secure <strong>Password</strong>.</li>
                                <li>Re-enter <strong>Password</strong> to confirm.</li>
                                <li>Click on &ldquo;Register&rdquo; to complete your agent program signup.</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="horizontal-hr mx-auto" />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-12 py-4 lg:py-8">
                        <div className="p-4">
                            {/* ImageModal component for bind-metwallet.png */}
                            <ImageModal imageSrc="https://chametappagency.com/Images/bind-metwallet.png" imageAlt="How to bind Metwallet as Chamet Agency for payouts" width="max-w-xl" className="w-auto lg:max-w-88 object-cover cursor-pointer" />
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#3B0447] leading-[1.25] lg:leading-[1.25] max-w-[22rem]">How to Bind Your Payout Wallet to Your Agent Account?</h3>
                            <div className="h-[2px] w-20 bg-[#3B0447] my-4"></div>
                            <ul className="list-decimal pl-6 space-y-2 text-lg mt-4">
                                <li>Access your <strong>Agent Dashboard</strong></li>
                                <li>Navigate to <strong>My Profile</strong> section</li>
                                <li>Scroll down the page</li>
                                <li>Click on <strong>Bind Metwallet</strong> to link your payout account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="metwallet" className="bg-[#F3CAF6] pt-12 pb-8 lg:pt-24 lg:pb-20 scroll-mt-16">
        <div className="w-[90%] mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#3B0447] heading-shadow text-center leading-[1.25] lg:leading-[1.25]">
            Payout Wallet Signup Process
          </h2>
          <p className="md:text-lg pt-4 text-center">Metwallet is the official payment partner for the platform. For seamless commission payouts, your agent account must be linked with the Metwallet App using the same phone number or email address. Follow these steps to connect to the Metwallet app:</p>

          <div className="bg-transparent py-4 lg:p-6 lg:pt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full lg:max-w-[28rem] order-last md:order-first">
              ImageModal component for metwallet-signup.png
              <div onClick={() => openModal('https://chametappagency.com/Images/metwallet-signup.png', 'Payout Wallet Signup Process Steps')}>
                <Image src="https://chametappagency.com/Images/metwallet-signup.png" alt="Metwallet Signup Process Steps" width={500} height={500} className="cursor-pointer" />
              </div>
            </div>
            <div className="my-auto order-first md:order-last">
              <ol className="list-decimal pl-6 space-y-1 text-lg">
                <li>Sign up using your Mobile or Email.</li>
                <li>Verify your Email/Phone through OTP.</li>
                <li>Select your Country and Set a secure Password.</li>
                <li>Click on Next and proceed with the Verification Process.</li>
              </ol>

              <p className="text-base lg:text-lg mt-6"><strong>Note:</strong> The verification process involves three steps:</p>
              <ul className="list-disc pl-6 space-y-1 text-lg">
                <li className="leading-[1.35]"><strong>Basic Verification:</strong> Complete your essential personal details (Name, Date of Birth, etc.)</li>
                <li className="leading-[1.35]"><strong>Semi Verified:</strong> Upload the front side of your government-issued ID for initial identity confirmation.</li>
                <li className="leading-[1.35]"><strong>Fully Verified:</strong> Upload the back side of your government-issued ID to complete full identity verification.</li>
              </ul>
            </div>
          </div>

          <p className="md:text-lg pt-4 text-center font-medium"> <strong>IMPORTANT:</strong> Please use the same email address or phone number for registering on the Live Social Entertainment Agent Program and Metwallet to ensure proper linking and payout processing.</p>
          <p className="md:text-base pt-2 text-center text-gray-700">If you are working with a third-party application, please ensure it's compatible and linked correctly.</p>
        </div>
      </section> */}

            <section id="agency-commission" className="bg-[#FBD2FE] py-12 lg:pt-24 lg:pb-28 scroll-mt-16">
                <div className="mx-auto w-[90%] max-w-5xl text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#3B0447] heading-shadow leading-[1.25] lg:leading-[1.25]">
                        Agent Program Commission Structure
                    </h2>
                    <p className="md:text-xl pt-4">The Agent Program commission is determined by the total income generated by all affiliated broadcasters and sub-agents over the last 30 days. This allows agents to earn a percentage of the revenue generated by their network.</p>
                    <p className="md:text-xl pt-4">The commission ratio typically ranges from 5% to 30%, designed to reward agents for their efforts in recruiting and managing talent.</p>
                    <p className="md:text-xl pt-4"><strong>The commission ratio is structured as follows:</strong></p>
                    {/* ImageModal component for Commission Ratio.svg */}
                    <ImageModal imageSrc="https://chametappagency.com/Images/Commission%20Ratio.svg" imageAlt="Agent Commission Structure Details" width="max-w-4xl" className="mx-auto mt-6 mb-10 cursor-pointer w-full max-w-3xl" />

                    <hr className="horizontal-hr mx-auto" />
                    <h3 className="text-2xl lg:text-3xl font-bold py-3">Understanding Commission Calculation</h3>
                    <hr className="horizontal-hr mx-auto" />
                    <div className="py-6 w-full max-w-4xl flex flex-col md:flex-row justify-center items-start min-h-[10rem] mx-auto">
                        <div className="md:pt-6 w-full h-full max-w-md mx-auto">
                            <h4 className="text-lg md:text-2xl font-bold md:mb-4">Agent Commission Details</h4>
                            <p>
                                The daily commission amount for an agent is calculated from two main sources:
                            </p>
                            <p className="text-center pt-4"> <strong>From Your Direct Broadcasters:</strong> <br /> The applicable commission ratio multiplied by the total daily cashable earnings of all broadcasters directly managed by your agent account.</p>
                            <p className="text-center pt-4"><strong>From Your Sub-agents:</strong> <br /> Daily commission fees from EACH sub-agent are calculated as: {`Your agent account's daily commission ratio minus your sub-agent's daily commission ratio`} &times; sub-agent&apos;s total daily revenue.</p>
                        </div>

                        <hr className="vertical-hr mx-4 hidden md:block" />
                        <hr className="block md:hidden horizontal-hr mx-auto my-4" />

                        <div className="md:pt-6 w-full h-full max-w-md mx-auto">
                            <h4 className="text-lg md:text-2xl font-bold md:mb-4">Broadcaster Earnings:</h4>
                            <p>
                                Broadcasters earn "beans" through engaging in live video interactions and streaming sessions. Viewers on the platform can show appreciation by sending virtual gifts, which are converted into beans.
                            </p>
                            <p> Broadcasters also have the flexibility to set their own price for video calls. These earned beans can then be converted into real currency.</p>
                            <p className="font-semibold mt-2"> Please note: Earning potential can vary significantly and is not guaranteed, depending on factors such as broadcaster activity, audience engagement, and adherence to platform policies.</p>
                        </div>
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold text-[#41084C] italic pb-2 md:py-2">The current conversion rate for beans to USD is 10,000 Beans = $1.</h4>
                    <p className="text-sm text-gray-600 mt-0 mb-6"><em>Please note: Earning potential can vary based on various factors including broadcaster activity, audience engagement, and platform policies.</em></p>

                    <div className="border-[1px] border-black rounded-lg mb-2 w-full md:w-4/5 mx-auto bg-white">
                        <button className="w-full flex justify-between items-center p-4 text-left border-b-[1px] rounded-lg focus:outline-none">
                            <span className="text-large md:text-xl font-bold text-[#3B0447]">Expand Your Network: Invitation for Sub-agents</span>
                        </button>
                        <div className=" p-4 text-left">
                            <p className="md:text-[17px] pb-2">As an Official Agent, you have the unique opportunity to expand your business through our legitimate <span className="font-semibold">performance-based referral program</span>, inviting new agents to manage their own teams of broadcasters. This operates as a transparent affiliate model, **where earnings are derived solely from the performance of the broadcasters and sub-agents you oversee, and it is explicitly not a multi-level marketing (MLM) or pyramid scheme.** You can send personal invitation links directly from your agent dashboard. Building a strong network of sub-agents can significantly contribute to your agent program's overall earnings and growth on the platform, based on their collective performance and strict adherence to all guidelines.</p>
                            {/* ImageModal component for sub-agent.webp */}
                            <ImageModal imageSrc="https://chametappagency.com/Images/sub-agent.webp" imageAlt="Invitation for Sub-agents Dashboard interface" width="max-w-3xl" className="w-full lg:max-w-3xl object-cover cursor-pointer" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="rules" className="bg-[#FAE7FD] pt-8 pb-12 lg:pb-28 bg-bottom mx-auto">
                <div className="w-[90%] mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center my-auto">
                        <div className="hidden md:block w-full md:flex-1 mb-4 md:mb-0">
                            <Image src="https://chametappagency.com/Images/rules.svg" alt="Platform Rules and Guidelines" width={500} height={500} loading="lazy" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#3B0447] heading-shadow"><span className="text-2xl lg:text-4xl leading-[1.25] lg:leading-[1.25]">Platform</span> <br />Guidelines
                            </h2>
                            <ul className="text-left list-disc px-6 text-lg space-y-1 pt-6">
                                <li>Agents should focus on recruiting new broadcasters to the platform and are not permitted to recruit individuals who are already active as broadcasters or associated with another agent.</li>
                                <li>It is strictly prohibited for Agents to encourage broadcasters to migrate to other applications or platforms.</li>
                                <li>All payments to broadcasters must be made in full, without any unauthorized deductions or hidden fees from the agent.</li>
                                <li>All users, including agents and broadcasters, must fully adhere to the platform's official terms of service and community guidelines, which <span className="font-semibold">strictly prohibit any nudity, sexually explicit material, sexually suggestive content, illicit activities, or harmful behavior</span>, to ensure a safe and respectful environment for all users.</li>
                            </ul>
                        </div>
                        <div className="md:hidden w-full md:flex-1 mb-4 md:mb-0">
                            <Image src="https://chametappagency.com/Images/rules.svg" alt="Platform Rules and Guidelines" width={500} height={500} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default JoinChamet;