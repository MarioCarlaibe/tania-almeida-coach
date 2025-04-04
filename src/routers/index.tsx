import { Route, Routes } from "react-router-dom";
import { Home, About, Coach, Purpose, Testimony, Contact } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/purpose" element={<Purpose />} />
      <Route path="/testimony" element={<Testimony />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
