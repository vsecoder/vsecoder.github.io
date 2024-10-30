import styles from '../index.module.css';
import { Canvas3d } from '@/components/3d';

export default function App() {

  return (
    <>
      <div className={styles.container}>
        <pre>Projects list...</pre>
      </div>

      <Canvas3d />
    </>
  );
}
