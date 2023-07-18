import { FC, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import placeholder from '../../../public/static/assets/placeholder.jpg';
import cx from "classnames";
import styles from "./SectionDescription.module.scss";

export type SectionDescription = {
  description: string;
  title?: string;
  image?: string | StaticImageData;
  imageHeight?: number;
  list?: string[];
  reversedContent?: boolean;
};

export const SectionDescription: FC<SectionDescription> = ({
  description,
  title,
  image,
  imageHeight,
  list,
  reversedContent,
}) => {
  const isShortDescription = description.length < 80;

  const renderContent = useCallback(() => {
    //texts content
    const textContent = (
      <div
        className={cx(styles.textContent, {
          [styles.reversed]: reversedContent,
        })}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <p
          className={cx(styles.description, {
            [styles.short]: isShortDescription,
          })}
        >
          {description}
        </p>
        {!!list?.length && (
          <ul>
            {list.map((bulletpoint) => (
              <li key={bulletpoint}>{bulletpoint}</li>
            ))}
          </ul>
        )}
      </div>
    );
    //image content
    const imageContent = !!image && (
      <div className={styles.image} style={{ height: imageHeight }}>
        <Image
          priority
          src={`/static/assets/${image}`}
          alt="oferta"
          placeholder="blur"
          blurDataURL={placeholder.src}
          layout="fill"
          objectFit="cover"
        />
      </div>
    );

    const contentElements = [
      { content: textContent },
      { content: imageContent },
    ];

    const orderedElements =
      reversedContent && image
        ? contentElements.reverse().map((element) => element.content)
        : contentElements.map((element) => element.content);

    return orderedElements;
  }, [description, image, imageHeight, list, reversedContent, title]);

  return <div className={styles.container}>{renderContent()}</div>;
};
