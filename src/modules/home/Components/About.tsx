import { ImNewTab } from "react-icons/im";
import aboutIcons from "../../../Constant/About";
import arrow from "../../../../public/assets/image/arrow.svg";
import foto from "../../../../public/assets/image/foto.jpg";
import { AiOutlineLinkedin } from "react-icons/ai";
const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-white/80 relative z-20 pt-10 h-fit pb-10  to-primary/50"
    >
      <div className="lg:flex gap-20 ">
        <div className="flex">
          <div className="flex flex-col pb-10 -space-y-4">
            {aboutIcons.map((item, index) => (
              <div key={index} className="flex items-center">
                <hr className={`w-${item.width} bg-primary h-2`} />
                <div className="bg-primary hover:bg-second border-2 border-white rounded-full p-4 hover:shadow-xl hover:shadow-primary hover:scale-105 duration-200 w-fit">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden flex  justify-between flex-col">
            <div className="absolute right-2">
              <div className="flex lg:hidden flex-row items-center  z-10">
                <img
                  src={foto}
                  className="rounded-full max-w-lg w-40 border-[10px] border-primary/40"
                  alt="Fabyan"
                  loading="lazy"
                />
                <div className="mt-20">
                  <div className="bg-white relative z-10 text-[30px] text-primary hover:bg-primary hover:text-white hover:scale-110 duration-150 cursor-pointer  w-fit p-2  text-4xl flex items-center justify-center rounded-full -ml-4 shadow-xl ">
                    <a
                      href="https://www.linkedin.com/in/fabyan-yastika-permana/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLinkedin />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-80 -ml-40">
              {/* <h1 className="font-bold text-slate-900 text-5xl rotate-[70deg] text-nowrap">
                My Tech Stack
              </h1> */}
              <h1 className="text-6xl -ml-10 hover:bg-gradient-to-r  from-second to-primary rounded-2xl hover:text-white hover:p-2 hover:w-fit text-nowrap font-bold text-slate-700  duration-200 rotate-[70deg]">
                My Tech Stack
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col h-full justify-around">
            <div className="flex items-center flex-col gap-4">
              <div className="bg-gradient-to-r w-fit from-primary/0 px-10 to-primary rounded-3xl">
                <h1 className="text-white  text-2xl font-semibold">
                  🚀About Me
                </h1>
              </div>
              <div className="bg-white w-[90%] lg:w-[500px] h-60 rounded-xl border-b-[20px] border-r-[20px] rounded- border-primary">
                <h1 className="text-right px-4 pt-2">
                  My name is Fabyan Yastika Permana, a website developer that
                  focus on developing modern website with modern technology. I
                  am enthusiastic about learning new technology and apply it to
                  my several project.
                </h1>
                <div className="flex mt-4 lg:mt-10 items-center justify-center gap-3 px-2 lg:px-10">
                  <a
                    href="https://drive.google.com/file/d/1kMOMK2na3gNu18k3Y8057kv1VNJTfK69/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:scale-110 text-center rounded-full hover:bg-primary/20 hover:border-2 hover:border-primary duration-150 w-40 h-10 pt-2 font-bold text-second hover:text-primary"
                  >
                    CV <ImNewTab className="text-2xl -mt-2" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1mjWWDodYH1mOJdurp5sf_J_rdiLV9mfL/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:scale-110 text-center rounded-full hover:bg-primary/20 hover:border-2 hover:border-primary duration-150 w-40 h-10 pt-2 font-bold text-second hover:text-primary"
                  >
                    Portfolio <ImNewTab className="text-2xl -mt-2" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1H_5Mf5ZyA-uFcCmih2t1D_VnTvZqYSMc/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:scale-110 text-center rounded-full hover:bg-primary/20 hover:border-2 hover:border-primary duration-150 w-40 h-10 pt-2 font-bold text-second hover:text-primary"
                  >
                    About <ImNewTab className="text-2xl -mt-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex -space-x-20">
              <img src={arrow} alt="Arrow" />
              <h1 className="text-6xl ml-20 hover:bg-gradient-to-r from-second to-primary rounded-2xl hover:text-white hover:p-2 hover:w-fit text-nowrap font-bold text-slate-700 hover:rotate-0 duration-200 -rotate-12">
                My Tech Stack
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-between items-center">
          <div className="flex flex-col relative z-10 -space-y-60">
            <img
              src={foto}
              className="rounded-full max-w-lg w-[70%] lg:w-full border-[25px] border-primary/40"
              alt="Fabyan"
              loading="lazy"
            />
            <div className="bg-white  relative z-10 text-[30px] text-primary hover:bg-primary hover:text-white hover:scale-110 duration-150 cursor-pointer lg:w-20 lg:h-20 w-10 h-10  text-4xl flex items-center justify-center rounded-full -ml-4 shadow-xl ">
              <a
                href="https://www.linkedin.com/in/fabyan-yastika-permana/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />{" "}
              </a>
            </div>
          </div>
          <hr className="h-full  bg-white w-4 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
