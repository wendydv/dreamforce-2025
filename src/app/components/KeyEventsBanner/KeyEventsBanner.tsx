import Headline from "../Headline/headline";
import styles from "./KeyEventsBanner.module.scss";
import Image from "next/image";

interface KeyEventsBannerProps {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export type { KeyEventsBannerProps };

export default function KeyEventsBanner({
  title,
  image,
}: KeyEventsBannerProps) {
  return (
    <div className={styles.keyEvents__banner}>
      <div className={styles.keyEvents__banner__header}>
        <Headline level={2} className={styles.keyEvents__banner__title}>
          {title}
        </Headline>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        unoptimized
        className={styles.keyEvents__banner__image}
      />
    </div>
  );
}
