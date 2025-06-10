import { useRef, useMemo } from "react";
import countryPhoneCodes from '../data/country-phone-codes.json';

const PhoneInput = ({ 
  label, 
  value, 
  onChange, 
  phoneCode, 
  setPhoneCode, 
  required 
}) => {
  const selectRef = useRef(null);
  
  const selectedCountryCode = useMemo(() => {
    return countryPhoneCodes.find(code => 
      code.dial_code === phoneCode
    )?.code.toLowerCase();
  }, [phoneCode]);

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-[16px] mb-4 text-white">
          {label}
        </label>
      )}
      <div className="bg-[#121212] py-2 px-3 rounded-lg border-[0.5px] border-[#FFFFFF33] focus-within:border-[#ffffff83] hover:border-[#ffffff83] flex items-center gap-2">
        <div className="relative flex items-center">
          <figure className="w-6 h-4 mr-2">
            <img
              src={`/src/assets/flags/${selectedCountryCode || 'uz'}.png`}
              alt="Country Flag"
              className="w-full h-full object-cover"
            />
          </figure>
          <select
            ref={selectRef}
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            className="bg-transparent text-white appearance-none pr-6 outline-none"
          >
            {countryPhoneCodes.map((code, index) => (
              <option key={index} value={code.dial_code} className="text-black">
                {code.dial_code}
              </option>
            ))}
          </select>
          <svg 
            className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input
          type="tel"
          value={value}
          onChange={onChange}
          required={required}
          className="bg-transparent text-white outline-none flex-1"
        />
      </div>
    </div>
  );
};

export default PhoneInput;