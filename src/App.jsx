import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WhyPartnerPage from "./pages/WhyPartnerPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import IndustryPage from "./pages/IndustriesPage";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-partner" element={<WhyPartnerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustryPage />} />
          </Routes>
          <ToastContainer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
