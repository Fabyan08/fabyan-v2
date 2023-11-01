import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./Pages/Index.jsx";
import Blog from "./Pages/Blog/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
