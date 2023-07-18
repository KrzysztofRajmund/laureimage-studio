import React from "react";
import Image from "next/image";
import placeholder from "../../../public/assets/placeholder.jpg";
import styles from "./SectionListPortrait.module.scss";
import { ImageTypeJSON } from "../../utils/types";

export interface SectionListPortraitProps {
  images: ImageTypeJSON[];
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
        {images.slice(1, 4).map((image: ImageTypeJSON) => {
          return (
            <div key={image.id} className={styles.content}>
              <div className={styles.imageContainer}>
                <Image
                  src={`/assets/portfolio/${image.url}`}
                  alt={`image ${image.id}`}
                  placeholder="blur"
                  blurDataURL={placeholder.src}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {withImageTitle && <p>image.title</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionListPortrait;
