import "./style.css";
const Experiences = () => {
  return (
    <>
      <div className="relative ">
        <div className="bg-gradient-to-l container pt-2 from-primary/30 border-t-primary/20 border-t-2  -p-20  -z-10 w-full h-[900px]">
          <img
            src="/images/pattern2.jpg"
            className="absolute -mt-40 md:-mt-0 h-[900px] w-full -z-[400] opacity-[30%]"
            alt=""
          />
          <div className="text-right">
            <h1 className=" text-7xl font-bold mt-10">Work Experiences</h1>
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, magni ipsam. Nam, modi! Reprehenderit <br /> nisi
              eligendi accusamus, distinctio eius hic.
            </h1>
          </div>
          <div className="mt-10 flex items-end justify-end">
            <div className="bg-white w-96 h-40"></div>
          </div>
          <div className="mt-10 flex items-end justify-center">
            <div className="bg-white w-96 h-40"></div>
          </div>
          <div className="mt-10 flex items-end justify-left">
            <div className="bg-white border-2 border-gradient3 w-96 h-40"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
