import styles from './content.module.css';
import { myAge } from '../../utils/age';
import { useEffect, useState } from 'react';

export function Content() {
    const [metrikaData, setMetrikaData] = useState('-');

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => setMetrikaData(data.data));
    }, []);

    return (
        <main className={styles.content}>
            <b>Web design, JavaScript, Python</b>
            <p>Hello, I&apos;m a ~{myAge} years old developer! I have been developing since an early age, and I fell in love with coding.</p>
            <p>My resume contains a bunch of different rubbish that I&apos;m too lazy to list, it&apos;s better to look at Github for yourself)))</p>
            <p>P.S. this whole page is written for the sake of interest without any special styles on React.js and THREE.js!</p>
            <p>P.S.S. this page have {metrikaData} visits!</p>
        </main>
    )
}