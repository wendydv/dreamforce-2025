import Divider from "../Divider/Divider";
import Headline from "../Headline/headline";
import styles from "./Swag.module.scss";

type SwagProps = {
  title: string;
  description: string;
};

export default function Swag({ title, description }: SwagProps) {
  return (
    <section id="swag" className={styles.swag}>
      <div className={styles.swag__container}>
        <div className={styles.swag__block}>
          <div className={styles.swag__block__top}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1223"
              height="447"
              viewBox="0 0 1223 447"
              fill="none"
              className={styles.swag__block__top__svg}
            >
              <path
                d="M0.5 412.001V223.031C0.5 209.124 8.73374 196.536 21.4755 190.963L451.412 2.93339C455.834 0.999202 460.609 0.000732422 465.436 0.000732422H1187.5C1206.83 0.000732422 1222.5 15.6708 1222.5 35.0007V412.001C1222.5 431.331 1206.83 447.001 1187.5 447.001H35.5C16.17 447.001 0.5 431.331 0.5 412.001Z"
                fill="#7733BB"
              />
            </svg>
            <div className={styles.swag__block__top__content}>
              <Headline level={2} className={styles.swag__title}>
                {title}
              </Headline>
              <Divider />
              <p className={styles.swag__description}>{description}</p>
            </div>
          </div>
          <div className={styles.swag__block__bottom}>
            <Divider border={32} />
          </div>
          <video className={styles.swag__video} loop autoPlay muted>
            <source src="/ribbon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
