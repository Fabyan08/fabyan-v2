import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Certificate = () => {
  const breakpoints = {
    // For mobile devices
    640: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust the space as needed
    },
    // For desktop or larger screens
    1024: {
      slidesPerView: 2,
      spaceBetween: 30, // Adjust the space as needed
    },
  };
  return (
    <>
      <div className="relative w-full h-full" id="certificate">
        <div className="bg-gradient-to-r py-20  pt-10 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-full">
          <img
            src="/images/bg3.jpg"
            className="absolute -mt-40 md:-mt-0 h-full w-full -z-[400] opacity-[40%]"
            alt=""
          />
          <div className="container">
            <h1 className="text-center font-bold text-4xl md:text-7xl">
              Certificate
            </h1>
            <Swiper
              slidesPerView={1}
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
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
