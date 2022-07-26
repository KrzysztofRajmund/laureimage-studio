import Image, { StaticImageData } from 'next/image';
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
    return (
        <section className={styles.container}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
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
