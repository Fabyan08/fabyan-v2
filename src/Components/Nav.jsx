import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineWebAsset } from "react-icons/md";
import { GiPapers } from "react-icons/gi";
import { RiFilePaperLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
const Nav = () => {
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);
  return (
    <>
      <div className="">
        {/* <img src="/images/bg.png" className="absolute left-0 -z-10" alt="" /> */}
        <div className="absolute   -z-20 md:w-full md:ml-40 w-[900px]">
          <div className="relative ">
            <div className="absolute  z-20 bg-gradient-to-r from-white w-96 h-full"></div>
            <div className="absolute  z-20 bg-gradient-to-t from-white w-full h-full"></div>
            <div className="absolute  z-20 bg-gradient-to-l from-blue-100   w-full h-full"></div>
            <img
              src="/images/bgfull.png"
              alt=""
              className="relative hidden lg:flex -z-10  w-full  h-full "
            />
          </div>
        </div>

        <nav
          data-aos="fade-down"
          data-aos-duration="1000"
          className="fixed  z-40 hidden md:flex container items-center justify-center py-5"
        >
          <div className="bg-white/30 text-slate-400 font-semibold hover:shadow-xl border-2 duration-150 border-primary/10 w-fit py-4 px-5 rounded-full backdrop-blur-sm">
            <ul className="flex space-x-10">
              <li className="hover:bg-white/20 hover:backdrop-blur-md hover:text-primary hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#home">Home</a>
              </li>
              <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#about">About Me</a>
              </li>
              <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#experience">Experience</a>
              </li>
              <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#certificate">Certificate</a>
              </li>
              <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* <div>
          <a
            className="bg-blue-300 text-white p-2 rounded-full text-center"
            href=""
          >
            Connect!
          </a>
        </div> */}
          <div className="absolute md:hidden lg:flex lg:right-52 rotate-12 hover:rotate-0 duration-150 hover:scale-110">
            <hr className="border-2 border-white h-40 rounded-full right-20 " />
          </div>
          <div className="absolute md:hidden lg:flex lg:right-40 rotate-12 hover:rotate-0 duration-150 hover:scale-110">
            <Link
              to="/blog"
              className="text-white hover:text-primary hover:bg-white hover:border-primary bg-primary border-4 border-white p-3 rounded-full font-bold"
            >
              My Blog
            </Link>
          </div>
        </nav>

        {/* <div className="md:hidden fixed bottom-12 space-x-8  z-40  flex justify-center  items-center bg-white/30 backdrop-blur-lg">
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-110 hover:rounded-lg h-5 w-5 hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-110 hover:rounded-lg h-5 w-5 hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </div> */}

        <div className="md:hidden flex justify-center relative z-40 ">
          <div className="btm-nav fixed mb-10 mx-auto border-primary/30 shadow-sm border-2 rounded-full px-5 bg-white/40 backdrop-blur-2xl text-primary w-fit space-x-10">
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110 hover:rounded-lg h-5 w-5 hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            <a href="#about">
              <BiUser className="hover:scale-110 hover:rounded-lg hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 " />
            </a>

            <a href="#portfolio">
              <MdOutlineWebAsset className="hover:scale-110 hover:rounded-lg hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 " />
            </a>
            <a href="#experience">
              <GiPapers className="hover:scale-110 hover:rounded-lg hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 " />
            </a>
            <a href="#certificate">
              <RiFilePaperLine className="hover:scale-110 hover:rounded-lg hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 " />
            </a>
            <a href="#contact">
              <AiOutlinePhone className="hover:scale-110 hover:rounded-lg hover:bg-white/70 hover:p-2 backdrop-blur-md hover:w-8  hover:h-8 " />
            </a>
          </div>
        </div>
        <Link
          to="/blog"
          className="fixed bottom-40 md:hidden  z-[999999] -right-5 bg-primary/90 shadow-sm backdrop-blur-lg text-white w-24 p-2 rounded-lg flex items-center "
        >
          <HiOutlinePencil className="mr-2" /> Blog
        </Link>
      </div>
    </>
  );
};

export default Nav;
