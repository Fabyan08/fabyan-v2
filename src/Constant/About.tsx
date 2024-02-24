import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Item from "./Item";

const aboutIcons: Item[] = [
  {
    icon: <FaHtml5 className="text-4xl text-white" />,
    width: "10",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-white" />,
    width: "14",
  },

  {
    icon: <IoLogoJavascript className="text-4xl text-white" />,
    width: "20",
  },
  {
    icon: <FaBootstrap className="text-4xl text-white" />,
    width: "24",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-white" />,
    width: "28",
  },
  {
    icon: <FaPhp className="text-4xl text-white" />,
    width: "32",
  },

  {
    icon: <FaLaravel className="text-4xl text-white" />,
    width: "36",
  },
  {
    icon: <SiMysql className="text-4xl text-white" />,
    width: "40",
  },
  {
    icon: <IoLogoFirebase className="text-4xl text-white" />,
    width: "44",
  },
  {
    icon: <SiTypescript className="text-4xl text-white" />,
    width: "48",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white" />,
    width: "52",
  },
];

export default aboutIcons;
