import React from 'react';
import Image from 'next/image';
import placeholder from '../../../public/assets/placeholder.jpg';
import styles from './SectionListPortrait.module.scss';
import { ImageType } from '../../screens/HomeScreen/HomeScreen';

export interface SectionListPortraitProps {
    images: ImageType[];
    title?: string;
    withImageTitle?: boolean;
}

const SectionListPortrait = ({
    images,
    title,
    withImageTitle = false,
}: SectionListPortraitProps) => {
    return (
        <div className={styles.container}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.flex}>
                {images.slice(0, 3).map((image: ImageType) => {
                    return (
                        <div
                            key={image.id}
                            className={styles.imageContainer}
                        >
                            {withImageTitle && <h4>{image.title}</h4>}
                            <Image
                                src={image.url}
                                alt={`image ${image.id}`}
                                placeholder='blur'
                                blurDataURL={placeholder.src}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionListPortrait;
