// import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  // Anda dapat menambahkan CSS styling atau animasi di sini

  return (
    <div className="bg-white md:w-full min-h-screen flex justify-center items-center ">
      <div>
        <div className="bg-primary w-20 h-20 animate-ping rounded-full"></div>
        {/* <AiOutlineLoading3Quarters className="text-center ml-8 text-[100px] font-black text-primary animate-spin " />{" "} */}
        {/* <h1 className="font-bold text-2xl text-center text-primary">
          Wait a Second...
        </h1> */}
      </div>
    </div>
  );
};

export default Loading;
