import { useRouter } from 'next/router';
import SocialMedia from '../../SocialMedia';
import styles from './FooterMiddle.module.scss';

const FooterMiddle = () => {
    const {pathname} = useRouter()
    const isAboutScreen = pathname === '/onas'

    return (
        <div className={styles.container}>
            <h4>Laureimage</h4>
            <SocialMedia />
            {!isAboutScreen && <p>
                Na zdjęciach staram się zawsze zatrzymać dla Państwa chwile i emocje z
                nimi związane. Jestem tam dla Was tworząc zdjęcia ułożone w historie .
                Staram się uchwycić ludzi takimi, jacy są. Nie poproszę Was o uśmiech,
                jestem fanem emocji, ale tych autentycznych, więc wolę poczekać, aż
                uśmiech przyjdzie sam. Pracując jako fotograf ślubny zawsze dokładam
                wszelkich starań, aby zdjęcia były ciekawe i niebanalne, zachowując przy
                edycji naturalne piękne kolory. Jeśli spodobały się Państwu zdjęcia z
                mojej strony zapraszam do kontaktu w celu poznania pełnej oferty.
            </p>}
        </div>
    );
};

export default FooterMiddle;
