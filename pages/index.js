import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';
import HelloText from '../components/hello-text';
import ProjectList from '../components/projectsList';
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectVideo from '../components/projectVideo';

export default function Home(props) {
  const { projects } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <title>Denis Kopylov</title>
          <meta
            name='description'
            content='Denis Kopylov — senior product designer'
          />
          <meta property='og:title' content='Denis Kopylov' />
          <meta property='og:type' content='article' />
          <meta property='og:image' content='/thumb.png' />
          <meta
            property='og:description'
            content='Denis Kopylov — senior product designer'
          />
          <link rel='icon' href='/favicon.ico' />

        </Head>
        <div>
          <main>
            <HelloText />
            <ProjectList items={projects} />
          </main>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 1,
  };
}
