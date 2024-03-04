import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsZoomIn } from "react-icons/bs";
import foto from "../../../../public/assets/image/cv/foto.svg";
import { FiHome } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiCursorLine } from "react-icons/ri";
import { GiArrowCursor } from "react-icons/gi";
import { FiPenTool } from "react-icons/fi";
import { CiText } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaRegHandPaper } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
// Skills
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
import { FaFigma } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { IoResizeOutline } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import best from "../../../../public/assets/image/cv/best.jpg";
import { FaTrophy } from "react-icons/fa";
import digital from "../../../../public/assets/image/cv/digital.jpg";
import terbaik from "../../../../public/assets/image/cv/terbaik.jpg";
import city from "../../../../public/assets/image/city.svg";
import cv from "../../../../public/assets/image/cv/cv.pdf";
import inovator from "../../../../public/assets/image/cv/1.jpg";
import kemenhub from "../../../../public/assets/image/cv/2.jpg";
import kemenhubb from "../../../../public/assets/image/cv/3.jpg";
import Loading from "../../../Components/Loading/Loading";
const Cv = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section
          id="cv"
          className="bg-gradient-to-r from-primary to-primary/50 w-full h-screen overflow-hidden bg-cover flex justify-center bg-center"
        >
          <img src={city} className="absolute z-10 bottom-0 w-full" alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1422 800"
            className="absolute w-screen h-screen"
          >
            <g
              shape-rendering="crispEdges"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1.5"
              stroke="hsl(0, 0%, 83%)"
            >
              <polygon points="1244.25,0 1244.25,100 1422,100"></polygon>
              <polygon points="1244.25,0 1066.5,0 1066.5,100"></polygon>
              <polygon points="1244.25,200 1244.25,100 1066.5,200"></polygon>
              <polygon points="1244.25,100 1244.25,200 1422,200"></polygon>
              <polygon points="888.75,0 1066.5,100 888.75,100"></polygon>
              <polygon points="888.75,0 888.75,100 711,100"></polygon>
              <polygon points="711,100 711,200 888.75,200"></polygon>
              <polygon points="977.625,100 1066.5,150 977.625,150"></polygon>
              <polygon points="888.75,100 977.625,150 977.625,100"></polygon>
              <polygon points="977.625,200 888.75,150 977.625,150"></polygon>
              <polygon points="1066.5,200 1066.5,150 977.625,200"></polygon>
              <polygon points="888.75,300 1066.5,200 1066.5,300"></polygon>
              <polygon points="888.75,200 711,200 888.75,300"></polygon>
              <polygon points="799.875,350 888.75,350 799.875,300"></polygon>
              <polygon points="799.875,300 711,350 799.875,350"></polygon>
              <polygon points="799.875,400 799.875,350 711,350"></polygon>
              <polygon points="799.875,350 888.75,350 888.75,400"></polygon>
              <polygon points="1066.5,400 888.75,400 888.75,300"></polygon>
              <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
              <polygon points="1066.5,300 1244.25,300 1066.5,200"></polygon>
              <polygon points="1244.25,300 1244.25,400 1066.5,300"></polygon>
              <polygon points="1422,400 1422,300 1244.25,400"></polygon>
              <polygon points="711,100 533.25,100 711,0"></polygon>
              <polygon points="355.5,100 533.25,0 355.5,0"></polygon>
              <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
              <polygon points="711,200 533.25,200 711,100"></polygon>
              <polygon points="355.5,100 177.75,0 355.5,0"></polygon>
              <polygon points="177.75,0 0,100 0,0"></polygon>
              <polygon points="177.75,200 177.75,100 0,100"></polygon>
              <polygon points="355.5,100 177.75,100 355.5,200"></polygon>
              <polygon points="355.5,200 355.5,300 177.75,200"></polygon>
              <polygon points="0,300 177.75,300 177.75,200"></polygon>
              <polygon points="177.75,300 0,300 0,400"></polygon>
              <polygon points="355.5,300 355.5,400 177.75,400"></polygon>
              <polygon points="533.25,200 533.25,300 711,300"></polygon>
              <polygon points="533.25,300 533.25,200 355.5,300"></polygon>
              <polygon points="355.5,300 533.25,300 355.5,400"></polygon>
              <polygon points="711,350 622.125,350 622.125,300"></polygon>
              <polygon points="622.125,300 533.25,350 622.125,350"></polygon>
              <polygon points="622.125,350 533.25,400 533.25,350"></polygon>
              <polygon points="622.125,400 711,400 711,350"></polygon>
              <polygon points="533.25,400 711,500 533.25,500"></polygon>
              <polygon points="355.5,400 533.25,500 533.25,400"></polygon>
              <polygon points="355.5,500 355.5,600 533.25,600"></polygon>
              <polygon points="622.125,550 711,550 711,500"></polygon>
              <polygon points="622.125,500 533.25,550 622.125,550"></polygon>
              <polygon points="622.125,600 622.125,550 533.25,550"></polygon>
              <polygon points="622.125,600 711,550 711,600"></polygon>
              <polygon points="177.75,500 355.5,400 355.5,500"></polygon>
              <polygon points="177.75,500 0,400 0,500"></polygon>
              <polygon points="177.75,600 0,600 177.75,500"></polygon>
              <polygon points="177.75,600 355.5,600 355.5,500"></polygon>
              <polygon points="355.5,600 177.75,600 355.5,700"></polygon>
              <polygon points="177.75,700 177.75,600 0,600"></polygon>
              <polygon points="0,800 177.75,700 0,700"></polygon>
              <polygon points="355.5,800 177.75,800 355.5,700"></polygon>
              <polygon points="533.25,700 711,700 533.25,600"></polygon>
              <polygon points="355.5,600 533.25,700 355.5,700"></polygon>
              <polygon points="533.25,800 533.25,700 355.5,700"></polygon>
              <polygon points="711,800 711,700 533.25,700"></polygon>
              <polygon points="1422,500 1244.25,500 1244.25,400"></polygon>
              <polygon points="1244.25,400 1155.375,450 1155.375,400"></polygon>
              <polygon points="1066.5,400 1155.375,400 1155.375,450"></polygon>
              <polygon points="1155.375,500 1066.5,500 1155.375,450"></polygon>
              <polygon points="1244.25,450 1244.25,500 1155.375,500"></polygon>
              <polygon points="1244.25,500 1244.25,600 1066.5,500"></polygon>
              <polygon points="1422,600 1244.25,500 1244.25,600"></polygon>
              <polygon points="1066.5,400 1066.5,450 977.625,400"></polygon>
              <polygon points="977.625,450 977.625,400 888.75,450"></polygon>
              <polygon points="888.75,500 888.75,450 977.625,500"></polygon>
              <polygon points="1066.5,450 977.625,500 977.625,450"></polygon>
              <polygon points="888.75,450 799.875,400 888.75,400"></polygon>
              <polygon points="799.875,400 799.875,450 711,400"></polygon>
              <polygon points="711,450 799.875,500 799.875,450"></polygon>
              <polygon points="888.75,500 888.75,450 799.875,500"></polygon>
              <polygon points="888.75,600 888.75,500 711,500"></polygon>
              <polygon points="888.75,600 1066.5,500 1066.5,600"></polygon>
              <polygon points="1066.5,700 888.75,700 888.75,600"></polygon>
              <polygon points="888.75,700 711,600 888.75,600"></polygon>
              <polygon points="888.75,700 888.75,800 711,800"></polygon>
              <polygon points="888.75,800 888.75,700 1066.5,700"></polygon>
              <polygon points="1066.5,800 1422,600 1066.5,600"></polygon>
            </g>
            <g
              fill="hsl(220, 62%, 45%)"
              stroke-width="3"
              stroke="hsl(220, 43%, 13%)"
            ></g>
          </svg>
          <button
            className="absolute shadow-md animate-wobble left-12 top-0"
            onClick={toggleModal}
          >
            <h1 className="bg-primary rounded-lg border-4 border-white p-2 font-bold text-white">
              See Formal ATS CV
            </h1>
          </button>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white w-screen mx-4 md:w-[800px] h-[80vh] p-6 rounded-lg shadow-lg">
                {/* Your modal content here */}
                <div className="flex justify-between">
                  <h2>Fabyan Yastika ATS CV</h2>
                  <button onClick={toggleModal}>
                    <IoCloseSharp className="bg-primary text-4xl p-2 text-white rounded-full" />
                  </button>
                </div>
                <iframe
                  src={cv}
                  className="w-full h-[90%] pt-4"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          )}
          <div className="bg-[#F0EFEE] shadow-lg relative z-10 overflow-y-auto overflow-x-hidden w-screen md:w-[50%]   h-screen ">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center pl-2">
                <div className="flex gap-2">
                  <div className="bg-primary w-6 h-6 rounded-full"></div>
                  <div className="bg-second w-6 h-6 rounded-full"></div>
                  <div className="bg-third w-6 h-6 rounded-full"></div>
                </div>
                <h1 className="text-slate-600 font-bold text-2xl">
                  My Curriculum Vitae
                </h1>
              </div>
              <div className="flex gap-2 border-2">
                <a href={cv} target="_blank">
                  <MdOutlineFileDownload className="text-4xl border-r-2 border-l-2 border-primary text-primary" />
                </a>
                <Link to="/">
                  <IoCloseSharp className="bg-red-400 relative z-10 text-white text-4xl" />
                </Link>
              </div>
            </div>
            <hr className="border-primary w-full border-t-[10px]  -mt-[2px] relative z-10" />
            <div className="pt-4 flex justify-end">
              <div className="bg-primary w-[90%] mr-4 rounded-3xl h-72 relative">
                <div className="bg-[#fed7aa] w-full h-10 text-slate-700 px-4 rounded-t-3xl  flex items-center justify-between">
                  <div></div>
                  <h1 className="text-center  font-semibold   ">
                    www.fabyanyastika.my.id
                  </h1>
                  <BsZoomIn />
                </div>
                <div className="flex  justify-between gap-1 md:gap-0 ">
                  <div className="bg-grey border-2 -mt-12 border-primary w-32 h-60 rounded-xl -ml-8">
                    <div className="flex justify-end pr-1 pt-1 text-primary">
                      <IoCloseSharp />
                    </div>
                    <div className="grid grid-cols-2 text-slate-700 gap-6 md:gap-2 text-2xl px-4 pt-2">
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <GiArrowCursor />
                      </div>
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <RiCursorLine />
                      </div>
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <FiPenTool />
                      </div>
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <CiText />
                      </div>
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <IoIosSearch />
                      </div>
                      <div className="border-2 w-4 h-4 md:w-10 md:h-10 border-primary p-1">
                        <FaRegHandPaper />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 justify-center">
                      <hr className="border-t-4 mt-4 border-primary w-20" />
                      {/* <img src={qr} className="w-14 grayscale" alt="" />{" "} */}
                      <FaBarcode className="text-5xl text-slate-600" />
                    </div>
                  </div>
                  <div className="pt-4 text-white font-bold">
                    <div className="flex items-center gap-2">
                      <h1 className="text-4xl">Fabyan</h1>{" "}
                      <hr className="border-t-4 rounded-full border-white w-full" />
                    </div>
                    <h1 className="text-2xl">Yastika Permana</h1>
                    <div className="pt-4 flex flex-col gap-2">
                      <div className="flex items-center text-sm gap-2 ">
                        <FiHome />
                        <h1>Jember, Jawa Timur, Indonesia</h1>
                      </div>
                      <div className="flex items-center text-sm gap-2 ">
                        <IoCall />
                        <h1>+62 895-3650-04303</h1>
                      </div>
                      <div className="flex items-center text-sm gap-2 ">
                        <MdEmail />
                        <h1>yastikafabyan2005@gmail.com</h1>
                      </div>
                    </div>
                  </div>
                  <img src={foto} className="w-[160px] -mt-[9px]" alt="" />
                </div>
                <div className="flex gap-6">
                  <div className="bg-grey w-44 md:w-80 border-2 border-slate-200 h-80 -ml-3 mt-4 rounded-3xl">
                    <div className="flex justify-between p-2">
                      <div className="flex gap-1">
                        <div className="bg-primary w-4 border-2 border-slate-900  h-4  rounded-full"></div>
                        <div className="bg-second w-4 border-2 border-slate-900  h-4  rounded-full"></div>
                        <div className="bg-third w-4 border-2 border-slate-900  h-4  rounded-full"></div>
                      </div>
                      <h1 className="font-bold text-sm ">My Skills</h1>
                      <IoCodeSlash />
                    </div>
                    <hr className="border-[1px] border-slate-900 w-full " />

                    <div className="p-2 grid grid-cols-4 gap-3 items-center justify-center text-slate-700">
                      <FaHtml5 className="text-4xl" />
                      <FaCss3Alt className="text-4xl" />
                      <IoLogoJavascript className="text-4xl" />
                      <FaBootstrap className="text-4xl" />
                      <FaLaravel className="text-4xl" />
                      <SiTailwindcss className="text-4xl" />
                      <FaPhp className="text-4xl" />
                      <SiMysql className="text-4xl" />
                      <IoLogoFirebase className="text-4xl" />
                      <SiTypescript className="text-4xl" />
                      <TbBrandNextjs className="text-4xl" />
                      <FaFigma className="text-4xl" />
                    </div>
                    <div className="pt-4 px-2">
                      <div className="flex gap-2">
                        <div className="bg-slate-200 font-bold w-fit h-20 flex items-center justify-center  p-2">
                          <div className="flex flex-col">
                            <h1 className="">Lang-</h1>
                            <h1>uages</h1>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between">
                          <div className="flex items-center gap-20">
                            <h1 className="text-sm">Indonesia</h1>
                            <h1 className="text-[10px]">Native/Fluent</h1>
                          </div>
                          <div className="flex items-center gap-24">
                            <h1 className="text-sm">English</h1>
                            <h1 className="text-[10px]">Intermediate</h1>
                          </div>
                          <div className="flex items-center gap-28">
                            <h1 className="text-sm">Java</h1>
                            <h1 className="text-[10px]">Native/Fluent</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-second to-slate-200 relative w-full h-[700px] md:h-[550px]">
                    <div className="bg-orange-100 relative w-full h-fit">
                      <div className="flex justify-end items-center gap-2 text-xl">
                        <FaMinus />
                        <IoResizeOutline />
                        <IoCloseSharp className="bg-red-400 relative z-10 text-white " />
                      </div>{" "}
                    </div>
                    <div className="p-2">
                      <h1 className="text-xl font-bold">About Me</h1>
                      <RiCursorLine className="absolute  right-0 top-8   text-white text-5xl" />
                      <h1 className="text-slate-700 text-sm ">
                        Graduates of the best Software Engineering Vocational
                        Schools who have a high interest in programming. Have a
                        good understanding of scalable website development,
                        database management, and ui interface design.
                      </h1>
                      <h1 className="text-slate-700 pt-4 text-sm ">
                        Mastering PHP, Javascript. Including its framework:
                        Laravel, React, Next JS and very familiar with HTML, CSS
                        with TailwindCSS as website interface and SQL as
                        database. Have experience working on freelance projects
                        to create websites and develop UI interfaces for web and
                        applications to interface design. Creative and
                        innovative learner with good analytical skills.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="-mt-32 xl:-mt-44 relative z-10">
                  <div className="flex gap-4 md:gap-0">
                    <div className="bg-third -ml-8 w-96 rounded-3xl border-2 border-primary h-fit">
                      <div className="flex justify-center">
                        <div className="flex items-center justify-between px-2 mt-2 bg-orange-900 w-[98%] h-10 rounded-full">
                          <div className="flex gap-1">
                            <div className="bg-white w-4 h-4 rounded-full"></div>
                            <div className="bg-white w-4 h-4 rounded-full"></div>
                            <div className="bg-white w-4 h-4 rounded-full"></div>
                          </div>
                          <h1 className="text-center text-md font-semibold text-white">
                            My Activities & Experience
                          </h1>
                          <IoCloseSharp className="text-white text-2xl" />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex flex-col gap-2">
                          <div className="bg-white w-[85%] rounded-xl px-2  h-fit py-2">
                            <div className="flex justify-between">
                              <h1 className="text-sm font-bold">
                                Credipush Studio - Web Designer
                              </h1>
                              <h1 className="text-sm bg-primary px-2 text-white">
                                Now
                              </h1>
                            </div>
                            <h1 className="text-sm">
                              Become a designer working remotely who accepts
                              overseas clients with a creative agency.
                            </h1>
                          </div>

                          <div className="bg-white w-[85%] rounded-xl px-2  h-fit py-2">
                            <div className="flex justify-between">
                              <h1 className="text-sm font-bold">
                                AboutMalang.com - Content Creator
                              </h1>
                              <h1 className="text-sm">2023</h1>
                            </div>
                            <h1 className="text-sm">
                              Become a content creator who is tasked with
                              creating trending and fact-based content.
                            </h1>
                          </div>
                          <div className="bg-white w-[85%] rounded-xl px-2  h-fit py-2">
                            <div className="flex justify-between">
                              <h1 className="text-sm font-bold">
                                CV Birudeun Creative -Visual Creative Department
                                Staff
                              </h1>
                              <h1 className="text-sm">2023</h1>
                            </div>
                            <h1 className="text-sm">
                              Create social media posts for clients and increase
                              social media engagement.
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="bg-white w-[54%] relative h-fit md:h-[400px] pb-20 md:pb-4 rounded-3xl border-2 border-slate-300 mt-20 -ml-12">
                      <div className="bg-edu w-full h-[400px] bg-cover bg-center">
                        <h1 className="absolute right-0 -rotate-[20deg] text-primary font-black text-[100px] -top-12">
                          F
                        </h1>
                        <div className="flex flex-col p-2 text-primary text-4xl font-bold">
                          <h1>EDU-</h1>
                          <h1>CATION</h1>
                        </div>
                        <div className="pt-2 px-2">
                          <div className="flex gap-2 items-center">
                            <div className="bg-second p-2">
                              <div className="flex text-center -space-y-4 flex-col text-slate-500 font-bold text-xl">
                                <h1>2021</h1>
                                <h1>-</h1>
                                <h1>2023</h1>
                              </div>
                            </div>
                            <h1 className="text-sm">
                              Graduated From SMKN 5 Malang With{" "}
                              <span className="bg-primary text-white px-2">
                                Best
                              </span>
                              in software engineering.
                            </h1>
                          </div>
                          <div className="my-2 flex justify-center">
                            <hr className="w-[80%] border-t-4 border-primary" />
                          </div>
                          <div className="flex gap-2 items-center">
                            <h1 className="text-sm">
                              Junior High School at SMPN 1 Sidoarjo
                            </h1>
                            <div className="bg-second p-2">
                              <div className="flex text-center -space-y-4 flex-col text-slate-500 font-bold text-xl">
                                <h1>2019</h1>
                                <h1>-</h1>
                                <h1>2021</h1>
                              </div>
                            </div>
                          </div>
                          <div className="my-2 flex justify-center">
                            <hr className="w-[80%] border-t-4 border-primary" />
                          </div>
                          <div className="flex gap-2 items-center">
                            <div className="bg-second p-2">
                              <div className="flex text-center -space-y-4 flex-col text-slate-500 font-bold text-xl">
                                <h1>2013</h1>
                                <h1>-</h1>
                                <h1>2019</h1>
                              </div>
                            </div>
                            <h1 className="text-sm">
                              Elementary School In SDN Kebonagung 2
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-2 md:-mt-10 relative z-10 flex justify-end">
                    <div className="flex gap-20 w-full items-center justify-end">
                      <FaArrowDownLong className="animate-bounce text-7xl" />
                      <div className="bg-gradient-to-r from-primary to-[#a3ccf4] md:w-3/4 h-fit">
                        <div className="bg-or w-full h-full bg-cover bg-center">
                          <div className="flex gap-4">
                            <div className="bg-second text-[12px] font-bold text-center w-fit h-full p-2">
                              <h1>O</h1>
                              <h1>R</h1>
                              <h1>G</h1>
                              <h1>A</h1>
                              <h1>N</h1>
                              <h1>I</h1>
                              <h1>Z</h1>
                              <h1>A</h1>
                              <h1>T</h1>
                              <h1>I</h1>
                              <h1>O</h1>
                              <h1>N</h1>
                            </div>
                            <div className="p-4">
                              <div className="bg-white/30 text-white backdrop-blur-sm w-80 h-full p-2">
                                <h1 className="font-bold ">
                                  IDEAL ASIA - 2024
                                </h1>
                                <h1 className="text-sm">
                                  IDEAL (Indonesian Development Education and
                                  Leadership) is a non-governmental organization
                                  that focuses on improving and developing the
                                  potential of Indonesian youth through
                                  education and leadership development. I be{" "}
                                  <span className="bg-primary px-2">
                                    content writer staff
                                  </span>{" "}
                                  at this organization!
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pb-4 pt-4 -ml-6">
                    <div className="bg-yellow-200 p-2 w-full h-fit">
                      <div className="flex bg-blue-200 px-4 py-2 rounded-full items-center justify-between">
                        <div className="flex">
                          <div className="bg-white w-4 h-4 rounded-full border-2 border-slate-900"></div>
                          <div className="bg-white w-4 h-4 rounded-full border-2 border-slate-900"></div>
                          <div className="bg-white w-4 h-4 rounded-full border-2 border-slate-900"></div>
                        </div>
                        <div>
                          <h1 className="font-bold text-slate-700">
                            Certificate & Achievements
                          </h1>
                        </div>{" "}
                        <FaTrophy />
                      </div>
                      <div className="pt-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4">
                            <div className="bg-white w-fit h-fit rounded-xl relative">
                              <h1 className="text-sm hidden md:block bg-white/20 backdrop-blur-md bottom-0 text-white font-bold px-2 text-center absolute right-0">
                                Best Graduate at SMKN 5 Malang
                              </h1>
                              <img
                                src={best}
                                className="w-48 rounded-xl"
                                alt=""
                              />
                            </div>
                            <div className="bg-white w-fit h-fit rounded-xl relative">
                              <img
                                src={digital}
                                className="w-[240px] rounded-xl"
                                alt=""
                              />
                            </div>
                            <div className="bg-white w-fit h-fit rounded-xl relative">
                              <img
                                src={terbaik}
                                className="w-[240px] rounded-xl"
                                alt=""
                              />
                            </div>
                          </div>
                          <ul className="flex flex-col gap-2 text-sm font-semibold">
                            <li>
                              4. Selected to represent the school in the
                              Artificial Intelligence LKS
                            </li>
                            <li>
                              5. Parallel School Champion of Software Engineer
                              at SMKN 5 Malang 2023
                            </li>
                            <li>6. Google Analytics Academy by Google</li>
                            <li>
                              7. Online Child Safeguarding Training by UNICEF
                            </li>
                            <li>
                              8. Decolonizing Global Health by Harvard Medical
                              School
                            </li>
                            <li>
                              Soft Skills: Good algorithm, communication, enjoy
                              learning, able to understand difficult things
                            </li>
                            <li>
                              Interest: Web developer, UI UX designer, learn
                              about mobile apps development including IOS and
                              Android
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className=" md:hidden shadow-md animate-wobble"
                    onClick={toggleModal}
                  >
                    <h1 className="bg-primary rounded-lg border-4 border-white p-2 font-bold text-white">
                      See Formal ATS CV
                    </h1>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="absolute right-12 hidden md:flex top-4">
            <div className="flex-col">
              <div className="flex flex-col">
                <img
                  src={inovator}
                  className="w-44 h-44 hover:rounded-3xl duration-200  hover:border-4 border-white relative z-10 object-cover object-center"
                  alt=""
                />
                <hr className="border-t-4  my-4 rotate-90 border-white " />
              </div>
              <div className="flex flex-col">
                <img
                  src={kemenhub}
                  className="w-44 h-44  hover:rounded-3xl duration-200  hover:border-4 border-white relative z-10 object-cover object-center"
                  alt=""
                />
                <hr className="border-t-4  my-4 rotate-90 border-white " />
              </div>
              <div className="flex flex-col">
                <img
                  src={kemenhubb}
                  className="w-44 h-44  hover:rounded-3xl duration-200  hover:border-4 border-white relative z-10 object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cv;
