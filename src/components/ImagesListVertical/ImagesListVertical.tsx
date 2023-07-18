import Image from 'next/image';
import placeholder from '../../../public/static/assets/placeholder.jpg';
import styles from './ImagesListVertical.module.scss';
import { ImageTypeJSON } from '../../utils/types';
import { FC } from 'react';

export interface ImagesListVerticalProps {
    images: ImageTypeJSON[];
}

export const ImagesListVertical: FC<ImagesListVerticalProps> = ({ images }) => {

    return (
        <div className={styles.container}>
            {images.map((image: ImageTypeJSON) => {
                return (
                    <div key={image.id} className={styles.image}>
                        <Image
                            src={`/static/assets/portfolio/${image.url}`}
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
