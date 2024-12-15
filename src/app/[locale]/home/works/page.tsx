"use client";

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/motion';
import { GoLinkExternal } from "react-icons/go";
import Image from 'next/image';


export default function HomeWorks() {
    const t = useTranslations('HomeWorks');

    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: t('work1.title'),
            description: t('work1.description'),
            src: "https://quimplo.online",
            width: 250,
            height: 300
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: t('work2.title'),
            description: t('work2.description'),
            src: "https://post-and-publish.netlify.app/",
            width: 250,
            height: 300
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: t('work3.title'),
            description: t('work3.description'),
            src: "https://paulovdev.framer.website/",
            width: 250,
            height: 300
        }
    ];

    return (
        <MotionDiv className="relative w-full flex items-start justify-start flex-col"
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
            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('heading')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('subheading')}</p>

            <div className="w-full flex flex-col gap-8">
                {works.map(work => (
                    <a href={work.src} key={work.id} target="_blank"
                        className="w-full h-full flex items-start flex-col group">
                        <div className="w-full h-[350px] mb-4 bg-bg2 rounded-2xl flex items-center justify-center overflow-hidden transition-all group-hover:bg-[#222222]">
                            <Image src={work.imgSrc} alt={work.title} width={work.width} height={work.height}
                                className='w-[250px] h-[300px] rounded-2xl border border-solid border-border object-cover object-top select-none transition-all 
                                group-hover:opacity-50 group-hover:border group-hover:scale-110' />
                        </div>
                        <h1 className='mb-1 text-p text-[1.3rem] font-[700] tracking-[-.2px] leading-normal'>{work.title}</h1>
                        <p className='text-p3 text-[1rem] font-[500] tracking-[-.5px] leading-[1.3]'>{work.description}</p>
                        <div className="absolute w-full h-[350px] text-[2rem] text-[#fff] flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                            <GoLinkExternal />
                        </div>
                    </a>
                ))}

            </div>
        </MotionDiv>
    );
}
