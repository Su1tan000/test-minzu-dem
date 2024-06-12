import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next, {} from 'i18next';

const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };
  
  const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
  
    return (
      <div className="flex justify-end items-center space-x-4 mr-5 mt-3 ">
        <span
          className={`cursor-pointer ${i18n.language === 'en' ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => changeLanguage('en')}
        >
          English
        </span>
        <span
          className={`cursor-pointer ${i18n.language === 'ru' ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => changeLanguage('ru')}
        >
          Русский
        </span>      
      </div>
    );
  };

const BioPages: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div className="container max-w-custom pl-custom pr-custom">
        <LanguageSwitcher />
        <section className="flex gap-12 mt-14 mr-8 mb-4 ml-8 flex-col-reverse md:flex-row justify-center mobile:mt-20 mobile:mb-20">
            <div className="flex flex-col gap-6 text-lg mb-7 font-sans">
                <p>{t("text")}</p>
                <p>{t("target")}</p>
                <p>{t("creation")}</p>
                <p>{t("adres")}</p>
            </div>
            <div className="w-full flex items-center md:items-start md:space-x-4 h-auto">
                <img
                    className="w-full max-w-md h-auto md:max-w-none"
                    alt="user photo"
                    loading="lazy"
                    decoding="async"
                    color="transparent"
                    src="https://minzu-dem.vercel.app/_next/image?url=%2FuserPhoto.HEIC&w=1920&q=75"
                />
            </div>
        </section>
    </div>
  );
}

export default BioPages;