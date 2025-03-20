// import React from 'react'
'use client';
import axios from 'axios';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";
import { useRouter } from 'next/router';
import Image from 'next/image';

const BreadcrumbSchema = 
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://lhtalentagency.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Blogs",
    "item": "https://lhtalentagency.com/blogs"  
  }]
}


function Blogs() {

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { query } = router;


  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const tagParam = query.tag || null;  // Get the 'tag' parameter from the query
        
        // Fetch blogs from the API
        const response = await axios.get('https://webpanel.store/api/blogs');
        
        // Filter blogs if tag parameter exists and only include those with toPublish as true
        const filteredBlogs = response.data.filter(blog => blog.toPublish).filter(blog => 
          tagParam 
            ? blog.tags.some(tag => 
                tag.toLowerCase().includes(tagParam.toLowerCase()) ||
                tagParam.toLowerCase().includes(tag.toLowerCase())
              )
            : true
        );
        
        setBlogs(filteredBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogs();
  }, [query]);  // Only depend on query


    // Array of predefined background colors
    const bgColors = ["bg-[#FFEDE0]", "bg-[#E0F7FA]", "bg-[#E8F5E9]", "bg-[#FFF3E0]", "bg-[#EBF8C1]"];

  return (
    <>
    <Head>
      <title>LH Talent Agency Blog: Tips for Streamers</title>
      <meta name="description" content="LH Talent Agency's blog page provides you with all the needed information with updated details, insights, and tips about the live streaming industry. Explore Now!" />
      <meta name="keywords" content="Explore the opportunities in the live streaming industry, Step-by-step Guide to become a streaming agent, Guide for creating agency as a streamer" />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://lhtalentagency.com/blogs" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="LH Talent Agency Blog: Tips for Streamers" />
      <meta property="og:description" content="LH Talent Agency's blog page provides you with all the needed information with updated details, insights, and tips about the live streaming industry. Explore Now!" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lhtalentagency.com" />
      <meta property="twitter:url" content="https://lhtalentagency.com/blogs" />
      <meta name="twitter:title" content="LH Talent Agency Blog: Tips for Streamers" />
      <meta name="twitter:description" content="LH Talent Agency's blog page provides you with all the needed information with updated details, insights, and tips about the live streaming industry. Explore Now!" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/e04db76e-b344-45d3-a4fd-bfcc6a3bb231.jpg?token=wthbG12ZawSlhgRHgv7eK3o8ISBCVVFjtJJJjz_EZl4&height=650&width=1200&expires=33277340250" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://lhtalentagency.com/blogs" />
      <script type="application/ld+json">
        {JSON.stringify(BreadcrumbSchema)}
      </script>
    </Head>
    <div className='blog-bg'>
      <h1 className='text-white text-4xl lg:text-6xl font-bold uppercase'>Blogs</h1>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-4 mx-auto mt-8 lg:mt-16 mb-48 lg:mb-44 w-[90%] max-w-7xl'>
      {isLoading ? (
        <p className="col-span-full text-center text-lg text-gray-600">Loading...</p>
      ) : blogs.length > 0 ? blogs.map((blog) => (
        <div key={blog._id} className='rounded-lg overflow-hidden'>
         <Link href={`/blogs/${blog.slug}`} key={blog._id} className="block">

          <div>
            <Image src={blog.coverImage} alt={blog.title} className='w-full h-52 object-cover' width={1000} height={1000} />
          </div>
          <div key={blog._id} className='bg-white border border-gray-200 cursor-pointer p-4 rounded-b-lg shadow-md'>
            <div className='flex items-center justify-start gap-2 mb-2 flex-wrap'>
              {blog.tags.map((tag, index) => {
                const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
                return <p key={index} className={`text-xs text-[#DE0402] font-medium ${randomBg} px-3 py-1 rounded-full`}>{tag}</p>
              })}
            </div>
            <h2 className='text-xl lg:text-2xl font-semibold'>{blog.title}</h2>
            {/* {const formattedDate = format(new Date(blog.createdAt), 'MMMM d, yyyy')} */}
            <p className='text-sm font-medium text-[#D24F4F] my-1'>By {blog.author} on {format(new Date(blog.updatedAt), 'MMMM dd, yyyy')}</p>
            <p className='text-base text-[#00000080]'>{blog.coverText.length > 80 ? `${blog.coverText.substring(0, 80)}....` : blog.coverText}</p>
          <button className='bg-white hover:bg-[#DE0402] text-[#DE0402] hover:text-white border-[2px] transition-all duration-300 border-[#DE0402] px-4 py- rounded-full mt-3'>Read More</button>
          </div>

          </Link>
        </div>
        )) : <p className="col-span-full text-center text-lg text-gray-600">No blogs found</p>}

    </div>
    </>
  )
}

export default Blogs