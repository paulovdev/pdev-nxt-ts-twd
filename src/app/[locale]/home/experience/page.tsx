"use client";

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/motion';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { TbBabyCarriageFilled } from 'react-icons/tb';

import { IoIosFlash } from "react-icons/io";

const HomeExperience = () => {
    const t = useTranslations('HomeExperience');

    const experiences = [
        {
            year: "Sep 2024 – Oct 2028",
            company: t('exp1.company'),
            role: t('exp1.role'),
            icon: <FaGraduationCap size={22} />,
            span: <span style={{ color: "#f74c19" }}>.</span>
        },
        {
            year: "Mar 2022 – Present",
            company: t('exp2.company'),
            role: t('exp2.role'),
            icon: <FaBuilding size={18} />,
            span: <span style={{ color: "#e9561f" }}>.</span>
        },
        {
            year: "Oct 2021 – Nov 2022",
            company: t('exp3.company'),
            role: t('exp3.role'),
            icon: <FaBuilding size={18} />,
            span: <span style={{ color: "#00de00" }}>.</span>
        },
        {
            year: "Fev 2021 – Jan 2022",
            company: t('exp4.company'),
            role: t('exp4.role'),
            icon: <FaGraduationCap size={22} />,
            span: <span style={{ color: "#9453ee" }}>.</span>
        }
    ];

    return (
        <MotionDiv className="relative w-full flex items-start justify-center flex-col"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}
        >
            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal flex items-center gap-2'><IoIosFlash size={28} />{t('heading')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('subheading')}</p>

            <div className="relative w-full flex items-center flex-col">
                <div className="absolute w-[2px] h-[95%] top-[30px] bottom-0 left-[50%] bg-border overflow-hidden z-0"></div>

                {experiences.map((exp, index) => (
                    <div className="relative w-full mb-20 flex items-start justify-between
                                    max-tablet:items-center max-tablet:justify-center max-tablet:flex-col max-tablet:gap-4" key={index}>
                        <div className="relative w-fit top-[10px] py-[.5rem] px-[1.5rem] text-p text-[.85rem] font-[400] bg-bg2 rounded-2xl text-center
                                        max-tablet:mb-2">{exp.year}</div>
                        <div className="absolute w-[50px] h-[50px] top-0 bottom-0 left-[50%] text-p rounded-2xl bg-bg3 flex items-center justify-center translate-x-[-50%] z-10
                                        max-tablet:relative max-tablet:left-0 max-tablet:translate-x-[0]">
                            <span className='text-p2'>{exp.icon}</span>
                        </div>

                        <div className="relative w-[calc(35%+15px)] h-fit bottom-[10px] p-4 text-center bg-bg2 rounded-[2rem] flex items-center justify-center flex-col 
                                        max-tablet:w-[calc(50%+15px)] max-tablet:bottom-0">
                            <h1 className='mb-1 text-p text-[1rem] font-[600] tracking-[-.5px] flex items-center gap-1'>{exp.company} {exp.span}</h1>
                            <p className='text-p3 text-[.8rem] font-[500] tracking-[-.4px] leading-[1.2]'>{exp.role}</p>
                        </div>
                    </div>
                ))}
                <div className="relative w-fit h-[40px] pt-[.8rem] pr-[1rem] pb-[.8rem] pl-[.8rem] text-p text-[.8rem] font-[600] bg-bg2 rounded-full flex items-center justify-center gap-3">
                    <TbBabyCarriageFilled className='text-p' /> {t('bornIn')}</div>
            </div>
        </MotionDiv>
    );
}

export default HomeExperience;
