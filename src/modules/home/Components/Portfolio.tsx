import { GrFormNext } from "react-icons/gr";

import { RxArrowTopRight } from "react-icons/rx";
import { ImArrowDown2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
const Portfolio = () => {
  const breakpoints = {
    // For mobile devices
    640: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust the space as needed
    },
    // For desktop or larger screens
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 30, // Adjust the space as needed
    },
  };
  return (
    <section
      id="portfolio"
      className="relative w-full py-10  bg-gradient-to-tr  from-primary/30 min-h-screen"
    >
      {" "}
      <div className=" mw items-center justify-between flex relative">
        <div>
          <div className="bg-gradient-to-r from-primary/60 to-slate-100/40 rounded-sm w-80 h-10 absolute -z-10 -rotate-[5deg] mt-2"></div>
          <h1 className="font-bold text-2xl pt-4 text-slate-700 md:text-6xl">
            👨🏻‍💻My Highlight Portfolio
          </h1>
          <p className="text-md md:text-xl md:w-[800px] mt-4">
            These are some of the projects that I highlighted as portfolio
            pieces!
          </p>
        </div>
        <a
          href="/portfolio"
          className="flex text-primary text-lg xl:text-4xl font-bold items-center"
        >
          <h1>All</h1>
          <GrFormNext className="text-primary" />
        </a>
      </div>
      <div className="mw pt-4">
        <div className="bg-white rounded-xl w-96 h-96 relative">
          <div className="absolute right-0 rounded-tr-xl rounded-bl-xl text-white font-semibold bg-green-500 w-fit h-fit p-2">
            <h1>Personal Project</h1>
          </div>
        </div>
      </div>
      {/* <div className="space-y-4 relative w-full mw">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:flex mt-14 md:w-1/2 md:space-x-4 space-y-4 md:space-y-0"
        >
          <div className="w-full h-full relative bg-white border-2 p-4 border-green-500 rounded-2xl">
            <div className="absolute z-10 rounded-tr-xl w-40 h-10 flex items-center justify-center text-white font-semibold rounded-bl-2xl bg-green-500 right-0 top-0">
              <h1>Personal Project</h1>
            </div>
            <div className="flex mb-4">
              <img
                loading="lazy"
                src="/images/fasite.png"
                className="w-10 h-10"
                alt=""
              />
              <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-green-300 inline-block text-transparent bg-clip-text font-bold">
                Fabyan Site
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-xl">
                <b>My First Personal Website</b> - Trying Tailwind CSS for the
                first time as the <span>best</span> utility in my opinion to
                build a website. Until it can create a look that is fairly
                relevant modern.
              </h1>
            </div>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper mt-4"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/port.png"
                  className="rounded-xl border-4 border-gradient1  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/port2.png"
                  className="rounded-xl border-4 border-gradient1  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/port3.png"
                  className="rounded-xl border-4 border-gradient1  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

            <div className="md:flex items-center md:space-x-5">
              <div className="bg-gradient-to-r relative  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-green-500 w-fit h-10 p-8 mt-5 to-second">
                <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                <hr className="border-2 h-8 absolute bottom-0 ml-[7px]" />
                <hr className="bg-white absolute rounded-full ml-[1px] h-4 w-4" />
                <div className=" md:text-2xl rounded-xl text-white ml-3">
                  In Production Now!
                </div>

                <div className="bg-green-500 hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                  <a
                    href="https://fabyan-site.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
              <div className=" font-bold text-slate-500 mt-4 hover:text-green-500 duration-150">
                <a
                  href="https://github.com/Fabyan08/fabyan-site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h1 className="text-2xl">Fabyan Site</h1>
                  </div>
                  <div className="text-md flex items-center space-x-1">
                    <h1>on</h1>
                    <h1>
                      <AiFillGithub />
                    </h1>
                    <h1>github.com</h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-xl">
                  Featured technologies used
                </h1>
                <ImArrowDown2 className="animate-bounce" />
              </div>
              <div className="flex space-x-4 w-14 mt-2">
                <img loading="lazy" src="/images/htmlhij.png" alt="" />
                <img loading="lazy" src="/images/csshij.png" alt="" />
                <img loading="lazy" src="/images/tailhij.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full h-full relative bg-white border-2 p-4 border-primary rounded-2xl">
            <div className="flex mb-4">
              <img
                loading="lazy"
                src="/images/kodbar.png"
                className="w-10 h-10"
                alt=""
              />
              <h1 className="ml-2 text-3xl md:text-4xl bg-gradient-to-r from-primary to-blue-500 inline-block text-transparent bg-clip-text font-bold">
                Koding Bareng
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-xl">
                <b>Coding Community</b> - This is a website that I created to
                build a community in the IT field. As the creator of this
                website, I use React Typescript and Tailwind to build a bigger
                community later.
              </h1>
              <div className="absolute z-10 -top-[60px] -right-[50px] rounded-full animate-pulse md:-top-[45px] hover:scale-110 duration-150 font-semibold bg-primary text-white w-40 text-center  rotate-[30deg] md:-right-[30px]">
                <h1>Personal Project</h1>
              </div>
            </div>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper mt-4"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/kod1.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/kod2.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/kod3.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/kod4.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/kod5.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

            <div className="md:flex  items-center md:space-x-5">
              <div className="bg-gradient-to-r relative hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                <hr className="border-2 h-8 absolute bottom-0 ml-[7px]" />
                <hr className="bg-white absolute rounded-full ml-[1px] h-4 w-4" />
                <a
                  href="https://kodingbareng.vercel.app"
                  className=" md:text-2xl rounded-xl text-white ml-3"
                >
                  In Production Now!
                  <h1 className="text-sm">(But Still Under Development)</h1>
                </a>

                <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                  <a
                    href="https://kodingbareng.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
              <div className=" font-bold text-slate-500 mt-4 hover:text-primary duration-150">
                <a
                  href="https://github.com/Fabyan08/kodingbareng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h1 className="text-2xl">Koding Bareng</h1>
                  </div>
                  <div className="text-md flex items-center space-x-1">
                    <h1>on</h1>
                    <h1>
                      <AiFillGithub />
                    </h1>
                    <h1>github.com</h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-xl">
                  Featured technologies used
                </h1>
                <ImArrowDown2 className="animate-bounce" />
              </div>
              <div className="flex space-x-4 w-8 md:w-14 mt-2">
                <img loading="lazy" src="/images/html.png" alt="" />
                <img loading="lazy" src="/images/css.png" alt="" />
                <img loading="lazy" src="/images/tailwind.png" alt="" />
                <img loading="lazy" src="/images/react.png" alt="" />
                <img loading="lazy" src="/images/ts.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mt-14 md:w-1/2 md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full relative h-full bg-white border-2 p-4 border-primary rounded-2xl">
            <div className="flex mb-4">
              <img
                loading="lazy"
                src="/images/port/jt.svg"
                className="w-10 h-10"
                alt=""
              />
              <h1 className="ml-2 text-2xl  md:text-4xl bg-gradient-to-r from-[#C6F8E7] to-[#2978F3] inline-block text-transparent bg-clip-text font-bold">
                EMS Jasa Tirta
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-xl">
                <b>Freelance Project for Company</b> - Build a website to manage
                employee data and data printing needs as desired. Using PHP as a
                fullstack language and Mysql database.
              </h1>

              <div className="absolute z-10 -top-[60px] -right-[50px] rounded-full animate-pulse md:-top-[45px] hover:scale-110 duration-150 font-semibold bg-primary text-white w-40 text-center  rotate-[30deg] md:-right-[30px]">
                <h1>Freelance Project</h1>
              </div>
            </div>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper mt-4"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/pjt.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/pjt2.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/pjt3.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="md:flex items-center md:space-x-5">
              <div className="bg-slate-400  hover:scale-[1.05] duration-150  items-center rounded-xl flex  w-fit h-10 p-8 mt-5 ">
                <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                <div className=" md:text-2xl rounded-xl text-white ml-3">
                  Sorry, Private Project👋
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-xl">
                  Featured technologies used
                </h1>
                <ImArrowDown2 className="animate-bounce" />
              </div>
              <div className="flex space-x-4 w-8 md:w-14 mt-2">
                <img loading="lazy" src="/images/html.png" alt="" />
                <img loading="lazy" src="/images/css.png" alt="" />
                <img loading="lazy" src="/images/js.png" alt="" />
                <img loading="lazy" src="/images/php.png" alt="" />
                <img loading="lazy" src="/images/mysql.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full relative h-full bg-white border-2 p-4 border-[#3A298A] rounded-2xl">
            <div className="flex mb-4">
              <img
                loading="lazy"
                src="/images/port/auto.png"
                className="w-20 h-10"
                alt=""
              />
              <h1 className="ml-2 text-2xl md:text-4xl bg-gradient-to-r from-[#3A298A] to-primary inline-block text-transparent bg-clip-text font-bold">
                AutoLearn{" "}
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-xl">
                <b>Hackathon Competition</b> - I created this website using PHP
                and API from OpenAPI as a fairly popular AI chat provider.
                Alhamdulillah, I was selected and included in the top 10!
              </h1>
              <div className="absolute z-10 -top-[60px] -right-[50px] rounded-full animate-pulse md:-top-[45px] hover:scale-110 duration-150 font-semibold bg-primary text-white w-40 text-center  rotate-[30deg] md:-right-[30px]">
                <h1>Personal Project</h1>
              </div>
            </div>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper mt-4"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/auto1.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/auto2.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/auto3.png"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="md:flex items-center md:space-x-5">
              <div className="bg-gradient-to-r relative  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-full md:w-96  h-10 p-8 mt-5 to-second">
                <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                <div className=" md:text-2xl rounded-xl text-white ml-3">
                  Not Hosted{" "}
                </div>

                <div className="bg-primary absolute right-12 hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                  <a
                    href="https://github.com/Fabyan08/Sevima-AutoLearn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
              <div className=" font-bold text-slate-500 mt-4 hover:text-primary duration-150">
                <a
                  href="https://github.com/Fabyan08/Sevima-AutoLearn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h1 className="text-2xl">Auto Learn</h1>
                  </div>
                  <div className="text-md flex items-center space-x-1">
                    <h1>on</h1>
                    <h1>
                      <AiFillGithub />
                    </h1>
                    <h1>github.com</h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-xl">
                  Featured technologies used
                </h1>
                <ImArrowDown2 className="animate-bounce" />
              </div>
              <div className="flex space-x-4 w-10 md:w-14 mt-2">
                <img loading="lazy" src="/images/html.png" alt="" />
                <img loading="lazy" src="/images/css.png" alt="" />
                <img loading="lazy" src="/images/js.png" alt="" />
                <img loading="lazy" src="/images/php.png" alt="" />
                <img loading="lazy" src="/images/mysql.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative items-center justify-center">
          <div className="md:w-[900px] w-full h-full bg-white border-2 p-4 border-[#9006B9] rounded-2xl">
            <div className="flex mb-4">
              <img
                loading="lazy"
                src="/images/port/dplogo.png"
                className="w-10 h-10"
                alt=""
              />
              <h1 className="ml-2 text-4xl bg-gradient-to-r from-[#9006B9] to-slate-400 inline-block text-transparent bg-clip-text font-bold">
                Depublic{" "}
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-xl">
                <b>Coding League</b> - Join the SMKDEV Project Based Coding
                Challenge competition to build a mobile-first website using
                React JS and other tech sweeteners!
              </h1>
              <div className="absolute z-10 -top-[60px] -right-[50px] rounded-full animate-pulse md:-top-[45px] hover:scale-110 duration-150 font-semibold bg-[#3A298A] text-white w-40 text-center  rotate-[30deg] md:-right-[30px]">
                <h1>Competition Project</h1>
              </div>
            </div>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper mt-4"
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/dp4.png"
                  className="rounded-xl border-4 border-gradient7  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/dp1.png"
                  className="rounded-xl border-4 border-gradient7  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/dp2.png"
                  className="rounded-xl border-4 border-gradient7  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/port/dp3.png"
                  className="rounded-xl border-4 border-gradient7  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="md:flex items-center md:space-x-5">
              <div className="bg-gradient-to-r from-[#3A298A]  to-[#6a54c8] hover:scale-[1.05] duration-150  items-center rounded-xl flex w-fit h-10 p-8 mt-5 ">
                <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>

                <a className="md:text-2xl rounded-xl text-white ml-3" href="">
                  Not Hosted Too{" "}
                </a>

                <div className="bg-[#3A298A]  primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                  <a
                    href="https://github.com/Fabyan08/Depublic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RxArrowTopRight />
                  </a>
                </div>
              </div>
              <div className=" font-bold text-slate-500 mt-4 hover:text-[#3A298A] duration-150">
                <a
                  href="https://github.com/Fabyan08/Depublic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h1 className="text-2xl">Depublic</h1>
                  </div>
                  <div className="text-md flex items-center space-x-1">
                    <h1>on</h1>
                    <h1>
                      <AiFillGithub />
                    </h1>
                    <h1>github.com</h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-3">
                <h1 className="font-bold text-xl">
                  Featured technologies used
                </h1>
                <ImArrowDown2 className="animate-bounce" />
              </div>
              <div className="flex space-x-4 w-8 md:w-14 mt-2">
                <img loading="lazy" src="/images/htmlp.png" alt="" />
                <img loading="lazy" src="/images/cssp.png" alt="" />
                <img loading="lazy" src="/images/jsp.png" alt="" />
                <img loading="lazy" src="/images/tailp.png" alt="" />
                <img loading="lazy" src="/images/reactp.png" alt="" />
                <img loading="lazy" src="/images/firebasep.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 text-center  ">
          <h1 className="text-primary text-4xl font-bold ">
            Another Portfolio
          </h1>
        </div>
        <div className="md:flex justify-center md:space-x-10 space-y-10 md:space-y-0 container pt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white pb-4 w-full h-40 md:w-1/4  rounded-xl"
          >
            <div className="flex">
              <img
                loading="lazy"
                src="/images/port/ui1.png"
                className="w-40 rounded-xl  border-gradient2 duration-150    shadow-sm  -mt-8 -ml-8"
                alt=""
              />
              <div className="grid">
                <h1 className="ml-2 text-lg  z-10 text-primary font-bold ">
                  UI DESIGN
                </h1>
                <h1 className="-mt-4 text-sm font-semibold w-32  pl-2">
                  For Outfit App Design
                </h1>
              </div>
            </div>
            <div className="flex space-y-4 -mt-3 justify-between items-center ">
              <div className="flex items-center mt-2">
                <h1 className="mt-2 ml-2 font-semibold">Technology Used</h1>
                <img
                  loading="lazy"
                  src="/images/figma.png"
                  className="w-8"
                  alt=""
                />
              </div>
              <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                <a
                  href="https://www.figma.com/file/bqrOZYvQqQi6HiVCKYggvP/Design-APP-Mobile-Outfit?type=design&node-id=0%3A1&mode=design&t=eqZGkf3tR8B5I08w-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBoxArrowInUpRight className="p-2" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-white pb-4 w-full h-40 md:w-1/4  rounded-xl"
          >
            <div className="flex">
              <img
                loading="lazy"
                src="/images/port/ui2.png"
                className="w-40 rounded-xl  border-gradient2 duration-150    shadow-sm  -mt-8 -ml-8"
                alt=""
              />
              <div className="grid">
                <h1 className="ml-2 text-lg  z-10 text-primary font-bold ">
                  UI Design
                </h1>
                <h1 className="-mt-4 text-sm font-semibold w-32  pl-2">
                  For Game Store Design
                </h1>
              </div>
            </div>
            <div className="flex space-y-4  justify-between items-center ">
              <div className="flex items-center mt-2">
                <h1 className="mt-2 ml-2 font-semibold">Technology Used</h1>
                <img
                  loading="lazy"
                  src="/images/figma.png"
                  className="w-8"
                  alt=""
                />
              </div>
              <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-16 md:ml-4">
                <a
                  href="https://www.figma.com/file/2pQkTxAsrCGCTNG7CwDovD/Techno-Game?type=design&node-id=0%3A1&mode=design&t=QZKlP0B0Dsr8D0xs-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBoxArrowInUpRight className="p-2" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-white pb-4 w-full h-40 md:w-1/4  rounded-xl"
          >
            <div className="flex">
              <img
                loading="lazy"
                src="/images/port/ui3.png"
                className="w-40 rounded-xl  border-gradient2 duration-150    shadow-sm  -mt-8 -ml-8"
                alt=""
              />
              <div className="grid">
                <h1 className="ml-2 text-lg  z-10 text-primary font-bold ">
                  UI Design
                </h1>
                <h1 className="mt-2 text-sm font-semibold w-40  pl-2">
                  Redesign D-3 RPLA Telkom University&apos;s Website{" "}
                </h1>
              </div>
            </div>
            <div className="flex space-y-4 mt-3 justify-between items-center ">
              <div className="flex items-center">
                <h1 className=" ml-2 font-semibold">Technology Used</h1>
                <img
                  loading="lazy"
                  src="/images/figma.png"
                  className="w-8"
                  alt=""
                />
              </div>
              <div className="bg-primary  hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                <a
                  href="https://www.figma.com/file/6TRkJ5nT6lTxCfSnnFto4s/Telkom-University?type=design&node-id=0%3A1&mode=design&t=iEidD0zpEcI5VE2t-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBoxArrowInUpRight className="p-2" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="bg-white pb-4 w-full h-40 md:w-1/4  rounded-xl"
          >
            <div className="flex">
              <img
                loading="lazy"
                src="/images/port/art1.png"
                className="w-40 rounded-xl  border-gradient2 duration-150    shadow-sm  -mt-8 -ml-8"
                alt=""
              />
              <div className="grid">
                <h1 className="ml-2 text-lg  z-10 text-primary font-bold ">
                  Article Writing{" "}
                </h1>
                <h1 className="-mt-4 text-sm font-semibold w-32  pl-2">
                  Freelance Content Creator{" "}
                </h1>
              </div>
            </div>
            <div className="flex space-y-4 -mt-1 justify-between items-center ">
              <div className="flex items-center mt-2">
                <h1 className="mt-2 ml-2 font-semibold">
                  Write an article on AboutMalang.com
                </h1>
              </div>
              <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                <a
                  href="https://www.aboutmalang.com/author/23196/Fabyan-Yastika-Permana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsBoxArrowInUpRight className="p-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Portfolio;
