import { memo, useState } from "react";
import { mockProjects } from "../../data/mockProjects";
import PortfolioComponent from "../portfolio/PortfolioComponent";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ArrowRightCircle } from "lucide-react";
import SEO from "../../components/SEO";

const PortfolioSection = ({ id }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const openDrawer = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const projectItems = mockProjects.slice(0, 7);
  const portfolioEls = projectItems.map((item, index) => (
    <Link
      className={classNames(
        "group relative w-full overflow-hidden rounded-2xl min-h-[250px] sm:min-h-[300px]",
        index === 0 && "md:row-span-2",
        index === projectItems.length - 1 && "md:col-span-2"
      )}
      key={index}
      to={`/${item.id}`}
      title={item.title}
    >
      <figure className="relative h-full w-full">
        <img
          src={item.images[0]}
          alt={`Portfolio ${item.title}`}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="absolute inset-0 flex flex-col justify-between bg-black/40 transition-all border-2 border-white">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(209,50,145,0.5)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(209,50,145,0.5)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="z-10 flex flex-col p-4 sm:p-6 md:p-8">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
            {item.title}
          </h3>
          <span className="text-xs sm:text-sm text-white/80">
            {item.category_name}
          </span>
        </div>

        <div
          className="z-10 flex justify-end p-4 sm:p-8 md:p-12"
          onClick={() => navigate(`/${item.id}`)}
        >
          <span className="flex translate-x-full opacity-0 items-center text-sm sm:text-base md:text-lg text-white transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            {t("view_more")}
            <ArrowRightCircle
              variant="Bold"
              className="ml-2 sm:ml-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 -rotate-45"
            />
          </span>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      <SEO
        title="Portolio-Amalga oshirilgan IT loyihalarimiz"
        description="Bizning portfoliomiz orqali amalga oshirgan IT loyihalarimiz bilan tanishing. Turli sohalardagi mijozlarimiz uchun veb dasturlar, crm tizimlar,mobil ilovalar,it konsalting,ui/ux dizayn,real IT loyihalar, dasturiy ta’minot va raqamli transformatsiya yechimlarini taqdim etdik."
        keywords="Portfolio,amalga oshirilgan IT loyihalar,web dasturlar ilovalari,IT xizmatlar namunasi,real IT loyihalar,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
        url="https://softit.uz/portfolio"
      />
      <section id={id} className="py-16 ">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-white mb-4">
            {t("portfolio")}
          </h3>
          <div className="mb-4 sm:mb-6 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 mid-low:grid-cols-1 mid:grid-cols-2 md:grid-cols-3 auto-rows-[400px] sm:auto-rows-[300px]">
            {portfolioEls}
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 text-left">
            <Link
              to="/portfolio"
              className="inline-flex  w-max items-center gap-1 sm:gap-2 rounded-lg border-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#D13291] text-white transition-colors hover:bg-[#b82b7f] hover:text-white group"
            >
              <ArrowRightCircle className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-rotate-45" />
              <span className="text-base sm:text-lg md:text-[20px]">
                {t("allProjects")}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default memo(PortfolioSection);
