import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./modules/home/Index";
import Blog from "./modules/blog/Index";
import Qris from "./modules/blog/Components/Detail/Qris";
import Kirim from "./modules/blog/Components/Detail/Kirim";
import CV from "./modules/cv/Index";
import CVID from "./modules/cv/Components/Cv-id";
import EtikaProfesi from "./modules/blog/Components/Detail/EtikaProfesi";
import ProfesiIt from "./modules/blog/Components/Detail/ProfesiIT";
import KodeEtik from "./modules/blog/Components/Detail/KodeEtik";
import SertifikasiIT from "./modules/blog/Components/Detail/SertifikasiIT";
import Cyber from "./modules/blog/Components/Detail/Cyber";
import EtikaBisnis from "./modules/blog/Components/Detail/EtikaBisnis";
import UuIte from "./modules/blog/Components/Detail/UuIte";
import CyberCrime from "./modules/blog/Components/Detail/CyberCrime";
import ItForensic from "./modules/blog/Components/Detail/ItForensic";
import OverviewMateri from "./modules/blog/Components/Detail/OverviewMateri";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    path: "/detail/qris-indonesia",
    element: <Qris />,
  },
  {
    path: "/detail/kirimin-aja-indonesia",
    element: <Kirim />,
  },
  {
    path: "/detail/1-etika-profesi",
    element: <EtikaProfesi />,
  },
  {
    path: "/detail/2-profesi-it",
    element: <ProfesiIt />,
  },
  {
    path: "/detail/3-kode-etik",
    element: <KodeEtik />,
  },
  {
    path: "/detail/4-sertifikasi-it",
    element: <SertifikasiIT />,
  },
  {
    path: "/detail/5-cyber-ethic",
    element: <Cyber />,
  },
  {
    path: "/detail/6-etika-bisnis",
    element: <EtikaBisnis />,
  },
  {
    path: "/detail/7-uu-ite",
    element: <UuIte />,
  },
  {
    path: "/detail/8-cyber-crime",
    element: <CyberCrime />,
  },
  {
    path: "/detail/9-it-forensic",
    element: <ItForensic />,
  },
  {
    path: "/detail/10-overview-materi",
    element: <OverviewMateri />,
  },
  {
    path: "/cv",
    element: <CV />,
  },
  {
    path: "/cv/id",
    element: <CVID />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
