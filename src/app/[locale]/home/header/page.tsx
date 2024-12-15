"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import { MotionDiv, AnimatePresenceDiv } from '@/components/motion';

interface Key {
    index: number
}

export default function HomeHeader() {
    const [showMoreAbout, setShowMoreAbout] = useState(false);
    const t = useTranslations('HomeHeader');

    const headIcons = [<FaLinkedin />, <FaTwitter />, <FaGithub />]

    return (
        <MotionDiv className="relative text-start flex items-start justify-start flex-col max-tablet:text-center max-tablet:items-center max-tablet:justify-center"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="w-full mb-12 flex items-center justify-start gap-8 
                            max-tablet:mb-6 max-tablet:text-center max-tablet:items-center max-tablet:justify-center max-tablet:flex-col">
                <div className="w-[125px] h-[125px] rounded-full grayscale-[40%] select-none">
                    <Image src="/photo.webp" width={125} height={125} quality={100} priority={true} alt="profile-photo" />
                </div>
                <div className="mt-4 
                                max-tablet:flex max-tablet:justify-center max-tablet:items-center max-tablet:flex-col">
                    <h1 className='mb-2 text-[1.5rem] font-[700] tracking-[-.5px] leading-none text-p flex items-center gap-2'>
                        {t('name')}
                        <VscVerifiedFilled className='text-[#1da1f2]' />
                    </h1>

                    <div className="w-full text-[.9rem] font-[500] text-p3 flex items-center justify-center gap-3 ">

                        <div /* ball green */
                            className="relative w-[8px] h-[8px] bg-[#34d399] rounded-full shadow-[0_0_5px_2px_#34d399] 
                        after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]
                        after:absolute after:w-[15px] after:h-[15px] after:bg-[#34d399] after:rounded-full after:animate-[radar-pulse_1.5s_infinite]">
                        </div>
                        {t('availableForWorks')}
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                        {headIcons.map((icon, i) => (
                            <div key={i} className="w-[35px] h-[35px] p-2 rounded-full bg-bg2 text-p flex items-center justify-center cursor-pointer transition-all hover:bg-bg3 hover:text-p2">
                                <span className='text-[16px]'>{icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-tablet:flex max-tablet:items-center max-tablet:flex-col">
                <h2 className='mb-8 text-[1.3rem] font-[400] text-p tracking-[-.1px] leading-[1.3]'>{t('description')}</h2>

                <AnimatePresenceDiv>
                    {showMoreAbout && (
                        <MotionDiv className=""
                            initial={{ opacity: 0, y: -10, filter: "blur(15px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(15px)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p className='mb-4 text-[1.2rem] text-p3 font-[400] tracking-[-.1px] leading-[1.3]'>{t('moreAbout.p1')}</p>
                            <p className='mb-4 text-[1.2rem] text-p3 font-[400] tracking-[-.1px] leading-[1.3]'>{t('moreAbout.p2')}</p>
                            <span className='font-["Dancing_Script"] text-p'>{t('signature')}</span>
                        </MotionDiv>
                    )}
                </AnimatePresenceDiv>

                <button onClick={() => setShowMoreAbout(!showMoreAbout)} className="mt-8 mb-4 w-fit py-[.8rem] px-[1.5rem] text-[.9rem] font-[500] rounded-full border border-solid border-transparent bg-bg2 text-p flex items-center gap-2">
                    {t('moreAboutButton')} <IoIosArrowUp className={`text-[16px] transition-all ${!showMoreAbout ? "rotate-180" : ""}`} />
                </button>
            </div>
        </MotionDiv >
    );
}
