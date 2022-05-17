import Head from 'next/head';
import Image from 'next/image';
import HelloText from '../components/hello-text';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import socialData from '../socialData'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Denis Kopylov</title>
        <meta
          name="description"
          content="Denis Kopylov senior product designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HelloText />
        
      </main>
      <Footer items={socialData}/>

    </div>
  );
}
