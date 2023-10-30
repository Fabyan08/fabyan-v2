import React, { useEffect, useState } from "react";
import "./style.css";

const Hero = () => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (event) => {
    const image = document.querySelector(".moving-rounded-image");
    const imageRect = image.getBoundingClientRect();

    const cursorX = event.clientX;
    const cursorY = event.clientY;

    // Calculate translateX and translateY based on the cursor position
    const newTranslateX = cursorX - imageRect.width / 2;
    const newTranslateY = cursorY - imageRect.height / 2;

    setTranslateX(newTranslateX);
    setTranslateY(newTranslateY);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollingDown = scrollPosition > 0; // Check if scrolling down

  return (
    <>
      <div id="home">
        <div
          style={{
            transform: `translateX(${translateX}px) rotate(${translateY}deg) translateY(${translateY}px)`,
          }}
        >
          <div className="pt-96">
            <img
              src="/images/spread2.png"
              className={`absolute -z-20 blur-md -left-10 md:-left-40 md:w-[600px] w-40 transition-transform duration-1000 ${
                isScrollingDown ? "bottom-0" : "top-0"
              }`}
              alt=""
            />
            <img
              src="/images/spread2.png"
              className={`absolute -z-20 -right-10 md:-right-40 blur-md  md:w-[600px] w-40 transition-transform duration-1000 ${
                isScrollingDown ? "top-0" : "bottom-0"
              }`}
              alt=""
            />
          </div>
          <img
            src="/images/vector2.png"
            className="absolute left-24 hidden md:flex top-0"
            alt=""
          />
          <img
            src="/images/vector1.png"
            className="absolute hidden md:flex right-40"
            alt=""
          />
          <img
            src="/images/rounded.png"
            className="absolute bottom-6 md:-bottom-96 -z-10 md:ml-40  moving-rounded-image"
            alt=""
            onMouseMove={handleMouseMove}
          />
          <img
            src="/images/rounded2.png"
            className="absolute top-0 -z-10 ml-40 right-0  moving-rounded-image"
            alt=""
            onMouseMove={handleMouseMove}
          />
        </div>
        <div className="relative -mt-96">
          <div className="flex items-center justify-center">
            <img src="/images/role.png" alt="" />
          </div>
          <div className="flex items-center -mt-10 md:-mt-32 justify-center">
            <img src="/images/head.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
