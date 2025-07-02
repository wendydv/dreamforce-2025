import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import Headline from "../Headline/headline";
import styles from "./HeaderIcon.module.scss";

export default function HeaderIcon({
  title,
  color,
  className = "",
}: {
  title: string;
  color: "primary" | "secondary" | "quaternary" | "quinary" | string;
  className?: string;
}) {
  const classBlock = `${styles.headerIcon__block} ${styles[color]}`;
  return (
    <div className={`${styles.headerIcon} + " " + ${className}`}>
      <div className={classBlock}>
        <Headline level={3}>{title}</Headline>
      </div>
      <AnimatedArrow width={120} height={120}></AnimatedArrow>
    </div>
  );
}
