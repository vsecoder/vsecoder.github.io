import styles from './header.module.css';
import { useEffect, useState } from 'react';

const logo_big = `
                                _             
  __   _____  ___  ___ ___   __| | ___ _ __   
  \\ \\ / / __|/ _ \\/ __/ _ \\ / _\` |/ _ \\ '__|  
   \\ V /\\__ \\  __/ (_| (_) | (_| |  __/ |     
    \\_/ |___/\\___|\\___\\___/ \\__,_|\\___|_|     
`;

const logo_small = '<h1>vsecoder</h1>'

export function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const space = ' '.repeat(isMobile ? 1 : 35);

    useEffect(() => {
        setIsMobile(window.innerWidth < 450);
    });

    return (
        <header className={styles.header}>
            <pre>
                <div className={styles.logo}>
                    {isMobile ? (
                        logo_small
                    ) : (
                        logo_big
                    )}
                </div> {space} <b>resume</b></pre>
            <p>
                [<a href="https://t.me/vsecoder">Telegram</a>]
                [<a href="https://github.com/vsecoder">Github</a>]
            </p>
        </header>
    )
}