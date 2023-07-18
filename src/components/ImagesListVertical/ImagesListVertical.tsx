import Image from 'next/image';
import placeholder from '../../../public/assets/placeholder.jpg';
import styles from './ImagesListVertical.module.scss';
import { ImageType } from '../../utils/types';
import { FC } from 'react';

export interface ImagesListVerticalProps {
    images: ImageType[];
}

export const ImagesListVertical: FC<ImagesListVerticalProps> = ({ images }) => {

    return (
        <div className={styles.container}>
            {images.map((image: ImageType) => {
                return (
                    <div key={image.id} className={styles.image}>
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
        </div >
    );
};
