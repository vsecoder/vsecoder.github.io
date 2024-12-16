import styles from '../../index.module.css';
import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Hr } from '@/components/hr';
import Link from 'next/link';

export default function App() {
  const [content, setContent] = useState('\n\nLoading...');

  useEffect(() => {
    const loadAndRenderMarkdown = async () => {
      const filename = window.location.pathname.split('/')[2];

      try {
        const fileResponse = await fetch(`/api/project?filename=${filename}`);
        const fileData = await fileResponse.json();

        const renderResponse = await fetch('/api/render', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ markdown: fileData.markdown }),
        });
        const renderData = await renderResponse.json();
        
        setContent(renderData.markdown);
      } catch (error) {
        console.error('Error:', error);
        setContent('\n\nError loading or rendering markdown.');
      }
    };

    loadAndRenderMarkdown();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link href="/projects">&lt; Back</Link>
        <Markdown options={{
            overrides: {
                hr: {
                    component: Hr
                }
            }
        }}>
            {content}
        </Markdown>
      </div>

      <Canvas3d />
    </>
  );
}