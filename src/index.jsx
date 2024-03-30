import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/router";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("wrap")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
