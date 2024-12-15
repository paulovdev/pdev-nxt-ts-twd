"use client"

import { useState, useEffect } from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { useLocale } from "next-intl"
import ThemeChange from './themeChange';
import LangChange from './langChange';

export default function TopNav() {
    const locale = useLocale()
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${period}`;
    };

    return (
        <div className='relative max-w-[500px] w-full mt-[10vh] mb-0 mx-auto p-[15px] flex items-center justify-start flex-col 
        max-tablet:mt-[3vh]'>
            <div className="relative w-full mb-12">
                <ul className='p-2 bg-bg2 rounded-full flex items-center justify-between gap-4 select-none'>
                    <li className='flex items-center gap-4'>
                        <div className="w-[40px] h-[40px] p-1 rounded-full border border-solid border-border flex items-center justify-center">
                            <GoClockFill className='text-[18px] text-p' />
                        </div>
                        <p className='text-p text-[.9rem] font-[500] tracking-[-.2px] break-keep whitespace-nowrap
                                      '>{formatTime(time)}</p>
                    </li>

                    <li className='flex items-center gap-4'>
                        <ThemeChange />
                        <LangChange defaultValue={locale} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
