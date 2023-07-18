import Image from 'next/image';
import { CSSProperties } from 'react';
import placeholder from '../../../public/assets/placeholder.jpg';
import styles from './ImageGridLayout.module.scss';
import { ImageType } from '../../utils/types';
export interface ImageGridLayoutProps {
    images: ImageType[];
    style?: CSSProperties;
    title?: string;
}

const ImageGridLayout = ({ images, title, style }: ImageGridLayoutProps) => {
    return (
        <div className={styles.grid} style={{ ...style }}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {images.slice(0, 12).map((image: ImageType) => {
                return (
                    <div key={image.id} className={styles.imageContainer}>
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={placeholder.src}
                            src={image.url}
                            alt={`image ${image.id}`}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageGridLayout;
