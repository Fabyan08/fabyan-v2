import { GrFormNext } from "react-icons/gr";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
import { CiLocationArrow1 } from "react-icons/ci";

// import { FreeMode, Pagination } from "swiper/modules";

// Swiper
import React, { useRef, useState } from "react";
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

// Tech
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

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
                  spaceBetween: 10,
                },
                // when window width is > 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              initialSlide={1.5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-[1170px]"
            >
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
            </Swiper>{" "}
          </div>
        </div>
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
                  spaceBetween: 10,
                },
                // when window width is > 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              initialSlide={1.5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper max-w-[1170px]"
            >
              <SwiperSlide>
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
                <div className="bg-white pb-20 hover:border-4 border-primary duration-200 rounded-xl w-[80%] lg:w-96 h-[400px] relative">
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
            </Swiper>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
