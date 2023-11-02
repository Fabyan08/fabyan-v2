import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const Qris = () => {
  return (
    <>
      <div className="bg-primary w-full h-full px-16 pt-20">
        <Link
          to="/blog"
          className="flex items-center space-x-2 text-2xl text-white"
        >
          <BsArrowLeftShort />
          <h1>Back to Blog</h1>
        </Link>
      </div>
    </>
  );
};

export default Qris;
