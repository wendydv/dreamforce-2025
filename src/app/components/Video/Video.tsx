import AnimatedRecording from "../AnimatedRecording/AnimatedRecording";
import styles from "./Video.module.scss";

export default function Video() {
  return (
    <section id="video" className={styles.video}>
      <div className={styles.video__container}>
        <div className={styles.video__block}>
          <video className={styles.video__player} autoPlay controls loop muted>
            <source src="dreamforce-2023.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="round">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <AnimatedRecording className={styles.video__icon} />
      </div>
    </section>
  );
}
