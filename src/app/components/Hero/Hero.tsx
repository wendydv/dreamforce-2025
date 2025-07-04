import AnimatedLocation from "../AnimatedLocation/AnimatedLocation";
import Headline from "../Headline/headline";
import VectorBlock from "../VectorBlock/VectorBlock";
import styles from "./Hero.module.scss";
import Image from "next/image";

const textHighlightStyle = {
  backgroundColor: "var(--color-primary)",
  fontWeight: "bold",
};
type HeroProps = {
  title: {
    background: {
      src?: string | undefined;
      alt?: string | undefined;
      width?: number | undefined;
      height?: number | undefined;
    };
  };
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  subtitle: {
    background: {
      src?: string | undefined;
      alt?: string | undefined;
      width?: number | undefined;
      height?: number | undefined;
    };
  };
  details: {
    text: string;
  };
};

export default function Hero({
  title,
  subtitle,
  heroImage,
  details,
}: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content__block}>
          <VectorBlock
            image={title.background}
            className={styles.hero__vector_heading}
          >
            <Headline level={1} className={styles.hero__headline}>
              Level Up Your
              <br />
              <span style={textHighlightStyle}>Dreamforce</span>
              <br />
              Experience: Join Us in the Playroom
            </Headline>
          </VectorBlock>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            loading="lazy"
            unoptimized
            className={styles.hero__image}
          />
        </div>
        <div
          className={`${styles.hero__content__block} ${styles.hero__content__block__align_bottom}`}
        >
          <div className={styles.hero__subtitle}>
            <VectorBlock image={subtitle.background}>
              <p className={styles.hero__text}>
                Step inside&nbsp;
                <span style={textHighlightStyle}>Gerent’s Playroom</span>
                &nbsp;at&nbsp;
                <span style={textHighlightStyle}>
                  Hotel Zetta in San Francisco
                </span>
                &nbsp;for your ultimate Dreamforce experience from&nbsp;
                <span style={textHighlightStyle}>October 14-15</span>.
              </p>
            </VectorBlock>
          </div>
          <div className={styles.hero__location}>
            <AnimatedLocation />
            <p className={styles.hero__location__text}>{details.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
