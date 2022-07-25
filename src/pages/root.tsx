import { useEffect } from 'react';
import { fontSizeHelper, isBrowser } from '../utils/helpers';

const Root = ({ children }: any) => {
    const docSize = typeof document !== 'undefined' && document.documentElement.style.fontSize;

    const handleFontResize = () => {
        document.documentElement.style.fontSize = `${fontSizeHelper()}px`;
    };

    useEffect(() => {
        if (!document.documentElement.style.fontSize) {
            handleFontResize();
        }

        if (isBrowser()) {
            window.addEventListener('resize', handleFontResize);
        }

        return () => window.removeEventListener('resize', handleFontResize);
    }, [docSize]);

    return (
        <>
            {children}
        </>
    );
};

export default Root;
