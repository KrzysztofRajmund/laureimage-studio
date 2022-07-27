import { MutableRefObject, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useIntersection, useInView } from '../../utils/hooks';
import cx from 'classnames';
import styles from './SectionImageWithContent.module.scss';

type ImageDesc = {
    desc?: string;
    actionButton?: JSX.Element | string;
};

interface ISectionImageWithContent {
    image: string | StaticImageData;
    title: string;
    subtitle?: string;
    imageDesc?: ImageDesc;
}
const SectionImageWithContent = ({
    image,
    title,
    subtitle,
    imageDesc,
}: ISectionImageWithContent) => {
    const sectionRef = useRef(null);
    const subtitleRef = useRef(null);
    const inViewSection = useIntersection(sectionRef, '-400px');
    const inViewSubtitles = useIntersection(subtitleRef, '-150px');
    const el = sectionRef.current
    /////////////
    // console.log("inViewSection:", inViewSection)
    // console.log("inViewSubtitles:", inViewSubtitles)
    /////////////
    return (
        <section className={cx(styles.container, { [styles.animate]: inViewSection })} ref={sectionRef}>
            <h2>{title}</h2>
            <h4 className={cx({ [styles.animate]: inViewSubtitles })} ref={subtitleRef}>{subtitle}</h4>
            <div className={styles.image}>
                <Image
                    priority
                    src={image}
                    alt={imageDesc?.desc}
                    placeholder='blur'
                    layout='fill'
                    objectFit='cover'
                />
                <div className={styles.imageContent}>
                    <p>{imageDesc?.desc}</p><p>{imageDesc?.actionButton}</p>
                </div>
            </div>
        </section>
    );
};

export default SectionImageWithContent;
