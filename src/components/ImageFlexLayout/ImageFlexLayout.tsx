import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import placeholder from '../../../public/assets/placeholder.jpg';
import cx from 'classnames';
import styles from './ImageFlexLayout.module.scss';

interface IImage {
    id: number;
    url: string;
    title?: string;
    //TODO: ad portrait orientation to JSON file and remove jumbotronUrl , image.jumbtronUrl
    // portrait?: boolean;
    jumbotronUrl?: string;
}

const ImageFlexLayout = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const response = await axios.get(
                'https://k2nstudio-api.herokuapp.com/items/'
            );
            setImages(response.data);
        };

        getImages();
    }, []);

    return (
        <div className={styles.flex}>
            {images.map((image: IImage) => {
                return (
                    //!image.jumbotronUrl temporary validation, check align-items:baseline when original images will be added
                    <div key={image.id} className={cx(styles.imageContainer, { [styles.portrait]: !image.jumbotronUrl })}>
                        <h4>{image.title}</h4>
                        <Image
                            src={image.url}
                            alt={`image ${image.id}`}
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
