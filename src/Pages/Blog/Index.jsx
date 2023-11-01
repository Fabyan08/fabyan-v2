import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <section
        id="blog"
        className="relative bg-gradient-to-r from-primary w-full h-96"
      >
        <img src="/images/blog/pat3.jpg" className="absolute z-10" alt="" />
        <div className="bg-gradient-to-t absolute z-20 from-primary w-full h-96"></div>
        <div className="bg-gradient-to-r absolute z-20 from-primary to-second/30 w-full h-96"></div>

        <div className="relative z-40 mx-4 ">
          <div className="flex space-x-5 text-lg font-bold pt-8  md:pt-10 md:pl-20">
            <Link
              to="/"
              className="text-slate-800 hover:bg-primary hover:text-white hover:px-2 rounded-lg duration-150 hover:shadow-xl"
            >
              Home
            </Link>
            <h1>{">"}</h1>
            <Link
              to="/blog"
              className="text-white hover:text-primary hover:scale-110 duration-150 hover:bg-white hover:px-2 rounded-lg"
            >
              Blog
            </Link>
          </div>
          <div className="flex justify-between items-center">
          <div className="pt-10 md:mx-20 md:pt-10">
            <h1 className="text-white text-6xl font-bold">
              Welcome To My Blog
            </h1>
            <h1 className="text-white text-2xl font-semibold mt-6">
              Fabyan Yastika {"</Permana>"}
            </h1>
            <p className="text-slate-300 text-xl font-semibold md:w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              neque?
            </p>
          </div>
          <div>
            <img src="/images/blog/logo.png" className="pr-20 w-60" alt="" />
          </div>
        </div>
        </div>
      </section>
      <div className="absolute z-20 bg-primary w-full h-96"></div>
    </>
  );
};

export default Blog;
