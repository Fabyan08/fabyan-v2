import React from "react";
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
import qr from "../../../../public/assets/image/cv/qr.svg";
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
import { FaRegFileExcel } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoResizeOutline } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import best from "../../../../public/assets/image/cv/best.jpg";
import { FaTrophy } from "react-icons/fa";
import digital from "../../../../public/assets/image/cv/digital.jpg";
import GA from "../../../../public/assets/image/cv/GA.jpg";
import terbaik from "../../../../public/assets/image/cv/terbaik.jpg";

const Cv = () => {
  return (
    <section
      id="cv"
      className="bg-cv w-full h-screen overflow-hidden bg-cover flex justify-center bg-center"
    >
      <div className="bg-[#F0EFEE] overflow-y-auto overflow-x-hidden w-[50%]   h-screen ">
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
            <MdOutlineFileDownload className="text-4xl border-r-2 border-l-2 border-primary text-primary" />
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
            <div className="flex justify-between ">
              <div className="bg-grey border-2 -mt-12 border-primary w-32 h-60 rounded-xl -ml-8">
                <div className="flex justify-end pr-1 pt-1 text-primary">
                  <IoCloseSharp />
                </div>
                <div className="grid grid-cols-2 text-slate-700 gap-2 text-2xl px-4 pt-2">
                  <div className="border-2 border-primary p-1">
                    <GiArrowCursor />
                  </div>
                  <div className="border-2 border-primary p-1">
                    <RiCursorLine />
                  </div>
                  <div className="border-2 border-primary p-1">
                    <FiPenTool />
                  </div>
                  <div className="border-2 border-primary p-1">
                    <CiText />
                  </div>
                  <div className="border-2 border-primary p-1">
                    <IoIosSearch />
                  </div>
                  <div className="border-2 border-primary p-1">
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
              <div className="bg-grey w-80 border-2 border-slate-200 h-80 -ml-3 mt-4 rounded-3xl">
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
                      <div className="flex items-center gap-20">
                        <h1 className="text-sm">Indonesia</h1>
                        <h1 className="text-[10px]">Native/Fluent</h1>
                      </div>
                      <div className="flex items-center gap-20">
                        <h1 className="text-sm">Indonesia</h1>
                        <h1 className="text-[10px]">Native/Fluent</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b from-second to-slate-200 relative w-full h-[550px]">
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
                    Best Software Engineering graduates Vocational High School
                    who have a high interest in programming. Have a good
                    understanding of website development and database
                    management.
                  </h1>
                  <h1 className="text-slate-700 pt-4 text-sm ">
                    Skilled in PHP, Javascript including the framework Laravel,
                    React, Next JS and familiar with HTML, CSS wih TailwindCSS
                    as a website body also SQL as database. Have experience
                    working on freelance projects to create website and develop
                    UI interfaces for web and applications. Creative and
                    innovative learner with good analytical skills.
                  </h1>
                </div>
              </div>
            </div>
            <div className="-mt-32 xl:-mt-44 relative z-10">
              <div className="flex">
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
                          Become a content creator who is tasked with creating
                          trending and fact-based content.
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
                <div className="bg-white w-[54%] relative h-[400px] pb-4 rounded-3xl border-2 border-slate-300 mt-20 -ml-12">
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
                          Graduated From SMKN 5 Malang With{" "}
                          <span className="bg-primary text-white px-2">
                            Best
                          </span>
                          in software engineering.
                        </h1>
                        <div className="bg-second p-2">
                          <div className="flex text-center -space-y-4 flex-col text-slate-500 font-bold text-xl">
                            <h1>2021</h1>
                            <h1>-</h1>
                            <h1>2023</h1>
                          </div>
                        </div>
                      </div>
                      <div className="my-2 flex justify-center">
                        <hr className="w-[80%] border-t-4 border-primary" />
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className=" -mt-10 relative z-10 flex justify-end">
                <div className="flex gap-20 w-full items-center justify-end">
                  <FaArrowDownLong className="animate-bounce text-7xl" />
                  <div className="bg-gradient-to-r from-primary to-[#a3ccf4] w-3/4 h-fit">
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
                            <h1 className="font-bold ">IDEAL ASIA - 2024</h1>
                            <h1 className="text-sm">
                              IDEAL (Indonesian Development Education and
                              Leadership) is a non-governmental organization
                              that focuses on improving and developing the
                              potential of Indonesian youth through education
                              and leadership development. I be{" "}
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
              <div className="pb-96 pt-4 -ml-6">
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
                          <h1 className="text-sm bg-white/20 backdrop-blur-md bottom-0 text-white font-bold px-2 text-center absolute right-0">
                            Best Graduate at SMKN 5 Malang
                          </h1>
                          <img src={best} className="w-48 rounded-xl" alt="" />
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
                        <li>4. </li>
                        <li>5. </li>
                        <li>6. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Cv;
