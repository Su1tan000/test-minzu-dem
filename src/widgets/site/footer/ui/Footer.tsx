import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer className="w-full flex justify-center items-center ">
                <div className="mt-20 md:mt-40 w-full md:w-9/12 mx-auto flex flex-col items-center">
                    <div className="h-px w-[97%] bg-black my-4 mx-auto"></div>
                    <div className="flex gap-5 justify-center items-center my-4">
                        <a target="_blank" href="https://www.instagram.com/minzudem/">
                            <img
                                className="w-7"
                                src="https://img.icons8.com/?size=100&id=DpOQ6G5p47f0&format=png&color=000000"
                                alt="External link icon"
                            />
                        </a>
                        <a href="mailto:minzudem@gmail.com" target="_blank">
                            <img
                                className="w-7"
                                src="https://img.icons8.com/?size=100&id=1QejVTHLoV0g&format=png&color=000000"
                                alt="Email icon"
                            />
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-center mt-10 md:mt-20 mb-10 text-[16px] max-[425px]:text-xs w-full px-4">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-auto">
                            <a
                                href="https://minzu-dem.vercel.app/pages/return-and-refund-policy"
                                className="mb-2 md:mb-0 no-underline hover:underline hover:underline-offset-4 text-center w-full md:w-auto"
                            >
                                <h1>{t('returnPolicy')}</h1>
                            </a>
                            <a
                                href="https://minzu-dem.vercel.app/pages/return-and-refund-policy"
                                className="mt-2 md:mt-0 md:ml-4 no-underline hover:underline hover:underline-offset-4 text-center md:text-left w-full md:w-auto"
                            >
                                <h1>{t('termService')}</h1>
                            </a>
                        </div>
                        <h1 className="mt-4 md:mt-0 text-[13px] w-full md:w-auto text-center md:text-right">
                            {t('developBy')}
                        </h1>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer