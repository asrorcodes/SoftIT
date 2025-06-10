import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO";

const PartnersSection = () => {
  const { t } = useTranslation();
  const partners = [
    { id: 1, image: "/assets/images/partner1.jpg", bg: "" },
    { id: 2, image: "/assets/images/Uzinfocom.png", bg: "bg-white" },
    { id: 3, image: "/assets/images/partner3.jpg", bg: "" },
    { id: 4, image: "/assets/images/ITpark.png", bg: "bg-white" },
    { id: 5, image: "/assets/images/partner5.jpg", bg: "" },
    { id: 6, image: "/assets/images/hakimi.png", bg: "" },
    { id: 7, image: "/assets/images/partner7.jpg", bg: "" },
  ];

  const settings = {
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
         <SEO 
    title="Bizning Hamkorlarimiz" 
    description="Biz global va mahalliy texnologik yetakchilar bilan hamkorlik qilamiz. Hamkorlarimiz bilan birgalikda mijozlarimizga innovatsion, barqaror va ishonchli IT yechimlarini taqdim etamiz." 
    keywords="hamkorlik,partnyorlar,strategik hamkorlar,xalqaro kompaniyalar,O‘zbekistondagi IT kompaniyalar,xalqaro IT hamkorlik,biznes hamkorlar,Uzinfocom,ITPARK,Hakimi"
    url='https://softit.uz/'
     />
    <section className="py-12 px-8 md:px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h3 className="text-2xl text-white md:text-3xl font-bold text-left mb-8">
         {t('partners')}
        </h3>

        <div className="slider-container my-12">
          <Slider {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-6 md:px-2 focus:outline-none">
                <div
                  className={`rounded-2xl overflow-hidden flex items-center justify-center bg-white h-[150px] w-[80vw] md:w-[300px]`}
                >
                  <img
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    width={250}
                    height={150}
                    className={`transition-transform duration-300 hover:scale-110 object-cover ${
                      partner.id === 7 ? "h-[150px] scale-110" : "h-auto"
                    }`}
                    style={{
                      borderRadius: "20px",
                      border: "none",
                      outline: "none",
                      backgroundColor:
                        partner.bg === "bg-white" ? "white" : "transparent",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    </>
  );
};

export default memo(PartnersSection);
