import SocialMedias, {
  SocialMediasProps as SocialMediasType,
} from "../SocialMedias/SocialMedias";
import styles from "./Footer.module.scss";
import Logos from "../Logos/Logos";

export default function Footer({ socialMedias }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__columns}>
        <Logos />
        <SocialMedias socialMedias={socialMedias} />
      </div>
    </footer>
  );
}

type FooterProps = {
  socialMedias: SocialMediasType;
};
