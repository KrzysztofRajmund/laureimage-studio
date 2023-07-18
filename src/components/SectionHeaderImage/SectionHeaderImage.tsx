import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useIntersection } from "../../utils/hooks";
import cx from "classnames";
import styles from "./SectionHeaderImage.module.scss";

interface ISectionHeaderImage {
  image: string | StaticImageData;
  logo?: JSX.Element;
  icon?: JSX.Element;
  title?: string;
  containerHeight?: number | string;
}
const SectionHeaderImage = ({
  image,
  title,
  icon,
  logo,
  containerHeight,
}: ISectionHeaderImage) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isContainerInView = useIntersection(containerRef, "0px", 100);
  const isTitleInView = useIntersection(titleRef, "0px", 1000);
  return (
    <section
      className={cx(styles.container, { [styles.animate]: isContainerInView })}
      ref={containerRef}
      style={{ height: containerHeight }}
    >
      <h1 className={cx({ [styles.animate]: isTitleInView })} ref={titleRef}>
        {title}
      </h1>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.logo}>{logo}</div>
      <Image
        priority
        src={image}
        alt="fotografia ślubna"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};

export default SectionHeaderImage;
