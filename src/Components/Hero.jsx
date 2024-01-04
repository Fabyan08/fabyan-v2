import AOS from "aos";
import "aos/dist/aos.css";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);
  return (
    <>
      <div id="home" className="relative">
        <div
          style={{
            transform: `translateX(${translateX}px) rotate(${translateY}deg) translateY(${translateY}px)`,
          }}
        >
          <div className="pt-96">
            <img
              loading="lazy"
              src="/images/spread2.png"
              data-aos="fade-up"
              data-aos-duration="2000"
              className="absolute -z-20 -right-10 md:-right-40 blur-md  md:w-[600px] w-40 transition-transform duration-1000 ${
               bottom-0"
              alt=""
            />
          </div>
          <img
            loading="lazy"
            src="/images/vector2.png"
            className="absolute left-24 hidden md:flex -top-12"
            alt=""
          />
          <img
            loading="lazy"
            src="/images/vector1.png"
            className="absolute hidden md:flex right-40"
            alt=""
          />
          <img
            loading="lazy"
            src="/images/rounded.png"
            className="absolute bottom-6 md:-bottom-96 -z-10 md:ml-80  moving-rounded-image"
            alt=""
            onMouseMove={handleMouseMove}
          />
          <img
            loading="lazy"
            src="/images/rounded2.png"
            className="absolute top-0 -z-10 ml-40 right-0  moving-rounded-image"
            alt=""
            onMouseMove={handleMouseMove}
          />
        </div>
        <div className="relative -mt-96">
          <img
            loading="lazy"
            src="/images/kotak.png"
            className="absolute -top-5 md:bottom-0 custom-rotate left-12"
            alt=""
            // onMouseMove={handleMouseMove}
          />
          <img
            loading="lazy"
            src="/images/spread2.png"
            data-aos="fade-down"
            data-aos-duration="2000"
            className="absolute  -z-20 blur-md -left-10 md:-left-40 md:w-[600px] w-40 transition-transform duration-1000 "
            alt=""
          />

          <img
            loading="lazy"
            src="/images/segit.png"
            className="absolute -top-16 md:top-12 custom-rotate right-6 md:left-80"
            alt=""
            // onMouseMove={handleMouseMove}
          />
          <img
            loading="lazy"
            src="/images/segit.png"
            className="absolute -bottom-20 md:bottom-20 custom-rotate right-80 "
            alt=""
            // onMouseMove={handleMouseMove}
          />

          {/* <div className="relative"> */}
          <img
            loading="lazy"
            src="/images/vect3.png"
            className="ml-2 -z-10 animate-[wiggle_1s_ease-in-out_infinite] md:bottom-0 right-0 -bottom-40  absolute"
            alt=""
          ></img>

          <div
            className="flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              loading="lazy"
              src="/images/role.png"
              className="w-80 xl:w-[800px]"
              alt=""
            />
          </div>
          <div
            className="flex items-center -mt-10 md:-mt-32 justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              loading="lazy"
              src="/images/head.png"
              className="w-[800px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
