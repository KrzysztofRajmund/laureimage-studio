import Image, { StaticImageData } from 'next/image';
import styles from './SectionImageWithContent.module.scss';

type ImageDesc = {
    desc1?: string;
    desc2?: string;
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
            <div className={styles.image}>
                <Image
                    priority
                    src={image}
                    alt={imageDesc?.desc1}
                    placeholder='blur'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </section>
    );
};

export default SectionImageWithContent;
