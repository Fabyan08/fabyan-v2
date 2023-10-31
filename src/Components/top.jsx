import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the user scrolls, check the scroll position.
      // You can adjust the value (e.g., 100) to control when the button appears.
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${
        showButton ? "block" : "hidden"
      } md:flex z-[999999] hidden bg-primary/40 backdrop-blur-lg shadow-md text-white w-10 h-10 rounded-full right-12 bottom-12 fixed items-center justify-center text-2xl`}
    >
      <a href="#" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </a>
    </div>
  );
}

export default BackToTopButton;
