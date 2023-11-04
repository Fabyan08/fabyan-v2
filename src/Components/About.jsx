import { AiOutlineLinkedin } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init();
    once: true;
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="relative -mt-1 " id="about">
        <div className="bg-gradient-to-l pt-2 from-primary/30 border-t-primary/20 border-t-2 mt-[234px]  -p-20  -z-10 w-full h-[900px]">
          <img
            loading="lazy"
            src="/images/pattern3.png"
            className="absolute -mt-40 md:-mt-0 h-[900px] w-full -z-[400] opacity-[15%]"
            alt=""
          />
          <div className="flex justify-between mt-[100px]">
            <div className=" relative z-20 left-0 -space-y-4">
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-10" />
                <img
                  loading="lazy"
                  src="/images/html.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-12" />
                <img
                  loading="lazy"
                  src="/images/css.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                className="flex items-center -mt-4"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-14" />
                <img
                  loading="lazy"
                  src="/images/js.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-16" />
                <img
                  loading="lazy"
                  src="/images/btr.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-20" />
                <img
                  loading="lazy"
                  src="/images/tailwind.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-24" />
                <img
                  loading="lazy"
                  src="/images/react.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-28" />
                <img
                  loading="lazy"
                  src="/images/php.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-32" />
                <img
                  loading="lazy"
                  src="/images/laravel.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-36" />
                <img
                  loading="lazy"
                  src="/images/mysql.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-40" />
                <img
                  loading="lazy"
                  src="/images/firebase.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="flex items-center"
              >
                <hr className="border-4 border-primary rounded-tr-lg w-44" />
                <img
                  loading="lazy"
                  src="/images/ts.png"
                  className="-ml-4"
                  alt=""
                />
              </div>
            </div>

            <div className="absolute w-full  md:-mt-60 md:w-[670px] md:mx-80 pt-[420px] text-right">
              <h1 className="text-4xl mr-3 font-bold mb-4 absolute -bottom-[250px] md:relative md:bottom-0 right-0 bg-gradient-to-l pr-2 text-white  from-primary rounded-xl">
                🚀About Me
              </h1>
              <div className="absolute mx-2 mr-8 ml-14 -bottom-[410px] md:relative md:bottom-0">
                <div className="bg-white px-2 md:w-[600px] border-2 h-40 rounded-xl p-4">
                  <h1 className="text-right">
                    My name is Fabyan Yastika Permana, a website developer that
                    focus on developing modern website with modern technology. I
                    am enthusiastic about learning new technology and apply it
                    to my several project.
                  </h1>
                  <h1 className="text-left mt-10 hidden md:flex">
                    ~ Fabyan Yastika Permana
                  </h1>
                </div>
                <div className="bg-primary w-full absolute -mt-36 ml-4 -z-10 h-40 rounded-xl shadow-2xl"></div>
              </div>
              <div className="mt-24 flex -ml-20">
                <img
                  loading="lazy"
                  src="/images/arrow.png"
                  className="hidden md:flex"
                  alt=""
                />
                <h1 className="md:mt-24 text-2xl absolute md:text-7xl font-semibold hover:rotate-0 duration-150 hover:bg-gradient-to-r from-primary  to-third hover:shadow-2xl hover:text-white right-0  -rotate-[6deg] p-2 rounded-xl">
                  My Tech Stack!
                </h1>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="md:-mr-20 absolute z-20 right-0  w-44 md:w-[500px] "
            >
              <div className="bg-primary/30 w-[220px] h-[220px] md:w-[600px] md:h-[600px] absolute right-0 -mr-10 md:-mr-20 -z-10 rounded-full shadow-xl"></div>
              <div className="bg-white text-[30px] text-primary hover:bg-primary hover:text-white hover:scale-110 duration-150 cursor-pointer md:w-20 md:h-20 w-10 h-10 absolute text-4xl flex items-center justify-center rounded-full bottom-6 -ml-4 shadow-xl md:bottom-24">
                <a
                  href="https://www.linkedin.com/in/fabyan-yastika-permana/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin />{" "}
                </a>
              </div>
              <img
                loading="lazy"
                src="/images/Foto.jpg"
                className="rounded-full"
                alt=""
              />
              <div className="bg-blue-500 md:w-4 md:h-4 w-2 h-2 absolute md:-mt-20 md:ml-10 -mt-4 ml-6 rounded-full"></div>
              <div className="border-primary border-2 md:w-4 md:h-4 w-2 h-2 absolute mt-[2px] ml-[40px] md:-mt-[46px] md:ml-[70px] rounded-full"></div>
              <div className="border-primary border-2 md:w-4 md:h-4 w-2 h-2 absolute mt-[16px] ml-[65px] md:-mt-[20px] md:ml-[100px] rounded-full"></div>
              <div className="border-primary border-2 md:w-4 md:h-4 w-2 h-2 absolute mt-[30px] ml-[90px] md:mt-[10px] md:ml-[140px] rounded-full"></div>
            </div>
            {/* <div className="absolute bg-primary -rotate-[20deg] w-[2500px] -right-[800px] h-40 -z-[999]" />
      <div className="absolute bg-primary  w-[2500px] -right-[800px] h-40 -z-[999]" /> */}
            <div className="w-16  inline-block">
              {/* <div className=" h-11 w-11 bg-primary transform origin-top-left"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
