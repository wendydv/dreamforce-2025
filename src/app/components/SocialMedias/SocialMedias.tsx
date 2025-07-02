import SocialMedia, {
  SocialMediaProps as SocialMediaType,
} from "./SocialMedia";

import styles from "./SocialMedias.module.scss";

export default function SocialMedias({
  socialMedias,
}: {
  socialMedias: SocialMediasProps;
}) {
  return (
    <div className={styles.socialMedias}>
      {socialMedias.map((socialMedia, index) => (
        <SocialMedia key={index} {...socialMedia} />
      ))}
    </div>
  );
}

type SocialMediasProps = SocialMediaType[];

export type { SocialMediasProps };
