'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AppsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(2); // POPPO expanded by default
  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = [
    {
      title: 'HONEYCAM',
      heading: 'HONEYCAM',
      description: 'Discover the world of fun and non-stop entertainment.',
      agentBtnText:'HoneyCam Agent',
      agentBtnURL:'https://lhtalentagency.com/join-honeycam-agency',
      bgimg: '/honeycam-bg.png',
      imgUrl: '/Apply-nowPage/honeycam-logo.png',
    },
    {
      title: 'CHAMET',
      heading: 'CHAMET APP',
      description: 'Build great connections without language barriers.',
      hostBtnText:'Chamet Host',
      hostBtnURL:'https://chametappagency.com/#host',
      agentBtnText:'Chamet Agent',
      agentBtnURL:'https://chametappagency.com/#agent',
      bgimg: '/chamet-bg.webp',
      imgUrl: '/Chamet-Live.webp',
  },
    {
      title: 'POPPO LIVE',
      heading: 'POPPO LIVE',
      description: 'Make live-streaming and group interactions playful.',
      hostBtnText:'Poppo Host',
      hostBtnURL:'/blogs/become-poppo-live-host-and-earn-money',
      agentBtnText:'Poppo Agent',
      agentBtnURL:'https://poppoagencyregistration.com/register/become-poppo-agent',
      bgimg: '/poppo-bg.webp',
      imgUrl: '/Poppo-Live.webp',
    },
    {
      title: 'NIKI LIVE',
      heading: 'NIKI LIVE',
      description: 'A fun live-streaming application with a global reach.',
      hostBtnText:'Niki Host',
      hostBtnURL:'https://nikiliveagent.com/#host',
      agentBtnText:'Niki Agent',
      agentBtnURL:'https://nikiliveagent.com/#agent',
      bgimg: '/niki-bg.webp',
      imgUrl: '/Niki-live.webp',
    },
    {
      title: 'JOYO LIVE',
      heading: 'JOYO LIVE',
      description: 'A streaming app exclusively designed for the Indian audience.',
      hostBtnText:'Joyo Host',
      hostBtnURL:'https://joyoliveagent.com/#host-registration',
      agentBtnText:'Joyo Agent',
      agentBtnURL:'https://joyoliveagent.com/#agency-registration',
      bgimg: '/joyo-bg.png',
      imgUrl: '/Apply-nowPage/joyo-logo.png',
    },
    
  ];

  return (
    <div className="w-full lg:w-[80%] 2xl:w-[100%] mx-auto px-2 py-12">
      <div id="accordion" className="flex flex-col md:flex-row items-stretch h-[45rem] md:h-[30rem] lg:h-[25rem] 2xl:h-[30rem] rounded-3xl overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`accordion-item flex-1 relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out border-y-[1px] border-x-0 lg:border-x-[1px] lg:border-y-0 border-transparent last:border-t-[1px] lg:last:border-[0px] lg:last:border-l-[1px] first:border-b-[1px] lg:first:border-r-[1px] lg:first:border-l-[0px] lg:first:border-b-[0px] ${
              activeIndex === index ? 'flex-[5] md:flex-[7]' : 'flex-1'
            }`}
            onMouseEnter={() => toggleAccordion(index)}
            onMouseLeave={() => toggleAccordion(index)}
          >
            <div className="relative w-full h-full">
              <Image src={section.bgimg} alt={`Image ${index + 1}`} className="w-full h-full object-cover" width={1000} height={1000} />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
            
              <h3
                className={`text-2xl md:text-3xl font-semibold whitespace-nowrap tracking-wide transition-all delay-100 duration-0 md:rotate-[270deg]
                ${
                  activeIndex === index ? 'opacity-0' : 'opacity-100 mt-[275px] md:mt-[300px]'
                }
                `}
                style={{
                  marginTop: activeIndex !== index && index === 0 && isMobile ? '220px' : ''
                }}
              >
                {section.title}
              </h3>
              <Image src={section.imgUrl} alt={`${section.title} - Logo`} width={65} height={65} className={`h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl absolute left-6 md:bottom-8 md:left-auto transition-all delay-0 duration-100 ${
                  activeIndex === index ? 'opacity-0' : 'opacity-100'
                }`} />

              <div
                className={`detail-content text-center transition-all delay-100 duration-100 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image src={section.imgUrl} alt={`${section.title} - Logo`} width={65} height={65} className="h-16 w-16 rounded-xl mx-auto mb-2" />
                <h4 className="text-xl md:text-2xl font-semibold">{section.heading}</h4>
                <p className="mt-2 text-base lg:text-lg px-4">{section.description}</p>
                <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  {section.hostBtnText && (
                    <a href={section.hostBtnURL} className="px-4 py-2 bg-transparent border-[1px] border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl" aria-label={`Become ${section.hostBtnText}`}>       
                        Become {section.hostBtnText}
                    </a>
                  )}
                  <a href={section.agentBtnURL} className="px-4 py-2 bg-transparent border-[1px] border-[#FFE9DF] hover:bg-[#FFE9DF] hover:text-[#DE0400] transition duration-300 rounded-3xl" aria-label={`Become ${section.agentBtnText}`}>
                    Become {section.agentBtnText}
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsAccordion;
