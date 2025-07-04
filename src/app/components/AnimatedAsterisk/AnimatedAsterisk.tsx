import styles from "./AnimatedAsterisk.module.scss";

export default function AnimatedAsterisk({
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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width}
        height={height}
        fill="none"
      >
        <circle cx="256" cy="256" r="200" stroke="black" strokeWidth="16" />
      <g id="asterisk" className={styles.asterisk}>
          <path
            strokeLinecap="round"
            transform="matrix(-0.18596, 0.360408, -0.360408, -0.18596, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.150488 -135.000011 C -0.150488 -135.000011 0.149826 135.003065 0.149826 135.003065 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
          <path
            strokeLinecap="round"
            transform="matrix(-0.405103, 0.019158, -0.019158, -0.405103, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.151982 -135.002804 C -0.151982 -135.002804 0.154296 135.004904 0.154296 135.004904 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
          <path
            strokeLinecap="round"
            transform="matrix(0.219143, 0.34125, -0.34125, 0.219143, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.155135 -134.999634 C -0.155135 -134.999634 0.15216 135.000589 0.15216 135.000589 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
        </g>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 438 437.999984"
        width={width}
        height={height}
        fill="none"
      >
        <path
          strokeLinecap="butt"
          transform="matrix(0.405556, 0, 0, 0.405556, 218.926176, 218.901837)"
          fill="none"
          strokeLinejoin="miter"
          d="M 350.608003 0.00124882 C 350.608003 193.110213 193.637741 349.647041 -0.000974542 349.647041 C -193.63969 349.647041 -350.609952 193.110213 -350.609952 0.00124882 C -350.609952 -193.107715 -193.63969 -349.654175 -0.000974542 -349.654175 C 193.637741 -349.654175 350.608003 -193.107715 350.608003 0.00124882 Z M 350.608003 0.00124882 "
          stroke="#000000"
          strokeWidth="25"
          strokeOpacity="1"
          strokeMiterlimit="10"
        />
        <g id="asterisk" className={styles.asterisk}>
          <path
            strokeLinecap="round"
            transform="matrix(-0.18596, 0.360408, -0.360408, -0.18596, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.150488 -135.000011 C -0.150488 -135.000011 0.149826 135.003065 0.149826 135.003065 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
          <path
            strokeLinecap="round"
            transform="matrix(-0.405103, 0.019158, -0.019158, -0.405103, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.151982 -135.002804 C -0.151982 -135.002804 0.154296 135.004904 0.154296 135.004904 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
          <path
            strokeLinecap="round"
            transform="matrix(0.219143, 0.34125, -0.34125, 0.219143, 218.906739, 218.902747)"
            fill="none"
            strokeLinejoin="round"
            d="M -0.155135 -134.999634 C -0.155135 -134.999634 0.15216 135.000589 0.15216 135.000589 "
            stroke="#000000"
            strokeWidth="42"
            strokeOpacity="1"
            strokeMiterlimit="4"
          />
        </g>
      </svg>
    </div>
  );
}
