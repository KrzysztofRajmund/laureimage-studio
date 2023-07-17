import { RefObject, useEffect, useState } from 'react';

//useIntersaction: better & cleaner way to check if element is in view (useInView.isInView deprecated!!!)
export const useIntersection = (
    ref: RefObject<HTMLDivElement>,
    offset = '0px',
    delay = 0
) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current
        const options = {
            rootMargin: offset, delay
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(entry.isIntersecting);
                observer.unobserve(el as HTMLDivElement);
            } else {
                setIsVisible(entry.isIntersecting);
            }
        }, options);

        el && observer.observe(el);
        return () => observer.unobserve(el as HTMLDivElement);
    }, [ref, offset, delay]);

    return isVisible;
};
