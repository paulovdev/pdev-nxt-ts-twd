"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis options={{ duration: 1 }} root>
            {children}
        </ReactLenis>
    );
};

export default Lenis;