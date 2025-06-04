import ImageModal from '@/components/ImageModal';
import Image from 'next/image';
import React from 'react'

function becomePoppoAgent() {
  return (
    <>
        {/* <!-- Agency Registration  --> */}
    <section id="agency">
        <div className="h-fit bg-white">
            <div className=" mx-auto max-w-[1250px] pb-10 lg:pb-16">
                <div className="flex flex-col md:flex-row items-center justify-center my-auto">
                    {/* <!-- Text Section --> */}
                    <div className=" text-black px-6 sm:px-8 lg:pt-0 flex flex-col items-center justify-center">
                        <h2 className="text-4xl lg:text-5xl text-center font-extrabold mb-4 lg:mb-10">Become Poppo Agent
                        </h2>
                        {/* <!-- <div className="hidden md:block w-[75px] h-[5px] bg-blue-700 my-4 rounded-full"></div> --> */}
                        <div className="flex flex-col gap-4">
                            <p className="text-base lg:text-lg font-normal">Enjoy the fun of live streaming, create your own exclusive guild, and easily earn streamer revenue!</p>
                        <ul className=" text-left list-decimal px-6 space-y-1">
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left">Download the App</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left ">Register & Sign-in using your
                                preferred option</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left ">Copy ID from your profile
                            </li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left "> Click on the <a
                                    href="https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=29828616&c=poppo"
                                    className="underline text-blue-700">Agency Registration Link </a></li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left "> Enter your ID & Click
                                &quot;Get&quot;</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left "> Find the verification code in
                                your App messages</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left "> Enter the Verification Code
                                and Submit</li>
                            <li className="text-[1rem] leading-[1.25] md:text-lg text-left "> Wait for the confirmation (usually 10-15 minutes)
                            </li>
                        </ul>
                        <p className="m-2 text-[1rem] leading-[1.25] md:text-lg lg:text-xl"> <strong>Inform us on <a
                                    className="text-blue-600 underline"
                                    href="https://api.whatsapp.com/send/?phone=917065384660&text&type=phone_number&app_absent=0">WhatsApp
                                    at +917065384660</a> after completing the process.</strong>
                        </p>
                        </div>
                        <ImageModal imageSrc="/become-poppo-agency.webp" imageAlt="Download the Poppo Live App and Submit your application to become an Agency" />

                        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8 mt-8">
                            {/* <a href="https://aaaonline.info/Wkn6hh" className="bg-blue-600 text-white text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                                <span className="w-5 h-5 inline-block ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" classNameName="w-full h-full">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                </svg>
                                </span>
                                Download App
                              </a> */}
                            <a href="https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=29828616&c=poppo" className="bg-blue-600 text-white text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                                <span className="w-5 h-5 inline-block ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                                <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/>
                              </svg>
                                </span>
                                Become an Agency
                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="commission-structure" className="bg-[#EFE0EC]">
    <div className="px-6 sm:px-8 flex flex-col max-w-6xl mx-auto  pt-10 pb-10 lg:pt-16 lg:pb-16">
    <h2 id="commission-structure" className="text-3xl lg:text-5xl font-extrabold mb-6 lg:mb-10 text-center text-black">Agency Commission</h2>
      <ul className="list-disc px-5">
        <li>The host will get 70% of the received gifts. </li>
        <p className="py-2 px-2 lg:px-8 my-2 bg-white"><span className="font-bold">Example</span>: If the host gets a gift worth 10,000
          coins, they will receive 70% of that gift, which will be 7,000 points.</p>
        <li>The conversion value for withdrawal is 10000 Points = 1 USD. </li>
        <li>An agency can get 92,000-95,000 coins for $10 through recharge, depending on the agency&apos;s rate.</li>
      </ul>
      <h3 id="agent-commission-structure" className="text-lg font-semibold pt-4">Agent&apos;s Commission Rate</h3>
      <ul className="list-disc px-5 space-y-1 mt-3">
        <li>The agent&apos;s commission rate is calculated based on the hired hosts and sub-agents&apos; income for the last
          30 days, excluding platform rewards.</li>
        <li> The commission rate may vary monthly in the range of 4%-20%.</li>
        <li> The more the agency&apos;s earnings, the higher its commission rate will be.</li>
        <li> The commission on the host&apos;s received gifts will be added to the agency&apos;s account immediately.</li>
        <li className="font-semibold">Indian Agents will get coins in commission from inviting agents earnings.</li>
        <li className="font-semibold">All other countries will get inviting agent commission in points.</li>
        <li> The agent&apos;s commission rate will be calculated on the last 30 days earnings:</li>
        </ul>
        <p className="py-2 pl-4 my-2 bg-white text-center">The agent&apos;s commission is calculated as follows: <span
            className="font-bold">Hosts&apos; earnings * commission rate + (agent&apos;s commission rate - sub agent&apos;s commission
            rate) * subagent&apos;s earnings.</span>
        </p>
    </div>
    </section>

     <section id="host-registration" className='bg-[#eff2ee]'>  
    <div className="px-6 sm:px-8 flex flex-col max-w-[1250px] mx-auto  pt-10 pb-10 lg:pt-16 lg:pb-16">
    <h2 id="host-registration" className="text-3xl lg:text-5xl font-bold mb-4 text-center text-black"> Host Invitation Process
            </h2>
            <p className="text-center lg:text-lg">Here are two methods to start the process of becoming a Host:
            </p>
            <div className="flex flex-col lg:flex-row gap-6 mt-6 max-w-4xl mx-auto">
              <div className="w-full lg:w-1/2 lg:border-[#6d6d6d] lg:border-r-[1px] ">
              <h3 id="method-1" className="font-semibold text-lg leading-6">Method 1: Host Registration with Agent ID
                          </h3>
                          <ul className="list-decimal px-6 space-y-1 mt-2">
                              <li>Download App</li>
                              <li>Install & Register on the App. </li>
                              <li>The host needs to click on ‘My Agent’ from the profile options.</li>
                              <li>Enter Agent ID <span className="font-bold">29828616</span> & Apply to join the agency.</li>
                          </ul>
              </div>
              <div className="w-full lg:w-1/2">
              <h3 id="method-2" className="font-semibold text-lg leading-6">Method 2: Become a Host through an Invitation</h3>
                <ul className="list-decimal px-6 space-y-1 mt-2">
                    <li>Download App</li>
                    <li> Install & Register on the App. </li>
                    <li> Find the ID & Host Code <br />
                        (To check ID & Host Code, Click on the ‘My Agent’ Option in the Profile.)</li>
                    <li> Submit the form with the correct details OR send us your ID & Host Code on <a
                            href="https://wa.me/7065384660" className="text-blue-600 underline"> Whatsapp at +917065384660</a>
                    </li>
                </ul>
              </div>
            </div>
    </div>
    </section>       

    <div className="px-6 sm:px-8 flex flex-col max-w-5xl mx-auto bg-white pt-10 pb-10 lg:pt-16 lg:pb-16">
    <h2 id="agent-guidelines" className="text-3xl lg:text-5xl font-bold text-center lg:mb-4 text-black leading-11">Agency Rules (Guidelines)</h2>
      <ul className="list-disc px-5 space-y-1 mt-4">
        <li>Advertisement of any other application is prohibited.</li>
        <li>A host can only join one agency. If reported, the new ID will be banned.</li>
        <li>The agents are not allowed to hire hosts from other agencies. In case of violation, an initial fine of
          $10 will be charged and with continuous violation, the account will be banned permanently.</li>
        <li>The Agency is responsible for keeping a healthy and professional environment and should motivate and
          support the hired hosts and the sub-agents.</li>
        <li>Any violation will result in salary deductions and a permanent ban on the account.</li>
      </ul>
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8 mt-8 justify-center">
                            {/* <a href="https://aaaonline.info/Wkn6hh" className="bg-blue-600 text-white text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                                <span className="w-5 h-5 inline-block ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" classNameName="w-full h-full">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                </svg>
                                </span>
                                Download App
                              </a> */}
                            <a href="https://h5.vshowapi.com/guild/agency_invite/register/?inviter_id=29828616&c=poppo" className="bg-blue-600 text-white text-md font-normal flex items-center justify-center gap-2 btn-gradient w-fit px-4 py-2 rounded-lg">
                                <span className="w-5 h-5 inline-block ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                                <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"/>
                              </svg>
                                </span>
                                Become an Agency
                              </a>
                        </div>
    </div>
    </>
  )
}

export default becomePoppoAgent;
