import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/sertifikasiit/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const SertifikasiIT = () => {
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
              src={main}
              className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
              alt=""
            />
            <div className="bg-gradient-to-l from-white to-[#654520]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#654520] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#654520] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Sertifikasi IT
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
                    src={main}
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
                      src={main}
                      className="w-96 hidden md:flex rounded-xl animate-headShake"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 md:border-[20px]  border-[#654520]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#654520] duration-150 border-[#654520]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#654520] font-bold text-2xl md:text-4xl">
                        #MateriEmpatKeren
                      </span>
                      <h1 className="text-xl  mt-2">
                        Sekedar informasi, menurut Badan Nasional Standarisasi
                        Profesi (BNSP). Sertifikast profesi adalah sertifikasi
                        kerja yang diperlukan untuk mendapatkan / meningkatkan
                        komppetensi tertentu.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sebagai Mahasiswa Baru di
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#654520] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        saya sangat tertarik untuk mempelajari apasih pentingnya
                        sertifikasi profesi khususnya di bidang IT dan
                        profesional nanti🤔
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Istilah Sertifikasi Profesional seringkali digunakan untuk
                    menunjukkan kemampuan atau kualifikasi seseorang berdasarkan
                    atribut atau kriteria yang telah ditentukan oleh sebuah
                    organisasi/badan atau lembaga pengembangan (biasanya sudah
                    terakreditasi).
                  </p>
                  <p>
                    Sebutan 'sertifikasi' atau 'kualifikasi' tersebut ditetapkan
                    bagi tenaga profesional untuk menjamin kualifikasi dalam
                    melakukan tugas atau pekerjaan tertentu.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>91% perusahaan</b> percaya bahwa sertifikasi TI memainkan
                  peran penting dalam proses perekrutan dan bahwa sertifikasi TI
                  merupakan alat prediksi yang dapat diandalkan untuk menentukan
                  keberhasilan karyawan.
                </p>

                <h1 className="font-bold" data-aos="fade-right">
                  Manfaat Sertifikasi IT bagi Individu
                </h1>
                <h1>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#654520] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Sertifikasi IT membuat anda terpisah dari kandidat yang
                        bersaing di pasar kerja yang kompetitif.
                      </p>
                    </div>
                    <div className="bg-[#654520] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Mendapatkan sertifikasi IT (yang terbaru) membuktikan
                        kemampuan anda saat ini dalam bidang yang perubahannya
                        sangat cepat.
                      </p>
                    </div>
                    <div className="bg-[#654520] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        IT Profesional bersertifikasi mendapatkan gaji yang
                        lebih tinggi daripada yang tidak bersertifikat.
                      </p>
                    </div>
                    <div className="bg-[#654520] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        IT Profesional bersertifikasi mendapatkan rasa hormat
                        dan kredibilitas di antara rekan kerja dan atasan.
                      </p>
                    </div>
                    <div className="bg-[#654520] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Berkorban waktu dan sumber daya untuk mendapatkan
                        sertifikasi membuktikan dedikasi anda terhadap karir IT
                        anda.
                      </p>
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
                  <h1 className="text-4xl">
                    Manfaat Sertifikasi IT bagi Bisnis
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>Sertifikasi IT dapat:</h1>
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
                    <div className="bg-[#654520] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#654520] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        75% Manajer TI percaya bahwa sertifikasi penting untuk
                        kinerja tim.
                      </h1>
                    </div>
                    <div className="bg-[#654520] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#654520] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Perusahaan dapat menggunakan sertifikasi IT untuk
                        investasi, mempertahankan, dan mempromosikan karyawan
                        yang menjanjikan.
                      </h1>
                    </div>
                    <div className="bg-[#654520] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#654520] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Sertifikasi IT yang dimiliki karyawan akan meningkatkan
                        keseluruhan kualitas layanan yang ditawarkan kepada
                        pengguna jasa IT.
                      </h1>
                    </div>
                    <div className="bg-[#654520] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#654520] text-center rounded-lg font-bold">
                        <h1>4</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Teknisi yang bersertifikat melaksanakan tugas secara
                        lebih konsisten, meningkatkan kehandalan IT dan
                        organisasi.
                      </h1>
                    </div>
                  </div>
                </div>

                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#654520] to-[#e2b683] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="space-y-5 px-4">
                    <h1>
                      Secara keseluruhan, sertifikasi IT tidak hanya memberikan
                      keuntungan bagi individu dalam hal pengembangan karir,
                      tetapi juga menawarkan manfaat strategis bagi perusahaan
                      dalam mempertahankan daya saing di industri yang terus
                      berkembang. Dengan meningkatnya kebutuhan akan profesional
                      IT yang terampil dan terverifikasi, sertifikasi akan terus
                      menjadi elemen penting dalam menilai dan mengembangkan
                      kompetensi di sektor ini.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative  text-slate-700  text-2xl px-4 md:px-16">
                <div className="mt-4 space-y-5 text-center">
                  <h1>
                    Terima kasih sudah menyimak semuanya & <i>Have a Great Dayy!!</i>
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

export default SertifikasiIT;
