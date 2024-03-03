import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp, AiFillLike } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
const Kirim = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lakukan logika async untuk persiapan aplikasi Anda di sini
    // Setelah semua persiapan selesai, atur isLoading menjadi false
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
              src="../../../assets/image/blog/kiriminaja/head1.jpg"
              className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
              alt=""
            />
            <div className="bg-gradient-to-l from-white to-[#8F47D1]/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
              <div className="flex items-center justify-center">
                <Link
                  to="/blog"
                  className="text-2xl bg-slate-200  shadow-sm text-[#4F378B] rounded-lg w-fit px-2 h-10  flex items-center justify-center"
                >
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg hover:scale-110 duration-150 w-full h-full ">
                      <BsArrowLeftShort />
                    </div>
                    <div>
                      <h1 className="ml-2 font-semibold">Technologies</h1>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-10">
                <div className="md:flex items-center md:space-x-20">
                  <h1
                    data-aos="fade-right"
                    className="text-2xl animate-rubberBand text-center md:text-7xl font-bold text-[#4F378B] stroke-white stroke-2 drop-shadow-[0_1.2px_1.2px_#FFFFFF]
"
                  >
                    Makin Terhubung Pakai KiriminAja: Aplikasi Kirim Paket #1
                    Indonesia!
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
                    src="../../../assets/image/blog/kiriminaja/head2.jpg"
                    className=" md:hidden rounded-lg "
                    alt=""
                  />
                  <h1 className="text-[10px] text-white text-center mt-1 md:hidden">
                    KiriminAja: Aplikasi Kirim Paket #1 di Indonesia
                  </h1>

                  <div>
                    <div className="w-[350px] mb-2 flex flex-col justify-center items-center">
                      <svg
                        className="w-40 h-10"
                        viewBox="0 0 582 165"
                        fill="#4F378B"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M150.636 118.622C151.338 119.501 152.403 120.012 153.528 120.012H166.511C169.603 120.012 171.333 116.448 169.421 114.018L152.388 92.3771C151.24 90.9199 151.348 88.8392 152.639 87.508L166.197 73.5285C168.475 71.1794 166.81 67.2462 163.538 67.2462H151.89C150.925 67.2462 149.998 67.6234 149.306 68.2971L137.786 79.5202C135.439 81.8065 131.498 80.1436 131.498 76.8672V51.4791C131.498 49.4336 129.84 47.7754 127.794 47.7754H116.704C114.659 47.7754 113 49.4336 113 51.4791V116.309C113 118.354 114.659 120.012 116.704 120.012H127.794C129.84 120.012 131.498 118.354 131.498 116.309V108.579C131.498 107.608 131.879 106.676 132.56 105.984L134.024 104.493C135.58 102.909 138.171 103.041 139.558 104.775L150.636 118.622Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M183.932 61.4048C190.747 61.4048 195.225 57.1213 195.225 51.28C195.225 45.7308 190.747 41.7393 183.932 41.7393C177.117 41.7393 172.639 46.0229 172.639 51.5721C172.639 57.1213 177.117 61.4048 183.932 61.4048ZM174.684 116.309C174.684 118.354 176.342 120.012 178.387 120.012H189.477C191.523 120.012 193.181 118.354 193.181 116.309V70.9498C193.181 68.9043 191.523 67.2461 189.477 67.2461H178.387C176.342 67.2461 174.684 68.9043 174.684 70.9498V116.309Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M221.344 70.3541C220.084 71.2589 217.955 70.4357 217.955 68.8848C217.955 67.9799 217.222 67.2463 216.317 67.2463H204.038C201.992 67.2463 200.334 68.9046 200.334 70.95V116.309C200.334 118.354 201.992 120.012 204.038 120.012H215.128C217.173 120.012 218.832 118.354 218.832 116.309V95.7712C218.832 86.5226 223.991 82.7257 231.488 82.7257C233.705 82.7257 235.674 81.0699 235.674 78.8528V70.0738C235.674 68.0284 234.009 66.3424 231.976 66.5664C227.797 67.0268 224.209 68.2956 221.344 70.3541Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M247.688 61.4048C254.502 61.4048 258.981 57.1213 258.981 51.28C258.981 45.7308 254.502 41.7393 247.688 41.7393C240.873 41.7393 236.395 46.0229 236.395 51.5721C236.395 57.1213 240.873 61.4048 247.688 61.4048ZM238.439 116.309C238.439 118.354 240.097 120.012 242.143 120.012H253.233C255.279 120.012 256.937 118.354 256.937 116.309V70.9498C256.937 68.9043 255.279 67.2461 253.233 67.2461H242.143C240.097 67.2461 238.439 68.9043 238.439 70.9498V116.309Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M332.822 66.3701C327.169 66.3701 322.109 68.0431 318.164 71.0674C316.163 72.6025 313.072 72.4454 311.138 70.8244C307.536 67.8027 302.801 66.3701 297.483 66.3701C292.685 66.3701 288.293 67.6397 284.704 70.1789C283.541 71.0009 281.711 70.2373 281.711 68.8139C281.711 67.9481 281.01 67.2463 280.143 67.2463H267.794C265.748 67.2463 264.09 68.9046 264.09 70.95V116.309C264.09 118.354 265.748 120.012 267.794 120.012H278.884C280.93 120.012 282.588 118.354 282.588 116.309V93.8241C282.588 85.6463 286.481 82.0442 291.933 82.0442C296.899 82.0442 299.916 85.2569 299.916 92.8506V116.309C299.916 118.354 301.574 120.012 303.62 120.012H314.71C316.756 120.012 318.414 118.354 318.414 116.309V93.8241C318.414 85.6463 322.307 82.0442 327.663 82.0442C332.53 82.0442 335.646 85.2569 335.646 92.8506V116.309C335.646 118.354 337.304 120.012 339.349 120.012H350.439C352.485 120.012 354.143 118.354 354.143 116.309V89.8326C354.143 73.477 345.089 66.3701 332.822 66.3701Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M370.199 61.4048C377.014 61.4048 381.491 57.1213 381.491 51.28C381.491 45.7308 377.014 41.7393 370.199 41.7393C363.384 41.7393 358.906 46.0229 358.906 51.5721C358.906 57.1213 363.384 61.4048 370.199 61.4048ZM360.951 116.309C360.951 118.354 362.609 120.012 364.654 120.012H375.743C377.789 120.012 379.447 118.354 379.447 116.309V70.9498C379.447 68.9043 377.789 67.2461 375.743 67.2461H364.654C362.609 67.2461 360.951 68.9043 360.951 70.9498V116.309Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M420.967 66.3701C415.852 66.3701 411.145 67.7068 407.337 70.3352C406.117 71.1774 404.222 70.373 404.222 68.8902C404.222 67.9823 403.486 67.2463 402.578 67.2463H390.305C388.259 67.2463 386.601 68.9046 386.601 70.95V116.309C386.601 118.354 388.259 120.012 390.305 120.012H401.394C403.44 120.012 405.098 118.354 405.098 116.309V94.5057C405.098 85.7437 409.674 82.0442 415.612 82.0442C420.967 82.0442 424.277 85.2569 424.277 92.8506V116.309C424.277 118.354 425.935 120.012 427.98 120.012H439.07C441.116 120.012 442.774 118.354 442.774 116.309V89.8326C442.774 73.477 433.331 66.3701 420.967 66.3701Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M472.009 66.3701C464.947 66.3701 457.388 67.9301 451.572 70.8685C449.904 71.7112 449.364 73.7602 450.195 75.4343L452.949 80.9868C453.993 83.0897 456.736 83.7117 458.875 82.7464C462.052 81.3135 465.805 80.4865 469.283 80.4865C474.641 80.4865 478.006 82.1116 479.535 85.0922C480.504 86.9831 478.693 88.859 476.568 88.859H469.964C453.609 88.859 446.502 94.8951 446.502 104.63C446.502 113.782 453.511 120.889 466.168 120.889C471.325 120.889 475.388 119.707 478.297 117.402C479.395 116.532 481.744 117.275 481.744 118.675C481.744 119.414 482.343 120.012 483.081 120.012H495.273C497.317 120.012 498.977 118.354 498.977 116.309V90.7088C498.977 73.9638 489.143 66.3701 472.009 66.3701ZM471.327 109.206C466.947 109.206 464.415 106.967 464.415 103.852C464.415 100.639 466.557 98.4972 472.495 98.4972H476.775C478.821 98.4972 480.479 100.155 480.479 102.201V102.445C480.479 102.861 480.415 103.276 480.254 103.66C478.672 107.441 475.22 109.206 471.327 109.206Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M515.811 61.4048C522.626 61.4048 527.105 57.1213 527.105 51.28C527.105 45.7308 522.626 41.7393 515.811 41.7393C508.996 41.7393 504.519 46.0229 504.519 51.5721C504.519 57.1213 508.996 61.4048 515.811 61.4048ZM503.544 139.775C517.174 139.775 525.061 131.5 525.061 118.649V70.9498C525.061 68.9043 523.403 67.2461 521.357 67.2461H510.267C508.221 67.2461 506.563 68.9043 506.563 70.9498V118.552C506.563 123.322 504.323 125.464 501.111 125.464C500.633 125.464 500.161 125.435 499.696 125.379C497.347 125.095 494.616 126.019 493.824 128.249L491.728 134.14C491.13 135.825 491.819 137.723 493.51 138.303C496.41 139.298 499.951 139.775 503.544 139.775Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M554.589 66.3701C547.527 66.3701 539.968 67.9301 534.152 70.8685C532.484 71.7112 531.944 73.7602 532.775 75.4343L535.53 80.9868C536.573 83.0897 539.315 83.7117 541.456 82.7464C544.632 81.3135 548.385 80.4865 551.863 80.4865C557.221 80.4865 560.586 82.1116 562.115 85.0922C563.084 86.9831 561.273 88.859 559.148 88.859H552.544C536.189 88.859 529.081 94.8951 529.081 104.63C529.081 113.782 536.091 120.889 548.748 120.889C553.905 120.889 557.968 119.707 560.878 117.402C561.975 116.532 564.325 117.275 564.325 118.675C564.325 119.414 564.923 120.012 565.662 120.012H577.852C579.897 120.012 581.556 118.354 581.556 116.309V90.7088C581.556 73.9638 571.723 66.3701 554.589 66.3701ZM553.907 109.206C549.526 109.206 546.995 106.967 546.995 103.852C546.995 100.639 549.137 98.4972 555.075 98.4972H559.356C561.4 98.4972 563.059 100.155 563.059 102.201V102.445C563.059 102.861 562.995 103.276 562.835 103.66C561.252 107.441 557.8 109.206 553.907 109.206Z"
                          fill="#4F378B"
                        ></path>
                        <path
                          d="M51.3351 77.9083C42.5119 69.1028 28.2066 69.1028 19.3833 77.9083C10.5601 86.7138 10.5601 100.99 19.3833 109.796L67.2891 157.605C76.1124 166.411 90.4177 166.411 99.2409 157.605C108.064 148.8 108.064 134.523 99.2409 125.718L51.3351 77.9083Z"
                          fill="url(#paint0_linear)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.6352 18.1001C27.2754 18.9986 26.15 23.19 28.6097 25.6448L37.2126 34.2306L6.61738 64.7643C0.206094 71.1627 -1.54652 80.4498 1.35969 88.4277C2.43558 91.6347 4.25367 94.6489 6.8135 97.2035L54.1197 144.415V81.1327L69.1646 66.1181L77.7259 74.6622C80.1854 77.1167 84.3855 75.9936 85.2856 72.6405L103.263 5.68158C104.164 2.32825 101.089 -0.740068 97.7293 0.158467L30.6352 18.1001Z"
                          fill="#9B51E0"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.6352 18.1001C27.2754 18.9986 26.15 23.19 28.6097 25.6448L37.2126 34.2306L6.61738 64.7643C0.206094 71.1627 -1.54652 80.4498 1.35969 88.4277C2.43558 91.6347 4.25367 94.6489 6.8135 97.2035L54.1197 144.415V81.1327L69.1646 66.1181L77.7259 74.6622C80.1854 77.1167 84.3855 75.9936 85.2856 72.6405L103.263 5.68158C104.164 2.32825 101.089 -0.740068 97.7293 0.158467L30.6352 18.1001Z"
                          fill="url(#paint1_linear)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="32.7589"
                            y1="157.605"
                            x2="99.2414"
                            y2="157.606"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.328125" stopColor="#003E95"></stop>
                            <stop offset="1" stopColor="#3681EC"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="63.5"
                            y1="60.5"
                            x2="-40.5"
                            y2="164.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#9B51E0"></stop>
                            <stop offset="1" stopColor="#3E0870"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <img
                      loading="lazy"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      src="../../../assets/image/blog/kiriminaja/head3.jpg"
                      className="w-96 hidden md:flex rounded-xl animate-headShake"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-8 md:border-[20px]  border-new/50 h-full pb-20">
              <div className="-mt-36 md:-mt-24 md:px-16 md:flex mx-4">
                <div className="md:flex">
                  <BiSolidQuoteAltLeft className="text-white text-4xl " />
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-white flex hover:border-2 hover:border-new duration-150 border-new/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-full"
                  >
                    {" "}
                    <div className="p-5 ">
                      <span className="text-new font-bold text-2xl md:text-4xl">
                        #TwogetherStronger
                      </span>
                      <h1 className="text-xl md:text-2xl mt-2">
                        Menanggapi industri teknologi 4.0 yang berkembang dengan
                        pesat, diperlukan inovasi yang cemerlang guna mendukung
                        perekonomian Indonesia.
                      </h1>
                      <h1 className="text-xl md:text-2xl mt-2">
                        <a
                          href="https://kiriminaja.com"
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-new"
                        >
                          KiriminAja
                        </a>{" "}
                        , agregator logistik yang berikan kemudahan untuk
                        pengiriman paket COD & Non COD. Kembangkan bisnis Anda
                        sekarang!
                      </h1>
                    </div>
                  </div>
                  {/* <BiSolidQuoteAltLeft className="text-white text-xl absolute bottom-0 right-0 ml-40" /> */}
                </div>

                <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-[20px] flex flex-col justify-between space-y-10">
                  <h1>
                    Berkaca dari pengalaman saya, koneksi jadi hal yang sangat
                    penting untuk terus berkembang di dunia industri dan
                    teknologi 4.0 yang sangat mudah berubah saat ini. Sebagai
                    seseorang yang berkarier di bidang IT dan peduli terhadap
                    perkembangan teknologi, saya terkadang merasa agak sedikit
                    “pesimis” di Indonesia pada awalnya.
                  </h1>
                  <h1>
                    Di dunia serba teknologi saat ini, sangatlah diperlukan
                    inovasi untuk kemudahan masyarakat pastinya. Kamu tahu ga
                    sih, menurut dataindonesia.id, jumlah pengguna e-commerce di
                    Indonesia meledak-ledak lho. Diprediksi bakal ada 196,47
                    juta pengguna dan itu terus bertambah. Tak heran jika bisnis
                    online shop atau e-commerce terbilang menjanjikan. Terlebih
                    banyak kini berterbaran binis online yang dilakukan hanya
                    dari rumah dengan mengandalkan jaringan internet.
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <img
                  loading="lazy"
                  src="../../../assets/image/blog/kiriminaja/snake.png"
                  className="w-80 md:w-96"
                  alt=""
                />
              </div>
              {/* <div className="bg-gradient-to-r from-white to-primary w-96 h-96 rounded-full absolute blur-2xl -z-10 -right-40"></div> */}
              <div className="md:px-[125px] text-xl px-4 md:text-xl mt-10 space-y-4">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="../../../assets/image/blog/kiriminaja/chart.png"
                    className="md:w-full  md:px-20 rounded-xl md:rounded-[100px]"
                    alt=""
                  />
                  <h1 className="text-sm">
                    Data Pengguna E-Commerce di Indonesia 2018-2027 | Source:
                    dataindonesia.id
                  </h1>
                </div>
                <h1 data-aos="fade-left">
                  Seiring berkembangnya, pasti akan ada kekurangan yang dialami
                  oleh sang penjual. Meningkatnya pembeli di e-commerce tak
                  jarang menyebabkan kesulitan pengiriman yang dianggap cukup
                  rumit. Hal ini juga menyebabkan performa kurang produktif yang
                  bisa dialami penjual dan kekurangan peminat pada pembeli.
                  Lebih gawatnya, bisa-bisa rating kita akan menurun.
                </h1>
                <h1 data-aos="fade-right">
                  Berbicara soal e-commerce ataupun online shop, jasa kirim jadi
                  salah satu yang paling penting selain barang yang dihadirkan.
                  Di sini, jasa kirim berperan utama untuk menyampaikan barang
                  dengan kondisi aslinya yaitu wajib baik. Sebagai penjual, kamu
                  wajib nih untuk menentukan jasa kirim yang terbukti baik
                  sesuai rating dan service-nya.
                </h1>
                <h1 data-aos="fade-left">
                  Sebagai kacamata konsumen, pasti kamu juga menginginkan jasa
                  kirim yang terbaik untuk memastikan keselamatan barang yang
                  kamu beli secara online. Sebagai konsumen yang baik pula,
                  pasti dong kamu akan memerlukan pertimbangan lain seperti
                  sistem pembayaran, layanan, hingga sistem otomatis, serta
                  bantuan baik dari jasa kirim maupun kurir.
                </h1>
                <div className="md:flex space-x-2 items-center">
                  <div>
                    <div className="flex md:flex-none items-center justify-center">
                      <img
                        src="../../../assets/image/blog/kiriminaja/user.png"
                        className="w-40 rounded-full border-4 border-new"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-sm w-60 ml-16 md:ml-0">
                      Ilustrasi Konsumen | Foto: Unsplash.com/Hobi industri{" "}
                    </h1>
                  </div>
                  <h1>
                    Banyak konsumen yang cenderung tak ingin mengurus pembayaran
                    lebih rumit. Sesuai kebutuhannya, pembeli/konsumen akan
                    cenderung lebih suka jika ada sistem yang mudah dimengerti
                    dan bisa digunakan dengan cepat, maka dari itu muncullah
                    sistem pembayaran COD (Cash on Delivery) yang memudahkan
                    konsumen. Singkatnya, sistem pembayaran COD dilakukan
                    setelah barang sampai, jadi layaknya belanja offline namun
                    jika menggunakan sistem ini kamu cukup menunggu di rumah dan
                    membayar barang sesuai harganya ketika sudah sampai.
                  </h1>
                </div>
                <h1>
                  Hal ini ditunjukan melalui data yang didapat melalui
                  databoks.katadata.co.id bahwa hampir sebanyak 83,11 %
                  menggunakan metode pembayaran COD, berikutnya baru melalui
                  transfer bank (12,57%), e-walllet (2,24%), dan kartu kredit
                  (2,08%). Data tersebut didapatkan dari e-commerce sebanyak
                  15.677 sampel yang tersebar di 34 provinsi dan 159
                  kabupaten/kota.
                </h1>
                <div className="flex flex-col  items-center justify-center">
                  <img
                    src="../../../assets/image/blog/kiriminaja/chart2.png"
                    className="rounded-xl md:rounded-[100px] w-[700px]"
                    alt=""
                  />
                  <h1 className="text-sm">
                    Data Pembayaran E-Commerce Tahun 2021 | Source:
                    databoks.katadata.co.id
                  </h1>
                </div>
                <hr className="border-2" />
                <div className="relative">
                  <h1 className="text-center text-2xl md:text-4xl">
                    Nah di sini nih, KiriminAja punya peran penting banget buat
                    ngedukung jasa kirim kamu jadi lebih efektif dan pastinya
                    gampang banget.
                  </h1>
                </div>
                <div className="bg-gradient-to-r from-new to-neww text-white w-full h-fit py-10 md:flex md:flex-row items-center justify-between space-x-10 md:px-10 text-2xl flex flex-col rounded-lg md:rounded-full">
                  <div className="bg-white w-60 flex items-center justify-center h-20 p-2 rounded-full">
                    {" "}
                    <svg
                      className="w-40 h-10"
                      viewBox="0 0 582 165"
                      fill="#4F378B"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M150.636 118.622C151.338 119.501 152.403 120.012 153.528 120.012H166.511C169.603 120.012 171.333 116.448 169.421 114.018L152.388 92.3771C151.24 90.9199 151.348 88.8392 152.639 87.508L166.197 73.5285C168.475 71.1794 166.81 67.2462 163.538 67.2462H151.89C150.925 67.2462 149.998 67.6234 149.306 68.2971L137.786 79.5202C135.439 81.8065 131.498 80.1436 131.498 76.8672V51.4791C131.498 49.4336 129.84 47.7754 127.794 47.7754H116.704C114.659 47.7754 113 49.4336 113 51.4791V116.309C113 118.354 114.659 120.012 116.704 120.012H127.794C129.84 120.012 131.498 118.354 131.498 116.309V108.579C131.498 107.608 131.879 106.676 132.56 105.984L134.024 104.493C135.58 102.909 138.171 103.041 139.558 104.775L150.636 118.622Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M183.932 61.4048C190.747 61.4048 195.225 57.1213 195.225 51.28C195.225 45.7308 190.747 41.7393 183.932 41.7393C177.117 41.7393 172.639 46.0229 172.639 51.5721C172.639 57.1213 177.117 61.4048 183.932 61.4048ZM174.684 116.309C174.684 118.354 176.342 120.012 178.387 120.012H189.477C191.523 120.012 193.181 118.354 193.181 116.309V70.9498C193.181 68.9043 191.523 67.2461 189.477 67.2461H178.387C176.342 67.2461 174.684 68.9043 174.684 70.9498V116.309Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M221.344 70.3541C220.084 71.2589 217.955 70.4357 217.955 68.8848C217.955 67.9799 217.222 67.2463 216.317 67.2463H204.038C201.992 67.2463 200.334 68.9046 200.334 70.95V116.309C200.334 118.354 201.992 120.012 204.038 120.012H215.128C217.173 120.012 218.832 118.354 218.832 116.309V95.7712C218.832 86.5226 223.991 82.7257 231.488 82.7257C233.705 82.7257 235.674 81.0699 235.674 78.8528V70.0738C235.674 68.0284 234.009 66.3424 231.976 66.5664C227.797 67.0268 224.209 68.2956 221.344 70.3541Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M247.688 61.4048C254.502 61.4048 258.981 57.1213 258.981 51.28C258.981 45.7308 254.502 41.7393 247.688 41.7393C240.873 41.7393 236.395 46.0229 236.395 51.5721C236.395 57.1213 240.873 61.4048 247.688 61.4048ZM238.439 116.309C238.439 118.354 240.097 120.012 242.143 120.012H253.233C255.279 120.012 256.937 118.354 256.937 116.309V70.9498C256.937 68.9043 255.279 67.2461 253.233 67.2461H242.143C240.097 67.2461 238.439 68.9043 238.439 70.9498V116.309Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M332.822 66.3701C327.169 66.3701 322.109 68.0431 318.164 71.0674C316.163 72.6025 313.072 72.4454 311.138 70.8244C307.536 67.8027 302.801 66.3701 297.483 66.3701C292.685 66.3701 288.293 67.6397 284.704 70.1789C283.541 71.0009 281.711 70.2373 281.711 68.8139C281.711 67.9481 281.01 67.2463 280.143 67.2463H267.794C265.748 67.2463 264.09 68.9046 264.09 70.95V116.309C264.09 118.354 265.748 120.012 267.794 120.012H278.884C280.93 120.012 282.588 118.354 282.588 116.309V93.8241C282.588 85.6463 286.481 82.0442 291.933 82.0442C296.899 82.0442 299.916 85.2569 299.916 92.8506V116.309C299.916 118.354 301.574 120.012 303.62 120.012H314.71C316.756 120.012 318.414 118.354 318.414 116.309V93.8241C318.414 85.6463 322.307 82.0442 327.663 82.0442C332.53 82.0442 335.646 85.2569 335.646 92.8506V116.309C335.646 118.354 337.304 120.012 339.349 120.012H350.439C352.485 120.012 354.143 118.354 354.143 116.309V89.8326C354.143 73.477 345.089 66.3701 332.822 66.3701Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M370.199 61.4048C377.014 61.4048 381.491 57.1213 381.491 51.28C381.491 45.7308 377.014 41.7393 370.199 41.7393C363.384 41.7393 358.906 46.0229 358.906 51.5721C358.906 57.1213 363.384 61.4048 370.199 61.4048ZM360.951 116.309C360.951 118.354 362.609 120.012 364.654 120.012H375.743C377.789 120.012 379.447 118.354 379.447 116.309V70.9498C379.447 68.9043 377.789 67.2461 375.743 67.2461H364.654C362.609 67.2461 360.951 68.9043 360.951 70.9498V116.309Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M420.967 66.3701C415.852 66.3701 411.145 67.7068 407.337 70.3352C406.117 71.1774 404.222 70.373 404.222 68.8902C404.222 67.9823 403.486 67.2463 402.578 67.2463H390.305C388.259 67.2463 386.601 68.9046 386.601 70.95V116.309C386.601 118.354 388.259 120.012 390.305 120.012H401.394C403.44 120.012 405.098 118.354 405.098 116.309V94.5057C405.098 85.7437 409.674 82.0442 415.612 82.0442C420.967 82.0442 424.277 85.2569 424.277 92.8506V116.309C424.277 118.354 425.935 120.012 427.98 120.012H439.07C441.116 120.012 442.774 118.354 442.774 116.309V89.8326C442.774 73.477 433.331 66.3701 420.967 66.3701Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M472.009 66.3701C464.947 66.3701 457.388 67.9301 451.572 70.8685C449.904 71.7112 449.364 73.7602 450.195 75.4343L452.949 80.9868C453.993 83.0897 456.736 83.7117 458.875 82.7464C462.052 81.3135 465.805 80.4865 469.283 80.4865C474.641 80.4865 478.006 82.1116 479.535 85.0922C480.504 86.9831 478.693 88.859 476.568 88.859H469.964C453.609 88.859 446.502 94.8951 446.502 104.63C446.502 113.782 453.511 120.889 466.168 120.889C471.325 120.889 475.388 119.707 478.297 117.402C479.395 116.532 481.744 117.275 481.744 118.675C481.744 119.414 482.343 120.012 483.081 120.012H495.273C497.317 120.012 498.977 118.354 498.977 116.309V90.7088C498.977 73.9638 489.143 66.3701 472.009 66.3701ZM471.327 109.206C466.947 109.206 464.415 106.967 464.415 103.852C464.415 100.639 466.557 98.4972 472.495 98.4972H476.775C478.821 98.4972 480.479 100.155 480.479 102.201V102.445C480.479 102.861 480.415 103.276 480.254 103.66C478.672 107.441 475.22 109.206 471.327 109.206Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M515.811 61.4048C522.626 61.4048 527.105 57.1213 527.105 51.28C527.105 45.7308 522.626 41.7393 515.811 41.7393C508.996 41.7393 504.519 46.0229 504.519 51.5721C504.519 57.1213 508.996 61.4048 515.811 61.4048ZM503.544 139.775C517.174 139.775 525.061 131.5 525.061 118.649V70.9498C525.061 68.9043 523.403 67.2461 521.357 67.2461H510.267C508.221 67.2461 506.563 68.9043 506.563 70.9498V118.552C506.563 123.322 504.323 125.464 501.111 125.464C500.633 125.464 500.161 125.435 499.696 125.379C497.347 125.095 494.616 126.019 493.824 128.249L491.728 134.14C491.13 135.825 491.819 137.723 493.51 138.303C496.41 139.298 499.951 139.775 503.544 139.775Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M554.589 66.3701C547.527 66.3701 539.968 67.9301 534.152 70.8685C532.484 71.7112 531.944 73.7602 532.775 75.4343L535.53 80.9868C536.573 83.0897 539.315 83.7117 541.456 82.7464C544.632 81.3135 548.385 80.4865 551.863 80.4865C557.221 80.4865 560.586 82.1116 562.115 85.0922C563.084 86.9831 561.273 88.859 559.148 88.859H552.544C536.189 88.859 529.081 94.8951 529.081 104.63C529.081 113.782 536.091 120.889 548.748 120.889C553.905 120.889 557.968 119.707 560.878 117.402C561.975 116.532 564.325 117.275 564.325 118.675C564.325 119.414 564.923 120.012 565.662 120.012H577.852C579.897 120.012 581.556 118.354 581.556 116.309V90.7088C581.556 73.9638 571.723 66.3701 554.589 66.3701ZM553.907 109.206C549.526 109.206 546.995 106.967 546.995 103.852C546.995 100.639 549.137 98.4972 555.075 98.4972H559.356C561.4 98.4972 563.059 100.155 563.059 102.201V102.445C563.059 102.861 562.995 103.276 562.835 103.66C561.252 107.441 557.8 109.206 553.907 109.206Z"
                        fill="#4F378B"
                      ></path>
                      <path
                        d="M51.3351 77.9083C42.5119 69.1028 28.2066 69.1028 19.3833 77.9083C10.5601 86.7138 10.5601 100.99 19.3833 109.796L67.2891 157.605C76.1124 166.411 90.4177 166.411 99.2409 157.605C108.064 148.8 108.064 134.523 99.2409 125.718L51.3351 77.9083Z"
                        fill="url(#paint0_linear)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.6352 18.1001C27.2754 18.9986 26.15 23.19 28.6097 25.6448L37.2126 34.2306L6.61738 64.7643C0.206094 71.1627 -1.54652 80.4498 1.35969 88.4277C2.43558 91.6347 4.25367 94.6489 6.8135 97.2035L54.1197 144.415V81.1327L69.1646 66.1181L77.7259 74.6622C80.1854 77.1167 84.3855 75.9936 85.2856 72.6405L103.263 5.68158C104.164 2.32825 101.089 -0.740068 97.7293 0.158467L30.6352 18.1001Z"
                        fill="#9B51E0"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.6352 18.1001C27.2754 18.9986 26.15 23.19 28.6097 25.6448L37.2126 34.2306L6.61738 64.7643C0.206094 71.1627 -1.54652 80.4498 1.35969 88.4277C2.43558 91.6347 4.25367 94.6489 6.8135 97.2035L54.1197 144.415V81.1327L69.1646 66.1181L77.7259 74.6622C80.1854 77.1167 84.3855 75.9936 85.2856 72.6405L103.263 5.68158C104.164 2.32825 101.089 -0.740068 97.7293 0.158467L30.6352 18.1001Z"
                        fill="url(#paint1_linear)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="32.7589"
                          y1="157.605"
                          x2="99.2414"
                          y2="157.606"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.328125" stopColor="#003E95"></stop>
                          <stop offset="1" stopColor="#3681EC"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="63.5"
                          y1="60.5"
                          x2="-40.5"
                          y2="164.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#9B51E0"></stop>
                          <stop offset="1" stopColor="#3E0870"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="space-y-5">
                    <h1>
                      KiriminAja merupakan sebuah platform yang bertujuan
                      memberikan kemudahan untuk pengiriman paket dan menemukan
                      ekspedisi sesuai kebutuhan masyarakat, jadi kamu tak perlu
                      lagi kesulitan. Dilengkapi dengan metode pengiriman COD
                      maupun Non-COD untuk memudahkan kamu yang dikembangkan
                      oleh PT. Selalu Siap Solusi.
                    </h1>
                    <h1>
                      Jadi, dapat disimpulkan bahwa KiriminAja dapat jadi
                      inovasi dan solusi untuk membantuu UMKM, pebisnis online,
                      hingga kamu yang tak punya bisnis pun bisa jika ingin
                      mengirimkan paket lho, keren kan!
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
                    Penasaran Apa Aja yang Ditawarin Sama KiriminAja?
                  </h1>
                </div>
                <hr className="border-2 w-full" />
                <div className="flex  items-center">
                  <div>
                    <h1>
                      Bukan main, KiriminAja menawarkan sebanyak sejumlah fitur
                      menguntungkan yang pastinya dapat kamu akses dan nikmati
                      jika menggunakan layanan pengiriman di sini, yaitu:
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
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Full Support 24/7</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Support yang dihadirkan oleh KiriminAja tak main-main,
                        bahkan kamu dapat memanfaatkan bantuan atau support ini
                        tiap hari 24/7 lho!
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 text-sm mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Sistem Pengiriman dengan Jangkauan Terluas</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-[17px] text-center">
                        Tak perlu bingung memilih, KiriminAja memiliki lebih
                        dari 15 kurir yang tersebar di seluruh area dengan
                        destinasi yang terbuka sangat luas untuk pengiriman.
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Pembayaran Digital yang Memudahkan</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Cukup sat set, pembayaran yang kamu lakukan di
                        KiriminAja bisa dilakukan secara online lho.
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Layanan Kurir yang Cepat</h1>
                      </div>
                      <h1 className="px-5 text-[16px] mt-4 text-center">
                        Layanan kurir seperti seperti pengiriman bisa dilakukan
                        secara instan dan di hari yang sama. Ataupun kamu bisa
                        memilih regular/ekonomis/kargo juga.
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Sistem Otomatis dan Terintegrasi</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-[17px] text-center">
                        Layaknya berikan kemudahan, sistem cetak resi, tracking,
                        hingga laporan bisa kamu dapatkan secara lengkap dan
                        pastinya langsung karena sudah otomatis.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="md:flex space-y-2 md:space-y-0  md:space-x-5 justify-center">
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Kemudahan Integrasi</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-[17px] text-center">
                        Ingin menggunakannya lebih baik, pasti ada pilihanmu
                        untuk integrasi. Tak perlu khawatir, integrasi di
                        KiriminAja sangat mudah dengan adanya dokumentasi yang
                        diberikan.
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Paket Pickup dan Dropoff Tanpa “Pilih Kasih”</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Tanpa “pilih kasih” maksudnya yaitu semuanya bisa
                        pickup/drop off di tempat yang kamu inginkan.
                      </h1>
                    </div>
                    <div className="bg-new w-full md:w-60 h-full py-2 md:h-72 hover:shadow-lg hover:shadow-neww hover:-translate-y-10 duration-150 rounded-lg text-white">
                      <div className="bg-white mx-5 mt-2 text-new text-center rounded-lg font-bold">
                        <h1>Pilihan Service Kurir yang Handal</h1>
                      </div>
                      <h1 className="px-5 mt-4 text-center">
                        Kemudahan buat kamu pilih kurir hanya dari 1 platform
                        saja!
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div>
                    <img
                      loading="lazy"
                      src="../../../assets/image/blog/kiriminaja/sell.png"
                      className="w-40"
                      alt=""
                    />
                  </div>
                  <div className="flex  space-x-4 items-center">
                    <h1 className="text-2xl md:text-4xl font-bold">
                      Sebagai seorang pebisnis, kenapa kamu harus memilih
                      <span className="text-new"> KiriminAja? </span>{" "}
                    </h1>
                    <AiOutlineArrowDown className="animate-bounce" />
                  </div>
                </div>
                <h1>
                  Melihat semakin berkembangnya usaha, lebih-lebih itu secara
                  online. Tak dapat dihiraukan aliran uang akan berjalan cepat
                  hingga rasanya kamu tak sanggup untuk mendatanya agar bisa
                  mengetahui keuntungan hingga kerugian yang didapat. Fitur
                  cashflow di KiriminAja bakal bantuin kamu nih buat ngelakuin
                  itu, jadi ga perlu repot-repot lagi dehh! Selain itu bakal
                  banyak lagi keuntungan buat kamu:
                </h1>
                <div className="flex items-center justify-center">
                  <div className="mt-2 md:flex space-y-5 md:space-y-0 md:space-x-10 items-center justify-center">
                    <div className="bg-new hover:scale-110 duration-150 w-80 h-40 rounded-lg">
                      <h1 className="bg-neww text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        COD Advance
                      </h1>
                      <h1 className="p-2 text-white -mt-2">
                        Pencairan dana lebih cepat, bahkan bisa cair maksimal
                        50% dahulu di depan Ketika paket dalam proses kurir.
                      </h1>
                    </div>
                    <div className="bg-new w-80 hover:scale-110 duration-150 h-40 rounded-lg">
                      <h1 className="bg-neww text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        Pencairan Dana 24/7
                      </h1>
                      <h1 className="p-2 text-white -mt-2">
                        Tanpa batas waktu, kamu bisa melakukan pencairan dana
                        tiap hari sesuai yang diinginkan.
                      </h1>
                    </div>
                    <div className="bg-new w-80 hover:scale-110 duration-150 h-40 rounded-lg">
                      <h1 className="bg-neww text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        Sistem Real Monitoring{" "}
                      </h1>
                      <h1 className="p-2 text-white text-[13px] -mt-2">
                        Menghindari adanya hal yang tak kamu inginkan, sistem
                        monitoring akan meminimalisir hal tersebut sehingga
                        kurir bisa follow-up jika terjadi kesalahan apapun.
                      </h1>
                    </div>
                    <div className="bg-new w-80 hover:scale-110 duration-150 h-40 rounded-lg">
                      <h1 className="bg-neww text-[15px] text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        Pencairan Pembayaran COD Cepat{" "}
                      </h1>
                      <h1 className="p-2 text-white text-[15px] -mt-2">
                        Dengan sistem barang sampai di customer, maka saldomu
                        bisa langsung cair!
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="mt-2 md:flex space-y-5 md:space-y-0 md:space-x-10 items-center justify-center">
                    <div className="bg-new w-80 hover:scale-110 duration-150 h-40 rounded-lg">
                      <h1 className="bg-neww text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        Adanya Laporan{" "}
                      </h1>
                      <h1 className="p-2 text-[15px] text-white -mt-2">
                        Sistem laporan yang actual jadi kemudahan untuk kamu
                        menganalisis segala hal yang berhubungan dengan biaya
                        hingga kurir dan jasa kirim.
                      </h1>
                    </div>
                    <div className="bg-new w-80 hover:scale-110 duration-150 h-40 rounded-lg">
                      <h1 className="bg-neww text-white rounded-lg w-fit p-2 -mt-2 -ml-2">
                        Selalu di-Support!{" "}
                      </h1>
                      <h1 className="p-2 text-white -mt-2">
                        Tak perlu ragu jika butuh bantuan, tim support siap
                        bantu dan memaksimalkan paket bisa terkirim dengan baik.
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="mt-1 space-y-6">
                  <h1>
                    <span className="text-7xl">Eitss..</span> Ternyata ga cuma
                    itu aja lho, demi kontribusi perekonomian yang lebih baik,
                    ada juga nih KiriminAja Plus yang dapat kamu coba secara
                    gratis. Di sini, kamu bisa mengetahui lebih dalam dan
                    mengelola hingga proses pengiriman hanya dengan 1 platform.
                    Mulai dari kemudahan pengiriman dan akses gudang, cashflow,
                    integrasi, hingga hubungan dengan pelanggan yang memiliki
                    nilai lebih tinggi.
                  </h1>
                  <h1>
                    Jadi dengan fitur tambahan ini, kamu bisa mempercepat
                    pengelolaan transaksi. Pastinya lebih mudah juga. Dengan
                    slogannya “Bangun.Kelola.Kembangkan” yang bisa kamu coba
                    dahulu secara gratis dan akses tools dan service memudahkan
                    yang disedikan. Klik{" "}
                    <span className="text-new underline">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://kiriminajaplus.com/"
                      >
                        di Sini!
                      </a>
                    </span>
                  </h1>
                </div>
              </div>

              <div className="md:-mt-20 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#8F47D1"
                    fillOpacity="1"
                    d="M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,149.3C840,139,960,117,1080,133.3C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="bg-new  -mt-[1px] w-full h-full pb-20 rounded-b-[40px] px-6 md:px-16">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                  Tampilan Keren Aplikasi KiriminAja!
                </h1>
                <div className="flex md:flex-none md:items-start md:justify-start justify-center">
                  <div className="pt-10 md:pt-20 md:flex w-60 items-center space-y-5 md:space-y-0 md:space-x-10">
                    <img
                      src="../../../assets/image/blog/kiriminaja/beranda.jpg"
                      className="rounded-lg hover:shadow-lg hover:-translate-y-2 duration-150 hover:shadow-white"
                      alt=""
                    />
                    <img
                      src="../../../assets/image/blog/kiriminaja/beranda2.jpg"
                      className="rounded-lg hover:shadow-lg hover:-translate-y-2 duration-150 hover:shadow-white"
                      alt=""
                    />
                    <img
                      src="../../../assets/image/blog/kiriminaja/beranda3.jpg"
                      className="rounded-lg hover:shadow-lg hover:-translate-y-2 duration-150 hover:shadow-white"
                      alt=""
                    />
                    <img
                      src="../../../assets/image/blog/kiriminaja/paket.jpg"
                      className="rounded-lg hover:shadow-lg hover:-translate-y-2 duration-150 hover:shadow-white"
                      alt=""
                    />
                    <img
                      src="../../../assets/image/blog/kiriminaja/bantuan.jpg"
                      className="rounded-lg hover:shadow-lg hover:-translate-y-2 duration-150 hover:shadow-white"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center md:justify-center md:space-x-10">
                  <div className="mt-6 bg-white text-slate-600 w-[full] md:w-[1000px] space-y-5 rounded-xl text-2xl p-2">
                    <h1>
                      Sebagai seseorang yang berkecimpung di dunia IT, saya
                      menilai tampilan di aplikasi tampak sangat baik dengan
                      perpaduan warna yang sangat bagus. Semua menu disajikan
                      dengan pas dan diberikan keterangan yang sesuai. Selain
                      itu, cara pengoperasiannya mudah dan gampang dimengerti
                      baik bagi pemula sekalipun.
                    </h1>
                    <h1>
                      Bahkan jika kamu tak mengerti, ada tiket bantuan yang
                      dapat kamu gunakan untuk bertanya yang kamu ingin ketahui
                      lebih lanjut.
                    </h1>
                    <h1>
                      Selain itu, menariknya kamu juga bisa diberikan promo
                      voucher diskon lho! Melalui WhatsApp, saya bahkan pernah
                      mendapatkannya dan saya rasa hal ini sangat menambah
                      ketertarikan dalam penggunaan aplikasi kirim paket #1 di
                      Indonesia ini.
                    </h1>
                  </div>
                  <div className="flex items-center justify-center">
                    <AiFillLike className="text-white text-6xl animate-wiggle" />
                  </div>

                  <div className="mt-10">
                    <div className="flex">
                      <img
                        src="../../../assets/image/blog/kiriminaja/promo.jpg"
                        className="w-60 rounded-xl  border-8 border-neww"
                        alt=""
                      />
                      <h1 className="bg-white h-fit rounded-xl pt-4 pl-2 md:p-2 -ml-4">
                        Tak terduga-duga, kamu juga bisa jadi akan mendapatkan
                        diskon untuk layanan di KiriminAja lho!
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-5 justify-center">
                  <img
                    className="w-[800px] rounded-xl"
                    src="../../../assets/image/blog/kiriminaja/head2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative  text-slate-700  text-2xl px-4 md:px-16">
                <div className="mt-4 space-y-5">
                  <h1>
                    Buat kamu yang tertarik mendapatkan keuntungan yang
                    berlipat-lipat dengan penawaran solusi inovatif ini, kamu
                    sangat bisa lho untuk men-downloadnya sekarang melalui Play
                    Store ataupun App Store dengan gratis. Kapan lagi bisa
                    mendapatkan fitur lengkap hanya dengan modal “niat”? Semua
                    keperluan untuk menjalankan bisnismu pasti dapat diselesain
                    dengan lebih mudah nih!
                  </h1>
                  <h1>
                    Gaperlu ragu lagi, KiriminAja bahkan memiliki komitmen untuk
                    terus berkontribusi baik pada sistemm perekonomina
                    Indonesia, solusi yang inovatif dengan memberikan kemudahan
                    ini dapat membuat pebisnis online di era digital 4.0 saat
                    ini mengembangkan bisnisnya lebih optimal. Bisnismu kapan
                    mau berkembang?
                  </h1>
                </div>

                <div className=" mt-6 text-new items-center space-x-2 mb-5">
                  <div className="md:flex items-center justify-center gap-3">
                    <div>
                      <img
                        src="../../../assets/image/blog/kiriminaja/head2.jpg"
                        className="w-[700px] rounded-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-center">Referensi:</h1>
                      <div className="flex justify-center">
                        <a
                          className=" underline"
                          href="https://kiriminaja.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          KiriminAja{" "}
                        </a>
                        <BsBoxArrowInUpRight className="animate-bounce" />
                      </div>
                      <div className="flex justify-center">
                        <a
                          className=" underline"
                          href="https://databoks.katadata.co.id/datapublish/2022/12/19/survei-mayoritas-pelaku-usaha-e-commerce-di-indonesia-gunakan-pembayaran-tunai-cod"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Databoks Katadata{" "}
                        </a>
                        <BsBoxArrowInUpRight className="animate-bounce" />
                      </div>
                      <div className="flex justify-center">
                        <a
                          className=" underline"
                          href="https://dataindonesia.id/ekonomi-digital/detail/pengguna-ecommerce-ri-diproyeksi-capai-19647-juta-pada-2023"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Data Indonesia
                        </a>
                        <BsBoxArrowInUpRight className="animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    loading="lazy"
                    src="../../../assets/image/blog/kiriminaja/z.png"
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
        </main>
      )}
    </>
  );
};

export default Kirim;
