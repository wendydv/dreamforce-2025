import Industries from "../Industries/Industries";
import { Industry } from "../Industries/Industries";
import styles from "./Splash.module.scss";
import SplashLeft from "../SplashLeft/SplashLeft";

interface Detail {
  icon: string;
  src: string;
  text: string;
}

interface SplashContent {
  details: Detail[];
  subtitle: string;
  industries: Industry[];
}

interface SplashProps {
  content: SplashContent;
}

export default function Splash({ content }: SplashProps) {
  return (
    <section id="splash" className={styles.splash}>
      <SplashLeft content={content} />
      <Industries industries={content.industries} />
    </section>
  );
}
