import styles from "./VectorBlock.module.scss";
import React from "react";
import Image from "next/image";

export default function VectorBlock({
  image,
  children,
  className = "",
}: {
  image: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.vector_block} ${className}`}>
      <Image
        src={image.src || "/vectors/green-bg-vector.svg"}
        alt={image.alt || "green background vector"}
        width={image.width || 700}
        height={image.height || 500}
        loading="lazy"
        unoptimized
        className={styles.vector_block__image}
      />
      <div className={`${styles.vector_block__content} ${className}`}>
        {children}
      </div>
    </div>
  );
}
