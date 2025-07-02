import Logos from "../Logos/Logos";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <Logos />
    </header>
  );
}
