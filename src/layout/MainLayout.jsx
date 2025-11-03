import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
