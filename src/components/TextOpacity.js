'use client';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = ({ text, className }) => {
  useEffect(() => {
    // Select the element after the component mounts
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((textElement) => {
      // Split the text into individual characters
      const chars = textElement.textContent.split("").map(char => `<span class="char">${char}</span>`).join("");
      textElement.innerHTML = chars; // Replace the text with span-wrapped characters

      // Use GSAP to animate each character
      gsap.from(textElement.querySelectorAll('.char'), {
        scrollTrigger: {
          trigger: textElement,
          start: "top 90%", // Trigger when the text comes into the view
          end: "top 40%", // When it is fully visible
          scrub: 3, // Smoothly follow the scroll
          markers: false, // Markers can be enabled for debugging
        },
        opacity: 0.2, // Start with opacity 0 (invisible)
        stagger: 0.05, // Stagger delay for each letter
        // ease: "power4.out", // Ease effect for smooth animation
      });
    });
  }, []); // Empty dependency array to ensure the effect runs once after mount

  return (
      <p className={`reveal-type ${className}`}>{text}</p>
  );
};

export default ScrollingText;

ScrollingText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
