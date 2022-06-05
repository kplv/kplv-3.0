import Head from 'next/head';
import HelloText from '../components/hello-text';
import Footer from '../components/footer';
import socialData from '../data/socialData';
import BottomText from '../components/bottom-text';
import Project from '../components/project';
import Tag from '../components/tag';
import texts from '../data/texts.json'


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
      <Footer items={socialData} />
      <BottomText />
    </div>
  );
}
