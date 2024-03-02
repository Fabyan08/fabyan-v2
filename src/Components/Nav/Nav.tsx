import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="hidden md:flex  justify-center relative z-40">
        <div className="fixed bg-white/20 border-2 border-slate-200/50 backdrop-blur-sm px-4 py-2   mt-4 w-fit h-fit rounded-3xl">
          <ul className="flex gap-10 text-md font-bold py-2 text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary hover:bg-white/50 backdrop-blur-md hover:px-2 duration-150 rounded-2xl hover:py-2 hover:shadow-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed md:hidden lg:flex lg:right-[60px] rotate-12 hover:rotate-0 duration-150 hover:scale-110">
          <hr className="border-2 border-white h-20 rounded-full right-20 " />
        </div>
        <div className="relative">
          <div className="fixed rotate-12 right-4 top-6 hover:rotate-0 duration-150 hover:scale-110">
            <Link
              to="/blog"
              className="text-white hover:text-primary hover:bg-white hover:border-primary bg-primary border-4 border-white p-3 rounded-full font-bold"
            >
              My Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="flex fixed bottom-0 z-[999]">
        <h1>ANJAY</h1>
      </div>
    </>
  );
};

export default Nav;
