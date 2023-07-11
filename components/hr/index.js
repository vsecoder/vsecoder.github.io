import styles from './hr.module.css';
import { useState, useEffect } from 'react';

export function Hr() {
    const [isMobile, setIsMobile] = useState(false);

    const hr = '-'.repeat(isMobile ? window.innerWidth / 15 : 60);

    useEffect(() => {
        setIsMobile(window.innerWidth < 450);
    });

    return (
        <p className={styles.line}>
            {hr}
        </p>
    )
}