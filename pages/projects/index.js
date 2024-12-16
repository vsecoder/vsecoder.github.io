import styles from '../index.module.css';
import { Canvas3d } from '@/components/3d';
import Link from 'next/link';

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/projects');
    const data = await response.json();

    return {
      props: {
        projects: data.projects || [],
      },
    };
  } catch (error) {
    return {
      props: {
        projects: 'Error loading markdown.',
      },
    };
  }
}

export default function App({ projects }) {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">&lt; Back</Link>
        <h2>Projects:</h2>
        <ul>
          {Array.isArray(projects) ? (
            projects.map((element, i) => {
              element = element.replace('.md', '');
              return (
                <li key={i}>
                  <Link href={`/projects/${element}`}>{element}</Link>
                </li>
              );
            })
          ) : (
            <li>{projects}</li>
          )}
        </ul>
        <p>Later more.</p>
      </div>

      <Canvas3d />
    </>
  );
}