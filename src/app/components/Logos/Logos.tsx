import Logo from "../Logo/Logo";
import Image from "next/image";
import styles from "./Logos.module.scss";

export default function Logos() {
  return (
    <div className={styles.logos}>
      <Logo
        src="/logos/telus-digital-logo.svg"
        alt="TELUS Digital Logo"
        width={259}
        height={36}
        link={{
          href: "https://telusdigital.com/",
          title: "TELUS Digital Solutions",
        }}
      />
      <Image
        src="/icons/plus-icon.svg"
        alt="Plus Icon"
        width={19}
        height={19}
        loading="eager"
        unoptimized
      />
      <Logo
        src="/logos/gerent-logo.svg"
        alt="Gerent Logo"
        width={135}
        height={36}
        link={{ href: "https://gerent.com", title: "Gerent" }}
      />
    </div>
  );
}
