"use client"
import { useParams } from 'next/navigation';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useState } from "react"
import { IoLanguage } from "react-icons/io5";

type Props = {
  defaultValue: string;
};

export default function LangChange({ defaultValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [themeToggle, setThemeToggle] = useState(false);

  const onSelectChange = (value: string) => {
    setSelectedValue(value);
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: value }
    );

  };

  return (
    <>
      <div className="w-[40px] h-[40px] p-1 rounded-full border border-solid border-border flex items-center justify-center cursor-pointer" onClick={() => setThemeToggle(!themeToggle)}>
        <IoLanguage className='text-p' />
      </div>

      <div className='hidden'>{selectedValue}</div>

      <div className={`absolute w-[100px] top-[65px] right-0 p-2 text-[.9rem] font-[500] rounded-xl bg-bg2 flex items-center flex-col gap-2 opacity-0 transition-all z-50 
        ${themeToggle ? "opacity-100" : ""}`}>
        {routing.locales.map(lang => (
          <div
            key={lang}
            onClick={() => onSelectChange(lang)}
            className="relative w-full py-[.5rem] px-[1.5rem] bg-bg2 rounded-xl cursor-pointer transition-all hover:bg-bg2h"
          >
            <span className='text-p'>{lang}</span>
          </div>
        ))}
      </div>
    </>
  );
}
