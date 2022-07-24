import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './ImageGridLayout.module.scss';


interface IImage {
    id: number;
    url: string;
}

const ImageGridLayout = () => {
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
        <div className={styles.container}>
            <h1 className={styles.title}>Portret modowy &amp; biznes</h1>
            {images.slice(0, 6).map((image: IImage) => {
                return (
                    <div key={image.id} className={styles.imageContainer}>
                        <Image
                            src={image.url}
                            alt={`image ${image.id}`}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                );
            })}
            <h1 className={styles.title}>Sesje portretowe &amp; wizerunkowe </h1>
            {images.slice(6, 13).map((image: IImage) => {
                return (
                    <div key={image.id} className={styles.imageContainer}>
                        <Image
                            src={image.url}
                            alt={`image ${image.id}`}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                );
            })}
            <h1 className={styles.title}> Zdjęcia promocyjne </h1>
            {images.slice(12, images.length + 1).map((image: IImage) => {
                return (
                    <div key={image.id} className={styles.imageContainer}>
                        <Image
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
