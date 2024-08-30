import { GrFormNext } from "react-icons/gr";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
import { CiLocationArrow1 } from "react-icons/ci";

// import { FreeMode, Pagination } from "swiper/modules";

// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// Image
import kodbar from "../../../../public/assets/image/portfolio/kodbar.png";
import logo1 from "../../../../public/assets/image/portfolio/kodbar-logo.png";
import autolearn from "../../../../public/assets/image/portfolio/autolearn.png";
import autolearnlogo from "../../../../public/assets/image/portfolio/logo-svg/autolearn-logo.svg";
import courselab from "../../../../public/assets/image/portfolio/courselab.png";
import courselablogo from "../../../../public/assets/image/portfolio/logo-svg/courselab-logo.svg";
import depublic from "../../../../public/assets/image/portfolio/depublic.png";
import depubliclogo from "../../../../public/assets/image/portfolio/logo-svg/depublic-logo.svg";
import digitalin from "../../../../public/assets/image/portfolio/digitalin.png";
import digitalinlogo from "../../../../public/assets/image/portfolio/logo-svg/digitalin-logo.svg";
import ems from "../../../../public/assets/image/portfolio/ems.png";
import emslogo from "../../../../public/assets/image/portfolio/logo-svg/ems-logo.svg";
import haifren from "../../../../public/assets/image/portfolio/haifren.png";
import haifrenlogo from "../../../../public/assets/image/portfolio/logo-svg/haifren-logo.svg";
import tripjoy from "../../../../public/assets/image/portfolio/tripjoy.png";
import tripjoylogo from "../../../../public/assets/image/portfolio/logo-svg/tripjoy-logo.svg";
import vtri from "../../../../public/assets/image/portfolio/v3.png";
import vtrilogo from "../../../../public/assets/image/portfolio/logo-svg/v3-logo.svg";

import uis from "../../../Constant/Portfolio/Uis";
// Tech

import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative w-screen lg:w-full py-10   bg-gradient-to-tr  from-primary/30 min-h-screen"
    >
      {" "}
      <div className=" mw items-center justify-between flex relative">
        <div>
          <div className="bg-gradient-to-r from-primary/60 to-slate-100/40 rounded-sm w-80 h-10 absolute -z-10 -rotate-[5deg] mt-2"></div>
          <h1 className="font-bold text-2xl pt-4 text-slate-700 lg:text-6xl">
            👨🏻‍💻My Highlight Portfolio
          </h1>
        </div>
        <a
          href="/portfolio"
          className="flex text-primary text-lg xl:text-4xl font-bold items-center"
        >
          <h1>All</h1>
          <GrFormNext className="text-primary" />
        </a>
      </div>
      <div className="mw pt-10 ">
        <div className="flex flex-col lg:flex-row ml-20 lg:ml-0 items-center gap-4">
          <div className="flex flex-col -ml-52 lg:ml-0 ">
            <h1 className="text-primary font-bold">WEBSITE</h1>
            <h1 className="text-slate-700 text-xl text-nowrap">
              Website Development
            </h1>
          </div>
          <style>
            {`
              .swiper-pagination-bullet-active {
                background: #F7EFE5; 
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 40px;
                width: 30px;
              }
              .swiper-pagination-bullet {
                background: #0C359E; 
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 40px;
                {/* width: 30px; */}
              }
            `}
          </style>
          <div className="flex lg:mw w-screen items-center gap-10">
            <Swiper
              breakpoints={{
                // when window width is <= 640px
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                // when window width is > 640px
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              // slidesPerView={2.5}
              // spaceBetween={30}
              initialSlide={1.5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-[1170px]"
            >
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Business Project</h1>
                  </div>
                  <img
                    src={digitalin}
                    alt="Digitalin Aja"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={digitalinlogo}
                        alt="Digitalin Aja"
                        className="w-10"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Digitalin Aja
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Software House</b> - The official website for
                        ordering cheap custom software according to your needs.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <FaLaravel />
                        <SiTailwindcss />
                        <FaPhp />
                        <SiMysql />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-500  w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={kodbar}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={logo1} alt="Koding Bareng" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Koding Bareng
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Coding Community</b> - This is a website that I
                        created to build a community in the IT field.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://kodingbareng.vercel.app"
                    target="_blank"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={vtri}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={vtrilogo}
                        alt="Koding Bareng"
                        className="w-10"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        V3 Fabyan
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>My 3 Verse</b> - The third version of my portfolio
                        website is 3d-themed with lots of interaction.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://v3.fabyanyastika.my.id"
                    target="_blank"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img src={tripjoy} alt="Tripjoy" className="rounded-t-lg" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={tripjoylogo}
                        alt="Tripjoy"
                        className=" bg-slate-400 p-2 w-24"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-slate-700 to-slate-400 inline-block text-transparent bg-clip-text font-bold">
                        Tripjoy
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Tourism Website</b> - This is a a portfolio website
                        for tourism website that using modern tech.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <TbBrandNextjs />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://tripjoy.vercel.app"
                    target="_blank"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img src={haifren} alt="Haifren" className="rounded-t-lg" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={haifrenlogo}
                        alt="Haifren"
                        className="w-14 p-2 bg-slate-800"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-yellow-300 to-orange-200 inline-block text-transparent bg-clip-text font-bold">
                        Haifren
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Startup Website</b> - Building my startups from 0 to
                        bringing idols and fans closer together
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                        <FaLaravel />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://haifren.vercel.app"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={courselab}
                    alt="Courselab"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={courselablogo}
                        alt="Courselab"
                        className="w-10"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-slate-700 to-green-700 inline-block text-transparent bg-clip-text font-bold">
                        Courselab
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Project</b> - This is a Customer website project to
                        create a modern design landing page
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                        <SiTailwindcss />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://courselab.vercel.app/"
                    target="_blank"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img src={depublic} alt="Depublic" className="rounded-t-lg" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={depubliclogo} alt="Depublic" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-purple-600 to-purple-400 inline-block text-transparent bg-clip-text font-bold">
                        Depublic
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Portfolio</b> - Creating a mobile friendly website as
                        a portfolio with javascript.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                        <IoLogoFirebase />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Fabyan08/Depublic"
                    target="_blank"
                    className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2"
                  >
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={autolearn}
                    alt="Autolearn"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={autolearnlogo}
                        alt="Autolearn"
                        className="w-10"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Autolearn
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>AI Website</b> - The dashboard-shaped website uses
                        APIs from Open AI to build chatbots, translate, and
                        other references.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <FaLaravel />
                        <FaBootstrap />
                        <SiMysql />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-400  w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img src={ems} alt="EMS" className="rounded-t-lg" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={emslogo} alt="EMS" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        EMS
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Company Website</b> - Creation of a company website
                        for management and data storage needs.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <FaPhp />
                        <SiMysql />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-400 w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>{" "}
          </div>
        </div>
      </div>
      <div className="mw pt-10 ">
        <div className="flex flex-col lg:flex-row ml-20 lg:ml-0 items-center gap-4">
          <div className="flex flex-col -ml-52 lg:ml-0 ">
            <h1 className="text-primary font-bold">UI UX</h1>
            <h1 className="text-slate-700 text-xl text-nowrap">
              Slice Of My Design
            </h1>
          </div>
          <style>
            {`
              .swiper-pagination-bullet-active {
                background: #F7EFE5; 
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 40px;
                width: 30px;
              }
              .swiper-pagination-bullet {
                background: #0C359E; 
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 40px;
                {/* width: 30px; */}
              }
            `}
          </style>
          <div className="flex lg:mw w-screen items-center gap-10">
            {/* <Swiper
              breakpoints={{
                // when window width is <= 640px
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                // when window width is > 640px
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              // slidesPerView={2.5}
              // spaceBetween={30}
              initialSlide={1.5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-[1170px]"
            >
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={haifren}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={haifrenlogo}
                        alt="Koding Bareng"
                        className="w-10"
                      />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Koding Bareng
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Coding Community</b> - This is a website that I
                        created to build a community in the IT field.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={kodbar}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={logo1} alt="Koding Bareng" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Koding Bareng
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Coding Community</b> - This is a website that I
                        created to build a community in the IT field.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={kodbar}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={logo1} alt="Koding Bareng" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Koding Bareng
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Coding Community</b> - This is a website that I
                        created to build a community in the IT field.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80  lg:w-96 h-[400px] relative">
                  <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                    <h1>Personal Project</h1>
                  </div>
                  <img
                    src={kodbar}
                    alt="Koding Bareng"
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={logo1} alt="Koding Bareng" className="w-10" />
                      <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                        Koding Bareng
                      </h1>{" "}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg">
                        <b>Coding Community</b> - This is a website that I
                        created to build a community in the IT field.
                      </h1>
                      <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                        <SiTypescript />
                        <SiTailwindcss />
                        <FaReact />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                    <CiLocationArrow1 className="text-white text-7xl" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>{" "} */}
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              initialSlide={1.5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-[1170px] "
            >
              {uis.map((ui, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-80 lg:w-96 h-[430px] relative">
                    <div className="absolute right-0 rounded-tr-lg border-2 border-white rounded-bl-xl text-white font-semibold bg-gradient-to-r from-primary to-blue-200 w-fit h-fit p-2">
                      <h1>Personal Project</h1>
                    </div>
                    <img
                      src={ui.img}
                      alt={ui.title}
                      className="rounded-t-lg h-[220px] w-full object-cover object-center"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <img src={ui.logo} alt={ui.title} className="w-10 " />
                        <h1 className="text-2xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                          {ui.title}
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-lg">
                          <b>Company Website</b> - {ui.description}
                        </h1>
                        <div className="flex pt-2 items-center text-primary text-2xl gap-2">
                          <FaFigma />
                        </div>
                      </div>
                    </div>
                      <a href="https://drive.google.com/drive/folders/1Rd4P6l8kdvHt2K8jsN-wGpctPFvGgMCN?usp=sharing" target="_blank">
                    <div className="bg-primary w-14 h-14 rounded-full p-2 flex items-center justify-center absolute -right-4 -bottom-2">
                        <CiLocationArrow1 className="text-white text-7xl" />
                    </div>
                      </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
