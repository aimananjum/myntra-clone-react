import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import MyntraProvider from "./store/items-list-store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <MyntraProvider>
      <ToastContainer style={{ width: "200px" }} autoClose={1000} />
      <div>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
      <Header progress={progress} setProgress={setProgress} />
      <Outlet />
      <Footer />
    </MyntraProvider>
  );
}

export default App;
