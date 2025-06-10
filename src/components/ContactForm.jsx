import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "./PhoneInput";

const defaultForm = {
    phone_number: '',
    full_name: '',
    company_name: '',
    phone_code: '+998',
    email: '',
    description: ''
};

const ContactForm = () => {
    const [form, setForm] = useState(defaultForm);
    const [success, setSuccess] = useState(false);
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneCode, setPhoneCode] = useState('+998');

    const onFormChange = useCallback((key, val) => {
        setForm(prev => ({
            ...prev,
            [key]: val
        }));
    }, []);

    const onSubmitForm = useCallback(async (e) => {
        e.preventDefault();
        // Handle form submission here
        setSuccess(true);
        setForm(defaultForm);
    }, [form]);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="">
                    <form onSubmit={onSubmitForm} className="w-full p-5 sm:p-6 md:p-12 bg-[#0D0D0D] rounded-3xl">
                <h3 className="text-white text-[32px] my-4">{t('contact.project')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                            <div className=" flex flex-col">
                                <label className="text-[16px] mb-4 text-white">{t('contact.companyLabel')}</label>
                                <input
                                    className="bg-[#121212] py-2 px-3 rounded-lg text-white border-[0.5px] border-[#FFFFFF33] focus:outline-none hover:border-[#ffffff83]"
                                    placeholder={t('contact.company')}
                                    value={form.company_name}
                                    onChange={(e) => onFormChange('company_name', e.target.value)}
                                    required
                                />
                            </div>

                            <div className=" flex flex-col">
                                <label className="text-[16px] mb-4 text-white">{t('contact.fullnameLabel')}</label>
                                <input
                                    className="bg-[#121212] py-2 px-3 text-white rounded-lg border-[0.5px] border-[#FFFFFF33] focus:outline-none hover:border-[#ffffff83]"
                                    placeholder={t('contact.fullname')}
                                    value={form.full_name}
                                    onChange={(e) => onFormChange('full_name', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <PhoneInput
                                    label={t('contact.phoneLabel')}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    phoneCode={phoneCode}
                                    setPhoneCode={setPhoneCode}
                                    required
                                />
                            </div>

                            <div className=" flex flex-col">
                                <label className="text-[16px] mb-4 text-white">{t('contact.emailLabel')}</label>
                                <input
                                    className="bg-[#121212] py-2 px-3 text-white rounded-lg border-[0.5px] border-[#FFFFFF33] focus:outline-none hover:border-[#ffffff83]"
                                    placeholder={t('contact.email')}
                                    value={form.email}
                                    onChange={(e) => onFormChange('email', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-span-full">
                                <div className="flex flex-col">
                                    <label className="text-[16px] mb-4 text-white">
                                    {t('contact.messageLabel')}
                                        </label>
                                    <textarea
                                        className="bg-[#121212] h-[120px] text-white py-2 px-3 rounded-lg border-[0.5px] border-[#FFFFFF33] focus:outline-none hover:border-[#ffffff83]"
                                        value={form.description}
                                        onChange={(e) => onFormChange('description', e.target.value)}
                                        placeholder={t('contact.message')}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {success && (
                            <p className="text-green-500 mb-4">{t('success')}</p>
                        )}

                        <div className="flex justify-start">
                            <button className="bg-[#D13291] text-white py-2 flex items-center gap-2 px-4 rounded-lg" type="submit">
                                {t('contact.submit')}
                                <span className="inline-flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3393_190)">
                                            <path d="M9.19 6.34999C7.15 8.63999 5.75 11.93 5.62 12.24L2 10.69L6.05 6.63999C6.52 6.16999 7.2 5.95999 7.86 6.08999L9.19 6.34999ZM11.17 17C11.17 17 14.91 15.45 17.06 13.3C22.46 7.89998 21.56 3.67999 21.27 2.72999C20.32 2.42999 16.1 1.53999 10.7 6.93999C8.55 9.08999 7 12.83 7 12.83L11.17 17ZM17.65 14.81C15.36 16.85 12.07 18.25 11.76 18.38L13.31 22L17.36 17.95C17.83 17.48 18.04 16.8 17.91 16.14L17.65 14.81ZM9 18C9 18.83 8.66 19.58 8.12 20.12C6.94 21.3 2 22 2 22C2 22 2.7 17.06 3.88 15.88C4.2988 15.459 4.83325 15.172 5.4155 15.0553C5.99775 14.9387 6.60153 14.9977 7.15017 15.2249C7.69882 15.452 8.16758 15.8371 8.49694 16.3312C8.8263 16.8253 9.0014 17.4062 9 18ZM13 8.99999C13 7.89999 13.9 6.99999 15 6.99999C16.1 6.99999 17 7.89999 17 8.99999C17 10.1 16.1 11 15 11C13.9 11 13 10.1 13 8.99999Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3393_190">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;