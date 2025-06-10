import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { teamMembers } from "../../data/teamMembers";
import { memo, useEffect, useState } from "react";
import SEO from "../../components/SEO";

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);
  const language = i18n.language;
  // Handle member click to open the modal with additional informatio
  const handleModalClose = () => {
    setSelectedMember(null);
  };
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleModalClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        handleModalClose();
      }
    };

    if (selectedMember) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedMember]);
  return (
    <>
     <SEO 
    title="Bizning jamoa - tajribali mutaxassislar" 
    description="Bizning IT jamoamiz — bu o‘z ishining ustalari, texnologik muammolarga innovatsion yechimlar topishda tajribaga ega dasturchilar, muhandislar va konsalting mutaxassislaridir. Har bir loyiha bizning jamoaviy kuchimiz bilan amalga oshadi." 
    keywords="IT jamoa,tajribali mutaxassislar,tajribali dasturchilar jamoasi,it professionallar,ui/ux mutaxassislar,mobile dasturchilar,proyekt menejer"
    url='https://softit.uz/about-us'
     />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-16">
          {t("about.ourTeam")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* First member - takes up 2 rows */}
          <div className="relative group md:row-span-3 md:col-span-1 cursor-pointer " onClick={() => handleMemberClick(teamMembers[0])}>
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              <Link
                to={teamMembers[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-black/20 hover:bg-black/30 transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-6 h-6 rounded-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
              </Link>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl text-left font-semibold text-white mb-3">
                  {teamMembers[0].name}
                </h3>

                <p className="text-gray-300 border border-white py-2 px-2 rounded-[12px] text-center text-base mb-4">{teamMembers[0].role}</p>


              </div>
            </div>
          </div>

          {/* Rest of the members */}
          {teamMembers.slice(1).map((member) => (
            <div key={member.id} className="relative group">
              <div className="relative cursor-pointer overflow-hidden rounded-2xl aspect-square" onClick={() => handleMemberClick(member)}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                <Link
                    to={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-black/20 hover:bg-black/30  transition-colors z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6 rounded-full text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{member.role}</p>

                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 modal-overlay " onClick={handleModalClick}>
            <div className="bg-[#121212]   rounded-2xl max-w-2xl my-8 w-full max-h-[95vh] relative overflow-y-auto">
              {/* Close Button */}

              <div className="flex   flex-col md:flex-col">
                {/* Image Section */}
                <div className="md:w-full relative h-[510px] ">
            <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-gray-500 p-1 rounded-full hover:text-white z-[60]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
                  <div className="aspect-square  relative">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full   md:h-[500px] object-cover"
                    />
                    <div className="absolute  h-[500px] inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
                    <div className="relative  w-full px-8 flex items-center justify-between right-0  bottom-20">
                      <div className="flex flex-col">
                        <h2 className="text-2xl   font-bold text-white mb-2">
                          {selectedMember.name}
                        </h2>
                        <p className="text-white mb-4">{selectedMember.role}</p>

                      </div>
                      <Link
                        to={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center  mt-6 text-[#fff] hover:text-[#fff]/80"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>

                      </Link>
                    </div>
                  </div>

                </div>

                {/* Content Section */}
                <div className="md:w-full  p-6 md:py-2 md:px-8">

                  <p className="text-gray-300 mb-6">
                    {selectedMember.bio?.[language] || selectedMember.bio?.en}
                  </p>

                  {/* Activity Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Activity</h3>
                    {selectedMember.activities?.map((activity) => (
                      <div key={activity?.id} className="bg-[#1A1A1A] rounded-lg p-4">
                        <h4 className="font-medium text-white mb-1">    {activity.title?.[language] || activity.title?.en}</h4>
                        <p className="text-sm text-gray-400 mb-2">
                          Completed on: {activity.completedOn}
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          Role: {activity.role?.[language] || activity.role?.en}
                        </p>
                        <p className="text-sm text-gray-300">
                          {activity.description?.[language] || activity.description?.en}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* LinkedIn Link */}

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
    </>
  );
};

export default memo(TeamSection);