"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MotionSection } from '@/components/motion';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';
import { GoLinkExternal } from "react-icons/go";


export default function Works() {
    const t = useTranslations('Works');
    const [searchTerm, setSearchTerm] = useState('');

    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: t('items.0.title'),
            description: t('items.0.description'),
            src: "https://quimplo.online",
            width: 250,
            height: 300
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: t('items.1.title'),
            description: t('items.1.description'),
            src: "https://post-and-publish.netlify.app/",
            width: 250,
            height: 300
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: t('items.2.title'),
            description: t('items.2.description'),
            src: "https://paulovdev.framer.website/",
            width: 250,
            height: 300
        },
        {
            id: 4,
            imgSrc: "/works/work-4.webp",
            title: t('items.3.title'),
            description: t('items.3.description'),
            src: "https://shopease.example.com",
            width: 250,
            height: 300
        },
        {
            id: 5,
            imgSrc: "/works/work-5.webp",
            title: t('items.4.title'),
            description: t('items.4.description'),
            src: "https://devportfolio.example.com",
            width: 250,
            height: 300
        },
        {
            id: 6,
            imgSrc: "/works/work-3.webp",
            title: t('items.5.title'),
            description: t('items.5.description'),
            src: "https://creativehub.example.com",
            width: 250,
            height: 300
        },
        {
            id: 7,
            imgSrc: "/works/work-3.webp",
            title: t('items.6.title'),
            description: t('items.6.description'),
            src: "https://eduplatform.example.com",
            width: 250,
            height: 300
        },
        {
            id: 8,
            imgSrc: "/works/work-3.webp",
            title: t('items.7.title'),
            description: t('items.7.description'),
            src: "https://healthcarepro.example.com",
            width: 250,
            height: 300
        },
        {
            id: 9,
            imgSrc: "/works/work-3.webp",
            title: t('items.8.title'),
            description: t('items.8.description'),
            src: "https://travelbuddy.example.com",
            width: 250,
            height: 300
        },
        {
            id: 10,
            imgSrc: "/works/work-3.webp",
            title: t('items.9.title'),
            description: t('items.9.description'),
            src: "https://artgallery.example.com",
            width: 250,
            height: 300
        }
    ];

    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        work.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <MotionSection className='relative max-w-[500px] my-0 mx-auto pt-[15px] pr-[15px] pb-[200px] pl-[15px]'
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('title')}</h1>
            <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('description')}</p>

            <div className="sticky w-full top-0 py-4 px-0 bg-bg flex justify-between gap-2 z-40">
                <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='w-full p-4 text-p text-[.9rem] font-[600] bg-bg2 border border-transparent rounded-full outline-none transition-all
                               hover:border-border focus-visible:border-border focus:border-border placeholder:font-[600]'
                />
                <button onClick={clearSearch}
                    className='w-[50px] h-[50px] p-2 text-p rounded-full bg-bg2 flex items-center justify-center cursor-pointer transition-all
                    hover:bg-bg3 hover:text-p2'>
                    <CgClose className='text-[22px]' />
                </button>
            </div>

            <div className="w-full flex flex-col gap-8">
                {filteredWorks.length > 0 ? (
                    filteredWorks.map(work => (
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
                    ))
                ) : (
                    <p className='text-p'>{t('noWorksFound')}</p>
                )}
            </div>
        </MotionSection>
    );
}
