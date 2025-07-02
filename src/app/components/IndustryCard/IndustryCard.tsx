import Image from "next/image";
import Link from "next/link";
import styles from "./IndustryCard.module.scss";

export default function IndustryCard({
  title,
  link,
  image,
}: IndustryCardProps) {
  return (
    <div className={styles.industryCard}>
      <div className={styles.industryCard__header}>
        <p className={styles.industryCard__title}>{title}</p>
      </div>
      <Link
        href={link.href}
        target={link.target || "_self"}
        title={link.title || title}
        aria-label={link.title || title}
        rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
        className={styles.industryCard__link}
      >
        <div className={styles.industryCard__container_image}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            unoptimized
            className={styles.industryCard__image}
          />
        </div>
      </Link>
    </div>
  );
}

type IndustryCardProps = {
  title: string;
  link: {
    href: string;
    title?: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
