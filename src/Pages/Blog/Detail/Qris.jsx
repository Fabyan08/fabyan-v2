import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const Qris = () => {
  return (
    <>
      <img
        src="/images/blog/detail/bg.jpg"
        className="w-full absolute h-[615px] -z-10 top-0"
        alt=""
      />
      <div className="bg-gradient-to-l from-white to-primary/70 w-full h-full py-10 px-16 pt-20">
        <Link
          to="/blog"
          className="flex items-center space-x-2 text-2xl text-white"
        >
          <BsArrowLeftShort />
          <h1>Back to Blog</h1>
        </Link>

        <div className="mt-20">
          <div className="flex space-x-20">
            <h1 className="text-7xl font-bold text-slate-700">
              Transaksi Lintas Negara? Bukan Jadi Masalah! Yuk Kenalan Sama QRIS
              Cross-Border!
            </h1>
            <img src="/images/blog/detail/mon2.gif" className="w-96" alt="" />
          </div>
        </div>
      </div>
      <div className="-mt-20 px-16">
        <div className="bg-white hover:border-2 hover:border-primary duration-150 hover:scale-[1.05] w-[600px] rounded-lg shadow-xl h-96"></div>
      </div>
      <div className="mt-96"></div>
    </>
  );
};

export default Qris;
