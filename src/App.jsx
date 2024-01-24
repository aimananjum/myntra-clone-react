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
        {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
        <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
        <button onClick={() => setProgress(100)}>Complete</button>
        <br /> */}
      </div>
      <Header progress={progress} setProgress={setProgress} />
      <Outlet />
      <Footer />
    </MyntraProvider>
  );
}

export default App;
