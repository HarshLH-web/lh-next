'use client';
import Image from 'next/image';
import Link from 'next/link';
    import  { useState } from 'react';
    import { useRouter } from 'next/navigation';

function Footer() {
 
  // Add state for search input
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/blogs?tag=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <footer className="bg-[#0B0B0B] text-white pt-10 pb-5 lg:border-b-4 border-[#DE0402] mt-32">
      <div className="w-full lg:w-[95%] max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:justify-center gap-8 px-6">
        {/* Contact Section - First on mobile */}
        <div className='order-1 lg:order-3 text-center relative lg:w-[30%]'>
        <div className="bg-[#DE0402] lg:p-9 xl:p-12 rounded-3xl lg:rounded-b-none lg:rounded-t-[2.5rem] -mt-24 md:-mt-20 pt-20 lg:absolute bottom-[-61px] h-[27rem]">
            <Link href="/"><Image 
            src="/logo.png" 
            alt="LH Talent Agency - Logo"
            className="h-40 w-40 absolute left-1/2 -translate-x-1/2 -top-44 lg:-top-20 bg-white rounded-full p-2"
            width={1000}
            height={64}
            /></Link>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 mt-6 lg:mt-12">Contact Us</h3>
          <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
  
          <div className="flex items-center justify-center space-x-3 mb-2 hover:opacity-90 transition-opacity border-2 border-white rounded-full py-2 px-4 w-fit mx-auto">
            <span className="px-1 rounded-full">

              <Image src="/wa-icon.svg" alt="Whatsapp" className="w-8 h-8" width={32} height={32} />
            </span>
            <a 
              href="https://api.whatsapp.com/send/?phone=7065384660&text&type=phone_number&app_absent=0" 
              className="text-white text-lg font-semibold"
              aria-label="Call us at +91 7065384660"
            >
              +91 7065384660
            </a>
            
          </div>
          <div className="flex items-center justify-center mb-2 hover:opacity-90 transition-opacity py-2 w-fit mx-auto space-x-1">
          <span className="rounded-full min-w-8">
              <Image src="/email.png" alt="Whatsapp" className="w-8 h-8" width={32} height={32} />
            </span>
            <a 
              href="mailto:support@lhtalentagency.com" 
              className="text-white font-semibold text-base"
            >
              support@lhtalentagency.com
            </a>
          </div>
          <div className=" mb-6 flex items-center justify-center text-white relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-[90%] lg:w-full pl-4 py-3 rounded-full border-2 border-white bg-[#de0402] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}


            />
            <button 
              onClick={handleSearch}
              className=" border-2 border-white text-white bg-[#DE0402] hover:scale-110 transition-all duration-300 p-[6px] rounded-full absolute right-[23px] lg:right-[8px]"
              aria-label="Search"
            >
              <Image src="/arrow-white.svg" alt="" className='w-6 h-6' width={24} height={24} />
            </button>


          </div>

            <div className="w-full text-center absolute bottom-1 left-0 py-4 lg:bg-[#AD0303]">
              <div className="flex justify-center space-x-4">
                {[
                  { icon: '/fb-icon.png', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61557976949556' },
                  { icon: '/insta-icon.png', label: 'Instagram', href: 'https://www.instagram.com/lhtalentagency/' },
                  { icon: '/li-icon.svg', label: 'Twitter', href: 'https://www.linkedin.com/company/live-hosting-agency/' },
                  { icon: '/yt-icon.png', label: 'YouTube', href: 'https://www.youtube.com/channel/UCMJduDDm_mOpsPQI9AD0Wlw' }
                ].map(({ icon, label, href }) => (
                  <a 
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-transform duration-300"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src={icon}
                      alt={label}
                      className="w-8 h-8"
                      width={1000}
                      height={40}
                    />
                  </a>
                ))}
              </div>
            </div>
        </div>
        </div>

        {/* Quick Links Section - Second on mobile */}
        <div className="order-2 lg:order-1 lg:pb-12 whitespace-nowrap lg:w-[30%]">
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <div className="w-6 h-0.5 bg-white mx-2 mb-4"></div>
          <div className="flex flex-col lg:flex-row md:gap-4 xl:gap-16 justify-start lg:pr-8 xl:pr-16">
            <div className="space-y-2 flex flex-col">
              <Link href="/" className="text-gray-400 block md:inline transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300">Home</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/about-talent-agency" className="text-gray-400 block md:inline transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300">About Us</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/blogs" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Blogs</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/become-an-agent" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Become Agent</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/become-live-streamer" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Become Streamer</Link>
              <div className="h-px bg-[#242424] lg:hidden"></div>
            </div>
            <div className="space-y-2 flex flex-col mt-2 lg:mt-0">
              {/* <a href="/register-influencer" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Register as Influencer</a>
              <div className="h-px bg-[#242424]"></div> */}
              <Link href="/live-streaming-tips" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Streaming Tips</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/asked-questions" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">FAQs</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/customer-support" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Support</Link>
              {/* <div className="h-px bg-[#242424]"></div>
              <Link href="/streaming-tips" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Streaming Tips</Link> */}
            </div>
          </div>
        </div>

        {/* Blog Links Section - Third on mobile */}
        <div className="order-3 lg:order-2 pb-12 whitespace-nowrap lg:w-[30%]">
          <h3 className="text-2xl font-semibold mb-2">Blog</h3>
          <div className="w-6 h-0.5 bg-white mx-2 mb-4"></div>

          <div className="space-y-2 flex flex-col lg:max-w-[80%]">
              <Link href="/blogs/tango-agency-registration" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">How to become agent in Tango Live</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/blogs/how-to-earn-money-on-poppo-live-beginner-guide" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">How to earn money on Poppo Live</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/blogs/how-poppo-app-agency-earn-money" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Poppo Agent Commission</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/blogs/poppo-live-agency-benefits" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">Poppo Live Agency Benefits</Link>
              <div className="h-px bg-[#242424]"></div>
              <Link href="/blogs/how-to-trade-coins-in-poppo-live" className="text-gray-400 transform hover:translate-x-2 hover:text-[#ff2e2b] transition duration-300 block md:inline">How to trade coins in Poppo Live</Link>
            </div>
        </div>
      </div>

      {/* Copyright and Social Links - Last on both mobile and desktop */}
      <div className="border-t border-gray-800 pt-4 text-center lg:text-left lg:pl-[20%] order-4">
        <p className="text-sm text-gray-500">
          &copy; 2025 LH Talent Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;