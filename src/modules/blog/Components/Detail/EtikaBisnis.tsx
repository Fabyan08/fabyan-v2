import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/etikabisnis/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const EtikaBisnis = () => {
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
                    Etika Bisnis
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
                    Etika Bisnis
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
                        #MateriEnamMantap
                      </span>
                      <h1 className="text-xl  mt-2">
                        Etika bisnis adalah prinsip moral yang memandu perilaku
                        individu dan organisasi dalam dunia usaha. Etika bisnis
                        penting untuk membangun kepercayaan, integritas, dan
                        keberlanjutan dalam bisnis
                      </h1>
                      <h1 className="text-xl  mt-2">
                        {" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#133E87] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        juga memiliki etika bisnis yang pastinya digunakan untuk
                        menjalankan kegiatan sehari-hari dengan baik &
                        terstruktur.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col space-y-4">
                  <p>
                    Etika bisnis merujuk pada standar perilaku yang diterima
                    secara umum dalam dunia usaha. Prinsip-prinsip etika bisnis
                    meliputi kejujuran, keadilan, integritas, tanggung jawab,
                    dan hormat terhadap orang lain.
                  </p>
                  <p>
                    Hal ini berarti bahwa tidak ada yang tahu pasti seberapa
                    luas internet secara fisik.
                  </p>
                  <p>
                    <b>Kejujuran: </b>
                    Menghindari penipuan, manipulasi, dan ketidakjujuran dalam
                    transaksi dan komunikasi.
                  </p>
                  <p>
                    <b>Keadilan: </b>
                    Memperlakukan semua pihak secara adil dan setara, tanpa
                    diskriminasi
                  </p>
                  <p>
                    <b>Integritas: </b>
                    Menunjukkan konsistensi antara ucapan dan tindakan.
                  </p>
                  <p>
                    <b>Tanggung Jawab: </b>
                    Menanggung konsekuensi atas tindakan dan keputusan.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Emang</b> apa ajasih pentingnya etika bisnis dalam dunia
                  usaha?
                </p>
                <p>
                  Etika bisnis membangun kepercayaan dan reputasi baik bagi
                  perusahaan. Kepercayaan dari pelanggan, mitra, dan investor
                  sangat penting untuk kesuksesan jangka panjang.
                </p>
                <h1>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#133E87] flex justify-center w-fit p-4 rounded-md">
                      <p>Meningkatkan Kepercayaan</p>
                    </div>
                    <div className="bg-[#133E87] flex justify-center w-fit p-4 rounded-md">
                      <p>Memperkuat Reputasi</p>
                    </div>
                    <div className="bg-[#133E87] flex justify-center w-fit p-4 rounded-md">
                      <p>Membangun Keunggulan Kompetitif</p>
                    </div>
                    <div className="bg-[#133E87] flex justify-center w-fit p-4 rounded-md">
                      <p>Mendorong Keberlanjutan</p>
                    </div>
                  </div>
                </h1>
                <div className="mt-20">
                  <p className="text-center text-2xl font-bold mt-10 text-black">
                    Tanggung Jawab Sosial Perusahaan (Corporate Social
                    Responsibility)
                  </p>
                </div>
                <div className="mt-10 md:mt-28 md:w-full  text-[20px] flex flex-col justify-between space-y-10">
                  <p className="text-center">
                    Tanggung jawab sosial perusahaan (CSR) adalah komitmen
                    perusahaan untuk beroperasi secara etis dan bertanggung
                    jawab terhadap stakeholders dan lingkungan. Meliputi, hal
                    berikut:
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="md:flex space-y-2 md:space-y-0  md:space-x-5 justify-center">
                      <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                        <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                          <h1>Lingkungan</h1>
                        </div>
                        <h1 className="px-5 mt-4 text-center">
                          Menerapkan praktik bisnis yang ramah lingkungan dan
                          mengurangi dampak negatif terhadap lingkungan.
                        </h1>
                      </div>
                      <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                        <div className="bg-white mx-5 text-sm mt-2 text-[#133E87] text-center rounded-lg font-bold">
                          <h1>Sosial</h1>
                        </div>
                        <h1 className="px-5 mt-4  text-center">
                          Memperhatikan kesejahteraan karyawan, masyarakat
                          sekitar, dan konsumen.
                        </h1>
                      </div>
                      <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                        <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                          <h1>Ekonomi</h1>
                        </div>
                        <h1 className="px-5 mt-4 text-center">
                          Menjalankan bisnis secara etis dan transparan, serta
                          menciptakan nilai tambah bagi stakeholders
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    Dalam persaingan suatu usaha juga terdapat etika bisnis yang
                    dilakukan. Persaingan bisnis yang sehat didasarkan pada
                    etika dan persaingan yang adil. Perusahaan harus bersaing
                    secara etis, dengan menghormati hak dan kepentingan para
                    stakeholders.
                  </p>
                  <p>Jika didefinisikan, maka akan ada 4 etika yaitu:</p>
                  <p>
                    <b>Persaingan Adil</b>
                    <p>
                      Berkompetisi secara sehat, tanpa menggunakan taktik curang
                      atau manipulasi.
                    </p>
                  </p>
                  <p>
                    <b>Kejujuran</b>
                    <p>
                      Menghindari penipuan, kecurangan, dan penggelapan
                      informasi.
                    </p>
                  </p>
                  <p>
                    <b>Hormat</b>
                    <p>
                      Menghormati hak dan kepentingan pesaing, serta menjaga
                      hubungan yang profesional.
                    </p>
                  </p>
                  <p>
                    <b>Transparansi</b>
                    <p>
                      Bersikap transparan dalam aktivitas bisnis dan komunikasi.
                    </p>
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
                    Gimana sih contohnya etika bisnis itu?
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>Ini contohnyaaa🙌🏻 :</h1>
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
                    <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mengingat nama. Contoh etika bisnis yang satu ini dapat
                        membuat orang lain merasa lebih dihargai
                      </h1>
                    </div>
                    <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#133E87] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4  text-center">
                        Membuat sikap tubuh yang baik, seperti membungkuk,
                        melakukan kontak mata, serta jangan lupa untuk tersenyum
                      </h1>
                    </div>
                    <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Mengucapkan maaf, tolong, dan terima kasih sebagai
                        bentuk apresiasi serta rasa hormat kepada orang lain
                      </h1>
                    </div>
                    <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                        <h1>4</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Menggunakan pakaian yang rapi setiap bertemu orang lain
                      </h1>
                    </div>
                    <div className="bg-[#133E87] w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#133E87] text-center rounded-lg font-bold">
                        <h1>5</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Menggunakan bahasa yang sopan saat berbicara dan
                        berinteraksi, terutama kepada pelanggan
                      </h1>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-2xl">
                    Etika Bisnis dan Budaya Organisasi
                  </p>
                  <p>
                    Budaya organisasi yang kuat dan berlandaskan nilai-nilai
                    etika dapat mendorong perilaku etis di tempat kerja.
                    Perusahaan harus membangun budaya organisasi yang mendukung
                    perilaku etis. Seperti:
                  </p>
                  <p>
                    <b>1. Kode Etik</b>
                  </p>
                  <p>
                    Membuat kode etik yang jelas dan mudah dipahami oleh seluruh
                    anggota organisasi.
                  </p>
                  <p>
                    <b>2. Pelatihan Etika</b>
                  </p>
                  <p>
                    Memberikan pelatihan etika untuk meningkatkan kesadaran dan
                    pemahaman tentang etika bisnis.
                  </p>
                  <p>
                    <b>3. Sistem Pelaporan</b>
                  </p>
                  <p>
                    Membuat sistem pelaporan yang mudah diakses dan memungkinkan
                    karyawan untuk melaporkan pelanggaran etika.
                  </p>
                  <p>
                    <b>4. Reward dan Sanksi</b>
                  </p>
                  <p>
                    Memberikan reward bagi karyawan yang menunjukkan perilaku
                    etis dan sanksi bagi yang melanggar kode etik
                  </p>
                </div>

                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#133E87] to-[#6e5aed] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <b>Kesimpulan</b>
                  <div className="space-y-5 px-4">
                    <h1>
                      Penguatan etika bisnis sangat penting untuk menciptakan
                      lingkungan bisnis yang sehat, adil, dan berkelanjutan di
                      Indonesia. Melalui penerapan etika bisnis, perusahaan
                      dapat membangun kepercayaan, reputasi, dan keberlanjutan
                      dalam jangka panjang
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

export default EtikaBisnis;
