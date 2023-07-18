import Image from "next/image";
import cx from "classnames";
import styles from "./ImageFlexLayout.module.scss";
import { ImageType } from "../../utils/types";

export interface ImageFlexLayoutProps {
  images: ImageType[];
  withImageTitle?: boolean;
  portrait?: boolean;
}

const ImageFlexLayout = ({
  images,
  withImageTitle = false,
  portrait,
}: ImageFlexLayoutProps) => {
  return (
    <div className={styles.flex}>
      {images.map((image: ImageType) => {
        return (
          //!image.jumbotronUrl temporary validation, check align-items:baseline when original images will be added
          <div
            key={image.id}
            className={cx(styles.imageContainer, {
              [styles.portrait]: portrait,
            })}
          >
            {withImageTitle && <h4>{image.title}</h4>}
            <Image
              src={image.url}
              alt={`image ${image.id}`}
              placeholder="blur"
              blurDataURL="/static/assets/placeholder.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageFlexLayout;
