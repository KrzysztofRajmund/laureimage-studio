import Image from 'next/image';
import placeholder from '../../../public/assets/placeholder.jpg';
import cx from 'classnames';
import styles from './ImageFlexLayout.module.scss';
import { ImageType } from '../../screens/HomeScreen/HomeScreen';

export interface ImageFlexLayoutProps {
    images: ImageType[];
    withTitle?: boolean
    portrait?: boolean
}

const ImageFlexLayout = ({ images, withTitle = false, portrait }: ImageFlexLayoutProps) => {

    return (
        <div className={styles.flex}>
            {images.map((image: ImageType) => {
                return (
                    //!image.jumbotronUrl temporary validation, check align-items:baseline when original images will be added
                    <div key={image.id} className={cx(styles.imageContainer, { [styles.portrait]: portrait })}>
                        {withTitle && <h4>{image.title}</h4>}
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

export default ImageFlexLayout;
