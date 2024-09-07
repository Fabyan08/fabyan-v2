import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp, AiFillLike } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import etikaprofesi1 from "../../../../../public/assets/image/blog/etikaprofesi1/main.jpg";
import prinsip from "../../../../../public/assets/image/blog/etikaprofesi1/prinsip.png";
import cat from "../../../../../public/assets/image/blog/etikaprofesi1/cat.png";

import "swiper/css";
import "swiper/css/pagination";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";

const EtikaProfesi = () => {
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
          <div>
            <img
              loading="lazy"
              src={etikaprofesi1}
              className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
              alt=""
            />
            <div className="bg-gradient-to-l from-white to-[#FF7F3E]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#FF7F3E] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
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
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#FF7F3E] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Materi Etika Profesi 1
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
                    src={etikaprofesi1}
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
                      src={etikaprofesi1}
                      className="w-96 hidden md:flex rounded-xl animate-headShake"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 md:border-[20px]  border-[#FF7F3E]/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex justify-center mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-[#FF7F3E] duration-150 border-[#FF7F3E]/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-fit"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-[#FF7F3E] font-bold text-2xl md:text-4xl">
                        #PertemuanSatuAsik
                      </span>
                      <h1 className="text-xl  mt-2">
                        Etika Profesi merupakan salah satu hal penting yang akan
                        sangat berguna untuk berkarier sebagai profesional
                        nanti.
                      </h1>
                      <h1 className="text-xl  mt-2">
                        Sebagai seorang mahasiswa di{" "}
                        <a
                          href="https://unej.ac.id"
                          target="_blank"
                          className="text-[#FF7F3E] underline"
                        >
                          Universitas Jember
                        </a>{" "}
                        yang ingin menjadi seorang profesional di bidang
                        programming, materi dasar ini jadi pendukung yang sangat
                        penting untuk dipelajari di masa depan.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <p>
                    Sesuai yang saya pelajari di materi 1, profesi adalah
                    pekerjaan yang dalam melaksanakan tugasnya memerlukan atau
                    menuntut keahlian tertentu sesuai bidangnya. Dalam hal ini,
                    bisa jadi menggunakan teknik ilmiah, serta dedikasi yang
                    tinggi. Keahlian yang diperoleh dari lembaga pendidikan
                    khusus diperuntukkan untuk itu dengan kurikulum yang dapat
                    dipertanggung jawabkan.
                  </p>
                  <p>
                    Seseorang yang menekuni suatu profesi tertentu disebut
                    professional, sedangkan professional sendiri mempunyai makna
                    yang mengacu kepada sebutan orang yang menyandang suatu
                    profesi dan sebutan tentang penampilan seseorang dalam
                    mewujudkan unjuk kerja sesuai dengn profesinya.
                  </p>
                </div>
              </div>
              <div className="md:px-[125px] text-xl px-4 md:text-xl mt-10 space-y-4">
                <div className="flex flex-col justify-center items-center">
                  <p>
                    Kata etika berasal dari dua kata Yunani yang hampir sama
                    bunyinya, namun berbeda artinya. Pertama berasal dari kata
                    ethos yang berarti "kebiasaan atau adat" sedangkan yang
                    kedua artinya "perasaan batin atau kencenderungan batin yang
                    mendorong manusia dalam perilakunya" <br /> • Etika adalah
                    seperangkat keyakinan tentang perilaku benar dan salah dalam
                    suatu masyarakat (George Reynolds, 2014) <br /> • Menurut
                    Kamus Besar Bahasa Indonesia (Departemen P dan K, 1988),
                    etika dijelaskan dengan membedakan tiga arti sebagai
                    berikut. <br />
                    <br /> I. Ilmu tentang apa yang baik dan apa yang buruk dan
                    tentang hak dan kewajiban moral (akhlak); <br /> 2. Kumpulan
                    asas atau nilai yang berkenaan dengan akhlak. <br /> 3.
                    Nilai mengenai benar dan salah yang dianut suatu golongan/
                    masyarakat.
                  </p>
                  <img
                    src={prinsip}
                    className="md:w-1/2  md:px-20 rounded-xl md:rounded-[100px]"
                    alt=""
                  />
                  <h1 className="text-sm">Pembagian Umum Etika Profesi</h1>
                </div>
                <h1 data-aos="fade-left">
                  Dalam etika terdapat pembagian khususnya hal profesi. Dimulai
                  dari etika umum dan etika khusus. <br />
                  <b>Etika Khusus: </b>Diterapkan pada prinsip dasar
                  masing-masing kehidupan manusia. <br />
                  Setelah etika sosial, akan dibagi kembali menjadi berbagai hal
                  mulai dari etika sesama~idiologi. Dalam etika profesi, ada
                  pembagian mengenai biomedis, hukum, pengetahuan IT, hingga
                  berbagai sektor bidang lainnya.
                </h1>
                <h1 className="font-bold" data-aos="fade-right">
                  Ada Etika Ada Etiket, Apa Itu?
                </h1>
                <h1 data-aos="fade-left">
                  <b>Etika</b> menyangkut cara dilakukannya suatu perbuatan
                  sekaligus memberi norma dari perbuatan itu sendiri. Contohnya
                  : Dilarang mengambil barang milik orang lain tanpa izin karena
                  mengambil barang milik orang lain tanpa izin sama artinya
                  dengan mencuri. "Jangan mencuri" merupakan suatu norma etika.
                  Di sini tidak dipersoalkan apakah pencuri tersebut mencuri
                  dengan tangan kanan atau tangan kiri. <br /> <br />
                  <b>Etiket</b> hanya berlaku dalam situasi dimana kita tidak
                  seorang diri (ada orang lain di sekitar kita). Bila tidak ada
                  orang lain di sekitar kita atau tidak ada saksi mata, maka
                  etiket tidak berlaku. Contohnya : Saya sedang makan bersama
                  bersama teman sambil meletakkan kaki saya di atas meja makan,
                  maka saya dianggap melanggat etiket. Tetapi kalau saya sedang
                  makan sendirian (tidak ada orang lain), maka saya tidak
                  melanggar etiket jika saya makan dengan cara demikian.
                </h1>

                <h1>
                  <b>Ciri-ciri profesi ada apa aja sih?</b>
                  <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>
                        Keterampilan yang berdasar pada pengetahuan teoritis
                      </p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Asosisasi profesional</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Pendidikan yang ekstensi</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Ujian kompetensi</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Pelatihan institusional</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Lisensi</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Kode etik</p>
                    </div>
                    <div className="bg-[#FF7F3E] flex justify-center w-fit p-4 rounded-md">
                      <p>Status dan imbalan</p>
                    </div>
                  </div>
                </h1>
                <hr className="border-2" />
                <div className="relative">
                  <h1 className="text-center text-2xl md:text-4xl">
                    Gimana sistem norma dalam kode etik profesi?
                  </h1>
                </div>
                <div className="bg-gradient-to-r from-[#FF7F3E] to-[#fd6f28] text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-10 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className=" w-[40rem] flex items-center justify-center h-fit p-2">
                    {" "}
                    <img src={cat} alt="Cat" className="rounded-md" />
                  </div>
                  <div className="space-y-5">
                    <h1>
                      Kode etik profesi adalah system norma, nilai dan aturan
                      professional tertulis yang secara tegas menyatakan apa
                      yang benar dan baik, dan apa yang tidak benar dan tidak
                      baik bagi professional. Kode etik menyatakan perbuatan apa
                      yang benar atau salah, perbuatan apa yang harus dilakukan
                      dan apa yang harus dihindari. Tujuan kode etik yaitu agar
                      professional memberikan jasa sebaik-baiknya kepada pemakai
                      atau nasabahnya. Dengan adanya kode etik akan melindungi
                      perbuatan yang tidak professional.
                    </h1>
                  </div>
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
                    Emang apa aja sih fungsinya kode etik profesi?
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>
                      Bukan main, kode etik profesi memiliki pengaruh yang
                      sangat penting dalam hal pengaturan pekerjaan dunia
                      profesional, antara lain:
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
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#FF7F3E] text-center rounded-lg font-bold">
                        <h1>1</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Kode etik profesi memberikan pedoman bagi setiap anggota
                        profesi tentang prinsip profesionalitas yang digariskan
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-[#FF7F3E] text-center rounded-lg font-bold">
                        <h1>2</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-[17px] text-center">
                        Kode etik profesi merupakan sarana kontrol sosial bagi
                        masyarakat atas profesi yang bersangkutan
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-[#FF7F3E] text-center rounded-lg font-bold">
                        <h1>3</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Kode etik profesi mencegah campur tangan pihak diluar
                        organisasi profesi tentang hubungan etika dalam
                        keanggotaan profesi
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  text-slate-700  text-2xl px-4 md:px-16">
                <div className="mt-4 space-y-5 text-center">
                  <h1>Terima kasih atas perhatiannya!😎😎✌🏻</h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default EtikaProfesi;
