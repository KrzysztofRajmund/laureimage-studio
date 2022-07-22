import { useEffect, useState } from 'react';

const useScroll = (ref: React.MutableRefObject<null>) => {
    const [justScrolled, setJustScrolled] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (ref && ref.current) {
                const { clientTop, clientHeight, scrollTop, scrollHeight } =
                    ref.current;
                //TODO: PERHAPS THIS FUNC WILL BE USEFUL TO COUNT ELEMENT IN VIEW
                // console.log("scroll:", clientTop, clientHeight, scrollTop, scrollHeight, window.scrollY)
                if (window.scrollY > (clientHeight || scrollHeight))
                    setJustScrolled(true);
                if (window.scrollY < (clientHeight || scrollHeight))
                    setJustScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { justScrolled, isInView };
};

export default useScroll;
