import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="bg-primary absolute overflow-x-hidden -mt-10 -z-10 w-full">
        <div
          className="bg-gradient-to-r from-primary via-primary to-primary/80 relative pb-10 w-full h-full "
          id="contact"
        >
          <div className="flex py-10 text-xl md:text-4xl container text-white font-bold">
            🤝 Let's get in touch
          </div>
          <div className="container -mt-6 md:-mt-0 text-2xl md:text-7xl font-bold text-slate-200">
            <h1>Punya Ide Project Bareng?</h1>
            <h1>Mau Gabung Komunitas?</h1>
            <h1>Mau Tanya Sesuatu?</h1>
          </div>
          <div className="mt-5 container md:mt-10">
            <div className="md:flex items-center space-x-4">
              <img
                loading="lazy"
                src="/images/Foto.jpg"
                className="rounded-full w-40"
                alt=""
              />
              <div className="text-white text-lg">
                <h1>Contact me via</h1>
                <div className="flex items-center space-x-2">
                  <h1>
                    <BiLogoGmail />
                  </h1>
                  <h1>yastikafabyan2005@gmail.com</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <h1>
                    <AiOutlineInstagram />
                  </h1>
                  <h1>
                    <a href="https://www.instagram.com/fabyannnn_">
                      @fabyannnn_
                    </a>
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <h1>
                    <AiOutlineInstagram />
                  </h1>
                  <h1>
                    <a href="https://www.instagram.com/kodingbareng_">
                      {" "}
                      @kodingbareng_
                    </a>
                  </h1>
                </div>
                <img
                  loading="lazy"
                  src="/images/best.jpg"
                  className="rounded-xl absolute -right-44 md:-right-12 bottom-0 -z-10 w-[725px]"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-20 md:hidden"></div>
            <h1 className="mt-10 hidden md:flex text-white font-semibold text-md md:text-xl">
              Made using React JS and big effort. Cheers!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
