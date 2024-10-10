import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/cyber/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const Cyber = () => {
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
            <div className="bg-gradient-to-l from-white to-[#CB6040]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#CB6040] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#CB6040] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Cyber Ethic
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
            <div className="border-8 md:border-[20px]  border-[#CB6040]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#CB6040] duration-150 border-[#CB6040]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#CB6040] font-bold text-2xl md:text-4xl">
                        #MateriLimaKeren
                      </span>
                      <h1 className="text-xl  mt-2">
                        Perkembangan teknologi yang makin pesat sangat berdampak
                        pada kemudahan akses informasi lebih cepat. Perkembangan
                        yang berasal dari inovasi, evolusi hingga melahirkan
                        internet yang jadi kebutuhan pokok saat ini.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Kemudahan akses di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#CB6040] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        dengan adanya Wi-Fi UNEJ ACCESS juga sangat mempengaruhi
                        perolehan informasi lebih cepat dan membuat saya sebagai
                        mahasiswa sangat terbantu.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Internet identik dengan cyberspace atau dunia maya. Dysson
                    (1994) mengemukakan bahwa cyberscape merupakan suatu
                    ekosistem bioelektronik di semua tempat yang memiliki
                    telepon, kabel coaxial, fiber optik atau elektomagnetik
                    waves.
                  </p>
                  <p>
                    Hal ini berarti bahwa tidak ada yang tahu pasti seberapa
                    luas internet secara fisik.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Emang</b> apa ajasih karakteristik dunia maya?
                </p>
                <h1>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#CB6040] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Beroperasi secara virtual / maya Dunia cyber selalu
                        berubah dengan cepat
                      </p>
                    </div>
                    <div className="bg-[#CB6040] flex justify-center w-fit p-4 rounded-md">
                      <p>Dunia maya tidak mengenal batas-batas territorial</p>
                    </div>
                    <div className="bg-[#CB6040] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Orang-orang yang hidup dalam dunia maya tersebut dapat
                        melaksanakan aktivitas tanpa harus menunjukkan
                        identitasnya
                      </p>
                    </div>
                    <div className="bg-[#CB6040] flex justify-center w-fit p-4 rounded-md">
                      <p>Informasi di dalamnya bersifat public</p>
                    </div>
                  </div>
                </h1>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Kelompok kerja Responsible Use of the Network (RUN) Working
                    Group yang merupakan bagian dari The Internet
                    EngineeringTask Force (www.ietf.org) menyusun sebuah dokumen
                    tentang etika dalam internet{" "}
                    <b>(Requests for Comments (RFC) no. I 855)</b>
                  </p>
                  <p>
                    Petunjuk itu dikenal dengan nama Netiquette atau yang
                    diterjemahkan dalam bahasa Indonesia menjadi Netiket
                  </p>
                  <p>
                    Aslinya dua kata yang dijadikan satu, yakni networks dan
                    etiquette.Sebelum internet lahir, kata netiquette tentu
                    belum ada.
                  </p>
                  <p>
                    <b>Beberapa aturan inti netiket:</b>
                  </p>
                  <p>
                    1. Kita semua manusia, bahkan saat berada di Internet
                    sekalipun. Diharapkan untuk tidak mengirim komentar yang
                    bernada menyerang tapi bersikaplah saling membangun.
                  </p>
                  <p>
                    2. Ikuti aturan seperti di kehidupan nyata saat online.
                    Bersikap dan bertindak dengan selalu memperhatikan etika,
                    dan jangan buru-buru menyimpulkan sesuatu. Orang yang sedang
                    berada di Internet datang dari berbagai penjuru dunia dan
                    memiliki perbedaan pandangan terhadap sesuatu
                  </p>
                </div>
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
                    Apa pentingnya etika dalam dunia maya?
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>Ini pentingnyaaa:</h1>
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
                    <div className="bg-[#CB6040] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#CB6040] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Pengguna internet adalah orang yang hidup dalam dunia
                        anonymouse, yang tidak mengharuskan pernyataan identitas
                        asli
                      </h1>
                    </div>
                    <div className="bg-[#CB6040] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#CB6040] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Bahwa pengguna internet berasal dari berbagai negara
                        yang mungkin memiliki budaya, bahasa dan adat istiadat
                        yang berbeda-beda.
                      </h1>
                    </div>
                    <div className="bg-[#CB6040] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#CB6040] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Berbagai macam fasilitas yang diberikan dalam internet
                        memungkinkan seseorang untuk bertindak tidak etis.
                      </h1>
                    </div>
                    <div className="bg-[#CB6040] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#CB6040] text-center rounded-lg font-bold">
                        <h1>4</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Harus diperhatikan bahwa pengguna internet akan selalu
                        bertambah setiap saat dan memungkinkan
                        masuknya"penghuni" baru didunia maya tersebut.
                      </h1>
                    </div>
                  </div>
                </div>

                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#CB6040] to-[#e2b683] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <b>Freedom of Expression</b>
                  <div className="space-y-5 px-4">
                    <h1>
                      Hak atas kebebasan berekspresi dibatasi bila ungkapan,
                      baik lisan atau tulisan, tidak benar dan membahayakan
                      orang lain. Membuat pernyataan lisan atau tertulis tentang
                      dugaan fakta yang salah dan merugikan orang lain adalah
                      penghinaan
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

export default Cyber;
