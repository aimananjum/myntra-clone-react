import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import MyntraProvider from "./store/items-list-store";

function App() {
  return (
    <MyntraProvider>
      <Header />
      <Outlet />
      <Footer />
    </MyntraProvider>
  );
}

export default App;
