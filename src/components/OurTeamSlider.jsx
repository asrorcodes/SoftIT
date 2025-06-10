import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTranslation } from "react-i18next";
import { teamMembers } from "../data/teamMembers";

const OurTeamSlider = () => {
  const {t}=useTranslation()
  return (
    <section className="py-10 bg-zinc-900 text-white max-w-7xl mx-auto mt-10 rounded-xl">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t('about.ourTeam')}</h2>

        <Swiper
           modules={[Autoplay, Navigation, Pagination]} 
           spaceBetween={30}
           slidesPerView={1}
           pagination={{
             clickable: true,
             el: '.pagination',
             type: 'progressbar'
           }}
           autoplay={{ delay: 2000, disableOnInteraction: false }} 
           breakpoints={{
             640: { slidesPerView: 2 },
             768: { slidesPerView: 3 },
             1024: { slidesPerView: 3 },
           }}
           className="!pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden h-full border border-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination absolute left-1/2 -translate-x-1/2 bottom-0 w-1/2 z-10"></div>
      </div>
    </section>
  );
};

export default OurTeamSlider;
