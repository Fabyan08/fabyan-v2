import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
const Qris = () => {
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lakukan logika async untuk persiapan aplikasi Anda di sini
    // Setelah semua persiapan selesai, atur isLoading menjadi false
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <img
            loading="lazy"
            src="../../../../assets/image/blog/detail/bg.jpg"
            className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
            alt=""
          />
          <div className="bg-gradient-to-l from-white to-primary/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
            <div className="flex items-center justify-center">
              <Link
                to="/blog"
                className="text-2xl bg-slate-200  shadow-sm text-primary rounded-lg w-fit px-2 h-10  flex items-center justify-center"
              >
                <div className="flex items-center">
                  <div className="bg-white rounded-lg hover:scale-110 duration-150 w-full h-full ">
                    <BsArrowLeftShort />
                  </div>
                  <div>
                    <h1 className="ml-2 font-semibold">Featured</h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-10 md:mt-20">
              <div className="md:flex md:space-x-20">
                <h1
                  data-aos="fade-right"
                  className="text-2xl text-center md:text-7xl font-bold text-slate-700"
                >
                  Transaksi Lintas Negara? Bukan Jadi Masalah! Yuk Kenali QRIS
                  Cross-Border!
                </h1>
                <div className="flex items-center justify-center space-x-2 md:hidden py-2">
                  <h1 className="text-primary">Admin</h1>
                  <h1 className="text-slate-800">-</h1>
                  <h1 className="text-slate-800">Kamis, 2 November 2023</h1>
                </div>
                <img
                  loading="lazy"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  src="../../../../assets/image/blog/detail/bg.jpg"
                  className=" md:hidden rounded-lg "
                  alt=""
                />
                <h1 className="text-[10px] text-slate-500 text-center mt-1 md:hidden">
                  Ilustrasi QRIS Cross Border | Foto: qris.online
                </h1>
                <img
                  loading="lazy"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  src="../../../../assets/image/blog/detail/mon2.gif"
                  className="w-96 hidden md:flex"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="border-8 md:border-[20px]  border-primary/30 h-full pb-20">
            <div className="-mt-36 md:-mt-24 md:px-16 md:flex mx-4">
              <div className="md:flex">
                <BiSolidQuoteAltLeft className="text-white text-4xl " />
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="bg-white flex hover:border-2 hover:border-primary duration-150 border-primary/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-full"
                >
                  <h1 className="p-10 text-2xl">
                    Sekarang, jajan di luar negeri pakai mata uang Rupiah bukan
                    lagi hanya angan-angan semata! <i>QRIS Cross-Border</i>{" "}
                    hadir sebagai inovasi digital ekonomi keuangan untuk
                    menyatukan transaksi ke luar negeri hanya dalam genggaman
                    gawai!
                  </h1>
                </div>
                {/* <BiSolidQuoteAltLeft className="text-white text-xl absolute bottom-0 right-0 ml-40" /> */}
              </div>

              <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-xl">
                <h1>
                  Kamu pasti sudah tahu kan, bahwa kecanggihan digitalisasi saat
                  ini telah membawa dampak yang sangat signifikan lho, mulai
                  dari keuangan tingkat lokal bahkan global. Adanya QRIS (QR
                  Code Indonesian Standard) benar-benar jadi inovasi besar yang
                  mampu mengubah sistem pembayaran yang sebelumnya terbilang
                  kurang efektif di Indonesia. Selayaknya pada umumnya,
                  pembayaran biasa dilakukan menggunakan uang tunai atau kartu
                  ATM. Tak jarang juga kamu kewalahan untuk menemukan uang pas
                  hingga lebih gawatnya kehilangan kartu ATM yang jadi masalah
                  serius. QRIS hadir dan berusaha untuk memperbaiki sistem
                  pembayaran tersebut dengan inovasi cerdas yang hanya
                  memanfaatkan gawaimu saja!
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <img
                loading="lazy"
                src="../../../../assets/image/blog/detail/line1.png"
                alt=""
              />
            </div>
            {/* <div className="bg-gradient-to-r from-white to-primary w-96 h-96 rounded-full absolute blur-2xl -z-10 -right-40"></div> */}
            <div className="md:px-[125px] text-xl px-4 md:text-2xl mt-10 space-y-4">
              <h1 data-aos="fade-left">
                Melansir laman resmi Bank Indonesia,{" "}
                <a
                  href="https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/SP_216219.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  bi.go.id{" "}
                </a>{" "}
                . QRIS ada karena kebutuhan serta dorongan untuk berinovasi di
                sektor ekonomi keuangan. Layaknya dipermudah di dunia industri
                4.0 yang “gila gadget” ini, kamu bisa melakukan pembayaran hanya
                dari gawai saja. Cukup hanya dengan scan QR Code, kamu dapat
                membayar kebutuhanmu dengan sangat-sangat cepat. Kemudahan serta
                kecepatan jadi unggulan yang ditawarkan QRIS sebagai
                perkembangan kebutuhan agar tetap makin produktif.
              </h1>
              <h1 data-aos="fade-right">
                Semenjak 17 Agustus 2019, QRIS hadir untuk memberikan warna baru
                bagi ekonomi Indonesia. Kemudahan untuk bertransaksi jadi “harga
                mahal” yang dijual sebagai inovasi untuk memajukan digitalisasi
                keuangan dengan mengusung semangat UNGGUL (<b>UN</b>iversal,{" "}
                <b>G</b>ampan<b>G</b>,<b>U</b>ntung dan <b>L</b>angsung). QRIS
                membidik keefektifan serta efisiensi transaksi yang sesuai
                dengan tema HUT ke-74 Kemerdekaan RI waktu itu. Efisiensi
                transaksi, kecepatan inklusi keuangan, hingga memajukan UMKM
                untuk Indonesia yang lebih maju.
              </h1>
              <h1 data-aos="fade-left">
                Dilansir juga dari sumber resmi Bank Indonesia juga, data
                memperlihatkan bahwa sudah terdapat sekitar 25,4 juta merchant
                yang menggunakan QRIS, sebuah angka yang cukup fantastis bukan?
                Jika kamu tahu juga, lebih dari 90% atau tepatnya 91,7%
                penggunanya adalah UMKM.
              </h1>
              <hr className="border-2" />
              <div className="relative">
                <h1 className="text-center text-2xl md:text-4xl">
                  Seiring berkembangnya,{" "}
                  <i>
                    QRIS Cross-Border akan hadir di negara-negara ASEAN lainnya.
                  </i>
                </h1>
                <div
                  className="flex justify-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    loading="lazy"
                    src="../../../../assets/image/blog/detail/aseanqr.png"
                    className="w-full md:w-[800px]"
                    alt=""
                  />
                </div>
                <h1 className="text-sm text-center">
                  (Peta ASEAN dengan perkembangan QRIS | Foto: Diolah dari
                  Freepik.com)
                </h1>
              </div>
              <div data-aos="fade-down" className="space-y-5">
                <h1>
                  Makin ajaib dan bertambah canggih. Saat ini, QRIS mewujudkan
                  impian kamu agar dapat juga digunakan dengan mudah di luar
                  negeri, terkhususnya negara-negara yang berada di wilayah
                  ASEAN. Melansir dari laman resmi setnasasean.id dengan judul “
                  <a
                    className="text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://setnasasean.id/news-events/read/prinsip-kerja-sama-asean-dan-manfaatnya-bagi-indonesia"
                  >
                    {" "}
                    Prinsip Kerja Sama ASEAN dan Manfaatnya bagi Indonesia.
                  </a>
                  ”. Hal tersebut sangat dengan misi QRIS yang memegang prinsip{" "}
                  <b>
                    “Setiap kerja sama ASEAN harus diwujudkan secara berguna,
                    efektif, efisien, dan rasional.”
                  </b>{" "}
                  sebagai pokok dalam kerja sama antar negara ASEAN yang wajib
                  diikuti. Terlebih QRIS juga mengemban nama Indonesia yang siap
                  terus untuk jadi mata garuda dalam kerja sama bidang ekonomi
                  negara-negara ASEAN.
                </h1>
                <h1>
                  Kini, peluncurannya sendiri sudah digempur di negara tetangga
                  Malaysia semenjak uji cobanya pada 27 Januari 2022.
                  Berhubungan erat dengan ekonomi, lembaga-lembaga keuangan
                  turut berpartisipasi sebagai penyedia pembayaran online dengan
                  konsep keefektifannya. Dukungan ekonomi dengan adanya kerja
                  sama ini mampu membuat kedua negara memiliki pasar tanpa batas
                  mata dengan solusi pembayaran yang lebih dinamis, tak peduli
                  di manapun kamu berada.
                </h1>
                <h1>
                  Sebagai informasi tambahan, QRIS sendiri sudah jadi standar
                  untuk pembayaran nasional, jadi tak perlu ragu lagi. Memiliki
                  dukungan lebih dari 10 penyelenggara bank & non bank serta
                  hubungan dengan dana online menjadikan QRIS salah satu
                  transaksi yang diandalkan masyarakat Indonesia hingga saat
                  ini!
                </h1>
              </div>
              <div className="flex justify-center items-center font-bold">
                <div>
                  <img
                    loading="lazy"
                    src="../../../../assets/image/blog/detail/think.png"
                    className="w-60"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl">
                  Singkatnya, <i>QRIS Cross-Border itu...</i>
                </h1>
              </div>
              <hr className="border-2 w-full" />
              <div className="flex  items-center">
                <div>
                  <h1>
                    Untuk kamu yang bertanya-tanya, <i>QRIS Cross-Border</i> itu
                    apa? <i>QRIS Cross-Border</i> adalah inovasi terbaru yang
                    dihadirkan{" "}
                    <a
                      href="https://www.bi.go.id/id/publikasi/ruang-media/cerita-bi/Pages/QR-Cross-Border-Solusi-Transaksi-Antar-Negara.aspx"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bank Indonesia
                    </a>{" "}
                    . Sistem pembayaran “Cross-Border” ini dapat kamu artikan
                    sebagai sebuah sistem konektivitas lintas batas negara
                    bidang ekonomi dengan sistem digitalisasi yang canggih, jadi
                    jarak sudah bukan jadi halangan dengan adanya inovasi ini.{" "}
                  </h1>
                </div>
                <div>
                  <img
                    loading="lazy"
                    src="../../../../assets/image/blog/detail/seru.png "
                    className="w-40 animate-pulse"
                    alt=""
                  />
                </div>
              </div>
              <h1>
                Mengutip informasi resmi Bank Indonesia. Singkatnya,{" "}
                <b>
                  {" "}
                  QRIS Cross-Border adalah suatu fitur/program terbaru yang
                  dihadirkan oleh Bank Indonesia agar kamu bisa melakukan
                  transaksi lintas negara dengan lebih mudah dan proses yang
                  cepat hanya dengan gawai saja.{" "}
                </b>
                Hal ini tentunya untuk turut mewujudkan perkembangan ekonomi
                digital yang lebih baik.
              </h1>
              <div className="md:flex justify-center space-y-5 md:space-y-0 md:space-x-20">
                <img
                  data-aos="fade-right"
                  loading="lazy"
                  src="../../../../assets/image/blog/detail/kerjasama.png"
                  className="w-96 rounded-lg"
                  alt=""
                />
                <img
                  data-aos="fade-left"
                  loading="lazy"
                  src="../../../../assets/image/blog/detail/pidato.png"
                  className="w-96 rounded-lg"
                  alt=""
                />
              </div>
              <h1 className="text-sm text-center ">
                (Potret kerja sama <i> QRIS Cross-Border </i> antara Indonesia,
                Malaysia, Filipina, Singapura, dan Thailand | Foto: Dokumentasi
                Bank Indonesia)
              </h1>
              <h1>
                Sebagaimana informasi yang dikutip dari sumber resmi yang
                disediakan Bank Indonesia, saat ini kolaborasi antara Malaysia
                atau Bank Negara Malaysia (BNM) jadi awal yang baik bagi QRIS
                Cross-Border. Thailand juga jadi salah satu negara yang sudah
                menerapkan inovasi terbaru ini lho. Tak berhenti sampai di situ,
                masih akan terdapat Singapura dan Filipina yang dibidik oleh
                Bank Indonesia sebagai upaya penguatan inovasi ekonomi digital
                antar negara ASEAN.
              </h1>
              <h1>
                Percobaan pun juga telah dilakukan antara Malaysia dan Thailand.
                Tak dapat dipungkiri, bahwa adanya <i>QRIS Cross-Border</i> ini
                mampu meningkatkan efisiensi dalam bertransaksi hingga mampu
                mendukung pesat digitalisasi keuangan. Tak lupa juga, mampu
                memperluas transaksi dengan mata uang lokal (LCS).
              </h1>
              <div className="flex items-center">
                <div>
                  <img
                    loading="lazy"
                    src="../../../../assets/image/blog/detail/think2.png"
                    className="w-40"
                    alt=""
                  />
                </div>
                <div className="flex  space-x-4 items-center">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Masih Bingung? Cek Contohnya Yuk!
                  </h1>
                  <AiOutlineArrowDown className="animate-bounce" />
                </div>
              </div>
              <h1>
                Anggaplah dirimu seorang wisatawan yang pergi berlibur ke luar
                negeri dan ingin membeli oleh-oleh atau makanan dari UMKM di
                sana. Kamu tak ingin ambil pusing masalah pembayaran dan
                menemukan bahwa UMKM lokal di sana sudah turut serta menggunakan
                <i>QRIS Cross-Border</i>.
              </h1>
              <h1 className="text-right">
                Maka kamu cukup <i>tap</i> atau <i>scan QR</i> ~ secara otomatis
                saldo kamu akan terkonversi sesuai dengan mata pembayaran lokal
                serta bisa langsung masuk ke rekening penjual lho, fitur keren
                yang dimiliki QRIS!
              </h1>

              <div className="flex justify-end items-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Masih Bingung Juga? Begini Cara Pakainya!
                </h1>
                <img
                  loading="lazy"
                  src="../../../../assets/image/blog/detail/money.png"
                  className="w-40"
                  alt=""
                />
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid className="w-10 md:w-6" />
                <h1>
                  {" "}
                  Buka aplikasi pembayaran yang kamu gunakan untuk melakukan
                  transaksi dengan QRIS
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid />
                <h1> Scan QR code</h1>
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid className="w-10 md:w-6" />
                <h1>
                  Masukkan nominal dalam bentuk mata uang negara yang kamu
                  kunjungi
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid />
                <h1> Konfirmasi tujuan dan nominal dalam rupiah</h1>
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid />
                <h1> Masukkan pin</h1>
              </div>
              <div className="flex items-center space-x-2">
                <LiaArrowAltCircleRightSolid />
                <h1> Berhasil deh!</h1>
              </div>
              <div className="mt-10">
                <h1 className="font-bold text-3xl mt-10">
                  Nah, sekarang kamu sudah tahu kan apa itu{" "}
                  <i>QRIS Cross-Border</i> dan kegunaannya?
                </h1>
              </div>
              <div className="mt-10">
                <div className="relative">
                  <div className="bg-primary w-full h-full p-4 rounded-xl text-white font-semibold">
                    <h1>
                      Kesimpulannya, pertumbuhan digitalisasi bidang ekonomi
                      layaknya menghubungkan konektivitas tiap negara agar turut
                      berkembang, Indonesia menjadi salah satu pelopor melalui
                      sistem pembayaran <i>QRIS Cross-Border</i> hinga dapat
                      terselaraskan antar negara-negara ASEAN.
                    </h1>
                    <h1 className="mt-5">
                      <i>QRIS Cross-Border</i> berusaha untuk menciptakan sistem
                      ekonomi internasional yang digital serta berkolaborasi
                      antar negara ASEAN untuk memudahkan kamu melakukan
                      transaksi lintas negara dengan cepat dan tanpa perlu cara
                      yang rumit!
                    </h1>
                  </div>
                  <hr className="w-[2000px] top-32 -ml-32 border-8 border-primary absolute -z-10  " />
                </div>
              </div>
            </div>

            <div className="md:-mt-20 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#6DA9E4"
                  // fill-opacity="1"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>

            <div className="bg-primary -mt-[1px] w-full h-full pb-20 rounded-b-[40px] px-6 md:px-16">
              <h1 className="md:text-4xl text-2xl font-bold text-white">
                Ketahui Lebih Dalam Tentang <i>QRIS Cross-Border</i>!
              </h1>
              <div className="pt-10 md:pt-20 md:flex ">
                <div>
                  <img
                    loading="lazy"
                    src="../../../../assets/image/blog/detail/dok1.png"
                    className="w-[450px] rounded-xl"
                    alt=""
                  />
                </div>
                <div className="flex-col justify-center hidden md:flex space-y-40 mx-5  text-white text-4xl">
                  <BsArrowBarLeft className="animate-bounce" />
                  <BsArrowBarRight className="animate-bounce" />
                </div>
                <div className="md:flex hidden flex-col justify-between">
                  <iframe
                    className="rounded-lg"
                    width="900"
                    height="540"
                    src="https://www.youtube.com/embed/LnwvhuUxuVQ"
                  ></iframe>
                  <h1 className="text-white text-center text-2xl font-bold">
                    QRIS (QR Code Indonesia Standard)
                  </h1>
                </div>
                <div className="md:hidden flex-col mt-4 md:mt-0 justify-between">
                  <iframe
                    className="rounded-lg"
                    width="300"
                    height="190"
                    src="https://www.youtube.com/embed/LnwvhuUxuVQ"
                  ></iframe>
                  <h1 className="text-white text-center text-2xl font-bold">
                    QRIS (QR Code Indonesia Standard)
                  </h1>
                </div>
              </div>

              <div className="pt-4 md:pt-16 space-y-2">
                <div className=" justify-center space-x-4">
                  <Swiper
                    slidesPerView={1.4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mt-4"
                  >
                    <SwiperSlide>
                      <div className="overflow-hidden aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk pembayaran parkir
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="overflow-hidden  aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk berbelanja kebutuhan
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna2.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="overflow-hidden  aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk pembelian tiket event
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna3.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="overflow-hidden  aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk infak/berbagi
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna4.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="overflow-hidden  aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk pembayaran PKB
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna5.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="overflow-hidden  aspect-video bg-white cursor-pointer rounded-xl relative group">
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  bg-primary border-2 border-white inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className=" p-1 md:p-4 space-y-3 text-sm md:text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                              <h1 className="font-semibold text-center md:ml-8">
                                QRIS untuk melakukan pembayaran
                              </h1>
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="../../../../assets/image/blog/detail/guna6.png"
                          className=" w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="relative  text-center  text-slate-700 font-semibold text-2xl md:text-4xl">
              <div className="mt-4 flex justify-center">
                <h1>QRISnya satu, menangnya banyak!</h1>
              </div>
              <div className="flex justify-center">
                <h1>participant of BI Digital Content Competition 2023</h1>
              </div>
              <div className="flex justify-center mt-6 text-primary items-center space-x-2">
                <a
                  className=" underline"
                  href="https://bi-digitalcompetition.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bi-digitalcompetition.com
                </a>
                <BsBoxArrowInUpRight className="animate-bounce" />
              </div>
              <div className="flex justify-center">
                <img
                  loading="lazy"
                  src="../../../../assets/image/blog/detail/foot.png"
                  className="w-[500px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex z-[999999]  bg-primary/40 backdrop-blur-lg shadow-md text-white w-10 h-10 rounded-full right-12 bottom-12 fixed items-center justify-center text-2xl">
              <a href="#">
                <AiOutlineArrowUp />
              </a>
            </div>
            {/* <BacktoTopButton /> */}
            <p className="-mb-20 text-sm text-slate-400">
              (Aset diolah dari berbagai sumber gratis:{" "}
              <a href="https://icons8.com/illustrations">Icons8</a>,{" "}
              <a href="https://www.freepik.com">Freepik)</a>{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Qris;
