import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";
import Newsletter from "../components/common/Newsletter";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
