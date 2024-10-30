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
            <p>Hello! I&apos;m an ~{myAge}-year-old developer, and my journey into coding began when I was young. Over the years, programming has evolved from a curiosity into a true passion for me.</p>
            <p>I&apos;ve explored a range of technologies and worked on various projects that have challenged and inspired me, helping me grow both technically and creatively.</p>

            <p>If you’re interested in the details of my experience, my GitHub is the best place to see what I&apos;ve been up to—it&apos;s a collection of my favorite projects and experiments.</p>
            <p>This page itself is a small creative project, built using React.js and THREE.js. I kept the design clean and simple to focus on the functionality and the technology behind it.</p>
            <p>Oh, and just for fun: this page has been visited {metrikaData} times on last month!</p>
        </main>
    )
}