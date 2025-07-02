import IndustryCard from "../IndustryCard/IndustryCard";
import Image from "next/image";
import styles from "./Industries.module.scss";

export default function Industries({ industries }: IndustriesProps) {
  return (
    <div className={styles.industries}>
      <Image
        src="/grey-bg-vector.svg"
        alt="Grey background vector"
        width={838}
        height={646}
        loading="lazy"
        unoptimized
        className={styles.industries__image}
      />
      <div className={styles.industries__grid}>
        {industries.map(industry => (
          <IndustryCard
            key={industry.title}
            title={industry.title}
            link={industry.link}
            image={{
              src: industry.image.src,
              alt: industry.image.alt,
              width: industry.image.width,
              height: industry.image.height,
            }}
          />
        ))}
      </div>
    </div>
  );
}

type Industry = {
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

type IndustriesProps = {
  industries: Industry[];
};
export type { Industry, IndustriesProps };
