import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>DATA-DRIVEN SOLUTIONS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Vedansh Maheshwari</h1>
            <h6 className={styles.bio}>Data Scientist & Software Developer</h6>
            <Link href="/projects" className={styles.button}>View Work</Link>
            <Link href="/contact" className={styles.outlined}>Contact Me</Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
