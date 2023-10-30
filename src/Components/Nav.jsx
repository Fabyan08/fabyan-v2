const Nav = () => {
  return (
    <>
      {/* <img src="/images/bg.png" className="absolute left-0 -z-10" alt="" /> */}
      <div className="absolute -z-20 md:w-full md:ml-40 w-[900px]">
        <div className="relative">
          <div className="absolute z-20 bg-gradient-to-r from-white w-96 h-full"></div>
          <div className="absolute z-20 bg-gradient-to-t from-white w-full h-full"></div>
          <div className="absolute z-20 bg-gradient-to-l from-blue-100   w-full h-full"></div>
          <img
            src="/images/bgfull.png"
            alt=""
            className="relative z-10 -mt-10"
          />
        </div>
      </div>

      <nav className="fixed  z-40 hidden md:flex container items-center justify-center py-5">
        <div className="bg-white/30 text-slate-400 font-semibold hover:shadow-xl border-2 duration-150 border-primary/10 w-fit py-4 px-5 rounded-full backdrop-blur-sm">
          <ul className="flex space-x-10">
            <li className="hover:bg-white/20 hover:backdrop-blur-md hover:text-primary hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
              <a href="">Home</a>
            </li>
            <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
              <a href="">About Me</a>
            </li>
            <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
              <a href="">Portfolio</a>
            </li>
            <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
              <a href="">Certificate</a>
            </li>
            <li className="hover:bg-white/20 hover:text-primary  hover:backdrop-blur-md  hover:p-2 duration-150 rounded-xl  hover:shadow-xl">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div>
          <a
            className="bg-blue-300 text-white p-2 rounded-full text-center"
            href=""
          >
            Connect!
          </a>
        </div> */}
      </nav>

      <div className="md:hidden absolute z-40">
        <div className="btm-nav mb-20 mx-auto w-80 rounded-full bg-black text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
