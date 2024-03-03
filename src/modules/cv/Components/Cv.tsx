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

const Cv = () => {
  return (
    <section
      id="cv"
      className="bg-cv w-full h-screen overflow-hidden bg-cover flex justify-center bg-center"
    >
      <div className="bg-[#F0EFEE] overflow-auto w-[50%]  pb-[800px] h-screen ">
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
              <div className="bg-second w-full h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cv;
