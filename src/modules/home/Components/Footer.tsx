import city from "../../../../public/assets/image/city.svg";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import foto from "../../../../public/assets/image/foto.jpg";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary/40 w-full h-[500px] md:h-fit">
      <div className="bg-footer  relative bg-cover bg-center w-full h-[500px] md:h-fit">
        <div className="bg-gradient-to-b from-primary/20 h-[500px] md:h-fit to-white/40 mw">
          <div className="flex justify-center pt-10">
            <div className="bg-white/30 relative border-2 border-slate-white backdrop-blur-md md:w-3/4 h-96 md:h-60 rounded-3xl p-4">
              <div className="md:flex items-center gap-6">
                <img src={foto} className="w-40 rounded-full" alt="" />
                <div className="text-slate-700 mt-4 bg-white/30 backdrop-blur-md p-3 rounded-xl font-semibold text-lg">
                  <h1 className="text-xl">Contact me via</h1>
                  <div className="flex items-center space-x-2  hover:scale-110 duration-150 hover:underline">
                    <h1>
                      <BiLogoGmail />
                    </h1>
                    <a
                      href="mailto:yastikafabyan2005@gmail"
                      target="_blank"
                      rel="noreferrer"
                    >
                      yastikafabyan2005@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2  hover:scale-110 duration-150 hover:underline">
                    <h1>
                      <AiOutlineInstagram />
                    </h1>
                    <h1>
                      <a href="https://www.instagram.com/fabyannnn_">
                        @fabyannnn_
                      </a>
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2  hover:scale-110 duration-150 hover:underline">
                    <h1>
                      <AiOutlineInstagram />
                    </h1>
                    <h1>
                      <a href="https://www.instagram.com/kodingbareng_">
                        {" "}
                        @kodingbareng_
                      </a>
                    </h1>
                  </div>
                  <img
                    loading="lazy"
                    src="/images/best.jpg"
                    className="rounded-xl absolute -right-44 md:-right-12 bottom-0 -z-10 w-[725px]"
                    alt=""
                  />
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/fabyan-yastika-permana/"
                target="_blank"
                className="bg-primary/20 gap-2 w-fit px-4 text-slate-800 font-semibold h-14 rounded-tl-lg flex items-center justify-center absolute bottom-0 border-4 border-white right-0 rounded-br-lg"
              >
                <CiLinkedin />
                <h1>Connect With Me!</h1>
              </a>
            </div>
          </div>
          <img
            src={city}
            className="w-full hidden md:flex -mt-40 object-cover object-center"
            alt="City"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
