import Head from 'next/head';
import HelloText from '../components/hello-text';
import Footer from '../components/footer';
import socialData from '../socialData'
import BottomText from '../components/bottom-text';
import Project from '../components/project';


export default function Home() {
  return (
    <div>
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
        <Project />
        <Project />
        <Project />
        
      </main>
      <Footer items={socialData}/>
      <BottomText />
    </div>
  );
}
