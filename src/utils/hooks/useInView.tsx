import { MutableRefObject, useEffect, useState } from 'react';

const useInView = (
    ref: MutableRefObject<HTMLDivElement | null>,
    offset = 0
) => {
    const [justScrolledBy, setJustScrolledBy] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (ref && ref.current) {
                const { nodeName } = ref.current;
                const { top, bottom } = ref.current.getBoundingClientRect();
                const isNav = nodeName === 'NAV';

                //For nav just scrolledBy logic
                if ((isNav && bottom < window.scrollY) || bottom < 0) {
                    setJustScrolledBy(true);
                } else {
                    setJustScrolledBy(false);
                }

                //DEPRECIATED: For inView logic use useIntersection hook instead
                // if (
                //     top + offset <=
                //     (window.innerHeight || document.documentElement.clientHeight)
                // )
                //     setIsInView(true);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [ref, offset]);

    return { justScrolledBy, isInView };
};

export default useInView;
