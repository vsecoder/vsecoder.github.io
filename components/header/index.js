import styles from './header.module.css';
import { useEffect, useState } from 'react';

const logo_big = `
                                _             
  __   _____  ___  ___ ___   __| | ___ _ __   
  \\ \\ / / __|/ _ \\/ __/ _ \\ / _\` |/ _ \\ '__|  
   \\ V /\\__ \\  __/ (_| (_) | (_| |  __/ |     
    \\_/ |___/\\___|\\___\\___/ \\__,_|\\___|_|     
`;

const logo_small = '<h1>vsecoder</h1>';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [logo, setLogo] = useState(logo_small);
    const size = useWindowSize();

    useEffect(() => {
        setIsMobile(size.width < 450);
        setLogo(isMobile ? logo_small : logo_big);
    }, [size.width, isMobile]);

    return (
        <header className={styles.header}>
            <pre>
                <div className={styles.logo}>
                    {logo}
                </div><b>resume</b></pre>
            <p>
                [<a href="https://t.me/vsecoder">Telegram</a>]
                [<a href="https://github.com/vsecoder">Github</a>]
            </p>
        </header>
    )
}