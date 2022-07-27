import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useIntersection } from '../../utils/hooks';
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
    const imageRef = useRef(null);
    const subtitleRef = useRef(null);
    const titleRef = useRef(null);
    const isImageInView = useIntersection(imageRef, '150px', 250);
    const isSubtitleInView = useIntersection(subtitleRef, '-100px', 350);
    const isTitleInView = useIntersection(titleRef);

    return (
        <section className={styles.container}>
            <h2 className={cx({ [styles.animate]: isTitleInView })} ref={titleRef}>{title}</h2>
            <h4 className={cx({ [styles.animate]: isSubtitleInView })} ref={subtitleRef}>{subtitle}</h4>
            <div className={cx(styles.image, { [styles.animate]: isImageInView })} ref={imageRef}>
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
