import Link from "next/link";
import Headline from "../Headline/headline";
import styles from "./InsightExchange.module.scss";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import Divider from "../Divider/Divider";
import AnimatedHeart from "../AnimatedHeart/AnimatedHeart";

interface InsightExchangeProps {
  title: string;
  text_1: string;
  text_2: string;
  cta: string;
}

export default function InsightExchange({
  title,
  text_1,
  text_2,
  cta,
}: InsightExchangeProps) {
  return (
    <section id="insight-exchange">
      <div className={styles.insight__container}>
        <div className={styles.insight__header}>
          <div className={styles.insight__header__content}>
            <Headline level={2} className={styles.insight__header__title}>
              {title}
            </Headline>
            <Divider />
            <p className={styles.insight__header__description}>{text_1}</p>
            <br />
            <p className={styles.insight__header__description}>{text_2}</p>
            <Divider />
            <div className={styles.insight__header__action}>
              <p className={styles.insight__header__action__text}>{cta}</p>
              <Link href="#register" title="Register" aria-label="Register">
                <AnimatedArrow
                  width={50}
                  height={50}
                  color="#FFF"
                ></AnimatedArrow>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.insight}>
          <AnimatedHeart
            width={80}
            height={80}
            className={styles.insight__icon}
          ></AnimatedHeart>
        </div>
      </div>
    </section>
  );
}
