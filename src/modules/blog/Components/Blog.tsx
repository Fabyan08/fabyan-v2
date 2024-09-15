import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import foto from "../../../../public/assets/image/foto.jpg";
import unej from "../../../../public/assets/image/unej.png";

import { FiArrowRight } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import Loading from "../../../Components/Loading/Loading";
import { IoCloseCircleOutline } from "react-icons/io5";

import etikaprofesi1 from "../../../../public/assets/image/blog/etikaprofesi1/main.jpg";
import profesi_main from "../../../../public/assets/image/blog/profesi-it/profesi_main.jpg";

import { useEffect, useState } from "react";
const Blog = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
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
        <>
          <div
            className="bg-black/40 fixed z-[999] w-full h-full"
            style={{ display: isVisible ? "block" : "none" }}
          >
            <div className="md:absolute mt-40 right-16 md:right-10 bottom-10">
              <div className="flex flex-col items-center gap-10">
                <IoCloseCircleOutline
                  onClick={handleClose}
                  className="text-white"
                  size={40}
                />
                <div className="bg-white w-60 h-fit py-4 rounded-md flex justify-center items-center flex-col gap-4 font-bold">
                  <a href="https://unej.ac.id" target="_blank">
                    <img src={unej} alt="unej" className="w-40" />
                  </a>
                  <div className="text-center">
                    <h1>Fabyan Yastika Permana (242410101041)</h1>
                  </div>
                  <h1>Sistem Informasi</h1>
                  <p className="text-sm text-center px-4">
                    Get to know more about my university.{" "}
                    <a
                      href="https://unej.ac.id/"
                      target="_blank"
                      className="underline"
                    >
                      The University Of Jember
                    </a>
                  </p>
                </div>
                <img
                  src={foto}
                  alt="My Photo"
                  className="w-20 rounded-full hover:w-40 duration-200"
                />
              </div>
            </div>
          </div>
          <div>
            <section
              id="blog"
              className="relative bg-gradient-to-r from-primary w-full h-full pb-10"
            >
              <div className="bg-gradient-to-t absolute z-20 from-primary w-full h-full"></div>
              <div className="bg-gradient-to-r absolute z-20 from-primary to-second/30 w-full h-full"></div>

              <div className="relative z-40 mx-4 ">
                <div className="flex space-x-5 text-lg font-bold pt-8  md:pt-10 md:pl-20">
                  <Link
                    to="/"
                    className="text-slate-800 hover:bg-primary hover:text-white hover:px-2 rounded-lg duration-150 hover:shadow-xl"
                  >
                    Home
                  </Link>
                  <h1>{">"}</h1>
                  <Link
                    to="/blog"
                    className="text-white hover:text-primary hover:scale-110 duration-150 hover:bg-white hover:px-2 rounded-lg"
                  >
                    Blog
                  </Link>
                </div>
                <div className="md:flex justify-between items-center">
                  <div className="pt-10 md:mx-20 md:pt-10">
                    <h1 className="text-white text-6xl font-bold">
                      Welcome To My Blog
                    </h1>
                    <h1 className="text-white text-2xl font-semibold mt-6">
                      Fabyan Yastika {"</Permana>"}
                    </h1>
                    <p className="text-slate-300 text-xl font-semibold md:w-96">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, neque?
                    </p>
                  </div>
                  <div>
                    <img
                      src="../../../assets/image/blog/blog.gif"
                      loading="lazy"
                      className="pr-20 w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white  flex items-center justify-center shadow-xl rounded-full w-[900px] h-14  space-x-4">
                    <ul className="flex space-x-2  md:space-x-4 items-center justify-center font-semibold text-sm md:text-md">
                      <li>
                        <a
                          href=""
                          className="rounded-full hover:bg-primary hover:text-white text-slate-500 hover:px-4 py-2 duration-150 "
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="rounded-full hover:bg-primary hover:text-white text-slate-500 hover:px-4 py-2 duration-150 "
                        >
                          Development
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="rounded-full hover:bg-primary hover:text-white text-slate-500 hover:px-4 py-2 duration-150 "
                        >
                          Technologies
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="rounded-full hover:bg-primary hover:text-white text-slate-500 hover:px-4 py-2 duration-150 "
                        >
                          Socmed
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="rounded-full hover:bg-primary hover:text-white text-slate-500 hover:px-4 py-2 duration-150 "
                        >
                          Business
                        </a>
                      </li>
                      <hr className="h-10 hidden md:flex rounded-xl border-2 border-slate-400" />
                      <form action="">
                        <input
                          type="text"
                          placeholder="Search"
                          className="hidden md:flex w-80 h-10 rounded-full px-2 focus:border-primary focus:outline-none focus:shadow-xl border-primary border-2 hover:scale-[1.05] duration-150"
                        />
                      </form>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="absolute z-20 bg-slate-100 w-full px-4 md:px-24 h-[2000px]  pt-20">
              <div className="flex items-center space-x-3">
                <hr className="border-2 rounded-md border-primary h-5 " />
                <h1 className="text-2xl font-bold text-slate-600">Featured</h1>
              </div>

              <div className="mt-10 md:flex justify-between space-x-4">
                <img
                  src="../../../assets/image/blog/detail/bg.jpg"
                  className="w-[500px] rounded-lg hover:border-4 duration-150 hover:border-primary"
                  alt=""
                />
                <div className="hidden md:flex flex-col justify-between">
                  <div>
                    <h1 className="font-bold">01.</h1>
                  </div>
                  <div>
                    <h1 className="font-bold hidden lg:flex">02.</h1>
                  </div>
                </div>

                <div className="flex-col justify-between flex mt-4 md:mt-0">
                  <div className="flex space-x-4">
                    <a className="text-primary font-bold">Featured</a>
                    <h1>∙</h1>
                    <div className="flex space-x-1 items-center">
                      <BiTimeFive />
                      <h1>Any days ago</h1>
                    </div>
                  </div>
                  <Link
                    to="/detail/qris-indonesia"
                    className="font-bold text-xl md:text-3xl hover:text-primary"
                  >
                    Transaksi Lintas Negara? Bukan Jadi Masalah! Yuk Kenalan....{" "}
                  </Link>
                  <div className="flex mt-2 md:mt-0 bg-primary w-fit h-fit items-center text-center text-white text-xl hover:scale-110 duration-150 hover:bg-white hover:text-primary hover:shadow-xl font-bold rounded-full p-2 space-x-2">
                    <Link to="/detail/qris-indonesia">Read More</Link>
                    <FiArrowRight />
                  </div>

                  <div className="mt-10 md:hidden space-y-4">
                    <Link to="/detail/kirimin-aja-indonesia">
                      <img
                        src="../../../assets/image/blog/kiriminaja/head1.jpg"
                        className="rounded-lg -ml-2"
                        alt=""
                      />
                      <div className="flex space-x-4">
                        <a className="text-new font-bold">Featured</a>
                        <h1>∙</h1>
                        <div className="flex space-x-1 items-center">
                          <BiTimeFive />
                          <h1>7 November 2023</h1>
                        </div>
                      </div>
                      <Link
                        to="/detail/kirimin-aja-indonesia"
                        className="font-bold text-xl md:text-3xl hover:text-new"
                      >
                        Makin Terhubung Pakai KiriminAja....
                      </Link>
                      <div className="flex mt-2 md:mt-0 bg-new w-fit h-fit items-center text-center text-white text-xl hover:scale-110 duration-150 hover:bg-white hover:text-new hover:shadow-xl font-bold rounded-full p-2 space-x-2">
                        <Link to="/detail/kirimin-aja-indonesia">
                          Read More
                        </Link>
                        <FiArrowRight />
                      </div>
                    </Link>
                  </div>

                  <div className="pt-4 hidden space-x-5 lg:flex items-center">
                    <div>
                      <img
                        src="../../../assets/image/blog/kiriminaja/head1.jpg"
                        className="w-60"
                        alt=""
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex space-x-4">
                        <a className="text-new font-bold">Technologies</a>
                        <h1>∙</h1>
                        <div className="flex space-x-1 items-center">
                          <BiTimeFive />
                          <h1>7 November 2023</h1>
                        </div>
                      </div>
                      <div className="flex">
                        <a
                          href="/detail/kirimin-aja-indonesia"
                          className="hover:text-new font-bold text-3xl"
                        >
                          Makin Terhubung Pakai KiriminAja....
                        </a>{" "}
                      </div>
                      <div className="flex mt-2 md:mt-0 bg-new w-fit h-fit items-center text-center text-white text-xl hover:scale-110 duration-150 hover:bg-white hover:text-new hover:shadow-xl font-bold rounded-full p-2 space-x-2">
                        <Link to="/detail/kirimin-aja-indonesia">
                          Read More
                        </Link>
                        <FiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="flex items-center space-x-3">
                  <hr className="border-2 rounded-md border-primary h-5 " />
                  <h1 className="text-2xl font-bold text-slate-600">
                    Must Read
                  </h1>
                </div>{" "}
                <div className="grid md:grid-cols-3 space-y-10 md:space-y-0 mt-10">
                  <Link
                    to="/detail/2-profesi-it"
                    className=" w-[22rem] space-y-2 hover:scale-110 md:px-0 px-5 duration-150 hover:bg-blue-100  hover:p-2 hover:rounded-xl"
                  >
                    <img
                      src={profesi_main}
                      alt=""
                      className="w-full h-52 object-cover rounded-md"
                    />
                    <h1 className="text-md text-primary font-bold">
                      Etika Profesi
                    </h1>
                    <h1 className="text-2xl font-bold text-slate-900">
                      Profesi Bidang IT
                    </h1>
                    <h1 className="text-slate-800">
                      Profesi di bidang IT memang menjadi salah satu bidang yang
                      banyak diminati...
                      <a href="" className="text-primary">
                        Read More
                      </a>
                    </h1>

                    <hr className="w-full h-2 border-t-2  border-slate-200" />
                    <div className="flex items-center justify-start space-x-4">
                      <h1>15-09-2024</h1>
                      <h1>∙</h1>
                    </div>
                  </Link>
                  <Link
                    to="/detail/1-etika-profesi"
                    className="w-[22rem] space-y-2 hover:scale-110 md:px-0 px-5 duration-150 hover:bg-blue-100  hover:p-2 hover:rounded-xl"
                  >
                    <img
                      src={etikaprofesi1}
                      alt=""
                      className="rounded-md w-full h-52 object-cover"
                    />
                    <h1 className="text-md text-primary font-bold">
                      Etika Profesi
                    </h1>
                    <h1 className="text-2xl font-bold text-slate-900">
                      Etika Profesi 1
                    </h1>
                    <h1 className="text-slate-800">
                      Profesi adalah pekerjaan yang dalam melaksanakan tugasnya
                      memerlu...{" "}
                      <a href="" className="text-primary">
                        Read More
                      </a>
                    </h1>

                    <hr className="w-full h-2 border-t-2  border-slate-200" />
                    <div className="flex items-center justify-start space-x-4">
                      <h1>09-09-2024</h1>
                      <h1>∙</h1>
                    </div>
                  </Link>

                  <div className=" w-[22rem] space-y-2 hover:scale-110 md:px-0 px-5 duration-150 hover:bg-blue-100  hover:p-2 hover:rounded-xl">
                    <img
                      src="../../../assets/image/blog/detail/nfound.png"
                      alt=""
                    />
                    <h1 className="text-md text-primary font-bold">
                      Development
                    </h1>
                    <h1 className="text-2xl font-bold text-slate-900">
                      Coming Soon...
                    </h1>
                    <h1 className="text-slate-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, tenetur...{" "}
                      <a href="" className="text-primary">
                        Read More
                      </a>
                    </h1>

                    <hr className="w-full h-2 border-t-2  border-slate-200" />
                    <div className="flex items-center justify-start space-x-4">
                      <h1>15-11-2022</h1>
                      <h1>∙</h1>
                      <h1 className="flex items-center space-x-10">
                        <AiFillEye /> (120)
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex my-20 items-center justify-center">
                <button className="bg-primary animate-pulse hover:scale-110 duration-150 text-white w-40 h-full rounded-lg p-2 flex items-center justify-center">
                  <AiOutlineLoading3Quarters className="mr-2 animate-spin " />
                  Load More
                </button>
              </div>

              <div className="md:flex mt-20 md:px-24 items-center justify-center px-4">
                <div className="relative w-full items-center justify-center bg-gradient-to-r from-primary via-primary to-blue-400 h-[400px] md:h-[500px] rounded-[100px] border-[20px] shadow-2xl shadow-biru border-white text-white text-center py-16 md:py-32">
                  <div className="flex justify-center items-center">
                    <img
                      src="../../../assets/image/Foto.jpg"
                      className="w-20 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="font-bold font-figtree p-4 text-xl md:text-4xl">
                    <h1 className="mt-2">Wanna Know More About Me?</h1>
                  </div>
                  <div className="hidden md:inline">
                    <h1>Find Me on my another online media article here!</h1>
                  </div>
                  <div className="mt-8 animate-bounce">
                    <a
                      className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-biru text-white border-white border-4  hover:rotate-0 hover:scale-125 hover:bg-blue-300 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200"
                      href="https://www.aboutmalang.com/author/23196/Fabyan-Yastika-Permana"
                    >
                      Let&apos;s Go{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <BackToTopButton /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
