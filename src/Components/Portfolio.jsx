// import "./style.css";
const Portfolio = () => {
  return (
    <>
      <div className="relative w-full pt-32 bg-gradient-to-tr container from-primary/30 min-h-screen">
        <div className="">
          <h1 className="font-bold text-5xl md:text-7xl">My Best Project</h1>
          <p className="font-semibold text-xl md:text-2xl md:w-[800px] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            reprehenderit tempore ipsam ad dolor eveniet nemo consequatur
            molestias rerum non?
          </p>
        </div>
        <div className="space-y-4">
          <div className="md:flex mt-14 md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full  h-96 bg-white border-2 p-4 border-primary rounded-2xl">
              <div className="flex">
                <img src="/images/fasite.png" className="w-10 h-10" alt="" />
                <h1 className="mt-2">Fabyan Site</h1>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium illum nam aperiam ratione sint, quia deleniti eligendi cumque eos?</h1>
              </div>
            </div>
            <div className="w-full h-96 bg-white border-2 p-2 border-primary rounded-2xl">
              Koding Bareng
            </div>
          </div>
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full h-96 bg-white border-2 p-2 border-primary rounded-2xl">
              Mobilgo
            </div>
            <div className="w-full h-96 bg-white border-2 p-2 border-primary rounded-2xl">
              SPK
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full md:mx-80 h-96 bg-white border-2 p-2 border-primary rounded-2xl">
              Kreasi Ngalam Media
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
