import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Bag from "./components/Bag.jsx";
const router = createBrowserRouter([
  {
    path: "myntra-clone-react/",
    element: <App />,
    children: [
      {
        path: "myntra-clone-react/",
        element: <Home />,
      },
      {
        path: "myntra-clone-react/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
