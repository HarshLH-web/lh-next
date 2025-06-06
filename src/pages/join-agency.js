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
            <section id="Talent Partner" className="bg-[#ffffff] pb-12 lg:pb-20 lg:pt-0 bg-bottom scroll-mt-16">
                <div className="w-[90%] mx-auto max-w-6xl">
                    <div className="text-center w-full md:w-[80%] lg:w-[75%] mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-bold text-[#3B0447] leading-[1.25] lg:leading-[1.25]">
                            Talent Partner Registration
                        </h2>
                        <p>
                            This platform provides tools for professional networking through video-based communication. It promotes responsible usage and requires all users to follow strict content guidelines.
                            <span className="font-semibold">
                                Sharing nudity, sexually explicit content, or engaging in restricted activities is not permitted.
                            </span>
                            By registering as an Talent Partner, you can onboard and manage broadcasters and sub-talent partners under your team.
                        </p>
                        <p>
                            To register as an Talent Partner, follow these steps:
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-12 py-4 lg:py-8">
                        <div className="p-4">
                            {/* ImageModal component for user-name.png */}
                            <ImageModal imageSrc="/chamet/user-name.png" imageAlt="Chamet Talent Partner Registration Step 1 - Enter Email/Phone" width="max-w-xl" className="w-auto lg:max-w-88 object-cover cursor-pointer" />
                        </div>
                        <div>
                            <ul className="list-decimal pl-6 space-y-2 text-lg">
                                <li>Open the Talent Partner Registration Link.</li>
                                <li>Enter Your <strong>E-Mail ID or Phone Number</strong><span className="text-sm"> (Email-ID is recommended for easier recovery)</span></li>
                                <li>Click on &ldquo;Send&rdquo; to receive verification code.</li>
                                <li>Enter the <strong>Verification Code</strong> received.</li>
                                <li>Create a secure <strong>Password</strong>.</li>
                                <li>Re-enter <strong>Password</strong> to confirm.</li>
                                <li>Click on &ldquo;Register&rdquo; to complete your Talent Partner program signup.</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="horizontal-hr mx-auto" />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-12 py-4 lg:py-8">
                        <div className="p-4">
                            {/* ImageModal component for bind-metwallet.png */}
                            <ImageModal imageSrc="/chamet/bind-metwallet.png" imageAlt="How to bind Metwallet as Chamet Talent Partner for payouts" width="max-w-xl" className="w-auto lg:max-w-88 object-cover cursor-pointer" />
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#3B0447] leading-[1.25] lg:leading-[1.25] max-w-[22rem]">How to Bind Your Payout Wallet to Your Talent Partner Account?</h3>
                            <div className="h-[2px] w-20 bg-[#3B0447] my-4"></div>
                            <ul className="list-decimal pl-6 space-y-2 text-lg mt-4">
                                <li>Access your <strong>Talent Partner Dashboard</strong></li>
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
          <p className="md:text-lg pt-4 text-center">Metwallet is the official payment partner for the platform. For seamless commission payouts, your Talent Partner account must be linked with the Metwallet App using the same phone number or email address. Follow these steps to connect to the Metwallet app:</p>

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

          <p className="md:text-lg pt-4 text-center font-medium"> <strong>IMPORTANT:</strong> Please use the same email address or phone number for registering on the Live Social Entertainment Talent Partner Program and Metwallet to ensure proper linking and payout processing.</p>
          <p className="md:text-base pt-2 text-center text-gray-700">If you are working with a third-party application, please ensure it's compatible and linked correctly.</p>
        </div>
      </section> */}

            <section id="Talent Partner-commission" className="bg-[#FBD2FE] py-12 lg:pt-24 lg:pb-28 scroll-mt-16">
                <div className="mx-auto w-[90%] max-w-5xl text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#3B0447] heading-shadow leading-[1.25] lg:leading-[1.25]">
                        Talent Partner Commission Structure
                    </h2>
                    <p className="md:text-xl pt-4">The Talent Partner Program commission is determined by the total income generated by all affiliated broadcasters and sub-Talent Partners over the last 30 days. This allows Talent Partners to earn a percentage of the revenue generated by their network.</p>
                    <p className="md:text-xl pt-4">The commission ratio typically ranges from 5% to 30%, designed to reward Talent Partners for their efforts in recruiting and managing talent.</p>
                    <p className="md:text-xl pt-4"><strong>The commission ratio is structured as follows:</strong></p>
                    {/* ImageModal component for Commission Ratio.svg */}
                    <ImageModal imageSrc="/chamet/Commission%20Ratio.svg" imageAlt="Talent Partner Commission Structure Details" width="max-w-4xl" className="mx-auto mt-6 mb-10 cursor-pointer w-full max-w-3xl" />

                    <hr className="horizontal-hr mx-auto" />
                    <h3 className="text-2xl lg:text-3xl font-bold py-3">Understanding Commission Calculation</h3>
                    <hr className="horizontal-hr mx-auto" />
                    <div className="py-6 w-full max-w-4xl flex flex-col md:flex-row justify-center items-start min-h-[10rem] mx-auto">
                        <div className="md:pt-6 w-full h-full max-w-md mx-auto">
                            <h4 className="text-lg md:text-2xl font-bold md:mb-4">Talent Partner Commission Details</h4>
                            <p>
                                Commissions are based on the total income earned by your broadcasters and sub-Talent Partners within 30 days.
                            </p>
                            <p>
                                Talent Partners earn between 5% to 30% depending on the team’s total monthly performance.
                            </p>
                            <p><strong>For Broadcasters:</strong></p>
                            <p>
                                Commission = rate × total daily cashable earnings of managed broadcasters.
                            </p>
                            <p><strong>For Sub-Talent Partners:</strong></p>
                            <p>
                                Commission = (your rate − sub-Talent Partner&apos;s rate) × sub-Talent Partner&apos;s broadcaster income.
                            </p>
                        </div>

                        <hr className="vertical-hr mx-4 hidden md:block" />
                        <hr className="block md:hidden horizontal-hr mx-auto my-4" />

                        <div className="md:pt-6 w-full h-full max-w-md mx-auto">
                            <h4 className="text-lg md:text-2xl font-bold md:mb-4">Broadcaster Earnings:</h4>
                            <p>
                                Broadcasters earn “beans” by participating in video calls and receiving digital gifts.
                            </p>
                            <p>
                                Beans can be converted to local currency based on real-time exchange rates.
                            </p>
                            <p className="font-semibold">
                                Note: Earnings depend on consistent activity, user engagement, and following all platform rules.
                            </p>
                        </div>
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold text-[#41084C] italic pb-2 md:py-2">The current conversion rate for beans to USD is 10,000 Beans = $1.</h4>
                    <p className="text-sm text-gray-600 mt-0 mb-6"><em>Please note: Earning potential can vary based on various factors including broadcaster activity, audience engagement, and platform policies.</em></p>

                    <div className="border-[1px] border-black rounded-lg mb-2 w-full md:w-4/5 mx-auto bg-white">
                        <button className="w-full flex justify-between items-center p-4 text-left border-b-[1px] rounded-lg focus:outline-none">
                            <span className="text-large md:text-xl font-bold text-[#3B0447]">Expand Your Network: Invitation for Sub-Talent Partners</span>
                        </button>
                        <div className=" p-4 text-left">
                        <p>
                            Talent Partners can refer sub-Talent Partners who then manage their own broadcaster groups. Talent Partners earn a share from sub-Talent Partner performance.
                            <span className="font-semibold">
                                This is not an MLM or pyramid model.
                            </span>
                            Referral links are available on the dashboard.
                        </p>
                            {/* ImageModal component for sub-Talent Partner.webp */}
                            <ImageModal imageSrc="/chamet/sub-agent.webp" imageAlt="Invitation for Sub-agents Dashboard interface" width="max-w-3xl" className="w-full lg:max-w-3xl object-cover cursor-pointer" />
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
                            <li>Agents should not register users already linked with other agents.</li>
                            <li>Agents must not promote competing platforms.</li>
                            <li>Broadcasters must receive full, undisclosed payments.</li>
                            <li>
                                Users must comply with community guidelines. 
                                <span className="font-semibold">
                                Any form of nudity, explicit content, or policy violation is strictly prohibited.
                                </span>
                            </li>
                            </ul>
                        </div>
                        <div className="md:hidden w-full md:flex-1 mb-4 md:mb-0">
                            <Image src="/chamet/rules.svg" alt="Platform Rules and Guidelines" width={500} height={500} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default JoinChamet;