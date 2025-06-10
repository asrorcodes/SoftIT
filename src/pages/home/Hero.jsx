import { memo, useCallback, useState } from "react";
import { Mouse } from "iconsax-react";
import mountains from "../../assets/images/Planet.png";
import Moon from "./Moon";
import Spotlight from "./Spotlight";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO";

const Hero = () => {
  const [moonLoaded, setMoonLoaded] = useState(false);
  const { t } = useTranslation();
  const onMoonLoad = useCallback(() => setMoonLoaded(true), []);

  return (
    <>
      <SEO
        title="Biz haqimizda"
        description="Biz IT xizmatlari, texnologik konsalting, bulutli yechimlar va kiberxavfsizlik bo‘yicha yetakchi mutaxassislarni taflif qilamiz. Innovatsion va ishonchli yondashuv bilan sizning biznesingizni raqamli rivojlantiramiz."
        keywords="Biz haqimizda IT kompaniyasi,IT xizmatlari haqida,IT konsalting firmasi haqida,ishonchli IT yechimlar,O‘zbekiston IT kompaniyasi,IT texnologiyalar bo‘yicha maslahat,tajribali IT jamoasi,raqamli transformatsiya ekspertlari"
        image="/assets/images/Planet.png"
        url="https://softit.uz/"
      />
     
     <section className="h-[40vh] sm:h-[70vh] md:h-screen w-full flex items-end relative bg-[url('../../assets/images/Background.png')] bg-cover bg-center overflow-hidden">

        {/* Text Container */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-10 w-[90vw] text-center uppercase">
          <div className="relative inline-block w-full">
            {/* Background shadow text */}
            <span className="absolute inset-0 z-[-1] text-[clamp(2rem,12vw,12rem)] font-bold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#080808] to-[#171717]">
              {t("explore_us")}
            </span>

            {/* Spotlight hover text */}
            <Spotlight className="text-[clamp(2rem,12vw,12rem)] font-bold leading-none tracking-tight w-full block">
              {t("explore_us")}
            </Spotlight>
          </div>
        </div>

        {/* Moon Image */}
        <figure
          className={`absolute bottom-0 left-[37%] transform -translate-x-1/2 z-10 pointer-events-none ${
            moonLoaded ? "animate-transformUp" : ""
          }`}
        >
          <div className="relative w-[25vw] h-[25vw] md:w-[30rem] md:h-[30rem]">
            <Moon
              onLoad={onMoonLoad}
              className="w-full h-full animate-rotateMoon origin-center backface-hidden"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] rounded-full shadow-[0_0_7rem_rgba(255,255,255,0.3)] lg:shadow-[0_0_10vw_rgba(255,255,255,0.3)] z-[-1] backface-hidden" />
          </div>
        </figure>

        {/* Scroll Hint */}
        <div className="absolute bottom-[11rem] md:bottom-[6rem] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-[1.4rem] opacity-90 text-white">
          <Mouse className="w-[3rem] h-[3rem]" />
          {/* {t('scrollDown')} */}
        </div>

        {/* Floating Image */}
        <figure className="w-full  md:w-[200vh]  absolute bottom-0 md:bottom-[-50px] left-1/2 transform -translate-x-1/2 z-20">
          <img
            src={mountains}
            alt="Mountains Soft IT"
            className="w-full h-auto"
          />
          <div className="absolute  bottom-0 left-0 bg-gradient-to-b from-transparent to-black/10 w-full h-[90px]" />
        </figure>
      </section>
    </>
  );
};

export default memo(Hero);
