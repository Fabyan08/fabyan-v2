import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const Qris = () => {
  return (
    <>
      <img
        src="/images/blog/detail/bg.jpg"
        className="w-full absolute h-[660px] md:h-[680px] -z-10 top-0 opacity-20"
        alt=""
      />
      <div className="bg-gradient-to-l from-white to-primary/70 w-full h-[680px] py-10 px-3 md:px-16 pt-10 md:pt-20">
        <div className="flex items-center justify-center">
          <Link
            to="/blog"
            className="text-2xl bg-slate-200  shadow-sm text-primary rounded-lg w-48 h-10  flex items-center justify-center"
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

        <div className="mt-10 md:mt-20">
          <div className="md:flex md:space-x-20">
            <h1 className="text-2xl text-center md:text-7xl font-bold text-slate-700">
              Transaksi Lintas Negara? Bukan Jadi Masalah! Yuk Kenalan Sama QRIS
              Cross-Border!
            </h1>
            <div className="flex items-center justify-center space-x-2 md:hidden py-2">
              <h1 className="text-primary">Admin</h1>
              <h1 className="text-slate-800">-</h1>
              <h1 className="text-slate-800">Kamis, 2 November 2023</h1>
            </div>
            <img
              src="/images/blog/detail/bg.jpg"
              className=" md:hidden rounded-lg "
              alt=""
            />
            <h1 className="text-[10px] text-slate-500 text-center mt-1 md:hidden">
              Ilustrasi QRIS Cross Border | Foto: qris.online
            </h1>
            <img
              src="/images/blog/detail/mon2.gif"
              className="w-96 hidden md:flex"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="border-[20px] border-primary/30 h-full pb-20">
        <div className="-mt-24 md:-mt-20 md:px-16 md:flex mx-4">
          <div className="md:flex">
            <BiSolidQuoteAltLeft className="text-white text-4xl " />
            <div className="bg-white flex hover:border-2 hover:border-primary duration-150 border-primary/40 border-2 md:hover:scale-[1.05] md:w-[400px] rounded-lg shadow-xl h-full">
              <h1 className="p-10 text-2xl">
                Sekarang, jajan di luar negeri pakai mata uang Rupiah bukan lagi
                hanya angan-angan semata! <i>QRIS Cross-Border</i> hadir sebagai
                digital ekonomi keuangan untuk menyatukan transaksi ke luar
                negeri hanya dalam genggaman HP!
              </h1>
            </div>
            {/* <BiSolidQuoteAltLeft className="text-white text-xl absolute bottom-0 right-0 ml-40" /> */}
          </div>
          <div>
            <img src="/images/blog/detail/.gif" alt="" />
          </div>
          <div className="mt-10 md:mt-28 md:w-[800px] md:ml-10 text-xl">
            <h1>
              Kecanggihan digitalisasi telah membawa dampak yang sangat
              signifikan mulai dari keuangan tingkat lokal bahkan global. Adanya
              QRIS (QR Code Indonesian Standard) jadi inovasi besar yang mampu
              mengubah sistem pembayaran yang sebelumnya terbilang kurang
              efektif di Indonesia. Selayaknya pada umumnya, pembayaran biasa
              dilakukan menggunaakn uang tunai atau kartu ATM. Tak jarang juga
              kamu kewalahan untuk menemukan uang pas hingga lebih gawatnya
              kehilangan kartu ATM yang nantinya jadi masalah serius. QRIS hadir
              dan berusaha untuk memperbaiki sistem pembayaran tersebut dengan
              inovasi cerdas yang hanya memanfaatkan gawai.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <img src="/images/blog/detail/line1.png" alt="" />
        </div>
        <div className="md:px-[125px] text-xl px-4 md:text-2xl mt-10 space-y-4">
          <h1>
            Melansir laman resmi Bank Indonesia, bi.go.id. QRIS ada karena
            kebutuhan serta dorongan untuk berinovasi di sektor ekonomi keungan.
            Layaknya dipermudah di dunia industri 4.0 yang “gila gadget” ini,
            kamu bisa melakukan pembayaran hanya dari gawai saja. Cukup hanya
            dengan scan QR Code, kamu dapat membayar kebutuhanmu dengan
            sangat-sangat cepat. Kemudahan serta kecepatan jadi unggulan yang
            ditawarkan QRIS sebagai perkembangan kebutuhan agar tetap makin
            produktif.
          </h1>
          <h1>
            Semenjak 17 Agustus 2019, QRIS hadir untuk memberikan warna baru
            bagi ekonomi Indonesia. Kemudahan untuk bertransaksi jadi “harga
            mahal” yang dijual sebagai inovasi untuk memajukan digitalisasi
            keuangan dengan usung semangat UNGGUL (UNiversal, GampanG, Untung
            dan Langsung). QRIS membidik keefektifan serta efisiensi transaksi
            yang ternyata sama dengan tema HUT ke-74 Kemerdekaan RI waktu itu.
            Efisiensi transaksi, kecepatan inklusi keuangan, hingga memajukan
            UMKM untuk Indonesia yang lebih maju.
          </h1>
          <h1>
            Dilansir juga dari sumber resmi Bank Indonesia, data memperlihatkan
            bahwa sudah terdapat sekitar 25,4 juta merchant yang menggunakan
            QRIS, sebuah angka yang cukup fantastis bukan? Jika kamu tahu juga,
            lebih dari 90% atauu tepatnya 91,7% penggunanya adalah UMKM.
          </h1>
          <h1>
            Makin ajaib dan bertambah canggih. Saat ini, QRIS mewujudkan impian
            kamu agar dapat juga digunakan dengan mudah di luar negeri,
            terkhususnya 11 negara wilayah ASEAN. Melansir dari laman resmi
            setnasasean.id dengan judul “Prinsip Kerja Sama ASEAN dan Manfaatnya
            bagi Indonesia.” Untuk kamu tahu saja, hal tersebut sangat dengan
            misi QRIS yang memegang prinsip “Setiap kerja sama ASEAN harus
            diwujudkan secara berguna, efektif, efisien, dan rasional.” sebagai
            pokok dalam kerja sama antar negara ASEAN yang wajib diikuti.
            Terlebih QRIS juga mengemban nama Indonesia yang siap terus untuk
            jadi mata elang dalam kerja sama bidang ekonomi negara-negara ASEAN.
          </h1>
          <h1>
            Kini, peluncurannya sendiri sudah digempur di negara tetangga
            Malaysia semenjak uji cobanya pada 27 Januari 2022. Berhubungan erat
            dengan ekonomi, Lembaga keuangan turut berpartisipasi sebagai
            penyedia pembayaran online dengan hanya memindai QRIS saja. Dukungan
            ekonomi dengan adanya kerja sama ini mampu membuat kedua negara
            memiliki pasar tanpa batas mata dengan solusi pembayaran yang lebih
            dinamis, tak peduli dimanapun kamu berada.
          </h1>
        </div>
      </div>
      <div className="mt-96"></div>
    </>
  );
};

export default Qris;
