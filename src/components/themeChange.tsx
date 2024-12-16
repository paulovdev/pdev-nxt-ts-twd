"use client";

import { useTheme } from "@/context/ThemeContext";
import { IoSunnySharp, IoMoon } from "react-icons/io5";

export default function ThemeChange() {
    const { theme, changeTheme } = useTheme();

    const handleToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        changeTheme(newTheme);
    };

    return (
        <div onClick={handleToggle} className="w-[40px] h-[40px] p-1 rounded-full border border-solid border-border flex items-center justify-center cursor-pointer
        max-mobile:w-[30px] max-mobile:h-[30px]">
            {theme === "dark" ? <IoMoon className='text-p' /> : <IoSunnySharp className='text-p' />}
        </div>
    );
};
