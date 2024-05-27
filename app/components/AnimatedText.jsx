import React, { useEffect, useRef } from "react";

const AnimatedText = ({ text }) => {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateText = () => {
    const wrapper = wrapperRef.current;
    const header = headerRef.current;
    wrapper.style.opacity = 1;
    const chars = Array.from(text).map((char, index) => ({
      char: char === " " ? "&nbsp;" : char,
      delay: index * 0.03,
    }));

    header.innerHTML = chars
      .map(
        ({ char, delay }) =>
          `<span class="char" style="animation-delay:${delay}s">${char}</span>`
      )
      .join("");
  };

  return (
    <div
      className="wrapper"
      ref={wrapperRef}
      style={{ opacity: 0, transition: "opacity 0.5s" }}
    >
      <h1 ref={headerRef}></h1>
    </div>
  );
};

export default AnimatedText;
