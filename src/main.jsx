import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Bag from "./components/Bag.jsx";
import ItemDetails from "./components/ItemDetails.jsx";
import Wishlist from "./components/Wishlist.jsx";
import MensCategory from "./components/MensCategory.jsx";
import WomenCategory from "./components/WomenCategory.jsx";
import LoginSignup from "./components/LoginSignup.jsx";

const basename = "/myntra-clone-react";

const router = createBrowserRouter([
  {
    path: basename + "/",
    element: <App />,
    children: [
      {
        path: basename + "/",
        element: <Home />,
      },
      {
        path: basename + "/bag",
        element: <Bag />,
      },
      {
        path: basename + "/item-details/:id",
        element: <ItemDetails />,
      },
      {
        path: basename + "/wishlist",
        element: <Wishlist />,
      },
      {
        path: basename + "/mens",
        element: <MensCategory />,
      },
      {
        path: basename + "/womens",
        element: <WomenCategory />,
      },
    ],
  },
  {
    path: basename + "/login-signup",
    element: <LoginSignup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
