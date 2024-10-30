import styles from '../index.module.css';
import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';

export default function App() {
  const [renderedMarkdown, setRenderedMarkdown] = useState('-');

  useEffect(() => {
    const markdownContent = `Some text before.

Math:
\`\`\`diagon/math
f(x) = 1 + x / (1 + x)
\`\`\`

Table:
\`\`\`diagon/table
Column 1,Column 2,Column 3
C++,Web,Assembly
Javascript,CSS,HTML
\`\`\`

Frame:
\`\`\`diagon/frame
f(x) = 1 + x / (1 + x)
\`\`\`

Graph:
\`\`\`diagon/graph
random -> pool_urbg
random -> nonsecure_base
random -> seed_sequence
random -> distribution

nonsecure_base -> pool_urbg
nonsecure_base -> salted_seed_seq

seed_sequence -> pool_urbg
seed_sequence -> salted_seed_seq
seed_sequence -> seed_material

distribution -> strings

pool_urbg -> seed_material

salted_seed_seq -> seed_material

seed_material -> strings
\`\`\`


Tree:
\`\`\`diagon/tree
Linux
  Android  Debian
    Ubuntu
      Lubuntu
      Kubuntu
      Xubuntu
      Xubuntu
    Mint
  Centos
  Fedora
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
