import Image from "next/image";

const Testimonials = () => {
    // Example data for testimonials
    const testimonials = [
  
      {
        name: "Samridhi",
        text: "Joining LH Talent Agency was the turning point in my streaming journey. Their supportive team will resolve all your concerns.",
        image: "/samridhi.png", // Add image URL here if available
      },
      {
        name: "Eva",
        text: "I started live streaming as a hobby, and one of my Poppo friends told me about LH. I immediately requested to join them. Today, I manage my 9-5 job as a professional and a streaming career to earn a passive income. Thanks to LH Talent Agency for all the provided resources.",
        image: "/eva.png", // Add image URL here if available
      },
      {
        name: "Saleja",
        text: "I was confused about whether to join an agency or not. I started live-streaming independently and soon realized I would need some extra support. I started researching a lot and finally joined LH Talent Agency. Since then I have been grateful for the agency’s guidance and support. I have grown a lot personally and professionally.",
        image: "/saleja.png", // Add image URL here if available
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-between lg:gap-8">
        {/* Left Section */}
        <div className="md:w-3/5 mb-8 md:mb-0 text-center">
          <h3 className="text-[#DE0402] text-xl lg:text-3xl font-semibold">TESTIMONIAL</h3>
          <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-extrabold mb-4 capitalize">
            What <span className="text-[#DE0402]">Our <br /> Clients</span> Say
          </h2>
          <p className="text-base lg:text-lg max-w-2xl text-gray-500 mx-auto font-medium">Some of our amazing happy hosts share their experiences and send smiles.</p>
        </div>
  
        {/* Right Section */}
        <div className="md:w-3/5 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start p-4 border rounded-3xl shadow-xl lg:shadow-none hover:shadow-xl transition-shadow duration-300 border-gray-300 group relative"
            >
              <div className="absolute top-2 right-4 lg:hidden ml-auto text-4xl text-[#DE0402] transition-all duration-300 lg:text-gray-500 group-hover:text-[#DE0402] group-hover:scale-110">
                ❞
                </div>
              {/* Image Circle */}
              <div className="min-w-20 h-20 rounded-full mx-auto mt-2 lg:mt-0 lg:mr-4 lg:m-auto">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - Host`}
                    className="w-full h-full object-cover rounded-full"
                    width={1000}
                    height={80}
                  />
                ) : (
                  <span className="block w-full h-full"></span>
                )}
              </div>
  
              {/* Testimonial Content */}
              <div className="text-center lg:text-left pt-4 lg:pt-0">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
  
              {/* Quotation Mark */}
              <div className="hidden lg:block ml-auto text-4xl text-[#DE0402] transition-all duration-300 lg:text-gray-500 group-hover:text-[#DE0402] group-hover:scale-110">
              ❞
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  