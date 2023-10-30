import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Certificate = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="bg-gradient-to-r py-10  pt-2 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-full">
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
              className="mt-4"
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
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
