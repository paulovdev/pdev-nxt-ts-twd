'use client';

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

import { MdHomeFilled, MdWork } from "react-icons/md";
import { IoJournal } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const navLinks = [
    { id: "home", icon: <MdHomeFilled />, href: "/" },
    { id: "works", icon: <MdWork />, href: "/works" },
    { id: "blogs", icon: <IoJournal />, href: "/blog" },
    { id: "contact", icon: <FaEnvelope />, href: "/contact" }
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <header className="fixed w-full bottom-[15px] p-4 flex items-center justify-center pointer-events-none z-50">
            <nav className="relative w-fit my-0 mx-auto p-4 bg-bgn backdrop-blur-lg rounded-full overflow-hidden pointer-events-auto">
                <ul className="flex items-center justify-between gap-4
                               max-mobile:gap-2">
                    {navLinks.map((link, index) => {
                        // Remove o prefixo de idioma da URL
                        const pathWithoutLang = pathname.replace(/^\/(en|pt-br)/, '') || '/';
                        // Verifica se o caminho extraído corresponde ao href do link
                        const isActive = pathWithoutLang === link.href || pathWithoutLang.startsWith(link.href + '/');
                        return (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={`w-fit py-3 px-4 font-[500] rounded-full border-none bg-bg2 text-p flex items-center justify-center gap-4 cursor-pointer transition-all 
                                                max-mobile:gap-2 
                                                ${isActive ? "bg-bg3 text-p2 py-3 px-6" : ""}`}
                                >
                                    <span className="text-[22px]">{link.icon}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
