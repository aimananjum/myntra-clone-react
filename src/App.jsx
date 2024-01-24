import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import MyntraProvider from "./store/items-list-store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <MyntraProvider>
      <ToastContainer style={{ width: "200px" }} autoClose={1000} />
      <Header />
      <Outlet />
      <Footer />
    </MyntraProvider>
  );
}

export default App;
