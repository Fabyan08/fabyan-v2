import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/itforensic/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const ItForensic = () => {
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
            <div className="bg-gradient-to-l from-white to-[#0A5EB0]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#0A5EB0] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#0A5EB0] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    IT Forensic
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
                  <h1 className="text-[10px] text-white text-center mt-1 md:hidden"></h1>

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
            <div className="border-8 md:border-[20px]  border-[#0A5EB0]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#0A5EB0] duration-150 border-[#0A5EB0]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#0A5EB0] font-bold text-2xl md:text-4xl">
                        #ITForensic
                      </span>
                      <h1 className="text-xl  mt-2">
                        Pembelajaran IT Forensic ini diharapkan dapat memahami
                        dan mendeskripsikan tools yang digunakan untuk forensik
                        teknologi informasi atau forensik digital
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sebagai Mahasiswa di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#0A5EB0] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        saya memiliki kesempatan yang sangat baik untuk memahami
                        tentang IT Forensic lebih jauh dari materi yang
                        disampaikan.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col space-y-4">
                  <p>
                    Forensik dapat diartikan sebagai suatu proses ilmiah dalam
                    mengumpulkan, menganalisa, dan menghadirkan berbagai bukti
                    dalam sidang pengadilan terkait adanya suatu kasus hukum
                  </p>
                  <p>
                    Sementara itu, Forensik komputer merupakan suatu proses
                    mengidentifikasi, memelihara, menganalisa dan menggunakan
                    bukti digital menurut hukum yang berlaku. Istilah ini
                    kemudian meluas menjadi Forensik Teknologi Informasi
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Ada beberapa</b> metode untuk mengumpulkan dan menganalisa
                  data dari sumber daya komputer:
                </p>
                <h1>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#0A5EB0] flex justify-center w-fit p-4 rounded-md">
                      <p>Sistem komputer</p>
                    </div>
                    <div className="bg-[#0A5EB0] flex justify-center w-fit p-4 rounded-md">
                      <p>Jaringan komputer</p>
                    </div>
                    <div className="bg-[#0A5EB0] flex justify-center w-fit p-4 rounded-md">
                      <p>Jalur komunikasi</p>
                    </div>
                    <div className="bg-[#0A5EB0] flex justify-center w-fit p-4 rounded-md">
                      <p>Media penyimpanan</p>
                    </div>
                    <div className="bg-[#0A5EB0] flex justify-center w-fit p-4 rounded-md">
                      <p>Aplikasi komputer</p>
                    </div>
                  </div>
                </h1>
                <p>
                  <b>Tujuannya</b> sendiri ada bermacam-macam yaitu Mendapatkan
                  fakta-fakta obyektif dari sebuah insiden / pelanggaran
                  keamanan sistem informasi. Fakta-fakta tersebut setelah
                  diverifikasi akan menjadi bukti-bukti (evidence) yang akan
                  digunakan dalam proses hukum.
                </p>
                <p></p>
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
                    Bagaimana proses identifikasinya??
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>Ada beberapa yaitu:</h1>
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
                    <div className="bg-[#0A5EB0] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#0A5EB0] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <p className="px-5 text-md mt-4 text-center">
                        Segala bukti-bukti yang mendukung penyelidikan
                        dikumpulkan dan diidentifikasi untuk mempermudah
                        penyelidikan.
                      </p>
                    </div>
                    <div className="bg-[#0A5EB0] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#0A5EB0] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Penelusuran bisa dilakukan untuk sekedar mencari "ada
                        informasi apa disini?“ sampai serinci apapun.
                      </h1>
                    </div>
                    <div className="bg-[#0A5EB0] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#0A5EB0] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Tools yang digunakan untuk mendukung tahapan
                        ini:Forensic Acquisition Utilities, Ftimes, ProDiscover
                        DFT
                      </h1>
                    </div>
                  </div>
                </div>
                <p>
                  <b>1. Penyimpanan Bukti Digital</b>
                </p>
                <p>
                  Tahap ini melibatkan penyimpanan dan perlindungan bukti
                  digital agar tidak rusak, berubah, atau hilang. Bukti digital
                  bersifat mudah berubah (volatile), sehingga memerlukan
                  penanganan ahli forensik. Kesalahan kecil, seperti
                  menghidupkan atau mematikan perangkat tanpa hati-hati, dapat
                  merusak barang bukti sehingga tidak diakui di pengadilan.
                  Penyelidikan tidak boleh dilakukan langsung pada bukti asli,
                  melainkan menggunakan salinan bitstream image, yaitu metode
                  cloning yang menyalin data secara utuh, termasuk file
                  tersembunyi dan sementara, untuk menjaga integritas data asli.
                </p>
                <p>
                  <b>2. Analisis Bukti Digital</b>
                </p>
                <p>
                  Tahap ini melibatkan analisis mendalam terhadap bukti untuk
                  menjawab berbagai pertanyaan, seperti pelaku, tindakan yang
                  dilakukan, perangkat lunak yang digunakan, dan waktu kejadian.
                  Analisis dibagi menjadi media analysis (analisis media) dan
                  application analysis (analisis aplikasi), dengan bantuan
                  berbagai tools seperti TestDisk, ProDiscover DFT untuk media,
                  serta Event Log Parser dan Md5deep untuk aplikasi.
                </p>
                <p>
                  <b>3. Presentasi Laporan Forensik</b>
                </p>
                <p>
                  Tahap presentasi mencakup penyajian laporan hasil penyelidikan
                  yang lengkap, detail, dan dapat dipertanggungjawabkan secara
                  hukum. Laporan harus mencantumkan tanggal dan waktu
                  pelanggaran serta investigasi, permasalahan, bukti penting
                  yang ditemukan, teknik khusus yang digunakan (seperti password
                  cracker), dan bantuan pihak ketiga. Validitas analisis serta
                  keterlibatan saksi harus diperiksa untuk memperkuat laporan.
                </p>
                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#0A5EB0] to-[#348ce4] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="space-y-5 px-4">
                    <h1>
                      IT Forensic adalah proses investigasi digital yang
                      meliputi tiga tahap utama. Penyimpanan bukti digital
                      dilakukan dengan melindungi data dari kerusakan atau
                      perubahan menggunakan metode bitstream image. Analisis
                      bukti bertujuan mengungkap informasi penting melalui media
                      analysis dan application analysis menggunakan tools
                      forensik. Tahap akhir adalah presentasi laporan, di mana
                      hasil investigasi disusun secara detail dan
                      dipertanggungjawabkan secara hukum untuk mendukung proses
                      pengadilan. IT Forensic memastikan integritas dan
                      validitas bukti digital dalam setiap tahapnya.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative  text-slate-700  text-2xl px-4 md:px-16">
                <div className="mt-4 space-y-5 text-center">
                  <h1>
                    Terima kasih sudah menyimak semuanya &{" "}
                    <i>Have a Great Dayy!!</i>
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

export default ItForensic;
