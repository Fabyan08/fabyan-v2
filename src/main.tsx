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
