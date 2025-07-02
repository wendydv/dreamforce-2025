import Image from "next/image";
import styles from "./DetailsCard.module.scss";

export default function DetailsCard({
  icon,
  src,
  text,
  width,
  height,
}: DetailsCardProps) {
  return (
    <div className={styles.detailsCard}>
      <Image
        src={src}
        alt={`${icon} Icon`}
        width={width || 30}
        height={height || 30}
        loading="lazy"
        unoptimized
      />
      <p className={styles.detailsCard__detail}>{text}</p>
    </div>
  );
}

export interface DetailsCardProps {
  icon: string;
  src: string;
  text: string;
  width?: number;
  height?: number;
}
