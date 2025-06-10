import { memo, useEffect, useState } from "react";
import classNames from "classnames";
import Tags from "./Tags";
import PortfolioComponent from "./PortfolioComponent";
import { mockProjects } from "../../data/mockProjects";
import { useTranslation } from "react-i18next";
import { mockCategories } from "../../data/mockCategories";
import SEO from "../../components/SEO";
const Portfolio = () => {
  const { t } = useTranslation();
  const allProjectsTag = "All Projects";
  const [activeTag, setActiveTag] = useState(allProjectsTag);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const tagItems = [
    allProjectsTag,
    ...mockCategories.map(({ title }) => title),
  ];

  useEffect(() => {
    if (activeTag === allProjectsTag) {
      setFilteredProjects(mockProjects);
    } else {
      setFilteredProjects(
        mockProjects.filter((project) => project.category_name === activeTag)
      );
    }
  }, [activeTag]);

  return (
    <>
      <SEO
        title="Portfolio – Soft IT"
        description="Bizning portfoliomiz orqali amalga oshirgan IT loyihalarimiz bilan tanishing. Turli sohalardagi mijozlarimiz uchun veb dasturlar, crm tizimlar,mobil ilovalar,it konsalting,ui/ux dizayn,real IT loyihalar, dasturiy ta’minot va raqamli transformatsiya yechimlarini taqdim etdik."
        keywords="Portfolio,amalga oshirilgan IT loyihalar,web dasturlar ilovalari,IT xizmatlar namunasi,real IT loyihalar,ishonchli IT yechimlar,veb-dasturlash,mobil ilovalar,ui dizayn"
        url="https://softit.uz/portfolio"
      />
      <section className={classNames("py-16")}>
        <div className="text-center mb-8">
          <h1 className="heading-outline-xs md:heading-outline-sm lg:heading-outline my-8">
            {t("nav.portfolio")}
          </h1>
        </div>
        <div className="container mx-auto">
          <Tags
            items={tagItems}
            onClickTag={setActiveTag}
            activeTag={activeTag}
          />
          <PortfolioComponent
            plainLayout={activeTag !== allProjectsTag}
            projects={filteredProjects}
          />
        </div>
      </section>
    </>
  );
};

export default memo(Portfolio);
