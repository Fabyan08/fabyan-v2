import AOS from "aos";
import "aos/dist/aos.css";



import "swiper/css";
import "swiper/css/pagination";

import kode_etik from "../../../../../public/assets/image/blog/kodeetik/main.jpg";


import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const KodeEtik = () => {
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
              src={kode_etik}
              className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
              alt=""
            />
            <div className="bg-gradient-to-l from-white to-[#16423C]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#16423C] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#16423C] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Kode Etik Profesi
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
                    src={kode_etik}
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
                      src={kode_etik}
                      className="w-96 hidden md:flex rounded-xl animate-headShake"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 md:border-[20px]  border-[#16423C]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#16423C] duration-150 border-[#16423C]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#16423C] font-bold text-2xl md:text-4xl">
                        #MateriTigaMantap
                      </span>
                      <h1 className="text-xl  mt-2">
                        Melalui video dan materi yang dibagikan di MMP, kode
                        etik dalam berprofesi merupakan hal krusial yang berlaku
                        di tempat kerja.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Pak Fahrobby, selaku dosen pengajar di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#16423C] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        sudah menjelaskan mengenai materi Kode Etik yang saya
                        pelajari secara mandiri melalui link YouTube.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Kode etik profesi di sini dimaksudkan suatu etika yang telah
                    disepakati oleh suatu kelompok masyarakat sebagai landasan
                    tingkah laku sehari-hari.
                  </p>
                  <p>
                    Dapat juga diartikan sebagai pola aturan, tata cara, tanda,
                    pedoman etis dalam melakukan suatu kegiatan atau pekerjaan.
                    Menurut UU No. 8 tentang Pokok-Pokok Kepegawaian, kode etik
                    profesi adalah pedoman sikap, tingkah laku dan perbuatan
                    dalam melaksanakan tugas dalam kehidupan sehari-hari.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Tujuan Utama Kode Etik</b> yaitu agar seorang profesional
                  memberikan jasa sebaik-baiknya pada pemakai jasa atau
                  nasabahnya.
                </p>

                <h1 className="font-bold" data-aos="fade-right">
                  Apa Saja Prinsip yang Ada?
                </h1>
                <h1 data-aos="fade-left">
                  Memiliki rasa tanggung jawab atas dampak sekitar dari
                  profesimu (Prinsip Tanggung Jawab), menuntut seseorang mampu
                  jalani profesinya tanpa merugikan orang lain (Prinsip
                  Keadilan), didasari oleh kebutuhan profesional untuk kebebasan
                  sepenuhnya (Prinsip Otonomi), menjaga kepentingan profesinya
                  (Prinsip Integritas Moral).
                </h1>
                <h1>
                  <b>Sifat dan Orientasi Hendaknya:</b>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Singkat</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Sederhana</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Jelas & Konsisten</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Masuk Akal</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Dapat Diterima</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Praktis dan Dapat Dilaksanakan</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Komprehensif dan Lengkap</p>
                    </div>
                    <div className="bg-[#16423C] flex justify-center w-fit p-4 rounded-md">
                      <p>Positif dalam Formulasinya</p>
                    </div>
                  </div>
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
                  <h1 className="text-4xl">Fungsi Kode Etik Apasih?</h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>Kode etik profesi dapat:</h1>
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
                    <div className="bg-[#16423C] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#16423C] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Memberikan pedoman bagi setiap anggota profesi tentang
                        prinsip profesionalitas yang digariskan
                      </h1>
                    </div>
                    <div className="bg-[#16423C] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#16423C] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Sarana kontrol sosial bagi masyarakat atas profesi yang
                        bersangkutan
                      </h1>
                    </div>
                    <div className="bg-[#16423C] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#16423C] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mencegah campur tangan pihak diluar organisasi profesi
                        tentang hubungan etika dalam keanggotaan profesi
                      </h1>
                    </div>
                  </div>
                </div>

                <hr className="border-2" />
                <div className="mt-40">
                  <div className="relative mt-20">
                    <h1 className="text-center text-xl">
                      Sanksi pelanggaran kode etik juga bisa berupa: sanksi
                      moral, sanksi terhadap Tuhan YME, dan sanksi sosial berupa
                      dijatuhkan dari organisasi yang bersangkutan.
                    </h1>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#16423C] to-[#179a88] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="space-y-5">
                    <h1>
                      Jenis pelanggaran di bidang IT juga beragam mulai dari:
                      hacker, cracker, denial of service attack, piracy, fraud,
                      gambling, pornography, pedelophilia, hingga data forgery.
                    </h1>
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

export default KodeEtik;
