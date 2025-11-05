import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="pages" element={<Pages />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
