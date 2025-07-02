import Image from "next/image";
import styles from "./SocialMedia.module.scss";
import Link from "next/link";

export default function SocialMedia({
  link,
  icon,
  name,
  width = 25,
  height = 25,
}: SocialMediaProps) {
  return (
    <Link
      className={styles.socialMedia__link}
      href={link}
      title={name}
      target="_blank"
    >
      <Image
        src={icon}
        alt={name}
        width={width}
        height={height}
        loading="eager"
        unoptimized
      />
    </Link>
  );
}

type SocialMediaProps = {
  link: string;
  icon: string;
  name: string;
  width?: number;
  height?: number;
};

export type { SocialMediaProps };
