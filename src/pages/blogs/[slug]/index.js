'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import DOMPurify from 'dompurify';
// import BlogForm from "../components/BlogForm";
import Head from "next/head";
function BlogDetailPage() {
    const { slug } = useParams();
    const searchParams = useSearchParams();
    const [blog, setBlog] = useState(null);
    // const [metaKeywords, setMetaKeywords] = useState([]);
    const [tableOfContents, setTableOfContents] = useState([]);
    const [isTocOpen, setIsTocOpen] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const someQueryParam = searchParams.get('someQueryParam'); // Example of getting a query parameter
                const response = await axios.get(`https://webpanel.store/api/blogs/${slug}`);
                setBlog(response.data);
                
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data.content, 'text/html');
                const headings = Array.from(doc.querySelectorAll('h2, h3'));
                
                const toc = headings.map((heading, index) => {
                    // Create a unique ID based on the heading text
                    const cleanText = heading.textContent
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)/g, '');
                    return {
                        id: `heading-${cleanText}-${index}`,
                        text: heading.textContent.replace(/^\d+\.?\s*/, ''), // Remove leading numbers
                        originalText: heading.textContent,
                        level: heading.tagName.toLowerCase(),
                    };
                });
                
                setTableOfContents(toc);
            } catch (error) {
                console.error('Error fetching the blog:', error);
            }
        };

        fetchBlog();
    }, [slug, searchParams]);

    if (!blog) return <p>Loading...</p>;

    // Add IDs to the actual content
    let contentWithIds = blog.content;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentWithIds;

    tableOfContents.forEach((heading) => {
        // Find all matching headings
        const headingElements = tempDiv.querySelectorAll(heading.level);
        
        // Find the one that matches our text
        for (const element of headingElements) {
            if (element.textContent.trim() === heading.originalText.trim()) {
                element.innerHTML = `<span id="${heading.id}" style="scroll-margin-top: 150px; display: block;">${element.innerHTML}</span>`;
                break;
            }
        }
    });

    contentWithIds = tempDiv.innerHTML;

    // const IncreaseCount = () => {
    //     setCount(count + 1);
    // }

    // Initialize a counter for h2 headings outside the map function
    let h2Counter = 0;

    // console.log(blog.blogSchema)
    
    return (    
        <>
            <Head>
                <title>{blog.metaTitle} | LH Talent Agency</title>
                <meta name="description" content={blog.metaDescription} />
                {/* <meta name="robots" content="index, follow" /> */}
                <link rel="canonical" href={`https://lhtalentagency.com/blogs/${blog.slug}`} />
                <meta name="keywords" content={blog.metaKeywords.join(', ')} />
                <script type="application/ld+json">
                    {JSON.stringify(blog.blogSchema)}
                </script> 
                {/* <link rel="shortcut icon" href="lh-favicon.png" type="image/x-icon" /> */}
            </Head>
            <div id="blog-container" className="w-[90%] mx-auto mb-48 mt-7 lg:mt-16 lg:mb-44">
                <h1 className="text-3xl font-bold mb-4 text-center max-w-3xl mx-auto">{blog.title}</h1>
                <div className="w-full max-w-7xl mx-auto">
                    {tableOfContents.length > 0 && (
                        <div className="mb-4 lg:mb-8 mt-4 lg:mt-12 px-4 pt-1 pb-2 bg-gray-200 rounded-lg">
                            <p 
                                className="hidden font-semibold mb-2 pt-3 text-[#DE0400] cursor-pointer lg:flex items-center justify-between" style={{marginTop: '0',fontSize: '1.6rem'}}
                                onClick={() => setIsTocOpen(!isTocOpen)}
                            >
                                Table of Contents
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 min-w-6 ${
                                        isTocOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
                            </p>
                            <p 
                                className="lg:hidden font-semibold mb-2 pt-3 text-[#DE0400] cursor-pointer flex items-center justify-between" style={{marginTop: '0',fontSize: '1.3rem'}}
                                onClick={() => setIsTocOpen(!isTocOpen)}
                            >
                                Table of Contents
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 min-w-6 ${
                                        isTocOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
                            </p>
                            <nav
                                style={{ 
                                    maxHeight: isTocOpen ? '1000px' : '0', 
                                    overflow: 'hidden', 
                                    // paddingTop: isTocOpen ? '10px' : '0',
                                    paddingBottom: isTocOpen ? '10px' : '0',
                                    transition: 'max-height 0.4s ease' 
                                }}
                            >
                                {tableOfContents.map((heading) => {
                                    // Increment the counter only for h2 headings
                                    if (heading.level === 'h2') {
                                        h2Counter++;
                                    }


                                    return (
                                        <a
                                            key={heading.id}
                                            href={`#${heading.id}`}
                                            style={{
                                                color: 'black'
                                            }}
                                            className={`block mb-2 ${
                                                heading.level === 'h3' ? 'ml-4 lg:ml-6 text-sm lg:text-base' : 'text-base lg:text-lg font-medium'
                                            }`}
                                        >
                                            {heading.level === 'h3' ? (
                                                <span className="text-sm lg:text-base">
                                                    {heading.text}
                                                </span>
                                            ) : (
                                                <span className="text-base lg:text-lg font-medium">
                                                    {h2Counter}. {heading.text}
                                                </span>
                                            )}
                                        </a>
                                    )
                                })}
                            </nav>
                        </div>
                    )}

                    {/* {blog.formRequired && (
                        <div className="mb-4">
                            <BlogForm fields={blog.selectedFields} className="py-8 px-4 lg:px-6" />
                        </div>
                    )} */}
                    <div 
                        className="text-gray-700" 
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contentWithIds) }} 
                    />
                </div>
            </div>
        </> 
    );
}

export default BlogDetailPage