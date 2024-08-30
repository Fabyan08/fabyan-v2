import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { LuNewspaper } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="hidden lg:flex  justify-center relative z-40">
        <div className="fixed bg-white/20 border-2 border-slate-200/50 backdrop-blur-sm px-4 py-2   mt-4 w-fit h-fit rounded-3xl">
          <ul className="flex gap-10 text-md font-bold py-2 text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed md:hidden lg:flex lg:right-[60px] rotate-12 hover:rotate-0 duration-150 hover:scale-110">
          <hr className="border-2 border-white h-20 rounded-full right-20 " />
        </div>
        <Link
          to={"/cv"}
          className="fixed z-[999] animate-bounce left-0 bg-primary p-2 text-white rounded-br-lg  border-r-4 border-b-4 border-white font-semibold top-0"
        >
          My CV
        </Link>
        <div className="relative">
          <div className="fixed rotate-12 right-4 top-6 hover:rotate-0 duration-150 hover:scale-110">
            <Link
              to="/blog"
              className="text-white hover:text-primary hover:bg-white hover:border-primary bg-primary border-4 border-white p-3 rounded-full font-bold"
            >
              My Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center">
        <div className="fixed top-0 z-[100]">
          <div className="bg-gradient-to-r from-[#9dceff] to-primary p-2 rounded-b-3xl border-b-4 border-l-4 border-r-4 border-white">
            <Link
              to={"/blog"}
              className="text-white flex items-center gap-2 font-bold text-2xl"
            >
              Blog <FaArrowRight className="-rotate-[40deg]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex lg:hidden items-center px-4 justify-between rounded-full border-t-2 border-white bg-[#9dceff]/50 backdrop-blur-xl w-[95%] h-16 fixed bottom-4 z-[999] text-white">
          <a href="#">
            <GoHome
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>
          <a href="#about">
            <FaUserAlt
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>
          <a href="#portfolio">
            <MdOutlineWeb
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>
          <Link
            to={"/blog"}
            className="-mt-10 bg-primary p-2 border-2 border-second text-white rounded-full"
          >
            <TfiWrite
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </Link>
          <a href="#experience">
            <GrUserWorker
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>{" "}
          <a href="#certificate">
            <LuNewspaper
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>{" "}
          <a href="#contact">
            <FaPhone
              className="hover:text-primary hover:-translate-y-2"
              size={20}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
