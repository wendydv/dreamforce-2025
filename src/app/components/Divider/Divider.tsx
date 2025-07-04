import styles from "./Divider.module.scss";

export default function Divider({ border = 2 }: { border?: number }) {
  return (
    <span
      className={styles.divider}
      style={{ borderBottomWidth: `${border}px` }}
    >
      &emsp;
    </span>
  );
}
