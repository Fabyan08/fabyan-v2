// import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxArrowTopRight } from "react-icons/rx";
import { ImArrowDown2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "./style.css";
const Portfolio = () => {
  return (
    <>
      <div className="relative w-full pt-32 bg-gradient-to-tr container from-primary/30 min-h-screen">
        <div className="">
          <h1 className="font-bold text-5xl md:text-7xl">My Best Project</h1>
          <p className="font-semibold text-xl md:text-2xl md:w-[800px] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            reprehenderit tempore ipsam ad dolor eveniet nemo consequatur
            molestias rerum non?
          </p>
        </div>
        <div className="space-y-4 w-full">
          <div className="md:flex mt-14 md:w-1/2 md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full h-full bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex mb-4">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-primary inline-block text-transparent bg-clip-text font-bold">
                  Fabyan Site
                </h1>
              </div>
              <div>
                <h1 className="text-xl">
                  <b>My First Personal Website</b> - Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis praesentium illo
                  nostrum facere repudiandae! Corporis in illum perferendis
                  dolorum placeat.
                </h1>
              </div>
              <Swiper
                className="mt-4"
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="/images/port/port.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port2.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port3.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="md:flex items-center md:space-x-5">
                <div className="bg-gradient-to-r  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                  <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                  <a
                    className=" md:text-2xl rounded-xl text-white ml-3"
                    href=""
                  >
                    In Production Now!
                  </a>

                  <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                    <a href="https://fabyan-site.vercel.app" target="_blank">
                      <RxArrowTopRight />
                    </a>
                  </div>
                </div>
                <div className=" font-bold text-slate-500 mt-4 hover:text-black duration-150">
                  <a href="">
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
                  <img src="/images/html.png" alt="" />
                  <img src="/images/css.png" alt="" />
                  <img src="/images/tailwind.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex mb-4">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-primary inline-block text-transparent bg-clip-text font-bold">
                  Fabyan Site
                </h1>
              </div>
              <div>
                <h1 className="text-xl">
                  <b>My First Personal Website</b> - Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis praesentium illo
                  nostrum facere repudiandae! Corporis in illum perferendis
                  dolorum placeat.
                </h1>
              </div>
              <Swiper
                className="mt-4"
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="/images/port/port.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port2.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port3.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="md:flex items-center md:space-x-5">
                <div className="bg-gradient-to-r  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                  <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                  <a
                    className=" md:text-2xl rounded-xl text-white ml-3"
                    href=""
                  >
                    In Production Now!
                  </a>

                  <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                    <a href="https://fabyan-site.vercel.app" target="_blank">
                      <RxArrowTopRight />
                    </a>
                  </div>
                </div>
                <div className=" font-bold text-slate-500 mt-4 hover:text-black duration-150">
                  <a href="">
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
                  <img src="/images/html.png" alt="" />
                  <img src="/images/css.png" alt="" />
                  <img src="/images/tailwind.png" alt="" />
                </div>
              </div>
            </div>
           
          </div>
          <div className="md:flex mt-14 md:w-1/2 md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full h-full bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex mb-4">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-primary inline-block text-transparent bg-clip-text font-bold">
                  Fabyan Site
                </h1>
              </div>
              <div>
                <h1 className="text-xl">
                  <b>My First Personal Website</b> - Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis praesentium illo
                  nostrum facere repudiandae! Corporis in illum perferendis
                  dolorum placeat.
                </h1>
              </div>
              <Swiper
                className="mt-4"
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="/images/port/port.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port2.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port3.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="md:flex items-center md:space-x-5">
                <div className="bg-gradient-to-r  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                  <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                  <a
                    className=" md:text-2xl rounded-xl text-white ml-3"
                    href=""
                  >
                    In Production Now!
                  </a>

                  <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                    <a href="https://fabyan-site.vercel.app" target="_blank">
                      <RxArrowTopRight />
                    </a>
                  </div>
                </div>
                <div className=" font-bold text-slate-500 mt-4 hover:text-black duration-150">
                  <a href="">
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
                  <img src="/images/html.png" alt="" />
                  <img src="/images/css.png" alt="" />
                  <img src="/images/tailwind.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex mb-4">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-primary inline-block text-transparent bg-clip-text font-bold">
                  Fabyan Site
                </h1>
              </div>
              <div>
                <h1 className="text-xl">
                  <b>My First Personal Website</b> - Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis praesentium illo
                  nostrum facere repudiandae! Corporis in illum perferendis
                  dolorum placeat.
                </h1>
              </div>
              <Swiper
                className="mt-4"
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="/images/port/port.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port2.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port3.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="md:flex items-center md:space-x-5">
                <div className="bg-gradient-to-r  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                  <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                  <a
                    className=" md:text-2xl rounded-xl text-white ml-3"
                    href=""
                  >
                    In Production Now!
                  </a>

                  <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                    <a href="https://fabyan-site.vercel.app" target="_blank">
                      <RxArrowTopRight />
                    </a>
                  </div>
                </div>
                <div className=" font-bold text-slate-500 mt-4 hover:text-black duration-150">
                  <a href="">
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
                  <img src="/images/html.png" alt="" />
                  <img src="/images/css.png" alt="" />
                  <img src="/images/tailwind.png" alt="" />
                </div>
              </div>
            </div>
           
          </div>
         

          <div className="flex items-center justify-center">
          <div className="md:w-[900px] w-full h-full bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex mb-4">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="ml-2 text-4xl bg-gradient-to-r from-green-500 to-primary inline-block text-transparent bg-clip-text font-bold">
                  Fabyan Site
                </h1>
              </div>
              <div>
                <h1 className="text-xl">
                  <b>My First Personal Website</b> - Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officiis praesentium illo
                  nostrum facere repudiandae! Corporis in illum perferendis
                  dolorum placeat.
                </h1>
              </div>
              <Swiper
                className="mt-4"
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    src="/images/port/port.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port2.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/port/port3.png"
                    className="rounded-xl border-4 border-gradient  shadow-sm"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="md:flex items-center md:space-x-5">
                <div className="bg-gradient-to-r  hover:scale-[1.05] duration-150  items-center rounded-xl flex from-primary w-fit h-10 p-8 mt-5 to-second">
                  <span className="animate-ping w-4 h-4 rounded-full bg-white"></span>
                  <a
                    className=" md:text-2xl rounded-xl text-white ml-3"
                    href=""
                  >
                    In Production Now!
                  </a>

                  <div className="bg-primary hover:scale-110 duration-200 border-2 border-white  rounded-2xl  text-5xl text-white shadow-xl -mt-12 md:ml-4">
                    <a href="https://fabyan-site.vercel.app" target="_blank">
                      <RxArrowTopRight />
                    </a>
                  </div>
                </div>
                <div className=" font-bold text-slate-500 mt-4 hover:text-black duration-150">
                  <a href="">
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
                  <img src="/images/html.png" alt="" />
                  <img src="/images/css.png" alt="" />
                  <img src="/images/tailwind.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
