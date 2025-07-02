import styles from './Copyright.module.scss';

export default function Copyright({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.copyRight}>{children}</div>
    );
}
