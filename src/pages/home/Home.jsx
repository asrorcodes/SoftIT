import React from "react";
const ContactForm=React.lazy(()=>import("../../components/ContactForm"));
const Hero=React.lazy(()=>import("./Hero"));
const PartnersSection=React.lazy(()=>import("./PartnersSection"));
const PortfolioSection=React.lazy(()=>import("./PortfolioSection"));
const ServicesSection=React.lazy(()=>import("./ServicesSection"));
const TeamSection=React.lazy(()=>import("./TeamSection"));



const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <ServicesSection />
      <PortfolioSection id="portfolio-section" />
      <PartnersSection />
      {/* <TeamSection/> */}
      <ContactForm/>
     
    </div>
  );
};

export default Home;
