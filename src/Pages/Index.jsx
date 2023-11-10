import BackToTopButton from "../Components/top";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import {motion} from "framer-motion";
// import {animate}
import "./cursor.css";

const Index = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   console.log(mousePosition);

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     }
//     window.addEventListener("mousemove", mouseMove);
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

// const variants = {
//   default : {
//     x : mousePosition.x,
//     y : mousePosition.y,
//     backgroundColor : "red",
//   }
// }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lakukan logika async untuk persiapan aplikasi Anda di sini
    // Setelah semua persiapan selesai, atur isLoading menjadi false
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {/* <motion.div className="cursor absolute z-20" variants={variants} animate="default"/> */}

          <Nav />
          <div className="pt-20">
            <Hero id="home" />
          </div>
          <About />
          <Portfolio />
          <Experiences />
          <Certificate />
          <BackToTopButton />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
