import ImageModal from '@/components/ImageModal';
import Image from 'next/image';

function JoinHoneycamAgency() {
    return (
        <>
        {/* Main Section for Becoming a Honeycam Agency */}
        <section id="agency">
            <div className="h-fit bg-[#f8da61] mt-[-100px]">
                <div className="mx-auto max-w-[1250px] pt-10 pb-10 lg:pb-16">
                    <div className="flex flex-col md:flex-row items-center justify-center my-auto">
                        <div className="text-black px-6 sm:px-8 lg:pt-0 flex flex-col items-center justify-center">
                            <Image src="/Apply-nowPage/honeycam-logo.png" alt="Honeycam Logo" width={100} height={100} className="mb-4" />
                            <h1 className="text-3xl lg:text-5xl text-center font-extrabold mb-4 lg:mb-10 lg:leading-15">Become a HoneyCam Agency<br className="hidden md:block"/> (Partner Program)</h1>
                            <div className="flex flex-col gap-4">
                                <p className="text-base lg:text-lg font-normal text-center">HoneyCam is a dynamic live streaming platform where talented individuals can earn either by hosting engaging sessions or by managing streaming hosts as official agents. The application offers various content monetization features to help the hosts and agents grow in the industry.</p>
                                
                            </div>
                            {/* <ImageModal imageSrc="/become-agent-bg.png" imageAlt="Download the Honeycam App and Submit your application to become an Agency" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="agency-registration" className="bg-white text-black">
            <div className="px-6 sm:px-8 flex flex-col lg:flex-row max-w-6xl mx-auto pt-10 pb-10 lg:pt-16 lg:pb-16">
                <div>
                    <h3 className="text-3xl lg:text-5xl mb-6 font-bold">Agency Registration Process</h3>
                    
                    <div className="flex flex-col lg:flex-row">
                    <ul className="text-left list-decimal px-6 space-y-1">
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left"><a href="https://play.google.com/store/apps/details?id=com.honeycam.app" className="underline text-blue-500">Download the HoneyCam App.</a></li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Register &amp; create your account.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left"><a href="https://www.honeycammcn.com/?unionId=6052&unionName=LH+Talent+Agency#/register" className="underline text-blue-500">Click on the agency registration link.</a></li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Fill in all required information:</li>
                        <ul className="list-disc px-8 space-y-1 mt-2">
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Agency name</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Real name</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left">HoneyCam ID</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Email ID</li>
                        </ul>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Verify your mobile number using the verification code.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Create your agency username and password.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Submit the form &amp; log in to your agency dashboard.</li>
                    </ul>

                    <div className="mt-8 lg:mt-0 flex items-center justify-center">
                    <Image src="/honeycam/agency-reg.png" alt="Agency Registration Process" width={500} height={500} className="max-w-full h-auto" />
                    </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row my-6 items-center gap-2 lg:gap-8 justify-start">
                        <a href="https://play.google.com/store/apps/details?id=com.honeycam" className="bg-yellow-500 text-black text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                            <span className="w-5 h-5 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                </svg>
                            </span>
                            Download App
                        </a>
                        {/* <a href="https://apps.apple.com/in/app/honeycam-chat-and-match-friend/id1521957817" className="bg-gradient-to-l from-yellow-400 to-yellow-600 text-black text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                            <span className="w-6 h-6 inline-block">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                            </svg>
                            </span>
                            For IOS 
                        </a> */}
                        <a href="https://www.honeycammcn.com/?unionId=6052&unionName=LH+Talent+Agency#/register" className="bg-yellow-500 text-black text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                            <span className="w-5 h-5 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                                    <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/>
                                </svg>
                            </span>
                            Agency Registration Link
                        </a>
                    </div>
                    <p className="m-2 text-[1rem] leading-[1.25] md:text-lg lg:text-xl font-semibold">Important: Once you complete the HoneyCam agency registration, please send a screenshot of your dashboard to us via WhatsApp: <a href="https://wa.me/917065384660" className="underline text-blue-500">+91-70653 84660</a></p>
                </div>
                
            </div>
        </section>

        <hr className="mb-4 max-w-[90%] mx-auto border-black" />

        {/* Commission Structure Section */}
        <section id="commission-structure" className="bg-white text-black">
            <div className="px-6 sm:px-8 flex flex-col max-w-6xl mx-auto pt-4 pb-10 lg:pt-12 lg:pb-16">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 lg:mb-10 text-center">Agency Commission Structure</h2>
                
                <div className="mb-8">
                    <p className="text-lg mb-4">A HoneyCam Agent will recruit the hosts and sub-agents under their agency. The role of an agent is to support them, monitor their performance, and help them grow in the industry. Your income depends on the performance and earnings of your team. The better they perform, the higher an agent will receive.</p>
                    
                    <div className="bg-[#ffe066] p-4 rounded-lg mb-6">
                        <p className="text-lg font-semibold">Coin Value:10000 Coins = $1</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Host Earnings:</h3>
                        <ul className="list-disc px-5 space-y-2">
                            <li>The host can earn coins through live streaming and video calls.</li>
                            <li>In video calling, hosts can set and adjust their price.</li>
                            <li>The host will receive the gift rewards according to their weekly gift revenue between 70000 - 3750000 coins.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">Agent Earnings:</h3>
                        <ul className="list-disc px-5 space-y-2">
                            <li>The agency&apos;s total income is calculated as the sum of the earnings of hosts &amp; sub-agents.</li>
                            <li>Refer to the table below for detailed structure.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-center">Commission Structure Table</h3>
                    <div className="flex justify-center">
                        <Image src="/honeycam/commission-structure.png" alt="Agency Commission Structure" width={800} height={600} className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>

        {/* Host Registration Process Section */}
        <section id="host-registration" style={{ background: '#fffde7' }}>
            <div className="px-6 sm:px-8 flex flex-col lg:flex-row max-w-[1250px] mx-auto pt-10 pb-10 lg:pt-16 lg:pb-16">
                <div className="lg:w-1/2 lg:pr-8">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-black">Host Registration Process</h2>
                    <ul className="list-decimal px-6 space-y-2">
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left"><a href="https://play.google.com/store/apps/details?id=com.honeycam.app" className="underline text-blue-500">Download the HoneyCam App.</a></li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Sign up by creating a profile.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Go to the <strong>profile</strong>.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Click on <strong>&lsquo;settings&rsquo;</strong>.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Join the <strong>studio</strong>.</li>
                        <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Input the LH Agency&apos;s ID: <span className="font-bold bg-yellow-200 px-2 py-1 rounded">&quot;6052&quot;</span></li>
                    </ul>
                </div>
                <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 flex items-center justify-center">
                    <Image src="/honeycam/host-reg.png" alt="Host Registration Process" width={500} height={500} className="max-w-full h-auto" />
                </div>
            </div>
        </section>

        {/* Agency Guidelines Section */}
        <div className="px-6 sm:px-8 flex flex-col max-w-5xl mx-auto bg-white pt-10 pb-10 lg:pt-16 lg:pb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-center lg:mb-4 text-black leading-11">HoneyCam Guidelines</h2>
            <ul className="list-disc px-5 space-y-3 mt-4">
                <li>All agents and hosts must be <strong>18 years or older</strong>.</li>
                <li>A minimum of <strong>10 active hosts</strong> is required to operate a successful agency.</li>
                <li>Promoting <strong>external applications</strong> on HoneyCam is <strong>strictly prohibited</strong>.</li>
                <li>Violation of platform rules may result in account suspension or removal.</li>
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8 mt-8 justify-center">
                <a href="https://www.honeycammcn.com/?unionId=6052&unionName=LH+Talent+Agency#/register" className="bg-yellow-500 text-black text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                    <span className="w-5 h-5 inline-block ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                            <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/>
                        </svg>
                    </span>
                    Agency Registration Link
                </a>
            </div>
        </div>
        </>
    )
}

export default JoinHoneycamAgency;
