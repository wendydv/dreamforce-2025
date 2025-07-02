import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

// This component renders a logo image that can be wrapped in a link.
// It accepts props for the image source, alt text, dimensions, and an optional link.
export default function Logo({
  src,
  alt = "Logo",
  width = 50,
  height = 50,
  link,
  className = "",
}: LogoProps) {
  const imageClassName = [styles.logo__image, className]
    .filter(Boolean)
    .join(" ");

  const logoImage = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      unoptimized
      className={imageClassName}
    />
  );

  if (link?.href) {
    return (
      <Link
        href={link.href}
        title={link.title || alt}
        target={link.target || "_self"}
        className={styles.logo__link}
      >
        {logoImage}
      </Link>
    );
  }

  return logoImage;
}

type LogoLink = {
  href: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
};

type LogoProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  link?: LogoLink;
  className?: string;
};

export type { LogoProps };
