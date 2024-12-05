import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

import main from "../../../../../public/assets/image/blog/overviewmateri/main.jpg";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import unej from "../../../../../public/assets/image/unej.png";
import foto from "../../../../../public/assets/image/foto.jpg";

const OverviewMateri = () => {
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
            <div className="bg-gradient-to-l from-white to-[#8EB486]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#8EB486] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#8EB486] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Overview Materi
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
            <div className="border-8 md:border-[20px]  border-[#8EB486]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#8EB486] duration-150 border-[#8EB486]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#8EB486] font-bold text-2xl md:text-4xl">
                        #OverviewMateri
                      </span>
                      <h1 className="text-xl  mt-2">
                        Hari ini, 5 Desember 2024 Prof Slamin menyempatkan
                        mengajarkan materi untuk overview matkul Etika Profesi
                        selama 1 semester.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sebagai Mahasiswa di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#8EB486] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        yang masuk di akhir pembelajaran Etika Profesi semester
                        1, materi tadi sangat menarik untuk diikuti.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col space-y-4">
                  <p>
                    Materi yang dijelaskan Prof Slamin pada pertemuan hari ini
                    sangat beragam karena memang oveview Etika Profesi di
                    semester 1.
                  </p>
                  <p>
                    Prof Slamin menjelaskan etika beserta dengan contoh study
                    casenya runtut hingga menuju ke etika profesi yang
                    berhubungan dengan IT beserta contohnya juga.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] max-w-[100rem] mx-auto text-xl px-4 md:text-xl mt-10 space-y-4">
                <p>
                  <b>Ada beberapa</b> yang ingin saya review dari materi Etika
                  Profesi yang saya pelajari di semester 1.
                </p>

                <div className="flex justify-between items-center font-bold">
                  <div className="flex gap-4 items-center">
                    <img
                      loading="lazy"
                      src="../../../assets/image/blog/detail/think.png"
                      className="w-60"
                      alt=""
                    />
                    <h1 className="text-4xl">Ada apa ajasih?</h1>
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
                <hr className="border-2 w-full" />
                <p>
                  Profesi memerlukan keahlian khusus yang diperoleh melalui
                  pendidikan formal, dan seseorang yang menekuni profesi
                  tersebut disebut profesional. Etika profesi mengatur perilaku
                  baik dan buruk dalam pekerjaan, sementara kode etik berfungsi
                  sebagai pedoman, kontrol sosial, dan mencegah campur tangan
                  pihak luar untuk menjaga profesionalisme. Etika berbeda dengan
                  etiket, yang mengatur norma sosial dalam interaksi.
                </p>
                <p>
                  Profesionalisme di bidang IT memerlukan keterampilan tinggi,
                  kemampuan beradaptasi dengan teknologi, serta sikap proaktif
                  dan terbuka. Profesi di IT sangat beragam, seperti Software
                  Engineering, IT Management, dan lainnya. Saya bercita-cita
                  menjadi Fullstack Website Developer dan Founder Startup untuk
                  membantu pebisnis mencapai tujuan SDGs melalui solusi
                  teknologi yang inovatif.
                </p>
                <p>
                  Kode etik profesi adalah pedoman yang disepakati untuk
                  mengatur sikap dan perilaku profesional dalam menjalankan
                  tugas. Tujuannya agar profesional memberikan jasa sebaik
                  mungkin tanpa merugikan orang lain. Prinsip kode etik meliputi
                  tanggung jawab, keadilan, otonomi, dan integritas moral. Kode
                  etik berfungsi sebagai pedoman profesional, kontrol sosial,
                  dan pencegah campur tangan pihak luar. Pelanggaran kode etik
                  dapat dikenakan sanksi moral, sosial, atau dicabut dari
                  organisasi, dengan jenis pelanggaran di bidang IT seperti
                  hacking, piranti ilegal, dan penipuan.
                </p>
                <p>
                  Sertifikasi profesional di bidang IT menunjukkan kemampuan
                  seseorang sesuai standar yang ditetapkan oleh lembaga
                  terakreditasi. Sertifikasi IT bermanfaat bagi individu dengan
                  meningkatkan daya saing, kredibilitas, dan potensi gaji yang
                  lebih tinggi. Bagi bisnis, sertifikasi meningkatkan kinerja
                  tim, kualitas layanan, dan kehandalan teknisi. Sertifikasi
                  juga membantu perusahaan dalam mempertahankan dan
                  mempromosikan karyawan yang kompeten, serta menjaga daya saing
                  di industri yang terus berkembang.
                </p>
                <p>
                  Dunia maya adalah ekosistem digital tanpa batas fisik,
                  memungkinkan aktivitas anonim dan cepat berubah. Etika
                  internet (netiket) menekankan sikap saling membangun,
                  mengikuti aturan, dan menghargai perbedaan. Pengguna anonim
                  dan beragam budaya memerlukan etika agar tidak terjadi
                  tindakan tidak etis. Kebebasan berekspresi dibatasi oleh
                  kebenaran dan dampaknya terhadap orang lain.
                </p>
                <p>
                  Etika bisnis mencakup prinsip kejujuran, keadilan, integritas,
                  tanggung jawab, dan hormat. Hal ini penting untuk membangun
                  kepercayaan, reputasi, dan keunggulan kompetitif. Tanggung
                  jawab sosial perusahaan (CSR) meliputi lingkungan, sosial, dan
                  ekonomi. Etika mendukung persaingan sehat, transparansi, dan
                  hubungan profesional. Budaya organisasi yang mendukung etika
                  memperkuat perilaku etis dan menciptakan bisnis yang
                  berkelanjutan.
                </p>
                <p>
                  Di sisi lain, Cyber crime adalah kejahatan yang menggunakan
                  teknologi komputer, internet, atau jaringan sebagai alat atau
                  target, mencakup peretasan, pencurian data, penipuan online,
                  dan kejahatan lainnya. Jenisnya termasuk peretasan, pencurian
                  identitas, penipuan kartu kredit, dan pornografi anak. Di
                  Indonesia, cyber crime juga mencakup pembocoran data dan
                  penyalahgunaan teknologi untuk kegiatan ilegal. Kejahatan IT
                  teratas meliputi penipuan pembayaran, penyamaran sebagai
                  otoritas, dan pencurian identitas.
                </p>
                <p>
                  Nah, Forensik komputer adalah proses mengidentifikasi,
                  memelihara, dan menganalisis bukti digital untuk keperluan
                  hukum. Prosesnya meliputi pengumpulan bukti, penyimpanan yang
                  aman menggunakan metode bitstream image, analisis bukti
                  digital untuk mengungkap informasi penting, dan penyusunan
                  laporan forensik yang dapat dipertanggungjawabkan secara
                  hukum. Tujuan utamanya adalah memperoleh bukti objektif yang
                  valid untuk mendukung proses pengadilan.
                </p>
                <hr className="border-2" />
                <div className="bg-gradient-to-r from-[#8EB486] to-[#5ce940] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-20 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="space-y-5 px-4">
                    <h1>
                      Profesionalisme di bidang IT memerlukan keterampilan
                      tinggi dan sikap proaktif. Etika profesi mengatur perilaku
                      baik dalam pekerjaan, dengan kode etik sebagai pedoman.
                      Sertifikasi IT meningkatkan daya saing dan kredibilitas.
                      Dunia maya memerlukan etika internet untuk menjaga
                      interaksi yang baik, sementara etika bisnis mendukung
                      kepercayaan dan transparansi. Cyber crime mencakup
                      kejahatan digital seperti hacking dan penipuan, yang
                      membutuhkan forensik komputer untuk mengidentifikasi dan
                      menganalisis bukti digital guna mendukung proses hukum.
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

export default OverviewMateri;
