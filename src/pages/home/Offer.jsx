import { memo } from "react";
import { Call, ArrowCircleRight2 } from "iconsax-react";
import illustration from "../../assets/images/5.png"; // Importga mos yo'lni tekshiring

const Offer = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Chap qism */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6 uppercase">
              Explore Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For any inquiries or questions, feel free to contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md transition-all"
              >
                <Call size="20" />
                Call Us
              </a>
              <a
                href="/portfolio"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-md transition-all"
              >
                <ArrowCircleRight2 size="20" />
                Our Portfolio
              </a>
            </div>
          </div>

          {/* O'ng qism - Rasm */}
          <div className="flex-1 max-w-md md:max-w-[30vw] ml-0 md:ml-8 hidden md:block">
            <img
              src={illustration}
              alt="Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Offer);
