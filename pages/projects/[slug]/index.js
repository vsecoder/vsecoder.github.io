import styles from '../../index.module.css';
import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx'
import { Hr } from '@/components/hr';
import Link from 'next/link';


export default function App() {
  const [markdown, setMarkdown] = useState('-')
  const [prerenderedMarkdown, setPreRenderedMarkdown] = useState('-');

  useEffect(() => {
    const filename = window.location.pathname.split('/')[2];

    fetch(`/api/project?filename=${filename}`)
      .then((response) => response.json())
      .then((data) => {
        setMarkdown(data.markdown);
      })
      .catch((error) => {
        setMarkdown('Error loading markdown.');
      });
  }, []);

  useEffect(() => {
    fetch('/api/render', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ markdown: markdown }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPreRenderedMarkdown(data.markdown);
      })
      .catch((error) => {
        setPreRenderedMarkdown('Error rendering markdown.');
      });
  }, [markdown]);

  return (
    <>
      <div className={styles.container}>
        <Link href="/projects">&lt; Back</Link>
        <pre>$ cat project.md</pre>
        <Markdown options={{
            overrides: {
                hr: {
                    component: Hr
                }
            }
        }}>
            {prerenderedMarkdown}
        </Markdown>
      </div>

      <Canvas3d />
    </>
  );
}
