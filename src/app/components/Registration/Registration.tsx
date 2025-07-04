import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import Headline from "../Headline/headline";
import styles from "./Registration.module.scss";

// This component is used to display the registration section of the page.
// It includes a title and an animated arrow to draw attention to the registration area.
export default function Registration({ title }: { title?: string }) {
  return (
    <section id="registration" className={styles.registration}>
      <div className={styles.registration__container}>
        <div className={styles.registration__header}>
          <Headline level={2} className={styles.registration__header__title}>
            {title}
          </Headline>
          <AnimatedArrow width={95} height={95}></AnimatedArrow>
        </div>
      </div>
    </section>
  );
}
