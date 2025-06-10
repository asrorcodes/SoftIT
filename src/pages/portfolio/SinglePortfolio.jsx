import { memo, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mockProjects } from "../../data/mockProjects";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO";
const SinglePortfolio = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Simulate API fetch with mock data
    const project = mockProjects.find((p) => p.id === parseInt(id));
    setPortfolio(project);
  }, [id]);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!portfolio) {
    return (
      <div
        className={`min-h-screen absolute ${
          isOpen ? "bottom-0" : "bottom-[100%] "
        } flex  items-center justify-center`}
      >
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${portfolio?.title} | SoftIT`}
        description={`${portfolio?.title} – SoftIT.uz`}
        keywords="Portfolio,amalga oshirilgan IT loyihalar,web dasturlar ilovalari,IT xizmatlar namunasi,real IT loyihalar,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
        url="https://softit.uz/portfolio"
      />
      <div
        className={`h-[100vh] w-[100vw] fixed inset-x-0 transition-all  z-[9999] duration-30000 bottom-0 ease-in-out transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } bg-[#080808] py-20`}
        style={{ transitionDuration: "500ms" }}
      >
        <div className=" mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Image */}
            <div className="lg:w-3/5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  className="rounded-xl portfolio-swiper overflow-hidden bg-gray-800"
                >
                  {portfolio?.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-[4/3]">
                        <img
                          src={image}
                          alt={`${portfolio.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-2/5 border  border-white border-opacity-5 rounded-lg bg-[#0D0D0D] p-2">
              <div className="sticky  top-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-8 mb-2  gap-x-2  p-0 justify-between w-full">
                  <h1 className="text-[20px] col-span-6 border border-white border-opacity-5 rounded-lg py-4 px-6 bg-[#121212] font-bold ">
                    {portfolio.title}
                  </h1>
                  <button className="bg-[#121212] border border-white border-opacity-5  px-6 col-span-1 rounded-lg">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="#878787"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="#878787"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-[#121212] border border-white   border-opacity-5 hover:border-opacity-20  px-6 col-span-1 rounded-lg"
                    onClick={() => {
                      setIsOpen(false);
                      if (location.pathname.includes("/")) {
                        navigate("/#portfolio-section");
                      }
                      if (location.pathname.includes("/portfolio")) {
                        navigate("/portfolio");
                      }
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="#878787"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="#878787"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex bg-[#121212] border border-white border-opacity-5  py-4 px-6 rounded-lg  items-center gap-4 mb-2">
                  <div className="grid grid-cols-1 w-full gap-y-2 lg:grid-cols-2 grid-rows-2">
                    <span className="col-span-1">
                      {t("portfolioPage.company")}
                    </span>
                    {/* <span className="col-span-1">{t('portfolioPage.year')}</span> */}
                    <span className="col-span-1">
                      {t("portfolioPage.type")}
                    </span>
                    <span className="text-base lg:text-[16px] col-span-1 font-medium text-gray-100">
                      {portfolio.company}
                    </span>
                    {/* <span className="text-base lg:text-[16px] font-medium col-span-1 text-gray-100">{portfolio.year}</span> */}
                    <span className="text-base lg:text-[16px] font-medium  col-span-1 text-[#D13291]">
                      {portfolio.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 bg-[#121212] border border-white border-opacity-5 p-2 rounded-lg h-auto">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      {t("portfolioPage.overview")}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {language === "ru"
                        ? portfolio.description.ru
                        : language === "uz"
                        ? portfolio.description.uz
                        : portfolio.description.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(SinglePortfolio);
