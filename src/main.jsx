import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./Pages/Index.jsx";
import Blog from "./Pages/Blog/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Qris from "./Pages/Blog/Detail/Qris";
import Kirim from "./Pages/Blog/Detail/Kirim.jsx";
import PortfolioPages from "./Pages/Portfolio/portfolioPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/detail/qris-23791",
    element: <Qris />,
  },
  {
    path: "/detail/kirimin-aja-indonesia-72927",
    element: <Kirim />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPages />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
