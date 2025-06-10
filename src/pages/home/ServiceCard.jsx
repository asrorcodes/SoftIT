import { ArrowCircleRight2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import SEO from "../../components/SEO";

const ServiceCard = ({ title, description, url, icon: Icon }) => {
  return (
    <>
         <SEO 
    title={title}
    description={description}
  keywords="veb dasturlash xizmatlari,veb sayt yaratish,moslashtirilgan veb ilovalar,biznes uchun veb sayt,frontend dasturlash,sayt,vebsayt,crm tizimi, mobil ilova,ui dizayn,ux dizayn,konsalting"
     />
    <Link 
      to={url || "/"} 
      title={title}
      className="block group" 
    >
      <div className="relative  bg-[#121212] p-6 rounded-xl border border-transparent bg-zinc-900 hover:border-white transition-all duration-300 h-full min-h-[180px] flex flex-col">
        <div className="flex justify-between items-start mb-4">
          {Icon && (
            <div className="text-white p-2 rounded-lg bg-gray-800">
              <Icon size={20} />
            </div>
          )}
          <ArrowCircleRight2 
            className="text-gray-400 group-hover:text-white transition-colors duration-300" 
            size={20} 
          />
        </div>
        
        <div className="mt-auto">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
    </>
  );
};

export default memo(ServiceCard);