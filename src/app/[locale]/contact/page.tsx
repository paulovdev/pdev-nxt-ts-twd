"use client";

import { useTranslations } from 'next-intl';
import { MotionSection } from "@/components/motion";
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <MotionSection
            className='relative max-w-[500px] my-0 mx-auto pt-[15px] pr-[15px] pb-[200px] pl-[15px]'
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>

            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('heading')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('description')}</p>

            <div className="mb-8 flex items-center gap-4">
                <a href="mailto:paulo@gmail.com" className='text-p text-[1rem] tracking-[-.5px] leading-[1.3] flex items-center gap-2 hover:underline'><MdEmail />{t('email')}</a>
                <a href="tel:+1234567890" className='text-p text-[1rem] tracking-[-.5px] leading-[1.3] flex items-center gap-2 hover:underline'><MdPhone />{t('call')}</a>
            </div>

            <form className="w-full mb-4 flex items-center justify-center flex-col gap-4" onClick={(e) => e.preventDefault()}>
                <div className="w-full flex items-center gap-4">
                    <input
                        type="text"
                        autoComplete='name'
                        placeholder={t('namePlaceholder')}
                        className='w-full p-4 text-p text-[.9rem] font-[600] bg-bg2 rounded-[.8rem] outline-none transition-all
                                    hover:bg-bg2h placeholder:text-p3 placeholder:font-[600]'
                    />
                    <input
                        type="email"
                        autoComplete='email'
                        placeholder={t('emailPlaceholder')}
                        className='w-full p-4 text-p text-[.9rem] font-[600] bg-bg2 rounded-[.8rem] outline-none transition-all
                                    hover:bg-bg2h placeholder:text-p3 placeholder:font-[600]'/>
                </div>
                <textarea
                    placeholder={t('messagePlaceholder')}
                    className='w-full h-[150px] p-4 text-p text-[.9rem] font-[600] bg-bg2 rounded-[.8rem] outline-none resize-none transition-all
                                hover:bg-bg2h placeholder:text-p3 placeholder:font-[600]'
                ></textarea>
                <button className='w-full p-4 text-p text-[.9rem] font-[600] bg-bg2 rounded-[.8rem] outline-none transition-all hover:bg-bg2h'>{t('sendButton')}</button>
            </form>

            <h2 className='text-p3 text-[1rem] font-[400] tracking-[-.5px] leading-normal'>{t('responseTime')} <span className='text-p text-[1rem] font-[500] tracking-[-.5px] leading-normal'>{t('avgResponse')}</span></h2>
        </MotionSection >
    );
}
