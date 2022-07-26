import Image, { StaticImageData } from 'next/image';
import styles from './SectionHeaderImage.module.scss';

interface ISectionHeaderImage {
    image: string | StaticImageData;
    title?: string;
    icon: JSX.Element;
}
const SectionHeaderImage = ({ image, title, icon }: ISectionHeaderImage) => {
    return (
        <section className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.icon}>
                {icon}
            </div>
            <Image priority src={image} alt='fotografia ślubna' placeholder='blur' layout='fill' objectFit='cover' />
        </section>
    )
}

export default SectionHeaderImage