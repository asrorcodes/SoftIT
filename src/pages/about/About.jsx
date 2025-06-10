import { useTranslation } from "react-i18next";
import OurTeamSlider from "../../components/OurTeamSlider";
import TeamSection from "../home/TeamSection";
import { memo } from "react";

const About = () => {
  const {t}=useTranslation()

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className=" heading-outline-xs md:heading-outline-sm lg:heading-outline my-12">
            {t('about.softIt')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Mission Section */}
          <section className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.ourMission')}
            </h2>
            <p className="text-gray-300">
        {t("about.missionDesc")}
            </p>
          </section>

          {/* What We Cover Section */}
          <section className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.whatWeCover')}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.softTrends')}
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.webMobile')}
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.cybersecurity')}
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.cloudComputing')}
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.ai_ml')}
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('about.it_career')}
              </li>
            </ul>
          </section>

          {/* Team Section */}

         

       
        </div>
      </div>
    </div>
  );
};

export default memo(About);
