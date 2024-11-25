import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/cybercrime/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const CyberCrime = () => {
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
            <div className="bg-gradient-to-l from-white to-[#47663B]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#47663B] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#47663B] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Cyber Crime
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
            <div className="border-8 md:border-[20px]  border-[#47663B]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#47663B] duration-150 border-[#47663B]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#47663B] font-bold text-2xl md:text-4xl">
                        #CyberCrime
                      </span>
                      <h1 className="text-xl  mt-2">
                        Cyber crime secara umum dapat dibagi menjadi dua jenis
                        utama: kejahatan yang menyerang sistem atau jaringan
                        komputer, serta kejahatan yang menggunakan komputer atau
                        internet sebagai alat bantu. Dengan perkembangan
                        teknologi, kombinasi dari kedua jenis kejahatan ini
                        semakin sering terjadi.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sebagai Mahasiswa di
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#47663B] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        saya sangat tertarik untuk mempelajari mengenai cyber
                        crime yang erat kaitannya dengan coding dan pemrograman.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col space-y-4">
                  <p>
                    Cyber crime atau kejahatan siber adalah tindakan ilegal yang
                    melibatkan penggunaan teknologi komputer, internet, atau
                    jaringan sebagai alat, target, atau lokasi terjadinya
                    kejahatan. Kejahatan ini mencakup berbagai aktivitas, mulai
                    dari peretasan, pencurian data, hingga penipuan online, yang
                    dapat merugikan individu, organisasi, bahkan negara.
                  </p>
                  <p>
                    Dengan pesatnya perkembangan teknologi, ancaman cyber crime
                    semakin kompleks dan melibatkan metode yang terus berkembang
                    untuk menyerang sistem keamanan digital.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Ada beberapa</b> jenis cyber crime yang dibedakan
                  berdasarkan isu yang menjadi bahan studi atau penyelidikan
                  pihak FBI dan National White Collar Crime Center:
                </p>
                <h1>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Computer network break-ins</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Industrial espionage</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Software piracy</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Child pornography</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>E-mail bombings</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Password sniffers</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Spoofing</p>
                    </div>
                    <div className="bg-[#47663B] flex justify-center w-fit p-4 rounded-md">
                      <p>Credit card fraud</p>
                    </div>
                  </div>
                </h1>
                <p>
                  <b>Cyber crime</b> dalam perundang-undangan di Indonesia
                  mencakup berbagai tindakan ilegal yang melibatkan teknologi
                  komputer dan internet. Salah satu jenisnya adalah pembocoran
                  data dan memata-matai, di mana data rahasia diakses atau
                  disebarluaskan tanpa izin. Selain itu, terdapat penyalahgunaan
                  peralatan komputer, seperti penggunaan perangkat teknologi
                  untuk aktivitas ilegal, termasuk penyebaran malware atau
                  peretasan.
                </p>
                <p>
                  Kejahatan lainnya adalah penipuan kartu kredit, yang
                  melibatkan pencurian atau penyalahgunaan informasi kartu
                  kredit untuk kepentingan pribadi, serta penipuan bank yang
                  bertujuan mencuri uang atau data nasabah melalui sistem
                  perbankan. Penipuan juga sering terjadi melalui penawaran jasa
                  palsu, yang dirancang untuk menipu orang demi mendapatkan
                  keuntungan.
                </p>
                <p>
                  {" "}
                  Cyber crime juga mencakup pencurian identitas dan penipuan, di
                  mana data pribadi digunakan untuk kejahatan lain, serta
                  pemalsuan melalui komputer yang menciptakan dokumen atau data
                  palsu untuk menipu. Selain itu, ada perjudian, pemerasan, dan
                  pengancaman yang dilakukan melalui komputer, serta kejahatan
                  serius seperti pornografi anak, pelanggaran hak cipta, dan
                  peredaran narkoba. Semua ini menunjukkan luasnya cakupan
                  kejahatan siber yang dapat merugikan individu maupun
                  masyarakat.
                </p>
                <div className="flex justify-center items-center font-bold">
                  <div>
                    <img
                      loading="lazy"
                      src="../../../assets/image/blog/detail/think.png"
                      className="w-60"
                      alt=""
                    />
                  </div>
                  <h1 className="text-4xl">Kejahatan IT Teratas?</h1>
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
                    <div className="bg-[#47663B] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#47663B] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <p className="px-5 text-md mt-4 text-center">
                        Non-delivery Payment/Merchandise (14.4%): Penipuan di
                        mana pelaku/korban tidak menerima pembayaran atau barang
                        yang dijanjikan.
                      </p>
                    </div>
                    <div className="bg-[#47663B] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#47663B] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Impersonation of Authorities (13.2%): Penipuan dengan
                        menyamar sebagai otoritas, seperti FBI, untuk menipu
                        korban.
                      </h1>
                    </div>
                    <div className="bg-[#47663B] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#47663B] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Identity Theft (9.8%): Penggunaan identitas pribadi
                        tanpa izin untuk melakukan kejahatan.
                      </h1>
                    </div>
                    <div className="bg-[#47663B] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#47663B] text-center rounded-lg font-bold">
                        <h1>4</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Computer-Facilitated Crimes (9.1%): Kejahatan yang
                        menargetkan atau menggunakan komputer sebagai alat
                        utama.
                      </h1>
                    </div>
                  </div>
                </div>

                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#47663B] to-[#e2b683] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="space-y-5 px-4">
                    <h1>
                      Cyber crime mencakup berbagai kejahatan digital, seperti
                      Non-delivery Payment/Merchandise, di mana transaksi online
                      gagal dipenuhi, dan Impersonation of Authorities, ketika
                      pelaku menyamar sebagai otoritas untuk menipu korban.
                      Identity Theft melibatkan pencurian data pribadi untuk
                      kejahatan lain, sementara Computer-Facilitated Crimes
                      menggunakan komputer sebagai target atau alat untuk
                      melancarkan aksi kriminal.
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

export default CyberCrime;
