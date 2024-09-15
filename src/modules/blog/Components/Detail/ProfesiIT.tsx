import AOS from "aos";
import "aos/dist/aos.css";

import profesi_main from "../../../../../public/assets/image/blog/profesi-it/profesi_main.jpg";

import cat from "../../../../../public/assets/image/blog/etikaprofesi1/cat.png";

import "swiper/css";
import "swiper/css/pagination";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";
import { FaArrowDownLong } from "react-icons/fa6";

const ProfesiIT = () => {
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
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
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
            <img
              loading="lazy"
              src={profesi_main}
              className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
              alt=""
            />
            <div className="bg-gradient-to-l from-white to-[#7695FF]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#7695FF] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
                >
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg hover:scale-110 duration-150 w-full h-full ">
                      <BsArrowLeftShort />
                    </div>
                    <div>
                      <h1 className="ml-2 font-semibold text-nowrap">
                        Etika Profesi
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-10">
                <div className="md:flex justify-center items-center md:space-x-20">
                  <h1
                    data-aos="fade-right"
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#7695FF] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Profesi di Bidang IT?
                  </h1>
                  <div className="flex items-center justify-center space-x-2 md:hidden py-2">
                    <h1 className="text-[#4F378B]">Admin</h1>
                    <h1 className="text-slate-800">-</h1>
                    <h1 className="text-slate-800">Senin, 6 November 2023</h1>
                  </div>
                  <img
                    loading="lazy"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    src={profesi_main}
                    className=" md:hidden rounded-lg "
                    alt=""
                  />
                  <h1 className="text-[10px] text-white text-center mt-1 md:hidden">
                    KiriminAja: Aplikasi Kirim Paket #1 di Indonesia
                  </h1>

                  <div>
                    <img
                      loading="lazy"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      src={profesi_main}
                      className="w-96 hidden md:flex rounded-xl animate-headShake"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 md:border-[20px]  border-[#7695FF]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#7695FF] duration-150 border-[#7695FF]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#7695FF] font-bold text-2xl md:text-4xl">
                        #MateriDuaKeren
                      </span>
                      <h1 className="text-xl  mt-2">
                        Seperti dalam pertemuan lalu, profesi merupakan sebutan
                        pada seseorang yang memiliki keahlian khusus dan
                        persiapan akademik yang panjang.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Belajar mengenai Profesi bidang IT di {""}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#7695FF] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        menjadikan saya semakin aware terhadap beragam
                        perkembangan pekerjaan yang ada di bidang IT.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Pada materi profesi di bidang iT kemarin,saya telah mengenal
                    beragam pekerjaan yang bisa difokuskan agar dapat menunjang
                    masa depan nanti. Yang pastinya membutuhkan pengetahuan
                    advance di bidang yang sesuai dengan profesinya. Entah itu
                    software engineer, programer, UI Designer, dan sebagainya..
                    <b></b>
                  </p>
                  <p>
                    Yang saya ketahui, seorang profesionalitas memiliki 3
                    persyaratan penting yang wajib untuk diketahui. Mulai dari
                    pendidikan, pelatihan, dan skill, serta seorang profesional
                    di bidang IT harus terus menyesuaikan diri dengan standar
                    teknis modern sekarang.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>
                    <i>Open Minded</i>
                  </b>{" "}
                  terhadap teknologi baru adalah kunci profesi di bidang IT.
                  Kamu juga harus memiliki hubungan baik dan relasi yang luas.
                </p>

                <h1 className="font-bold" data-aos="fade-right">
                  Profesionalitas Pekerja di Bidang IT
                </h1>
                <h1 data-aos="fade-left">
                  Seseorang yang memiliki profesi di bidang IT harus ditandai
                  dengan penyesuaian terhadap etika dan standar teknis. Dengan
                  perubahan yang cepat dan luas, profesi di bidang IT semakin
                  dituntut untuk terus belajar hal bau, upgrade keterampilan,
                  dan harus mampu beradaptasi.
                </h1>
                <div className="flex justify-center items-center font-bold">
                  <div>
                    <img
                      loading="lazy"
                      src="../../../assets/image/blog/detail/think.png"
                      className="w-60"
                      alt=""
                    />
                  </div>
                  <h1 className="text-4xl">
                    Ciri-ciri profesionalis di bidang IT apa aja?
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>
                      Kode etik profesi memiliki pengaruh yang sangat penting
                      dalam hal pengaturan pekerjaan dunia profesional, antara
                      lain:
                    </h1>
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src="../../../assets/image/blog/detail/seru.png "
                      className="w-20 animate-pulse"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="md:flex space-y-2 md:space-y-0  md:space-x-5 justify-center">
                    <div className="bg-[#7695FF] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#7695FF] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mempunyai ketrampilan yang tinggi di suatu bidang serta
                        kemahiran yang diperlukan dalam profesinya.
                      </h1>
                    </div>
                    <div className="bg-[#7695FF] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#7695FF] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Mempunyai ilmu dan pengalaman serta kecerdasan dalam
                        menganalisis masalah dan tepat serta cermat dalam
                        mengambil keputusan terbaik.
                      </h1>
                    </div>
                    <div className="bg-[#7695FF] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#7695FF] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mempunyai sikap berorientasi ke depan sehingga punya
                        kemampuan antisipasi perkembangan teknologi.
                      </h1>
                    </div>
                    <div className="bg-[#7695FF] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#7695FF] text-center rounded-lg font-bold">
                        <h1>4</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mempunyai sikap mandiri berdasarkan keyakinan akan
                        kemampuan pribadi serta terbuka menyimak dan menghargai
                        pendapat orang lain.
                      </h1>
                    </div>
                  </div>
                </div>
                <h1>
                  <b>Jenis Profesi di Bidang IT</b>
                  <p>
                    Di bidang IT sendiri, ternyata sangat banyak bidang profesi
                    yang bisa dipilih dan dikuasasi, pastinya dengan perbedaan
                    tools yang digunakan juga.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>Software Engineering </p>
                    </div>
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>Data & Business</p>
                    </div>
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>IT Engineer</p>
                    </div>
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>IT Management</p>
                    </div>
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>IT Operational</p>
                    </div>
                    <div className="bg-[#7695FF] flex justify-center w-fit p-4 rounded-md">
                      <p>Dan lainnya lagi...</p>
                    </div>
                  </div>
                </h1>
                <hr className="border-2" />
                <div className="mt-40">
                  <div className="relative mt-20">
                    <h1 className="text-center text-xl">
                      Dari semua profesi di bidang IT, saya memiliki impian
                      untuk menjadi seorang...
                    </h1>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex flex-col items-center gap-4 justify-center">
                    <div className="bg-[#7695FF] w-fit p-2 text-white rounded-md">
                      Fullstack Website Developer
                    </div>
                    <FaArrowDownLong color="#7695FF" className="text-2xl" />
                    <div className="bg-[#7695FF] w-fit p-2 text-white rounded-md">
                      IT Startup Founder
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#7695FF] to-[#2350e5] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className=" w-[50rem] flex items-center justify-center h-fit p-2">
                    {" "}
                    <img src={cat} alt="Cat" className="rounded-md" />
                  </div>
                  <div className="space-y-5">
                    <h1>
                      Saya memiliki pandangan untuk mengembangkan bisnis di
                      bidang IT yaitu membuat sebuah startup yang bergerak di
                      bidang teknologi, bertujuan untuk membantu pebisnis
                      mencapai SGDs (Sustainable Development Goals) 17 yaitu{" "}
                      <i>Partnership For The Goals</i>. Nantinya, ini akan
                      menjadi support untuk menjadikannya online serta dikenal
                      lebih banyak orang dan akhirnya tujuan bersama yang
                      disepakati tercapai.
                    </h1>
                  </div>
                </div>
                <div className="relative z-20 flex justify-center">
                  <div className="bg-white -mt-10 w-[50rem] h-fit shadow-lg rounded-md p-4">
                    <b>Alasan ingin menjadi seorang startup founder?</b>
                    <br />
                    <p>
                      Setelah bekerja semenjak SMK hingga perkuliahan yang masih
                      semester 1 ini, mulai dari content writer, ui designer,
                      hingga freelance di bidang website development. Saya
                      menyadari bahwa itu semua bisa saya lakukan dengan mencoba
                      membangun bisnis sendiri. Saya ingin membantu banyak pihak
                      untuk berkolaborasi dan meningkatkan bisnisnya
                      masing-masing dengan adanya perkembangan teknologi serta
                      persaingan bisnis yang sehat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative  text-slate-700  text-2xl px-4 md:px-16">
                <div className="mt-4 space-y-5 text-center">
                  <h1>
                    Terima kasih sudah menyimak & <i>Have a Great Dayy!!</i>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProfesiIT;
