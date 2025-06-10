import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Home,
  Navbar,
  Portfolio,
  Service,
  Vacancies,
  SinglePortfolio,
} from "./components";

const ServiceDetail = React.lazy(()=> import  ("./pages/home/ServiceDetail"));
const Footer = React.lazy(()=> import ("./components/Footer"));
const VacancyDetail=React.lazy(()=> import ("./pages/vacancies/VacancyDetail"));

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SinglePortfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<VacancyDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/portfolio/:id" element={<SinglePortfolio />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
    </>
  );
};

export default App;
