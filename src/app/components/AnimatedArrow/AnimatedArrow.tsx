import styles from "./AnimatedArrow.module.scss";

export default function AnimatedArrow({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      className={styles.arrowIcon}
      width={width || "100"}
      height={height || "100"}
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.circleContainer}>
        <ellipse
          className={styles.circle}
          cx="100"
          cy="60"
          rx="50"
          ry="50"
          fill="none"
          stroke="#000"
          strokeWidth="5"
        />
      </g>
      <polyline
        className={styles.arrow}
        points="90,40 110,60 90,80"
        fill="none"
        stroke="#000"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
