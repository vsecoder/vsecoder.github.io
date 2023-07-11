import styles from './hr.module.css';

export function Hr() {
    const hr = '-'.repeat(500);

    return (
        <p className={styles.line}>
            {hr}
        </p>
    )
}