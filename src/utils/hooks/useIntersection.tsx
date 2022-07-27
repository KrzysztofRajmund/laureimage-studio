import { RefObject, useEffect, useState } from 'react';

//useIntersaction: better & cleaner way to check if element is in view (useInView.isInView deprecated!!!)
const useIntersection = (
    ref: RefObject<HTMLDivElement>,
    offset = '0px'
) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(entry.isIntersecting);
                observer.unobserve(el as HTMLDivElement);
            } else {
                setIsVisible(entry.isIntersecting);
            }
        }, { rootMargin: offset });

        el && observer.observe(el);
        return () => observer.unobserve(el as HTMLDivElement);
    }, [ref, offset]);

    return isVisible;
};

export default useIntersection;
