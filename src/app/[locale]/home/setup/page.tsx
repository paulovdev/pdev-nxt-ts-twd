"use client";

import { useState, useRef, useLayoutEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MotionDiv, MotionButton } from '@/components/motion';
import { useTranslations } from 'next-intl';


export default function HomeSetup() {
    const t = useTranslations('HomeSetup');

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleItems, setVisibleItems] = useState(5);
    const containerRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useLayoutEffect(() => {
        if (containerRef.current) {
            setConstraints({
                left: -containerRef.current.scrollWidth + containerRef.current.clientWidth,
                right: 0
            });
        }
    }, []);

    const setupItems = [
        { title: t('cpu'), description: t('cpuDescription'), category: t('components') },
        { title: t('ram'), description: t('ramDescription'), category: t('components') },
        { title: t('graphicsCard'), description: t('graphicsCardDescription'), category: t('components') },
        { title: t('motherboard'), description: t('motherboardDescription'), category: t('components') },
        { title: t('storage'), description: t('storageDescription'), category: t('components') },
        { title: t('mouse'), description: t('mouseDescription'), category: t('peripherals') },
        { title: t('keyboard'), description: t('keyboardDescription'), category: t('peripherals') },
        { title: t('monitor'), description: t('monitorDescription'), category: t('peripherals') },
        { title: t('case'), description: t('caseDescription'), category: t('components') },
        { title: t('headset'), description: t('headsetDescription'), category: t('peripherals') },
        { title: t('lineFilter'), description: t('lineFilterDescription'), category: t('accessories') },
        { title: t('gamerCabinet'), description: t('gamerCabinetDescription'), category: t('components') },
        { title: t('coolerProcessor'), description: t('coolerProcessorDescription'), category: t('components') },
        { title: t('gamerChair'), description: t('gamerChairDescription'), category: t('furniture') },
        { title: t('speakers'), description: t('speakersDescription'), category: t('peripherals') },
        { title: t('webcam'), description: t('webcamDescription'), category: t('peripherals') },
        { title: t('powerSupply'), description: t('powerSupplyDescription'), category: t('components') },
        { title: t('extraStorage'), description: t('extraStorageDescription'), category: t('components') },
        { title: t('router'), description: t('routerDescription'), category: t('network') },
        { title: t('microphone'), description: t('microphoneDescription'), category: t('peripherals') },
        { title: t('vrHeadset'), description: t('vrHeadsetDescription'), category: t('peripherals') }
    ];


    const categories = ['All', 'Components', 'Peripherals', 'Network', 'Furniture', 'Accessories'];

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
    };

    return (
        <MotionDiv
            className="relative w-full h-full flex items-start justify-start flex-col"
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
            <div className="relative w-full pt-[2.5rem] p-0">
                <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('heading')}</h1>
                <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('subheading')}</p>
            </div>

            <div className="relative w-full overflow-hidden select-none" ref={containerRef}>
                <MotionDiv
                    className="w-max pt-[2rem] pr-0 pb-[1rem] pl-0 flex items-center gap-4"
                    drag="x"
                    dragConstraints={constraints}
                >
                    {categories.map((category, index) => (
                        <MotionButton
                            key={index}
                            className={`w-fit py-[.6rem] px-[1.2rem] text-p text-[.9rem] font-[500] rounded-full border-none bg-bg2 flex items-center justify-center gap-4 cursor-pointer transition-all hover:bg-bg3 hover:text-p2
                                ${selectedCategory === category ? 'bg-bg3 text-p2' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t(`category.${category}`)}
                        </MotionButton>
                    ))}
                </MotionDiv>
            </div>

            <ul className='relative w-full h-full p-0 flex flex-col'>
                {setupItems
                    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
                    .slice(0, visibleItems)
                    .map((item, index) => (
                        <li key={index} className='w-full h-[90px] mb-4 p-4 bg-bg2 rounded-2xl flex item-start justify-start flex-col transition-all hover:bg-bg2h'>
                            <strong className='w-full text-p text-[1rem] font-[700] flex items-center justify-between'>{item.title}
                                <span className='w-fit text-p3 text-[.55rem] font-[700] tracking-[1px] uppercase'>{t(`category.${item.category}`)}</span>
                            </strong>
                            <p className='mt-2 text-p3 text-[.8rem] font-[500]'>{item.description}</p>
                        </li>
                    ))}
            </ul>
            {visibleItems < setupItems.length && (
                <div className="relative w-full flex items-center justify-center">
                    <button onClick={showMoreItems}
                        className='w-fit py-[.8rem] pr-[2rem] pl-[1.5rem] text-[.9rem] font-[500] text-p rounded-full border-none bg-bg2 flex items-center gap-2 cursor-pointer transition-all hover:bg-bg2h'><IoIosArrowDown />{t('showMore')}</button>
                </div>
            )}
        </MotionDiv>
    );
}
