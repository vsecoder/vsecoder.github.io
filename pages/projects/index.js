import styles from '../index.module.css';
import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';

export default function App() {
  const [renderedMarkdown, setRenderedMarkdown] = useState('-');

  useEffect(() => {
    const markdownContent = `Some text before.

\`\`\`diagon/frame
f(x) = 1 + x / (1 + x)
\`\`\`

Some text after.`;

    fetch('/api/render', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ markdown: markdownContent }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', JSON.stringify(data));
        setRenderedMarkdown(data.markdown);
      })
      .catch((error) => {
        console.error('Error:', error);
        setRenderedMarkdown('Error rendering markdown.');
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <pre>{renderedMarkdown}</pre>
      </div>

      <Canvas3d />
    </>
  );
}
