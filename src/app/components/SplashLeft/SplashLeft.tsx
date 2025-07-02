import { Industry } from "../Industries/Industries";
import Headline from "../Headline/headline";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import DetailsCard from "../DetailsCard/DetailsCard";
import styles from "./SplashLeft.module.scss";

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

export default function SplashLeft({ content }: SplashProps) {
  return (
    <div className={styles.splashLeft}>
      <Headline level={1} className={styles.splashLeft__headline}>
        Join us at <br />
        <span style={{ color: "var(--color-tertiary)" }}>Dreamforce</span>
      </Headline>
      {content.details.map((detail, index) => (
        <DetailsCard
          key={index}
          icon={detail.icon}
          src={detail.src}
          text={detail.text}
          width={30}
          height={30}
        />
      ))}
      <HeaderIcon
        title={content.subtitle}
        color="quaternary"
        className={styles.splashLeft__banner_bottom}
      ></HeaderIcon>
    </div>
  );
}
