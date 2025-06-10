import { Briefcase, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { memo } from "react";
import SEO from "../../components/SEO";
const vacancies = [
  {
    id: 1,
    title: "UI/UX designer",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 2,
    title: "Beckend developer",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 3,
    title: "Project manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 4,
    title: "Sales manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 5,
    title: "IT business analyst",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
  {
    id: 6,
    title: "Marketing manager",
    days: "Monday-Friday",
    time: "9:00–18:00",
  },
];


function Vacancies() {
  const {t}=useTranslation()
  return (
    <>
    <SEO
    title="Vakansiyalarimiz – Soft IT"
    description="Ijodkor va tajribali mutaxassislarni jamoamizga taklif qilamiz: dizaynerlar, dasturchilar, menejerlar va marketologlar. Kasbiy rivojlanish va zamonaviy IT muhitda ishlash imkoniyati sizni kutmoqda."
    keywords="IT bo‘sh ish o‘rinlari,izayner ish o‘rinlari O‘zbekiston,dasturchi ish o‘rinlari,backend developer vakansiyasi,loyiha menejeri ish o‘rni,savdo menejeri vakansiyasi,marketing menejeri ish o‘rni,IT kompaniyada ish, bo'sh ish o'rinlari,ish qidirayotganlar uchun vakansiyalar"
    url="https://softit.uz/vacancies"
    />
    <section className="bg-[#080808] text-white py-16 px-4 md:px-10 mb-20 mt-10">
         <div className="text-center mb-16">
      <h2 className="heading-outline-xs md:heading-outline-sm lg:heading-outline my-8">
        {t("nav.vacancies")}
      </h2>

          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {vacancies.map((job) => (
          <Link
            to={`/vacancies/${job.id}`}
            key={job.id}
            className="bg-[#121212] rounded-xl p-6 hover:border hover:border-white/20 transition duration-300 block"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
              <hr className="border-gray-700 mb-4" />
              <div className="flex items-start gap-2 mb-2">
                <CalendarDays className="w-5 h-5 text-gray-400 mt-1" />
                <p>
                  {job.days}
                  <br />
                  {job.time}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gray-400" />
                <p>{job.time}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-[#222] text-sm px-4 py-2 rounded flex items-center gap-2 text-gray-300">
                <Briefcase className="w-4 h-4" />
                Kelishilgan holda
              </button>
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}
export default memo(Vacancies);
