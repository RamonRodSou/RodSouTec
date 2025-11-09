import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

            if (/android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent)) {
                setIsMobile(true);
            } else {
                setIsMobile(window.innerWidth <= 768);
            }
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
};

export default useIsMobile;
