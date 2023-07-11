import styles from './index.module.css';

import { Header } from '@/components/header';
import { Hr } from '@/components/hr';
import { Canvas3d } from '@/components/3d';
import { Content } from '@/components/content';
import { Footer } from '@/components/footer';

export default function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Hr />
        <Content />
        <Hr />
        <Footer />
      </div>

      <Canvas3d />
    </>
  );
}