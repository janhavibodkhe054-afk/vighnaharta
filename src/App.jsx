import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Conatct";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import Gallery from "./pages/Gallery";
import Facility from "./pages/Facility";
import Orthopedics from "./pages/Orthopedics";
import SpineCare from "./pages/SpineCare";
import GeneralMedicine from "./pages/GeneralMedicine";
import GeneralAdvance from "./pages/GeneralAdvance";
import Urology from "./pages/Urology";
import Gynecologist from "./pages/Gynecologist";
import Tratment from "./pages/Tratment";
import Diagnostic from "./pages/Diagnostic";
import Eecp from "./pages/Eecp";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsApp />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facility />} />
        <Route path="/services/orthopedics-trauma" element={<Orthopedics />} />
        <Route path="/services/spine-care" element={<SpineCare />} />
        <Route path="/services/general-medicine" element={<GeneralMedicine />} />
        <Route path="/services/general-surgery" element={<GeneralAdvance />} />
        <Route path="/services/urology" element={<Urology />} />
        <Route path="/services/gynecology" element={<Gynecologist />} />
        <Route path="/services/treatments" element={<Tratment />} />
        <Route path="/services/eecp-treatment" element={<Eecp />} />
        {/* <Route path="/services/diagnostics" element={<Diagnostic/>} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}
