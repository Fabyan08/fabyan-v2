import spread from "../../../../public/assets/image/spread.svg";
import vectorhead from "../../../../public/assets/image/vectorhead.svg";
import role from "../../../../public/assets/image/role.svg";
import head from "../../../../public/assets/image/head.svg";
import rounded from "../../../../public/assets/image/rounded.svg";
const Hero = () => {
  return (
    <header className="bg-header w-full overflow-x-hidden relative overflow-y-hidden z-10 lg:h-screen h-full bg-cover bg-center">
      <div className="bg-gradient-to-b from-white/20  to-white/80 lg:h-screen h-[600px]">
        <div className="bg-gradient-to-tr from-white to-white/20 h-96">
          <div className="flex justify-center h-full relative z-[60] md:h-[600px] pt-20 items-center flex-col mw">
            <img src={role} alt="Role" className="relative z-10 w-[600px]" />
            <img
              src={head}
              alt="Name"
              className="w-96 md:w-[700px] -mt-20 pt-10 md:pt-0 relative z-10"
            />
          </div>
          <div id="background">
            <div className="bg-primary/20 rounded-full w-[900px] h-[900px] blur-3xl absolute top-0 right-0"></div>
            <img
              src={spread}
              alt="Spread"
              className="absolute -right-40  -top-40 blur-xl"
            />
            <img
              src={spread}
              alt="Spread"
              className="absolute -left-60 w-[600px] top-12 blur-xl"
            />
            <img
              src={vectorhead}
              alt="Head"
              className="absolute left-40 bottom-12 w-60 animate-pulse"
            />
            <div className="bg-primary border-[10px] custom-rotate absolute top-12 left-12 border-orange-200 rounded-2xl w-[80px] h-[80px] "></div>
            <svg
              viewBox="0 0 134 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-40 left-[300px] custom-rotate w-24"
            >
              <path
                d="M10.7083 108.5L67 11L123.292 108.5H10.7083Z"
                fill="#6DA9E4"
                stroke="#FED7AA"
                stroke-width="14"
              />
            </svg>
            <svg
              viewBox="0 0 134 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute  bottom-12 md:bottom-40 md:left-[800px] custom-rotate w-24"
            >
              <path
                d="M10.7083 108.5L67 11L123.292 108.5H10.7083Z"
                fill="#6DA9E4"
                stroke="#FED7AA"
                stroke-width="14"
              />
            </svg>
            <img
              src={spread}
              alt="Spread"
              className="absolute right-2 w-52 animate-wiggle bottom-12 z-20"
            />
            <img
              src={rounded}
              alt="Rounded"
              className="absolute right-12 w-52 custom-rotate bottom-40 md:top-12 z-20"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
