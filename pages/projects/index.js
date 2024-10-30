import styles from '../index.module.css';
import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        setProjects('Error loading markdown.');
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link href="/">&lt; Back</Link>
        <h2>Projects:</h2>
        <ul>
          {projects.map((element, i) => {
            element = element.replace('.md', '');
            return (<li key={i}><Link href={`/projects/${element}`}>{element}</Link></li>)
          })}
        </ul>
        <p>Later more.</p>
      </div>

      <Canvas3d />
    </>
  );
}
