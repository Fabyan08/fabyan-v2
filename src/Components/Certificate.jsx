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
      slidesPerView: 2.5,
      spaceBetween: 30, // Adjust the space as needed
    },
  };
  return (
    <>
      <div className="relative w-full h-full" id="certificate">
        <div className="bg-gradient-to-r py-20  pt-10 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-full">
          <img
            loading="lazy"
            src="/images/bg3.jpg"
            className="absolute -mt-40 md:-mt-0 h-full w-full -z-[400] opacity-[40%]"
            alt=""
          />
          <div className="container">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r  mt-20 -ml-12  from-primary/60 to-slate-100/40 rounded-sm w-96 h-10 absolute -z-10 -rotate-[5deg]"></div>
            </div>
            <h1 className="text-center font-bold text-4xl md:text-7xl text-slate-700">
              👨🏼‍💻Certificate
            </h1>
            <h1 className="text-center">Here are some of my award and apppreciation on any competition, also training and anything else!</h1>
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
              autoplay={{
                delay: 100, // Delay in milliseconds between each slide
                disableOnInteraction: false, // Whether to stop auto-sliding on user interaction
              }}
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate Google Digital Garage.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/015.FABYAN YASTIKA PERMANANOMINASI.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Ai-SMK NEGERI 5_FABYAN YASTIKA (1).jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/0001.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate Harvard Medical School.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate Google Analitycs Academy.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate Google Tag Manager Fundamental.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate SoloLearn CSS.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate SoloLearn HTML.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate GCF Digital Photography.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Certificate Of Completion Unicef Online Child Safeguarding Training.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Fabyan.jpg"
                  className="rounded-xl border-4 border-gradient  shadow-sm"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/images/cert/Sertifikat Penulis Resmi.jpg"
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
