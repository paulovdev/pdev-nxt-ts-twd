"use client";

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/motion';
import { BiBook, BiMusic } from 'react-icons/bi';
import { MdOutlineMovie } from 'react-icons/md';


export default function HomeUpdates() {
    const t = useTranslations('HomeUpdates');

    const updates = [
        {
            icon: <BiBook />,
            title: t('reading'),
            description: t('readingDescription')
        },
        {
            icon: <BiMusic />,
            title: t('listening'),
            description: t('listeningDescription')
        },
        {
            icon: <MdOutlineMovie />,
            title: t('watching'),
            description: t('watchingDescription')
        }
    ]

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
            viewport={{ once: true }}>
            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('heading')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('subheading')}</p>

            <ul className='relative w-full flex items-start flex-col'>
                {updates.map((item, i) => (
                    <li key={i} className='w-full mb-4' >
                        <span className='w-full mb-4 text-p text-[.9rem] font-[400] tracking-[-.5px] leading-[1.3] flex items-center gap-2'>
                            <div className="w-[30px] h-[30px] p-1 rounded-full border border-solid border-border flex items-center justify-center">
                                {item.icon}
                            </div>
                            {item.title}
                        </span>
                        <div className="relative w-full h-fit p-[1.2rem] rounded-3xl bg-bg2">
                            <p className='text-p text-[1rem] font-[400] tracking-[-.2px] leading-[1.3]'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </MotionDiv>
    );
}

