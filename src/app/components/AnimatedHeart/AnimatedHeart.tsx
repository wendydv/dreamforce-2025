import styles from "./AnimatedHeart.module.scss";

export default function AnimatedHeart({
  width,
  height,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`${styles.wrapper} + " " + ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width}
        height={height}
        fill="none"
      >
        <circle cx="256" cy="256" r="200" stroke="black" strokeWidth="16" />
        <g transform="translate(0, -15)">
          <path
            d="M256 360C256 360 176 316 176 260C176 226.863 214.333 200 256 240C297.667 200 336 226.863 336 260C336 316 256 360 256 360Z"
            stroke="black"
            strokeWidth="16"
            fill="none"
            className={styles.heart}
          />
        </g>
      </svg>
    </div>
  );
}
