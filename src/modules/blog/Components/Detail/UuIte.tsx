import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/uuite/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const UuIte = () => {
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
            <div className="bg-gradient-to-l from-white to-[#133E87]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#133E87] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#133E87] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    UU ITE
                  </h1>
                  <div className="flex items-center justify-center space-x-2 md:hidden py-2">
                    <h1 className="text-[#4F378B]">Admin</h1>
                    <h1 className="text-slate-800">-</h1>
                    <h1 className="text-slate-800">Rabu, 30 Oktober 2023</h1>
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
                    UU ITE
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
            <div className="border-8 md:border-[20px]  border-[#133E87]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#133E87] duration-150 border-[#133E87]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#133E87] font-bold text-2xl md:text-4xl">
                        #TentangUUITE
                      </span>
                      <h1 className="text-xl  mt-2">
                        Undang-Undang Informasi dan Transaksi Elektronik (UU
                        ITE) adalah undang-undang yang mengatur penggunaan
                        teknologi informasi dan transaksi elektronik. UU ITE
                        bertujuan untuk menjaga agar ruang digital Indonesia
                        tetap bersih, sehat, beretika, dan produktif.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sesudah dijelaskan oleh Bu Okta, salah satu dosen di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#133E87] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        kami diminta untuk memberikan contoh terkait pelanggaran
                        UU ITE beserta sanksinya.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col space-y-4">
                  <p>
                    Berikut ini merupakan beberapa contoh kasus tentang
                    pelanggaran UU ITE.
                  </p>
                  <p>
                    <b>1. Kasus Penyebaran Hoaks tentang Isu Pemilu</b>
                  </p>
                  <p>
                    {" > "}
                    <b>Kasus:</b> Seseorang menyebarkan berita palsu (hoaks) di
                    media sosial yang mengatakan bahwa salah satu calon
                    legislatif memiliki rekam jejak yang buruk sehingga
                    menimbulkan kesalahpahaman. Informasi ini terbukti salah dan
                    menyebabkan keresahan di masyarakat.
                  </p>
                  <p>
                    {" > "} <b> Alasan Pelanggaran:</b> Pasal 28 ayat (1) UU ITE
                    menyatakan bahwa menyebarkan berita bohong yang menyebabkan
                    kerugian konsumen dapat dikenai sanksi. Dalam kasus ini,
                    hoaks yang disebarkan termasuk dalam kategori informasi
                    palsu yang berdampak negatif pada masyarakat luas.
                  </p>
                  <p>
                    {" > "} <b> Sanksi: </b> Berdasarkan UU ITE Pasal 45A ayat
                    (1), pelaku dapat dikenakan pidana penjara maksimal 6 tahun
                    dan/atau denda maksimal Rp1 miliar.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>2. Kasus Penghinaan dan Pencemaran Nama Baik</b>
                </p>
                <p>
                  {" > "} <b> Kasus: </b> Seseorang mengunggah postingan media
                  sosial yang menghina orang lain dengan bahasa yang tidak
                  pantas. Korban penghinaan merasa dirugikan dan melaporkan
                  tindakan tersebut ke pihak berwajib.
                </p>
                <p>
                  {" > "} <b> Alasan Pelanggaran:</b> Pasal 27 ayat (3) UU ITE
                  melarang distribusi atau transmisi informasi elektronik yang
                  bersifat penghinaan atau pencemaran nama baik. Kasus ini
                  termasuk pelanggaran karena menyebarkan konten yang merugikan
                  reputasi pihak lain.
                </p>
                <p>
                  {" > "} <b> Sanksi: </b> Sesuai dengan Pasal 45 ayat (3) UU
                  ITE, pelaku bisa dihukum pidana penjara maksimal 4 tahun
                  dan/atau denda maksimal Rp750 juta.
                </p>

                <hr className="border-2" />
                <p>
                  <b>3. Kasus Penipuan Online (E-Commerce)</b>
                </p>
                <p>
                  {" > "} <b> Kasus: </b> Seorang pelaku menjual barang secara
                  online dan setelah menerima pembayaran dari pembeli, pelaku
                  tidak mengirimkan barang yang dijanjikan. Pembeli melaporkan
                  kasus ini sebagai penipuan.
                </p>
                <p>
                  {" > "} <b> Alasan Pelanggaran:</b> Pasal 28 ayat (1) UU ITE
                  menyatakan larangan penyebaran berita bohong dan menyesatkan
                  yang menyebabkan kerugian konsumen. Kasus ini melanggar UU ITE
                  karena pelaku menggunakan informasi palsu untuk mengambil
                  keuntungan secara tidak sah.
                </p>
                <p>
                  {" > "} <b> Sanksi: </b> Berdasarkan Pasal 45A ayat (1) UU
                  ITE, pelaku dapat dijatuhi hukuman penjara maksimal 6 tahun
                  dan/atau denda maksimal Rp1 miliar.
                </p>
                <hr className="border-2" />
                <p>
                  <b>4. Kasus Pengancaman Melalui Media Sosial</b>
                </p>
                <p>
                  {" > "} <b> Kasus: </b> Seseorang mengirimkan pesan ancaman
                  fisik melalui media sosial kepada orang lain, yang menyebabkan
                  rasa takut dan cemas pada korban.
                </p>
                <p>
                  {" > "} <b> Alasan Pelanggaran:</b> Pasal 29 UU ITE melarang
                  pengiriman informasi elektronik yang berisi ancaman kekerasan
                  atau intimidasi kepada orang lain. Tindakan pengancaman ini
                  termasuk pelanggaran UU ITE karena merugikan keamanan
                  psikologis korban.
                </p>
                <p>
                  {" > "} <b> Sanksi: </b> Berdasarkan Pasal 45B UU ITE, pelaku
                  bisa dijatuhi hukuman penjara maksimal 4 tahun dan/atau denda
                  maksimal Rp750 juta.
                </p>
                <hr className="border-2" />
                <p>
                  <b>5. Kasus Penyebaran Konten Tidak Bertanggung Jawab</b>
                </p>
                <p>
                  {" > "} <b> Kasus: </b> Seseorang mendistribusikan video
                  berkonten buruk melalui aplikasi pesan singkat tanpa izin dari
                  orang yang ada di dalam video tersebut.
                </p>
                <p>
                  {" > "} <b> Alasan Pelanggaran:</b> Pasal 27 ayat (1) UU ITE
                  melarang pendistribusian informasi elektronik yang melanggar
                  kesusilaan. Video yang beredar ini melanggar ketentuan
                  kesusilaan dan privasi orang yang bersangkutan.
                </p>
                <p>
                  {" > "} <b> Sanksi: </b> Berdasarkan Pasal 45 ayat (1) UU ITE,
                  pelaku dapat dikenakan hukuman penjara maksimal 6 tahun
                  dan/atau denda maksimal Rp1 miliar.
                </p>

                <div className="bg-gradient-to-r from-[#133E87] to-[#6e5aed] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <b>Kesimpulan</b>
                  <div className="space-y-5 px-4">
                    <h1>
                      UU ITE sering digunakan untuk menindak berbagai
                      pelanggaran di ranah digital seperti pencemaran nama baik,
                      penyebaran hoaks, hingga penghinaan. Kasus-kasus nyata.
                      Hal ini menunjukkan penerapan UU ini dalam perlindungan
                      reputasi dan keamanan publik. Namun, penggunaan UU ITE
                      juga memicu perdebatan, terutama ketika dianggap membatasi
                      kebebasan berpendapat. Sanksi yang dikenakan berkisar dari
                      denda hingga kurungan penjara, tergantung pada jenis dan
                      tingkat pelanggarannya.
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

export default UuIte;
