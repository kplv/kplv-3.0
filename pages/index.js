import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';
import HelloText from '../components/hello-text';
import ProjectList from '../components/projectsList';

export default function Home(props) {
  const { projects } = props;

  return (
    <div>
      <Head>
        <title>Denis Kopylov</title>
        <meta
          name='description'
          content='Denis Kopylov senior product designer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HelloText />
        <ProjectList items={projects} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log(data + 'index.js')
  
  

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 10,
  };
}

