"use client";

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/motion';
import Image from 'next/image';


export default function HomeStack() {
    const t = useTranslations('HomeStack');

    const stacks = [
        {
            img: "/stacks/react.png",
            title: t('react.title'),
            subTitle: t('react.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/firebase.png",
            title: t('firebase.title'),
            subTitle: t('firebase.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/notion.png",
            title: t('notion.title'),
            subTitle: t('notion.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/figma.png",
            title: t('figma.title'),
            subTitle: t('figma.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/vs-code.png",
            title: t('vsCode.title'),
            subTitle: t('vsCode.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/chat-gpt.png",
            title: t('chatGpt.title'),
            subTitle: t('chatGpt.subTitle'),
            width: 40,
            height: 40
        },
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
            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('heading')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('subheading')}</p>

            <ul className='w-full grid grid-cols-2 gap-8 
            max-tablet:flex max-tablet:flex-col'>
                {stacks.map((stack, index) => (
                    <li key={index} className='relative w-full flex items-center gap-4'>
                        <div>
                            <div className="w-[60px] h-[60px] p-2 bg-bg2 rounded-lg flex items-center justify-center transition-all">
                                <Image src={stack.img} width={stack.width} height={stack.height} alt="icon"
                                    className='w-[40px] h-[40px] rounded-full select-none'
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h1 className='mb-1 text-p text-[1.1rem] font-[700] tracking-[-.2px] leading-normal'>{stack.title}</h1>
                            <p className='text-p3 text-[.9rem] font-[500] tracking-[-.5px] leading-[1.3]'>{stack.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </MotionDiv>
    );
}
