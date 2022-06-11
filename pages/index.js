import Head from 'next/head';
import HelloText from '../components/hello-text';
import projects from '../data/projects.json';
import ProjectList from '../components/projectsList'


export default function Home() {
  const allProjects = Object.values(projects);
  // console.log(allProjects)

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
        <ProjectList items={allProjects} />
      </main>
    </div>
  );
}
