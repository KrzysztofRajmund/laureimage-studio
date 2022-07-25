import { useEffect } from 'react';
import { fontSizeHelper, isBrowser } from '../utils/helpers';

const Root = ({ children }: any) => {
    useEffect(() => {
        const handleFontResize = () => {
            document.documentElement.style.fontSize = `${fontSizeHelper()}px`;
        };

        if (isBrowser()) {
            window.addEventListener('resize', handleFontResize);
        }

        return () => window.removeEventListener('resize', handleFontResize);
    });
    return <>{children}</>;
};

export default Root;
