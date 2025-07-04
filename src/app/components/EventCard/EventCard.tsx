import styles from "./EventCard.module.scss";
import Image from "next/image";
import Headline from "../Headline/headline";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import AnimatedHeart from "../AnimatedHeart/AnimatedHeart";
import Divider from "../Divider/Divider";
import Link from "next/link";
import AnimatedAsterisk from "../AnimatedAsterisk/AnimatedAsterisk";

interface EventCardProps {
  variant: string | "green" | "blue" | "purple";
  icon: string;
  title: string;
  text_1: string;
  text_2: string;
  cta: string;
}

export type { EventCardProps };

const textHighlightStyle = {
  backgroundColor: "var(--color-primary)",
  fontWeight: "bold",
};

export default function EventCard({
  variant,
  icon,
  title,
  text_1,
  text_2,
  cta,
}: EventCardProps) {
  return (
    <div className={styles.eventCard}>
      {icon === "heart" && (
        <AnimatedHeart
          width={80}
          height={80}
          className={styles.eventCard__icon}
        ></AnimatedHeart>
      )}
      {icon === "asterisk" && (
        <AnimatedAsterisk
          width={90}
          height={90}
          className={styles.eventCard__icon}
        ></AnimatedAsterisk>
      )}
      {icon === "bell" && (
        <AnimatedHeart
          width={80}
          height={80}
          className={styles.eventCard__icon}
        ></AnimatedHeart>
      )}
      <Image
        src={`/vectors/key-event-${variant}-vector.svg`}
        alt="Green vector"
        width={398}
        height={486}
        loading="lazy"
        unoptimized
        className={styles.eventCard__bg}
      />
      <div className={styles.eventCard__content}>
        <Headline level={3} className={styles.eventCard__content__title}>
          {title}
        </Headline>
        <Divider />
        {variant === "purple" && (
          <p className={styles.eventCard__content__description}>
            After a long day, what better way to wrap things up than with a
            Happy Hour? On&nbsp;
            <span style={textHighlightStyle}>October 14</span>
            &nbsp;between&nbsp;
            <span style={textHighlightStyle}>5-10PM</span>, come by and enjoy
            some great food, refreshing drinks, and chill vibes. This is your
            chance to have some fun, unwind with your peers, and make
            connections that last beyondthe conference.
          </p>
        )}
        {variant !== "purple" && (
          <p className={styles.eventCard__content__description}>{text_1}</p>
        )}
        <br></br>
        <p className={styles.eventCard__content__description}>{text_2}</p>
        <Divider />
        <div className={styles.eventCard__content__action}>
          <p className={styles.eventCard__content__action__text}>{cta}</p>
          <Link href="#register" title="Register" aria-label="Register">
            <AnimatedArrow width={50} height={50}></AnimatedArrow>
          </Link>
        </div>
      </div>
    </div>
  );
}
