import styles from '../index.module.css';

import { Canvas3d } from '@/components/3d';
import { useEffect, useState } from 'react';


export default function App() {
  const [table, setTable] = useState('-');

  useEffect(() => {
    fetch('/api/diagon/table?text=Column%201,Column%202,Column 3\\n%20C++,Web,Assembly\\nJavascript,CSS,HTML')
      .then(res => res.json())
      .then(data => setTable(data.answer));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <pre>{ table }</pre>
      </div>

      <Canvas3d />
    </>
  );
}